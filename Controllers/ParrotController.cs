using Microsoft.AspNetCore.Mvc;
using parrot_server.Models;
using System.Text.Json;
using System.Text.Json.Serialization;
namespace parrot_server.Controllers;

[ApiController]
[Route("[controller]")]
public class ParrotController : ControllerBase
{

    private readonly ILogger<ParrotController> _logger;

    public ParrotController(ILogger<ParrotController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public string Get()
    {
        List<Parrot> results = SqliteService.ReadParrots();
        string output = JsonSerializer.Serialize(results);
        return output;
    }
}
