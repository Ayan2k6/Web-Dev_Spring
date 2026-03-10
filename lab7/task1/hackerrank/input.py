# Read x and k
x, k = map(int, input().split())

# Read the polynomial string and evaluate it using the variable x
polynomial = input()

# Check if P(x) == k
print(eval(polynomial) == k)