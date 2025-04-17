import os
from PIL import Image
from pathlib import Path

def process_image(input_path, output_path):
    # Open the image
    with Image.open(input_path) as img:
        width, height = img.size
        target_size = 2048
        
        # Calculate the center crop coordinates
        if width > height:
            # Landscape image
            left = (width - height) // 2
            top = 0
            right = left + height
            bottom = height
        else:
            # Portrait or square image
            left = 0
            top = (height - width) // 2
            right = width
            bottom = top + width
        
        # Perform center crop
        cropped_img = img.crop((left, top, right, bottom))
        
        # Resize to target size
        resized_img = cropped_img.resize((target_size, target_size), Image.Resampling.LANCZOS)
        
        # Save as WebP
        resized_img.save(output_path, 'WEBP', quality=90)

def process_directory(input_dir, output_dir):
    # Create output directory if it doesn't exist
    os.makedirs(output_dir, exist_ok=True)
    
    # Process all image files in the input directory
    for file in os.listdir(input_dir):
        if file.lower().endswith(('.png', '.jpg', '.jpeg', '.bmp', '.gif')):
            input_path = os.path.join(input_dir, file)
            output_path = os.path.join(output_dir, f"{Path(file).stem}.webp")
            
            try:
                process_image(input_path, output_path)
                print(f"Processed: {file} -> {Path(file).stem}.webp")
            except Exception as e:
                print(f"Error processing {file}: {str(e)}")

if __name__ == "__main__":
    # Set your input and output directories
    input_directory = "input_images"  # Directory containing original images
    output_directory = "output_images"  # Directory for processed images
    
    process_directory(input_directory, output_directory)
