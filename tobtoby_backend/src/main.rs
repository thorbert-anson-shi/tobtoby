use actix_web::{get, post, web, App, HttpRequest, HttpResponse, HttpServer, Responder};
use num_cpus;
use serde::Serialize;

#[derive(Serialize)]
struct Info {
    name: String,
}
#[actix_web::main]
async fn main() -> std::io::Result<()> {
    println!("{}", num_cpus::get());
    HttpServer::new(|| App::new().service(hello))
        .bind(("127.0.0.1", 7878))?
        .run()
        .await
}

#[get("/")]
async fn hello(req: HttpRequest) -> web::Json<Info> {
    web::Json(Info {
        name: String::from("Hello world"),
    })
}
