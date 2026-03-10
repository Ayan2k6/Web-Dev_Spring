class Product:
    """Base class representing a generic product."""
    
    def __init__(self, name: str, price: float, stock: int):
        self.name = name
        self.price = price
        self.stock = stock

    def apply_discount(self, percent: float):
        """Reduces the price by a given percentage."""
        self.price -= self.price * (percent / 100)

    def check_availability(self) -> str:
        """Checks if the product is currently in stock."""
        if self.stock > 0:
            return f"In stock ({self.stock} available)"
        return "Out of stock"

    def __str__(self):
        return f"Product: {self.name} | Price: ${self.price:.2f}"


class Electronic(Product):
    """Child class representing an electronic product."""
    
    def __init__(self, name: str, price: float, stock: int, warranty_months: int):
        super().__init__(name, price, stock)
        self.warranty_months = warranty_months

    def apply_discount(self, percent: float):
        """Electronics get an additional 5% discount on top of the standard discount."""
        super().apply_discount(percent + 5)

    def __str__(self):
        # Overriding the string representation
        return f"Electronic: {self.name} | Price: ${self.price:.2f} | Warranty: {self.warranty_months} months"


class Clothing(Product):
    """Child class representing a clothing product."""
    
    def __init__(self, name: str, price: float, stock: int, size: str):
        super().__init__(name, price, stock)
        self.size = size

    def check_availability(self) -> str:
        """Overridden method to include size information in stock check."""
        base_status = super().check_availability()
        return f"Size {self.size} - {base_status}"

    def __str__(self):
        return f"Clothing: {self.name} (Size {self.size}) | Price: ${self.price:.2f}"