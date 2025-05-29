#target photoshop

// Prompt user to select input folder
var inputFolder = Folder.selectDialog("Select the folder containing images to convert");
if (inputFolder != null) {
    // Create output folder named 'CMYK_Converted' in the same directory as input
    var outputFolder = new Folder(inputFolder + "/CMYK_Converted");
    if (!outputFolder.exists) {
        outputFolder.create();
    }

    // Get list of files in input folder
    var fileList = inputFolder.getFiles(/\.(jpg|jpeg|png|tif|tiff|psd)$/i);

    // Process each file
    for (var i = 0; i < fileList.length; i++) {
        var file = fileList[i];

        // Open file
        var doc = app.open(file);

        // Convert to CMYK
        doc.changeMode(ChangeMode.CMYK);

        // Prepare TIFF save options
        var tiffSaveOptions = new TiffSaveOptions();
        tiffSaveOptions.embedColorProfile = true;
        tiffSaveOptions.alphaChannels = true;
        tiffSaveOptions.layers = false;
        tiffSaveOptions.imageCompression = TIFFEncoding.NONE;

        // Save as TIFF to output folder
        var fileName = file.name.split('.')[0]; // Get filename without extension
        var saveFile = new File(outputFolder + "/" + fileName + ".tif");
        doc.saveAs(saveFile, tiffSaveOptions);

        // Close document
        doc.close(SaveOptions.DONOTSAVECHANGES);
    }

    alert("Conversion complete! " + fileList.length + " files processed.");
} else {
    alert("No folder selected. Script cancelled.");
}
