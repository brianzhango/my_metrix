import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export function ViewFile(){

    const { ship_id } = useParams();

    const [isError, setIsError] = useState(false)
    // const { ship_id } = useParams()

    // const URI = "mongodb+srv://brianozhang:869323246@cluster0.ima9o2n.mongodb.net/test"

    // // Create db connection
    // const conn = mongoose.createConnection(URI);

    // // Init gfs
    // let gfs, gridfsBucket;

    // conn.once('open', () => {
    // // Init stream
    // gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
    // bucketName: 'uploads'
    // });
    // gfs = Grid(conn.db, mongoose.mongo);
    // gfs.collection('uploads');
    // })

    // gfs.files.findOne({ filename: '${ship_id}.pdf' }, (err, file) => {
    //     // Check if file
    //     if (!file || file.length === 0) {
    //       return res.status(404).json({
    //         err: 'No file exists'
    //       });
    //     }
    
    //     const readstream = gridfsBucket.openDownloadStreamByName(file.filename);
    //     readstream.pipe(res);
    // });
    useEffect(() => {

        axios.get(`http://localhost:3000/upload/${ship_id}.pdf`)
        .then(function (response) {
            // handle success
            console.log(response);
          })
          .catch(function (error) {
            // handle error
            setIsError(true);
            console.log(error, isError);
    },[0])

      })
}