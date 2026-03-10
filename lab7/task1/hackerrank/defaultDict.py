from collections import defaultdict

# Read n and m
n, m = map(int, input().split())

# Create a defaultdict where each value is a list
d = defaultdict(list)

# Fill group A (use 1-based indexing)
for i in range(1, n + 1):
    word = input()
    d[word].append(i)

# Check words from group B
for _ in range(m):
    word_b = input()
    if word_b in d:
        # Join indices with a space
        print(*(d[word_b]))
    else:
        # Word not found in group A
        print(-1)