function ImageManager(prefix)
{
    this.prefix = prefix;
    this.successCount = 0;
    this.errorCount = 0;
    this.cache = {};
    this.downloadQueue = [];
}

ImageManager.prototype.queueDownload = function(path)
{
    this.downloadQueue.push(path);
    this.cache[path] = new Image();
};

ImageManager.prototype.isDone = function()
{
    return (this.downloadQueue.length == this.successCount + this.errorCount);
};

ImageManager.prototype.update = function()
{
    if (this.downloadQueue.length > 0)
    {
        var path = this.downloadQueue.pop();
        this.cache[path].src = this.prefix+path;       
    }
};

ImageManager.prototype.get = function(path)
{
    if (!this.cache[path])
    {
        this.queueDownload(path);
    }
    return this.cache[path];
};