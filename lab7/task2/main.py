from models import Product, Electronic, Clothing

def main():
    # 1. Instantiate objects from each class
    generic_item = Product("Coffee Mug", 12.50, 0)
    laptop = Electronic("MacBook Air", 999.00, 5, 12)
    tshirt = Clothing("Cotton T-Shirt", 25.00, 50, "L")

    # 2. Store objects in a list
    inventory = [generic_item, laptop, tshirt]

    # 3. Iterate over them, demonstrating polymorphism
    print("--- Initial Inventory ---")
    for item in inventory:
        print(item)  # Calls the overridden __str__ method
        print(f"Status: {item.check_availability()}\n")

    print("--- Applying 10% Discount ---")
    for item in inventory:
        item.apply_discount(10)  # Electronic will automatically get 15% due to overriding
        print(item)

if __name__ == "__main__":
    main()