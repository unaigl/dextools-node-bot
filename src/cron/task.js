cron.schedule('0 * * * *', () => {
    console.log('Hourly task is running...');
    // You can add your logic here to be executed every hour
  });
  
  app.get('/hourly', (req, res) => {
    console.log('Hourly endpoint hit!');
    // Add any response logic you need here
    res.send('Hourly task completed!');
  });
  