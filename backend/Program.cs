var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSpaStaticFiles(configuration =>
{
    configuration.RootPath = "../app/dist";
});

builder.Services.AddControllers();
// builder.Services.AddDistributedMemoryCache();
builder.Services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();

// db context

var app = builder.Build();

app.MapControllers();

app.UseSpaStaticFiles();

app.UseSpa(s =>
{
    s.Options.SourcePath = "../app";
});

// app.MapGet("/", () => "Hello World!");

app.Run();
