using Husvet2024.Models;
using Microsoft.AspNetCore.Mvc;

namespace Husvet2024.Controllers
{
    public class HomeController1 : Controller
    {
        Model u = new Model();
        public IActionResult Index()
        {
            u.name = "Gipsz Jakab";
            return View();
        }
    }
}
