<?php
// Define the file paths
$htmlFile = 'index.html';
$cssFile = 'assets/css/index.css';
$jsFile = 'assets/js/script.js';

// Function to update file paths in the given file content
function updateFilePaths($content) {
    $search = [
        '/LOGO/',
        '/logo/'
    ];
    $replace = [
        'assets/images/',
        'assets/images/'
    ];

    return str_replace($search, $replace, $content);
}

// Update HTML file
$htmlContent = file_get_contents($htmlFile);
$updatedHtmlContent = updateFilePaths($htmlContent);
file_put_contents($htmlFile, $updatedHtmlContent);

// Update CSS file
$cssContent = file_get_contents($cssFile);
$updatedCssContent = updateFilePaths($cssContent);
file_put_contents($cssFile, $updatedCssContent);

// Update JS file
$jsContent = file_get_contents($jsFile);
$updatedJsContent = updateFilePaths($jsContent);
file_put_contents($jsFile, $updatedJsContent);

echo "Files have been updated successfully.";
?>
