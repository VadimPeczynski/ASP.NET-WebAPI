using System.Collections.Generic;

namespace SportsStore.Model
{
    public interface IProductRepository
    {
        IEnumerable<Product> Products { get; }
    }
}