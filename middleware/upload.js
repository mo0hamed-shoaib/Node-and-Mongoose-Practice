import multer from 'multer';

// Save files on the server filesystem...
export const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // ...In uploads/ folder
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);

        // Add uniqueSuffix to filename
        cb(null, uniqueSuffix + "-" + file.originalname);
    },
});

export const upload = multer({ storage: storage });