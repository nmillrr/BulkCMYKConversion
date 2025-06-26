# 🖼 Photoshop Bulk CMYK Conversion Script

Simple JS script for Adobe Photoshop automates bulk image conversion to CMYK color mode + saving them as TIFF files. Useful for print production preparation from a digital file with RGB source images.

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
