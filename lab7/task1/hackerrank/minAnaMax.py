import numpy

# Read N and M
n, m = map(int, input().split())

# Read matrix data
data = []
for _ in range(n):
    row = list(map(int, input().split()))
    data.append(row)

# Create numpy array
my_array = numpy.array(data)

# Step 1: Find min along axis 1 (rows)
min_result = numpy.min(my_array, axis=1)

# Step 2: Find max of those minimums
print(numpy.max(min_result))