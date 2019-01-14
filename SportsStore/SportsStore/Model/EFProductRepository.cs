using System.Collections.Generic;
using System.Linq;

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
        public int Delete(int id)
        {
            var product = Products.Single(p=>p.Id == id);
            _ctx.Remove(product);
            _ctx.SaveChanges();
            return id;
        }
    }
}