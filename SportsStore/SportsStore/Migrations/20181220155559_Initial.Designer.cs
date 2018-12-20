﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using SportsStore.Model;

namespace SportsStore.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20181220155559_Initial")]
    partial class Initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.0-rtm-35687")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("SportsStore.Model.Product", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Category");

                    b.Property<string>("Description");

                    b.Property<string>("Name");

                    b.Property<decimal>("Price");

                    b.HasKey("Id");

                    b.ToTable("Products");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Category = "Sporty wodne",
                            Description = "Łódka przeznaczona dla jednej osoby",
                            Name = "Kajak",
                            Price = 275m
                        },
                        new
                        {
                            Id = 2,
                            Category = "Sporty wodne",
                            Description = "Chroni i dodaje uroku",
                            Name = "Kamizelka ratunkowa",
                            Price = 48.99m
                        },
                        new
                        {
                            Id = 3,
                            Category = "Piłka nożna",
                            Description = "Zatwierdzone przez FIFA rozmiar i waga",
                            Name = "Piłka",
                            Price = 19.50m
                        },
                        new
                        {
                            Id = 4,
                            Category = "Piłka nożna",
                            Description = "Nadadzą twojemu boisku profesjonalny wygląd",
                            Name = "Flagi narożne",
                            Price = 34.99m
                        },
                        new
                        {
                            Id = 5,
                            Category = "Piłka nożna",
                            Description = "Składany stadion na 35 000 osób",
                            Name = "Stadion",
                            Price = 79500m
                        },
                        new
                        {
                            Id = 6,
                            Category = "Szachy",
                            Description = "Zatwierdzone przez FIFA rozmiar i waga",
                            Name = "Czapka",
                            Price = 16m
                        },
                        new
                        {
                            Id = 7,
                            Category = "Szachy",
                            Description = "Zatwierdzone przez FIFA rozmiar i waga",
                            Name = "Niestabilne krzesło",
                            Price = 29.99m
                        },
                        new
                        {
                            Id = 8,
                            Category = "Szachy",
                            Description = "Zatwierdzone przez FIFA rozmiar i waga",
                            Name = "Ludzka szachownica",
                            Price = 75m
                        },
                        new
                        {
                            Id = 9,
                            Category = "Szachy",
                            Description = "Zatwierdzone przez FIFA rozmiar i waga",
                            Name = "Błyszczący król",
                            Price = 1200m
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
