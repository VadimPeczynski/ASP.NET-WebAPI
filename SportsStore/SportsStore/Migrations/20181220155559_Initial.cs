using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SportsStore.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    Price = table.Column<decimal>(nullable: false),
                    Category = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Category", "Description", "Name", "Price" },
                values: new object[,]
                {
                    { 1, "Sporty wodne", "Łódka przeznaczona dla jednej osoby", "Kajak", 275m },
                    { 2, "Sporty wodne", "Chroni i dodaje uroku", "Kamizelka ratunkowa", 48.99m },
                    { 3, "Piłka nożna", "Zatwierdzone przez FIFA rozmiar i waga", "Piłka", 19.50m },
                    { 4, "Piłka nożna", "Nadadzą twojemu boisku profesjonalny wygląd", "Flagi narożne", 34.99m },
                    { 5, "Piłka nożna", "Składany stadion na 35 000 osób", "Stadion", 79500m },
                    { 6, "Szachy", "Zatwierdzone przez FIFA rozmiar i waga", "Czapka", 16m },
                    { 7, "Szachy", "Zatwierdzone przez FIFA rozmiar i waga", "Niestabilne krzesło", 29.99m },
                    { 8, "Szachy", "Zatwierdzone przez FIFA rozmiar i waga", "Ludzka szachownica", 75m },
                    { 9, "Szachy", "Zatwierdzone przez FIFA rozmiar i waga", "Błyszczący król", 1200m }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Products");
        }
    }
}
