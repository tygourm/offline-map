from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """Application settings."""

    host: str = "127.0.0.1"
    port: int = 8000
    reload: bool = False
    workers: int = 1

    app_debug: bool = False
    app_title: str = "Offline Map"
    app_version: str = "1.0.0"

    model_config = SettingsConfigDict()


settings = Settings()
