import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';

// WebCamImages
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
// CropperJS
import { CropperComponent } from 'angular-cropperjs';

@Component({
    selector: 'app-camara',
    templateUrl: './camara.component.html',
    styleUrls: ['./camara.component.scss']
})
export class CamaraComponent implements OnInit {
    @Input() imageUrl: any;

    public mostrar = false;
    // toggle webcam on/off
    public showWebcam = true;
    public allowCameraSwitch = true;
    public multipleWebcamsAvailable = false;
    public deviceId: string;
    public videoOptions: MediaTrackConstraints = {
        // width: {ideal: 1024},
        // height: {ideal: 576}
    };
    public errors: WebcamInitError[] = [];
    // latest snapshot
    @Input()
    public webcamImage: WebcamImage = null;
    // webcam snapshot trigger
    private trigger: Subject<void> = new Subject<void>();
    // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
    private nextWebcam: Subject<boolean | string> = new Subject<boolean | string>();

    /**
     * CropperJS declarations
     */


    public cropperRes: string;
    public showCropper: boolean;

    public cropperConfig: object = {
        movable: true,
        scalable: true,
        zoomable: true,
        viewMode: 2,
        checkCrossOrigin: true
    };

    @ViewChild('angularCropper', { static: false }) public angularCropper: CropperComponent;
    // End Cropper Declarations

    constructor() {}

    ngOnInit() {
        // WebCam Init
        WebcamUtil.getAvailableVideoInputs().then((mediaDevices: MediaDeviceInfo[]) => {
            this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
        });
    }

    /**
     * WebCam Functions
     */
    public triggerSnapshot(): void {
        this.trigger.next();
        this.showWebcam = !this.showWebcam;
    }

    public toggleWebcam(): void {
        this.showWebcam = !this.showWebcam;
    }

    public handleInitError(error: WebcamInitError): void {
        this.errors.push(error);
    }

    public showNextWebcam(directionOrDeviceId: boolean | string): void {
        // true => move forward through devices
        // false => move backwards through devices
        // string => move to device with given deviceId
        this.nextWebcam.next(directionOrDeviceId);
    }

    public handleImage(webcamImage: WebcamImage): void {
        console.info('received webcam image', webcamImage);
        this.webcamImage = webcamImage;
        if (this.angularCropper && this.angularCropper.cropper) this.angularCropper.cropper.destroy();

        this.showCropper = true;
        //this.refreshCrop(this.imageUrl);
        this.imageUrl = this.webcamImage.imageAsDataUrl;
        this.refreshCrop(this.webcamImage.imageAsDataUrl);
    }

    public cameraWasSwitched(deviceId: string): void {
        console.log('active device: ' + deviceId);
        this.deviceId = deviceId;
    }

    public get triggerObservable(): Observable<void> {
        return this.trigger.asObservable();
    }

    public get nextWebcamObservable(): Observable<boolean | string> {
        return this.nextWebcam.asObservable();
    }
    // End WebCam Functions

    /**
     * CropperJS Functions
     */
    public onFileSelected(event: any): void {
        const that = this;
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            that.showCropper = false;
            reader.onload = (eventCurr: ProgressEvent) => {
                that.imageUrl = (<FileReader>eventCurr.target).result;
                setTimeout(function() {
                    that.refreshCrop(that.imageUrl);
                }, 1000);
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    }

    public refreshCrop(img: any): void {
        this.imageUrl = img;
        this.showCropper = true;
    }

    public cropendImage(event: any): void {
        this.cropperRes = this.angularCropper.cropper.getCroppedCanvas().toDataURL('image/jpeg');
    }

    public readyImage(event: any): void {
        this.cropperRes = this.angularCropper.cropper.getCroppedCanvas().toDataURL('image/jpeg');
    }
    public rotate(turn: any): void {
        turn = turn === 'left' ? -45 : 45;
        this.angularCropper.cropper.rotate(turn);
        this.cropperRes = this.angularCropper.cropper.getCroppedCanvas().toDataURL('image/jpeg');
    }

    public destroy(): void {
        this.angularCropper.cropper.destroy();
    }

    public zoomManual(): void {
        this.cropperRes = this.angularCropper.cropper.getCroppedCanvas().toDataURL('image/jpeg');
    }

    public zoom(status: any): void {
        status = status === 'positive' ? 0.1 : -0.1;
        this.angularCropper.cropper.zoom(status);
        this.cropperRes = this.angularCropper.cropper.getCroppedCanvas().toDataURL('image/jpeg');
    }

    public move(offsetX: any, offsetY: any): void {
        this.angularCropper.cropper.move(offsetX, offsetY);
        this.cropperRes = this.angularCropper.cropper.getCroppedCanvas().toDataURL('image/jpeg');
    }

    public scale(offset: any): void {
        if (offset === 'x') {
            this.angularCropper.cropper.scaleX(-1);
        } else {
            this.angularCropper.cropper.scaleY(-1);
        }
        console.log(this.angularCropper.cropper.scale);
        this.cropperRes = this.angularCropper.cropper.getCroppedCanvas().toDataURL('image/jpeg');
    }

    public clear(): void {
        this.angularCropper.cropper.clear();
        this.cropperRes = this.angularCropper.cropper.getCroppedCanvas().toDataURL('image/jpeg');
    }

    public disable(): void {
        this.angularCropper.cropper.disable();
        this.cropperRes = this.angularCropper.cropper.getCroppedCanvas().toDataURL('image/jpeg');
    }

    public enable(): void {
        this.angularCropper.cropper.enable();
        this.cropperRes = this.angularCropper.cropper.getCroppedCanvas().toDataURL('image/jpeg');
    }

    public reset(): void {
        this.angularCropper.cropper.reset();
        this.cropperRes = this.angularCropper.cropper.getCroppedCanvas().toDataURL('image/jpeg');
    }


    // End CroperJS functions
}
