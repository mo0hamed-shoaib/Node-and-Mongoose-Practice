export default function requestLogger(req, res, next) {
    console.log(`URL: ${req.url}, Method: ${req.method}`);
    next();
}