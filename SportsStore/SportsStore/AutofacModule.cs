using System.Collections.Generic;
using Autofac;
using NSubstitute;
using SportsStore.Model;

namespace SportsStore
{
    public class AutofacModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            //var repository = Substitute.For<IProductRepository>();

            //repository.Products.Returns(new List<Product>
            //  {
            //      new Product
            //      {
            //          Name = "Piłka nożna",
            //          Description = "Piłka do nogi",
            //          Price = 19.99m
            //      },
            //      new Product
            //      {
            //          Name = "Piłka siatkowa",
            //          Description = "Piłka do siatkówki",
            //          Price = 24.99m
            //      }
            //  }
            //);
            //builder.RegisterInstance(repository).As<IProductRepository>();
            builder.RegisterType<EFProductRepository>().As<IProductRepository>();
        }
    }
}