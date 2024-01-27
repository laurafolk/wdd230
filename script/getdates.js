let currDate = new Date();

document.querySelector("#updated").textContent = "Last updated: "+ currDate.toLocaleString();
document.querySelector("#year").textContent = "©"+ currDate.getFullYear()+"\n" + "Laura M. Folk" +"\n" + "United States";
