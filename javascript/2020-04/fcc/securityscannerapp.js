


let parkingGate = {
  currentKeyFobScanned: "",
  currentPatronNameScanned: "",
  currentTimeKeyFobScanned: "",

  keyFobScannedInPentagon: [],
  patronNameScannedInParkingLot: [],
  timePatronScannedInParkingLot: [],

  keyFobScannedOutofPentagon: [],
  patronNameScannedOutOfParkingLot: [],
  timePatronScannedOutOfParkingLot: [],
  
  inScan: function() {
    this.keyFobScannedInPentagon.push(this.currentKeyFobScanned);
    this.patronNameScannedInParkingLot.push(this.currentPatronNameScanned);
    this.timePatronScannedInParkingLot.push(this.currentTimeKeyFobScanned);
    console.log(
      `:::In The Parking Garage ${this.timePatronScannedInParkingLot}:::`
    );
    console.log(this.keyFobScannedInPentagon);
    console.log(this.patronNameScannedInParkingLot);
  },
  outScan: function() {
    if (this.keyFobScannedInPentagon.includes(this.currentKeyFobScanned)) {
      
      this.keyFobScannedOutofPentagon.push(this.keyFobScannedInPentagon.splice(this.keyFobScannedInPentagon.indexOf(this.currentKeyFobScanned), 1    ).pop()  );
      
      this.patronNameScannedOutOfParkingLot.push(this.patronNameScannedInParkingLot.splice(this.patronNameScannedInParkingLot.indexOf(this.patronNameScannedInParkingLot), 1    ).pop()  );


      this.timePatronScannedOutOfParkingLot.push(this.timePatronScannedInParkingLot.splice(this.timePatronScannedInParkingLot.indexOf(this.currentTimeKeyFobScanned), 1    ).pop()  );

    }
    

      console.log(
        `:::Out Of The Parking Garage ${this.timePatronScannedOutOfParkingLot}:::`
      );
      console.log(this.keyFobScannedOutofPentagon);
      console.log(this.patronNameScannedOutOfParkingLot);
     if (this.keyFobScannedInPentagon !== this.currentKeyFobScanned) {
      console.log(
        `:::WARNING ${this.currentPatronNameScanned} DID NOT ENTER THE PARKING GARAGE!:::`
      );
    }
  }
};
function keyFobId(id, name, inout, time) {
  parkingGate.currentKeyFobScanned = id;
  parkingGate.currentPatronNameScanned = name;
  parkingGate.currentTimeKeyFobScanned = time;
  if (inout == "in") {
    parkingGate.inScan();
  } else if (inout == "out") {
    parkingGate.outScan();
  }
}
keyFobId("12345", "will", "in", "08:35");
keyFobId("12345", "will", "out", "09:15");
