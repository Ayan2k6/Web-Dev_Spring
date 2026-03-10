def first_half(str):
    # Calculate the midpoint by integer division
    midpoint = len(str) // 2
    # Use string slicing to get characters from start to the midpoint
    return str[:midpoint]