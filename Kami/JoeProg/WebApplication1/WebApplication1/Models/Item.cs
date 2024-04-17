using HereosWeb.Models;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace HereosWithVS.Models
{
    public class Item
    {
        [Key]
        public int ID { get; set; }

        [Required]
        [ForeignKey("ReferencedHero")]
        public int HeroId { get; set; }

        [Required]
        public string Name { get; set; }

        public virtual Hero ReferencedHero { get; set; }
    }
}