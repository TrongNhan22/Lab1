# Read the original file
with open('TanUyen-Duong/biengioi-BacTanUyen.txt', 'r') as file:
    lines = file.readlines()

# Process each line to extract and format the coordinates
formatted_lines = []
for line in lines:
    # Remove brackets and split by comma
    parts = line.strip('[],\n').split(', ')
    # Swap the order to match the desired format (latitude, longitude)
    formatted_line = f"{parts[1]}, {parts[0]}"
    formatted_lines.append(formatted_line)

# Write the formatted coordinates to a new file
with open('TanUyen-Duong/formatted_biengioi-BacTanUyen.txt', 'w') as file:
    for line in formatted_lines:
        file.write(line + '\n')