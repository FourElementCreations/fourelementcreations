window.addEventListener("load", (event) => {
    var svg = document.getElementById("logo_svg");
    
    const x1 = [61.87, 165.159, 197.33, 113.919, 30.2] 
    const y1 = [188.69, 188.96, 90.79, 29.87, 90.37] 
    const x2 = [152.809, 137.669, 74.61, 89.5] 
    const y2 = [104.73, 150.559, 104.73, 150.309]

    let newPent = ""
    let newCirc = []
    
    for (i = 0; i < x1.length; i++) {
        newPent += x1[i] + "," + y1[i] + " ";
    }

    for (i = 0; i < x2.length; i++) {
        const xyArr = []
        xyArr.push(x2[i], y2[i])
        newCirc.push(xyArr)
        
 
        }

    console.log(`The new pentagon: ${newPent}`)
    console.log(`The new circles: ${newCirc}`)
    
    const polygon = document.createElement('polygon')

    polygon.setAttributeNS("http://www.w3.org/2000/svg", "points", newPent.trim());
    polygon.classList.add('st3')
    svg.appendChild(polygon)



newCirc.forEach((circ) => {
    const circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    const r = 10.13;
    const cx = parseFloat(circ[0]);
    const cy = parseFloat(circ[1]);
    circle.classList.add('st4')
    circle.setAttributeNS("http://www.w3.org/2000/svg",'cx', cx);
    circle.setAttributeNS("http://www.w3.org/2000/svg",'cy', cy);
    circle.setAttributeNS("http://www.w3.org/2000/svg", 'r', r);
    svg.appendChild(circle)
})

    // for (i = 0; i < newCirc; i++) {


    // }

})