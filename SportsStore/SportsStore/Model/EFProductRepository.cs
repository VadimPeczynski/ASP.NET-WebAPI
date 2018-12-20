using System.Collections.Generic;

namespace SportsStore.Model
{
    public class EFProductRepository : IProductRepository
    {
        private readonly AppDbContext _ctx;

        public EFProductRepository(AppDbContext ctx)
        {
            _ctx = ctx;
        }

        public IEnumerable<Product> Products => _ctx.Products;
    }
}