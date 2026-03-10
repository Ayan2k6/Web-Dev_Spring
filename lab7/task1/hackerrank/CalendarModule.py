import calendar

# Read month, day, and year from input
m, d, y = map(int, input().split())

# calendar.weekday(year, month, day) returns 0-6
day_index = calendar.weekday(y, m, d)

# Use day_name to get the string and convert to UPPERCASE
print(calendar.day_name[day_index].upper())