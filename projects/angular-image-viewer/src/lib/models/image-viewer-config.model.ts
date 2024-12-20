export interface ImageViewerConfig {
    btnClass?: string;
    zoomFactor?: number;
    containerBackgroundColor?: string;
    primaryColor?: string;
    wheelZoom?: boolean;
    allowFullscreen?: boolean;
    allowKeyboardNavigation?: boolean;
    isZoomPersistent?: boolean;

    btnShow?: {
        zoomIn?: boolean;
        zoomOut?: boolean;
        rotateClockwise?: boolean;
        rotateCounterClockwise?: boolean;
        next?: boolean;
        prev?: boolean;
    };

    btnIcons?: {
        zoomIn?: string;
        zoomOut?: string;
        rotateClockwise?: string;
        rotateCounterClockwise?: string;
        next?: string;
        prev?: string;
        fullscreen?: string;
    };

    customBtns?: Array<{
        name: string;
        icon: string;
    }>;
}
