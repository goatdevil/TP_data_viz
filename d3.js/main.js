var dataFromJson = [];

var margin={top:20,right:30,bottom:20,left:30},
    width=1000-margin.left-margin.right,
    height=1000-margin.top-margin.bottom;

var svg = d3.select("#svg_area")
    .append("svg")
    .attr("width",width+margin.left+margin.right)
    .attr("height",height+margin.top+margin.bottom)
    .append("g")
    .attr("transfrom","translate("+margin.left+","+margin.top+")")


var scale_X=d3.scaleLinear()
    .domain([0,100])
    .range([0,width]);
svg
    .append('g')
    .attr("transform","translate(0,"+height+")")

var scale_Y=d3.scaleLinear()
    .domain([0,100])
    .range([height,0])
svg
    .append('g')
    .attr("transform","translate(0,"+width+")")


var response = fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        dataFromJson = data;
        drawCircles();
    })
    .catch(error => console.log(error));

function drawCircles() {
    for (let data of dataFromJson){;
        value=data["value"]
        x=data["x"]
        y=data["y"]

        if (value <20){
            svg.append("circle")
                .attr("cx",scale_X(x))
                .attr("cy",scale_Y(y))
                .attr("r",value)
                .style("fill","blue")
        }
        else if(value<30){
            svg.append("circle")
                .attr("cx",scale_X(x))
                .attr("cy",scale_Y(y))
                .attr("r",value)
                .style("fill","pink")
        }
        else{
            svg.append("circle")
                .attr("cx",scale_X(x))
                .attr("cy",scale_Y(y))
                .attr("r",value)
                .style("fill","green")
        }
    }

    // Write function to draw circles based on the data in the dataFromJson array
}