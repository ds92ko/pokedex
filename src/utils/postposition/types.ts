type Marker = '을' | '를' | '이' | '가' | '은' | '는' | '과' | '와';

export type GetPostposition = (marker: Marker, hasFinalConsonant: boolean) => Marker;

export type Postposition = (text: string, marker: Marker) => string;
