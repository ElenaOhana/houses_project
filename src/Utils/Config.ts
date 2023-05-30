class Config{

}

class DevelopmentConfig extends Config{
    public housesUrl: string = "http://localhost:8080/houses/";
    public authUrl: string = "http://localhost:8080/auth/";
}

class ProductionConfig extends Config{
    public housesUrl: string = "http://some_real_domain/houses/";
    public authUrl: string = "http://localhost:8080/auth/";
}

const appConfig = process.env.NODE_ENV === "development" ? // If I do npm start => this is Development state, If I do nmp build => Production state.
    new DevelopmentConfig() : new ProductionConfig();

    export default appConfig;