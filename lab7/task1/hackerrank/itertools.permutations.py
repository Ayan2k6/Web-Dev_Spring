from itertools import permutations

if __name__ == '__main__':
    # Read the string S and integer k from input
    # S and k are separated by a space
    s, k = input().split()
    k = int(k)

    # Sort the string first to ensure lexicographic order
    # permutations returns tuples, so we join them back into strings
    result = list(permutations(sorted(s), k))

    # Print each permutation on a new line
    for p in result:
        print("".join(p))