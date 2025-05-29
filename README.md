# Photoshop Bulk CMYK Conversion Script

This JavaScript script for Adobe Photoshop automates the process of converting multiple images to CMYK color mode and saving them as TIFF files.

## Features
- Opens all images (JPG, JPEG, PNG, TIF, TIFF, PSD) from a selected folder
- Converts each image to CMYK color mode
- Saves images as uncompressed TIFF files
- Outputs files to a new `CMYK_Converted` subfolder
- Preserves original files

## Requirements
- Adobe Photoshop
- A valid CMYK color profile configured in Photoshop

## Usage
1. Save the script as `BulkCMYKConversion.jsx`.
2. In Photoshop, go to `File > Scripts > Browse` and select the script.
3. Choose the input folder containing your images.
4. The script will:
   - Create a `CMYK_Converted` folder in the input directory.
   - Process each image, converting to CMYK and saving as a TIFF.
   - Close files without modifying originals.
5. A confirmation message shows the number of files processed.

## Notes
- Ensure Photoshop's color settings are configured with a suitable CMYK profile.
- TIFF files are saved without compression for maximum quality.
