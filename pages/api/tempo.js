function tempo(request, response) {
      const dynamicDate = new Date();
      
      response.json({
        date: dynamicDate.toUTCString(),
        info: 'Ronaldo'
      });
}
export default tempo;