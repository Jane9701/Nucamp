// // import React, { Component } from 'react';

// // class Directory extends Component {
// //     constructor(props) {
// //         super(props);
// //         this.state = {
// //             campsites: [
// //                 {
// //                     id: 0,
// //                     name: 'React Lake Campground',
// //                     image: 'assets/images/react-lake.jpg',
// //                     elevation: 1233,
// //                     description: "Nestled in the foothills of the Chrome Mountains, this campground on the shores of the pristine React Lake is a favorite for fly fishers."
// //                 },
// //                 {
// //                   id: 1,
// //                   name: 'Chrome River Campground ',
// //                   image: 'assets/images/chrome-river.jpg',
// //                   elevation: 877,
// //                   description: "Spend a few sunny days and starry nights beneath a canopy of old-growth firs at this enchanting spot by the Chrome River."
// //                 },
// //                 {
// //                     id: 2,
// //                     name: 'Breadcrumb Trail Campground',
// //                     image: 'assets/images/breadcrumb-trail.jpg',
// //                     elevation: 2901,
// //                     description: "Let NuCamp be your guide to this off-the-beaten-path, hike-in-only campground."
// //                 },
// //                 {
// //                     id: 3,
// //                     name: 'Redux Woods Campground',
// //                     image: 'assets/images/redux-woods.jpg',
// //                     elevation: 42,
// //                     description: "You'll never want to leave this hidden gem, deep within the lush Redux Woods."
// //                 }
// //             ],
// //         };
// //     }

// //     render() {
// //             const directory = this.state.campsites.map(campsite => {
// //                 return (
// //                     <div key={campsite.id} className="col">
// //                         <img src={campsite.image} alt={campsite.name} />
// //                         <h2>{campsite.name}</h2>
// //                         <p>{campsite.description}</p>
// //                     </div>
// //                 );
// //             });
    
// //             return (
// //                 <div className="container">
// //                     <div className="row">
// //                         {directory}
// //                     </div>
// //                 </div>
// //             );
    
        
// //     }
// // }

// // export default Directory;

// import React, { Component } from 'react';
// import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
// import CampsiteInfo from './CampsiteInfoComponent';

// class Directory extends Component {
//     // constructor(props) {
//     //     super(props);
//     //     this.state = {
//     //         // selectedCampsite: null
//     //     };
//     // }

//     // onCampsiteSelect(campsite) {
//     //     this.setState({selectedCampsite: campsite});
//     // }

//     // renderSelectedCampsite(campsite) {
//     //     if (campsite) {
//     //         return (
//     //             <Card>
//     //                 <CardImg top src={campsite.image} alt={campsite.name} />
//     //                 <CardBody>
//     //                     <CardTitle>{campsite.name}</CardTitle>
//     //                     <CardText>{campsite.description}</CardText>
//     //                 </CardBody>
//     //             </Card>
//     //         );
//     //     }
//     //     return <div />;
//     // }

//     render() {
//         const directory = this.props.campsites.map(campsite => {
//             return (
//                 <div key={campsite.id} className="col-md-5 m-1">
//                     {/* <Card onClick={() => this.onCampsiteSelect(campsite)}> */}
//                     <Card onClick={() => this.props.onClick(campsite.id)}>
//                         <CardImg width="100%" src={campsite.image} alt={campsite.name} />
//                         <CardImgOverlay>
//                             <CardTitle>{campsite.name}</CardTitle>
//                         </CardImgOverlay>
//                     </Card>
//                 </div>
//             );
//         });

//         return (
//             <div className="container">
//                 <div className="row">
//                     {directory}
//                 </div>
//                 {/* <CampsiteInfo campsite={this.state.selectedCampsite} /> */}
//                 {/* <div className="row">
//                     <div className="col-md-5 m-1">
//                         {this.renderSelectedCampsite(this.state.selectedCampsite)}
//                     </div>
//                 </div> */}
//             </div>
//         );
//     }
// }

// export default Directory;

import React from 'react';


import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderDirectoryItem({campsite}) {
    return (
        <Card>
            <Link to={`/directory/${campsite.id}`}>
                <CardImg width="100%" src={baseUrl + campsite.image} alt={campsite.name} />
                <CardImgOverlay>
                    <CardTitle>{campsite.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    )}

function Directory(props) {

    // const directory = props.campsites.map(campsite => {
    //     return (
    //         <div key={campsite.id} className="col-md-5 m-1">
    //             <RenderDirectoryItem campsite={campsite} />
    //             {/* <RenderDirectoryItem campsite={campsite} onClick={props.onClick} /> */}
    //         </div>
    //     );
    // });

    // return (
    //     <div className="container">
    //         <div className="row">
    //             <div className="col">
    //                 <Breadcrumb>
    const directory = props.campsites.campsites.map(campsite => {
        return (
            <div key={campsite.id} className="col-md-5 m-1">
                <RenderDirectoryItem campsite={campsite} />
            </div>
        );
    });

    if (props.campsites.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    if (props.campsites.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>{props.campsites.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Directory</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Directory</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {directory}
            </div>
        </div>
    );
}

export default Directory;