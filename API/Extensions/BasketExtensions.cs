using API.DTOs;
using API.Entities;

namespace API.Extensions
{
    public static class BasketExtensions
    {
        public static BasketDto MapBasketToDto(this Basket basket)
        {
            return new BasketDto
            {
                Id = basket.Id,
                BuyerId = basket.BuyerId,
                Items = basket.Items.Select(x => new BasketItemDto
                {
                    ProductId = x.Product.Id,
                    Name = x.Product.Name,
                    Brand = x.Product.Brand,
                    PictureUrl = x.Product.PictureUrl,
                    Price = x.Product.Price,
                    Type = x.Product.Type,
                    Quantity = x.Quantity
                }).ToList()
            };
        }
    }
}