let Remote = function (codeRemote) {
    this.codeRemote = codeRemote;
    this.connect = Tivi;

    this.getCodeRemode = () => {
        return this.codeRemote;
    };
    this.setCodeRemote = value => {
        this.codeRemote = value;
    };
    this.setConvertChannel = (value) => {
        this.connect.setChannel(value);
        console.log("Kênh:  " + this.connect.getChannel());
    };
    this.setVolumeDown = () => {
        this.connect.setVolumeDown(2);
        console.log("Âm lượng: " + this.connect.getVolume());
    };
    this.setVolumeUp = () => {
        this.connect.setVolumeUp(2);
        console.log("Âm lượng: " + this.connect.getVolume());
    };
    this.setConnect = (value) => {
        this.connect = value;
    };
    this.setTurnOn = function () {
        if (this.connect.getStatus()) {
            this.connect.setStatus(false);
            console.log("Đã Tắt Tivi");
        } else {
            this.connect.setStatus(true);
            console.log("Đã Bật Tivi");
            console.log("Âm lượng: " + this.connect.getVolume());
            console.log("Kênh: " + this.connect.getChannel());
        }
    }
};

let Tivi = function (channel, status, volume) {
    this.channel = channel;
    this.status = status;
    this.volume = volume;

    this.getStatus = () => {
        return this.status
    };
    this.setStatus = value => {
        this.status = value;
    };
    this.getChannel = () => {
        return this.channel;
    };
    this.setChannel = (value) => {
        this.channel = value;
    };
    this.getVolume = () => {
        return this.volume;
    };
    this.setVolumeUp = value => {
        if(this.volume < 98) {
            this.volume += value;
        }
    };
    this.setVolumeDown = value => {
        if(this.volume > 2) {
            this.volume -= value;
        }
    };
};

let remoteToShiBa = new Remote("TOSHIBA");
let toshiba = new Tivi(7, false, 30);
remoteToShiBa.setConnect(toshiba);