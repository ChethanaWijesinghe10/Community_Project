package com.communityProject.server.Controller;

import com.communityProject.server.Entity.Drugs;
import com.communityProject.server.Service.DrugsService; 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:3000")
public class DrugsController {

    @Autowired
    private DrugsService drugsService;

    // Get all products in a category
    @GetMapping("/category/{category}")
    public ResponseEntity<List<Drugs>> getProductsByCategory(@PathVariable String category) {
        List<Drugs> drugs = drugsService.getProductsByCategory(category);
        return (!drugs.isEmpty()) ? ResponseEntity.ok(drugs) : ResponseEntity.notFound().build();
    }

    // Upload a new product with image
    @PostMapping("/upload")
    public ResponseEntity<String> uploadProduct(
            @RequestParam("name") String name,
            @RequestParam("description") String description,
            @RequestParam("price") double price,
            @RequestParam("category") String category,
            @RequestParam("drugSKU") String drugSKU,
            @RequestParam("file") MultipartFile file) {
        try {
            drugsService.saveProduct(name, description, price, category, drugSKU, file);
            return ResponseEntity.ok("Product uploaded successfully.");
        } catch (IOException e) {
            return ResponseEntity.status(500).body("Error uploading product.");
        }
    }

    @GetMapping("/drug/{id}")
    public ResponseEntity<Drugs> getDrugById(@PathVariable int id) {
        Drugs drug = drugsService.getDrugById(id);
        if (drug != null) {
            return ResponseEntity.ok(drug);
        } else {
            return ResponseEntity.status(404).body(null);
        }
    }

    // Get product image
    @GetMapping("/image/{id}")
    public ResponseEntity<byte[]> getProductImage(@PathVariable int id) {
        try {
            byte[] image = drugsService.getProductImage(id);
            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"image.jpg\"")
                    .contentType(MediaType.IMAGE_JPEG)
                    .body(image);
        } catch (RuntimeException e) {
            return ResponseEntity.status(404).body(null);
        }
    }

}
