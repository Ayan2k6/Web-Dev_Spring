def centered_average(nums):
    nums_sorted = sorted(nums)          # Sort the array
    trimmed = nums_sorted[1:-1]         # Remove smallest and largest (just one of each)
    return sum(trimmed) // len(trimmed) # Compute integer division average