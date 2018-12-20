using Microsoft.EntityFrameworkCore;

namespace SportsStore.Model
{
    public class AppDbContext:DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Product>().HasData(
                new Product() { Id = 1, Name = "Kajak", Category = "Sporty wodne", Price = 275m, Description = "Łódka przeznaczona dla jednej osoby" },
                new Product() { Id = 2, Name = "Kamizelka ratunkowa", Category = "Sporty wodne", Price = 48.99m, Description = "Chroni i dodaje uroku" },
                new Product() { Id = 3, Name = "Piłka", Category = "Piłka nożna", Price = 19.50m, Description = "Zatwierdzone przez FIFA rozmiar i waga" },
                new Product() { Id = 4, Name = "Flagi narożne", Category = "Piłka nożna", Price = 34.99m, Description = "Nadadzą twojemu boisku profesjonalny wygląd" },
                new Product() { Id = 5, Name = "Stadion", Category = "Piłka nożna", Price = 79500m, Description = "Składany stadion na 35 000 osób" },
                new Product() { Id = 6, Name = "Czapka", Category = "Szachy", Price = 16m, Description = "Zatwierdzone przez FIFA rozmiar i waga" },
                new Product() { Id = 7, Name = "Niestabilne krzesło", Category = "Szachy", Price = 29.99m, Description = "Zatwierdzone przez FIFA rozmiar i waga" },
                new Product() { Id = 8, Name = "Ludzka szachownica", Category = "Szachy", Price = 75m, Description = "Zatwierdzone przez FIFA rozmiar i waga" },
                new Product() { Id = 9, Name = "Błyszczący król", Category = "Szachy", Price = 1200m, Description = "Zatwierdzone przez FIFA rozmiar i waga" });
        }

        public DbSet<Product> Products { get; set; }
    }
}
