from pathlib import Path

import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.openapi.docs import get_swagger_ui_html
from fastapi.responses import FileResponse, HTMLResponse, RedirectResponse, Response
from fastapi.staticfiles import StaticFiles

from backend.core.settings import settings

app = FastAPI(
    debug=settings.app_debug,
    title=settings.app_title,
    version=settings.app_version,
    docs_url=None,
    redoc_url=None,
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True,
)
app.mount("/static", StaticFiles(directory="static"), name="static")


@app.get("/", include_in_schema=False)
async def root() -> RedirectResponse:
    """Redirect to the API documentation."""
    return RedirectResponse(url="/api-docs")


@app.get("/api-docs", include_in_schema=False)
async def api_docs() -> HTMLResponse:
    """Get the API documentation."""
    return get_swagger_ui_html(
        openapi_url=app.openapi_url,
        title=settings.app_title,
        swagger_js_url="static/docs/swagger.js",
        swagger_css_url="static/docs/swagger.css",
        swagger_favicon_url="static/earth.svg",
    )


@app.get("/app-docs", include_in_schema=False)
async def app_docs_root() -> RedirectResponse:
    """Redirect to the app documentation."""
    return RedirectResponse(url="/app-docs/index.html")


@app.get("/app-docs/{path:path}", include_in_schema=False)
async def app_docs(path: str | None) -> Response:
    """Get the app documentation."""
    file = Path.cwd() / "static" / "site" / path
    if not file.is_file():
        return RedirectResponse(url="/app-docs/index.html")
    return FileResponse(file)


@app.get("/favicon.ico", include_in_schema=False)
async def favicon() -> FileResponse:
    """Get the favicon."""
    return FileResponse(Path.cwd() / "static" / "earth.svg")


def main() -> None:
    """Run the application."""
    uvicorn.run(
        "backend.main:app",
        host=settings.host,
        port=settings.port,
        reload=settings.reload,
        workers=settings.workers,
    )


if __name__ == "__main__":
    main()
