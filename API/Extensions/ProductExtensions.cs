using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;

namespace API.Extensions
{
    public static class ProductExtensions
    {
        public static IQueryable<Product> Sort (this IQueryable<Product> query, string orderBy) 
        {
            if(string.IsNullOrWhiteSpace(orderBy)) 
                return query.OrderBy(x=>x.Name);
                
            query = orderBy switch
            {
                "price"=> query.OrderBy(x=>x.Price),
                "priceDesc" => query.OrderByDescending(x=>x.Price),
                _ => query.OrderBy(x=>x.Name)
            };
            return query;
        }
        public static IQueryable<Product> Search (this IQueryable<Product> query, string searchTerm) 
        {
            if(string.IsNullOrWhiteSpace(searchTerm)) 
                return query;
                
            var lowerCaseSearchTerm = searchTerm.Trim().ToLower();

            return query.Where(x=>x.Name.ToLower().Contains(lowerCaseSearchTerm));
        }
        public static IQueryable<Product> Filter (this IQueryable<Product> query, string brands, string types) 
        {
            var typeList = new List<string>();
            var brandList = new List<string>();


            if(!string.IsNullOrEmpty(types))
                typeList.AddRange(types.ToLower().Split(","));

            if(!string.IsNullOrEmpty(brands))
                brandList.AddRange(brands.ToLower().Split(","));

            query = query.Where(x=> brandList.Count == 0 || brandList.Contains(x.Brand.ToLower()));
            query = query.Where(x=> typeList.Count == 0 || typeList.Contains(x.Type.ToLower()));

            return query;
        }
    }
}