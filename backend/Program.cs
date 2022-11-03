var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSpaStaticFiles(configuration =>
{
    configuration.RootPath = "../app/dist";
});

builder.Services.AddControllers();
builder.Services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();

//TODO: Add DBContext

var app = builder.Build();

app.MapControllers();

app.UseSpaStaticFiles();

app.UseSpa(s =>
{
    s.Options.SourcePath = "../app";
});

app.Run();
