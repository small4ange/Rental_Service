export const parseId = (req, res, next) => {
    const idParam = req.params.id || req.params.offerId;
    
    if (!idParam) {
        return next(ApiError.badRequest('ID не указан'));
    }
    
    let id = idParam;
    if (id.startsWith(':')) {
        id = id.slice(1);
    }
    
    if (isNaN(id)) {
        return next(ApiError.badRequest('Неверный формат ID'));
    }
    
    req.parsedId = parseInt(id, 10);
    next();
};