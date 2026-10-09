(()=>{var Wm=Object.defineProperty;var zi=(n,t)=>{for(var e in t)Wm(n,e,{get:t[e],enumerable:!0})};var Ff=0,Xc=1,Of=2;var $r=1,Bf=2,js=3,ts=0,Sn=1,Hn=2,mi=0,Qs=1,qc=2,Yc=3,$c=4,zf=5;var xs=100,kf=101,Vf=102,Gf=103,Hf=104,Wf=200,Xf=201,qf=202,Yf=203,Zc=204,Jc=205,$f=206,Zf=207,Jf=208,Kf=209,jf=210,Qf=211,td=212,ed=213,nd=214,ua=0,fa=1,da=2,qs=3,pa=4,ma=5,ga=6,xa=7,Kc=0,id=1,sd=2,Qn=0,jc=1,Qc=2,th=3,eh=4,nh=5,ih=6,sh=7;var rh=300,es=301,_s=302,Ya=303,$a=304,Zr=306,_a=1e3,ci=1001,ya=1002,on=1003,rd=1004;var Jr=1005;var Ke=1006,Za=1007;var ns=1008;var Un=1009,oh=1010,ah=1011,tr=1012,Ja=1013,ti=1014,ei=1015,ni=1016,Ka=1017,ja=1018,er=1020,lh=35902,ch=35899,hh=1021,uh=1022,Wn=1023,hi=1026,is=1027,fh=1028,Qa=1029,ss=1030,tl=1031;var el=1033,Kr=33776,jr=33777,Qr=33778,to=33779,nl=35840,il=35841,sl=35842,rl=35843,ol=36196,al=37492,ll=37496,cl=37488,hl=37489,eo=37490,ul=37491,fl=37808,dl=37809,pl=37810,ml=37811,gl=37812,xl=37813,_l=37814,yl=37815,vl=37816,Ml=37817,Sl=37818,bl=37819,wl=37820,Al=37821,El=36492,Tl=36494,Cl=36495,Rl=36283,Il=36284,no=36285,Pl=36286;var Tr=2300,va=2301,la=2302,Bc=2303,zc=2400,kc=2401,Vc=2402;var od=3200;var dh=0,ad=1,Ii="",rn="srgb",Cr="srgb-linear",Rr="linear",Re="srgb";var ca=7680;var ld=519,cd=512,hd=513,ud=514,Ll=515,fd=516,dd=517,Dl=518,pd=519,ph=35044;var mh="300 es",jn=2e3,Ir=2001;function Xm(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function qm(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Pr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function md(){let n=Pr("canvas");return n.style.display="block",n}var cf={},Ys=null;function Lr(...n){let t="THREE."+n.shift();Ys?Ys("log",t,...n):console.log(t,...n)}function gd(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function te(...n){n=gd(n);let t="THREE."+n.shift();if(Ys)Ys("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function re(...n){n=gd(n);let t="THREE."+n.shift();if(Ys)Ys("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function ds(...n){let t=n.join(" ");t in cf||(cf[t]=!0,te(...n))}function xd(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var _d={[ua]:fa,[da]:ga,[pa]:xa,[qs]:ma,[fa]:ua,[ga]:da,[xa]:pa,[ma]:qs},ui=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ha=Math.PI/180,Ma=180/Math.PI;function Xi(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]+"-"+fn[t&255]+fn[t>>8&255]+"-"+fn[t>>16&15|64]+fn[t>>24&255]+"-"+fn[e&63|128]+fn[e>>8&255]+"-"+fn[e>>16&255]+fn[e>>24&255]+fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]).toLowerCase()}function be(n,t,e){return Math.max(t,Math.min(e,n))}function Ym(n,t){return(n%t+t)%t}function pc(n,t,e){return(1-e)*n+e*t}function ai(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Fe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var vh=class vh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=be(this.x,t.x,e.x),this.y=be(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=be(this.x,t,e),this.y=be(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(be(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(be(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};vh.prototype.isVector2=!0;var xe=vh,fi=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,l){let c=i[s+0],a=i[s+1],d=i[s+2],h=i[s+3],u=r[o+0],x=r[o+1],_=r[o+2],M=r[o+3];if(h!==M||c!==u||a!==x||d!==_){let g=c*u+a*x+d*_+h*M;g<0&&(u=-u,x=-x,_=-_,M=-M,g=-g);let m=1-l;if(g<.9995){let C=Math.acos(g),N=Math.sin(C);m=Math.sin(m*C)/N,l=Math.sin(l*C)/N,c=c*m+u*l,a=a*m+x*l,d=d*m+_*l,h=h*m+M*l}else{c=c*m+u*l,a=a*m+x*l,d=d*m+_*l,h=h*m+M*l;let C=1/Math.sqrt(c*c+a*a+d*d+h*h);c*=C,a*=C,d*=C,h*=C}}t[e]=c,t[e+1]=a,t[e+2]=d,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){let l=i[s],c=i[s+1],a=i[s+2],d=i[s+3],h=r[o],u=r[o+1],x=r[o+2],_=r[o+3];return t[e]=l*_+d*h+c*x-a*u,t[e+1]=c*_+d*u+a*h-l*x,t[e+2]=a*_+d*x+l*u-c*h,t[e+3]=d*_-l*h-c*u-a*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,l=Math.cos,c=Math.sin,a=l(i/2),d=l(s/2),h=l(r/2),u=c(i/2),x=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=u*d*h+a*x*_,this._y=a*x*h-u*d*_,this._z=a*d*_+u*x*h,this._w=a*d*h-u*x*_;break;case"YXZ":this._x=u*d*h+a*x*_,this._y=a*x*h-u*d*_,this._z=a*d*_-u*x*h,this._w=a*d*h+u*x*_;break;case"ZXY":this._x=u*d*h-a*x*_,this._y=a*x*h+u*d*_,this._z=a*d*_+u*x*h,this._w=a*d*h-u*x*_;break;case"ZYX":this._x=u*d*h-a*x*_,this._y=a*x*h+u*d*_,this._z=a*d*_-u*x*h,this._w=a*d*h+u*x*_;break;case"YZX":this._x=u*d*h+a*x*_,this._y=a*x*h+u*d*_,this._z=a*d*_-u*x*h,this._w=a*d*h-u*x*_;break;case"XZY":this._x=u*d*h-a*x*_,this._y=a*x*h-u*d*_,this._z=a*d*_+u*x*h,this._w=a*d*h+u*x*_;break;default:te("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],l=e[5],c=e[9],a=e[2],d=e[6],h=e[10],u=i+l+h;if(u>0){let x=.5/Math.sqrt(u+1);this._w=.25/x,this._x=(d-c)*x,this._y=(r-a)*x,this._z=(o-s)*x}else if(i>l&&i>h){let x=2*Math.sqrt(1+i-l-h);this._w=(d-c)/x,this._x=.25*x,this._y=(s+o)/x,this._z=(r+a)/x}else if(l>h){let x=2*Math.sqrt(1+l-i-h);this._w=(r-a)/x,this._x=(s+o)/x,this._y=.25*x,this._z=(c+d)/x}else{let x=2*Math.sqrt(1+h-i-l);this._w=(o-s)/x,this._x=(r+a)/x,this._y=(c+d)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,l=e._x,c=e._y,a=e._z,d=e._w;return this._x=i*d+o*l+s*a-r*c,this._y=s*d+o*c+r*l-i*a,this._z=r*d+o*a+i*c-s*l,this._w=o*d-i*l-s*c-r*a,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,l=this.dot(t);l<0&&(i=-i,s=-s,r=-r,o=-o,l=-l);let c=1-e;if(l<.9995){let a=Math.acos(l),d=Math.sin(a);c=Math.sin(c*a)/d,e=Math.sin(e*a)/d,this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Mh=class Mh{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(hf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(hf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,l=t.z,c=t.w,a=2*(o*s-l*i),d=2*(l*e-r*s),h=2*(r*i-o*e);return this.x=e+c*a+o*h-l*d,this.y=i+c*d+l*a-r*h,this.z=s+c*h+r*d-o*a,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=be(this.x,t.x,e.x),this.y=be(this.y,t.y,e.y),this.z=be(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=be(this.x,t,e),this.y=be(this.y,t,e),this.z=be(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(be(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,l=e.y,c=e.z;return this.x=s*c-r*l,this.y=r*o-i*c,this.z=i*l-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return mc.copy(this).projectOnVector(t),this.sub(mc)}reflect(t){return this.sub(mc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(be(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Mh.prototype.isVector3=!0;var Z=Mh,mc=new Z,hf=new fi,Sh=class Sh{constructor(t,e,i,s,r,o,l,c,a){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,l,c,a)}set(t,e,i,s,r,o,l,c,a){let d=this.elements;return d[0]=t,d[1]=s,d[2]=l,d[3]=e,d[4]=r,d[5]=c,d[6]=i,d[7]=o,d[8]=a,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],l=i[3],c=i[6],a=i[1],d=i[4],h=i[7],u=i[2],x=i[5],_=i[8],M=s[0],g=s[3],m=s[6],C=s[1],N=s[4],w=s[7],A=s[2],T=s[5],U=s[8];return r[0]=o*M+l*C+c*A,r[3]=o*g+l*N+c*T,r[6]=o*m+l*w+c*U,r[1]=a*M+d*C+h*A,r[4]=a*g+d*N+h*T,r[7]=a*m+d*w+h*U,r[2]=u*M+x*C+_*A,r[5]=u*g+x*N+_*T,r[8]=u*m+x*w+_*U,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],l=t[5],c=t[6],a=t[7],d=t[8];return e*o*d-e*l*a-i*r*d+i*l*c+s*r*a-s*o*c}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],l=t[5],c=t[6],a=t[7],d=t[8],h=d*o-l*a,u=l*c-d*r,x=a*r-o*c,_=e*h+i*u+s*x;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/_;return t[0]=h*M,t[1]=(s*a-d*i)*M,t[2]=(l*i-s*o)*M,t[3]=u*M,t[4]=(d*e-s*c)*M,t[5]=(s*r-l*e)*M,t[6]=x*M,t[7]=(i*c-a*e)*M,t[8]=(o*e-i*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,l){let c=Math.cos(r),a=Math.sin(r);return this.set(i*c,i*a,-i*(c*o+a*l)+o+t,-s*a,s*c,-s*(-a*o+c*l)+l+e,0,0,1),this}scale(t,e){return ds("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(gc.makeScale(t,e)),this}rotate(t){return ds("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(gc.makeRotation(-t)),this}translate(t,e){return ds("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(gc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Sh.prototype.isMatrix3=!0;var ce=Sh,gc=new ce,uf=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ff=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $m(){let n={enabled:!0,workingColorSpace:Cr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Re&&(s.r=Ri(s.r),s.g=Ri(s.g),s.b=Ri(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Re&&(s.r=Xs(s.r),s.g=Xs(s.g),s.b=Xs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ii?Rr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ds("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ds("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Cr]:{primaries:t,whitePoint:i,transfer:Rr,toXYZ:uf,fromXYZ:ff,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:t,whitePoint:i,transfer:Re,toXYZ:uf,fromXYZ:ff,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}}),n}var Se=$m();function Ri(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Xs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Cs,Sa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Cs===void 0&&(Cs=Pr("canvas")),Cs.width=t.width,Cs.height=t.height;let s=Cs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Cs}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Pr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ri(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ri(e[i]/255)*255):e[i]=Ri(e[i]);return{data:e,width:t.width,height:t.height}}else return te("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Zm=0,$s=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Zm++}),this.uuid=Xi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,l=s.length;o<l;o++)s[o].isDataTexture?r.push(xc(s[o].image)):r.push(xc(s[o]))}else r=xc(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function xc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Sa.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(te("Texture: Unable to serialize Texture."),{})}var Jm=0,_c=new Z,hn=class n extends ui{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=ci,s=ci,r=Ke,o=ns,l=Wn,c=Un,a=n.DEFAULT_ANISOTROPY,d=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jm++}),this.uuid=Xi(),this.name="",this.source=new $s(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=a,this.format=l,this.internalFormat=null,this.type=c,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(_c).x}get height(){return this.source.getSize(_c).y}get depth(){return this.source.getSize(_c).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){te(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){te(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==rh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _a:t.x=t.x-Math.floor(t.x);break;case ci:t.x=t.x<0?0:1;break;case ya:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _a:t.y=t.y-Math.floor(t.y);break;case ci:t.y=t.y<0?0:1;break;case ya:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=rh;hn.DEFAULT_ANISOTROPY=1;var bh=class bh{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,c=t.elements,a=c[0],d=c[4],h=c[8],u=c[1],x=c[5],_=c[9],M=c[2],g=c[6],m=c[10];if(Math.abs(d-u)<.01&&Math.abs(h-M)<.01&&Math.abs(_-g)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+M)<.1&&Math.abs(_+g)<.1&&Math.abs(a+x+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let N=(a+1)/2,w=(x+1)/2,A=(m+1)/2,T=(d+u)/4,U=(h+M)/4,v=(_+g)/4;return N>w&&N>A?N<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(N),s=T/i,r=U/i):w>A?w<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),i=T/s,r=v/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=U/r,s=v/r),this.set(i,s,r,e),this}let C=Math.sqrt((g-_)*(g-_)+(h-M)*(h-M)+(u-d)*(u-d));return Math.abs(C)<.001&&(C=1),this.x=(g-_)/C,this.y=(h-M)/C,this.z=(u-d)/C,this.w=Math.acos((a+x+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=be(this.x,t.x,e.x),this.y=be(this.y,t.y,e.y),this.z=be(this.z,t.z,e.z),this.w=be(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=be(this.x,t,e),this.y=be(this.y,t,e),this.z=be(this.z,t,e),this.w=be(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(be(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};bh.prototype.isVector4=!0;var Xe=bh,ba=class extends ui{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ke,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Xe(0,0,t,e),this.scissorTest=!1,this.viewport=new Xe(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new hn(s),o=i.count;for(let l=0;l<o;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ke,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new $s(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},bn=class extends ba{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Dr=class extends hn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var wa=class extends hn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var qa=class qa{constructor(t,e,i,s,r,o,l,c,a,d,h,u,x,_,M,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,l,c,a,d,h,u,x,_,M,g)}set(t,e,i,s,r,o,l,c,a,d,h,u,x,_,M,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=l,m[13]=c,m[2]=a,m[6]=d,m[10]=h,m[14]=u,m[3]=x,m[7]=_,m[11]=M,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qa().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/Rs.setFromMatrixColumn(t,0).length(),r=1/Rs.setFromMatrixColumn(t,1).length(),o=1/Rs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),l=Math.sin(i),c=Math.cos(s),a=Math.sin(s),d=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let u=o*d,x=o*h,_=l*d,M=l*h;e[0]=c*d,e[4]=-c*h,e[8]=a,e[1]=x+_*a,e[5]=u-M*a,e[9]=-l*c,e[2]=M-u*a,e[6]=_+x*a,e[10]=o*c}else if(t.order==="YXZ"){let u=c*d,x=c*h,_=a*d,M=a*h;e[0]=u+M*l,e[4]=_*l-x,e[8]=o*a,e[1]=o*h,e[5]=o*d,e[9]=-l,e[2]=x*l-_,e[6]=M+u*l,e[10]=o*c}else if(t.order==="ZXY"){let u=c*d,x=c*h,_=a*d,M=a*h;e[0]=u-M*l,e[4]=-o*h,e[8]=_+x*l,e[1]=x+_*l,e[5]=o*d,e[9]=M-u*l,e[2]=-o*a,e[6]=l,e[10]=o*c}else if(t.order==="ZYX"){let u=o*d,x=o*h,_=l*d,M=l*h;e[0]=c*d,e[4]=_*a-x,e[8]=u*a+M,e[1]=c*h,e[5]=M*a+u,e[9]=x*a-_,e[2]=-a,e[6]=l*c,e[10]=o*c}else if(t.order==="YZX"){let u=o*c,x=o*a,_=l*c,M=l*a;e[0]=c*d,e[4]=M-u*h,e[8]=_*h+x,e[1]=h,e[5]=o*d,e[9]=-l*d,e[2]=-a*d,e[6]=x*h+_,e[10]=u-M*h}else if(t.order==="XZY"){let u=o*c,x=o*a,_=l*c,M=l*a;e[0]=c*d,e[4]=-h,e[8]=a*d,e[1]=u*h+M,e[5]=o*d,e[9]=x*h-_,e[2]=_*h-x,e[6]=l*d,e[10]=M*h+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Km,t,jm)}lookAt(t,e,i){let s=this.elements;return Pn.subVectors(t,e),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),ki.crossVectors(i,Pn),ki.lengthSq()===0&&(Math.abs(i.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),ki.crossVectors(i,Pn)),ki.normalize(),Do.crossVectors(Pn,ki),s[0]=ki.x,s[4]=Do.x,s[8]=Pn.x,s[1]=ki.y,s[5]=Do.y,s[9]=Pn.y,s[2]=ki.z,s[6]=Do.z,s[10]=Pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],l=i[4],c=i[8],a=i[12],d=i[1],h=i[5],u=i[9],x=i[13],_=i[2],M=i[6],g=i[10],m=i[14],C=i[3],N=i[7],w=i[11],A=i[15],T=s[0],U=s[4],v=s[8],b=s[12],R=s[1],F=s[5],Y=s[9],B=s[13],L=s[2],k=s[6],W=s[10],$=s[14],J=s[3],K=s[7],st=s[11],ot=s[15];return r[0]=o*T+l*R+c*L+a*J,r[4]=o*U+l*F+c*k+a*K,r[8]=o*v+l*Y+c*W+a*st,r[12]=o*b+l*B+c*$+a*ot,r[1]=d*T+h*R+u*L+x*J,r[5]=d*U+h*F+u*k+x*K,r[9]=d*v+h*Y+u*W+x*st,r[13]=d*b+h*B+u*$+x*ot,r[2]=_*T+M*R+g*L+m*J,r[6]=_*U+M*F+g*k+m*K,r[10]=_*v+M*Y+g*W+m*st,r[14]=_*b+M*B+g*$+m*ot,r[3]=C*T+N*R+w*L+A*J,r[7]=C*U+N*F+w*k+A*K,r[11]=C*v+N*Y+w*W+A*st,r[15]=C*b+N*B+w*$+A*ot,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],l=t[5],c=t[9],a=t[13],d=t[2],h=t[6],u=t[10],x=t[14],_=t[3],M=t[7],g=t[11],m=t[15],C=c*x-a*u,N=l*x-a*h,w=l*u-c*h,A=o*x-a*d,T=o*u-c*d,U=o*h-l*d;return e*(M*C-g*N+m*w)-i*(_*C-g*A+m*T)+s*(_*N-M*A+m*U)-r*(_*w-M*T+g*U)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],l=t[9],c=t[2],a=t[6],d=t[10];return e*(o*d-l*a)-i*(r*d-l*c)+s*(r*a-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],l=t[5],c=t[6],a=t[7],d=t[8],h=t[9],u=t[10],x=t[11],_=t[12],M=t[13],g=t[14],m=t[15],C=e*l-i*o,N=e*c-s*o,w=e*a-r*o,A=i*c-s*l,T=i*a-r*l,U=s*a-r*c,v=d*M-h*_,b=d*g-u*_,R=d*m-x*_,F=h*g-u*M,Y=h*m-x*M,B=u*m-x*g,L=C*B-N*Y+w*F+A*R-T*b+U*v;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/L;return t[0]=(l*B-c*Y+a*F)*k,t[1]=(s*Y-i*B-r*F)*k,t[2]=(M*U-g*T+m*A)*k,t[3]=(u*T-h*U-x*A)*k,t[4]=(c*R-o*B-a*b)*k,t[5]=(e*B-s*R+r*b)*k,t[6]=(g*w-_*U-m*N)*k,t[7]=(d*U-u*w+x*N)*k,t[8]=(o*Y-l*R+a*v)*k,t[9]=(i*R-e*Y-r*v)*k,t[10]=(_*T-M*w+m*C)*k,t[11]=(h*w-d*T-x*C)*k,t[12]=(l*b-o*F-c*v)*k,t[13]=(e*F-i*b+s*v)*k,t[14]=(M*N-_*A-g*C)*k,t[15]=(d*A-h*N+u*C)*k,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,l=t.y,c=t.z,a=r*o,d=r*l;return this.set(a*o+i,a*l-s*c,a*c+s*l,0,a*l+s*c,d*l+i,d*c-s*o,0,a*c-s*l,d*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,l=e._z,c=e._w,a=r+r,d=o+o,h=l+l,u=r*a,x=r*d,_=r*h,M=o*d,g=o*h,m=l*h,C=c*a,N=c*d,w=c*h,A=i.x,T=i.y,U=i.z;return s[0]=(1-(M+m))*A,s[1]=(x+w)*A,s[2]=(_-N)*A,s[3]=0,s[4]=(x-w)*T,s[5]=(1-(u+m))*T,s[6]=(g+C)*T,s[7]=0,s[8]=(_+N)*U,s[9]=(g-C)*U,s[10]=(1-(u+M))*U,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=Rs.set(s[0],s[1],s[2]).length(),l=Rs.set(s[4],s[5],s[6]).length(),c=Rs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),$n.copy(this);let a=1/o,d=1/l,h=1/c;return $n.elements[0]*=a,$n.elements[1]*=a,$n.elements[2]*=a,$n.elements[4]*=d,$n.elements[5]*=d,$n.elements[6]*=d,$n.elements[8]*=h,$n.elements[9]*=h,$n.elements[10]*=h,e.setFromRotationMatrix($n),i.x=o,i.y=l,i.z=c,this}makePerspective(t,e,i,s,r,o,l=jn,c=!1){let a=this.elements,d=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),x=(i+s)/(i-s),_,M;if(c)_=r/(o-r),M=o*r/(o-r);else if(l===jn)_=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(l===Ir)_=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return a[0]=d,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=h,a[9]=x,a[13]=0,a[2]=0,a[6]=0,a[10]=_,a[14]=M,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,i,s,r,o,l=jn,c=!1){let a=this.elements,d=2/(e-t),h=2/(i-s),u=-(e+t)/(e-t),x=-(i+s)/(i-s),_,M;if(c)_=1/(o-r),M=o/(o-r);else if(l===jn)_=-2/(o-r),M=-(o+r)/(o-r);else if(l===Ir)_=-1/(o-r),M=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return a[0]=d,a[4]=0,a[8]=0,a[12]=u,a[1]=0,a[5]=h,a[9]=0,a[13]=x,a[2]=0,a[6]=0,a[10]=_,a[14]=M,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};qa.prototype.isMatrix4=!0;var Ge=qa,Rs=new Z,$n=new Ge,Km=new Z(0,0,0),jm=new Z(1,1,1),ki=new Z,Do=new Z,Pn=new Z,df=new Ge,pf=new fi,qi=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],l=s[8],c=s[1],a=s[5],d=s[9],h=s[2],u=s[6],x=s[10];switch(e){case"XYZ":this._y=Math.asin(be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,x),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,a),this._z=0);break;case"YXZ":this._x=Math.asin(-be(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(l,x),this._z=Math.atan2(c,a)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(be(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,x),this._z=Math.atan2(-o,a)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,x),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,a));break;case"YZX":this._z=Math.asin(be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,a),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(l,x));break;case"XZY":this._z=Math.asin(-be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,a),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-d,x),this._y=0);break;default:te("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return df.makeRotationFromQuaternion(t),this.setFromRotationMatrix(df,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return pf.setFromEuler(this),this.setFromQuaternion(pf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qi.DEFAULT_ORDER="XYZ";var Nr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Qm=0,mf=new Z,Is=new fi,wi=new Ge,No=new Z,yr=new Z,t0=new Z,e0=new fi,gf=new Z(1,0,0),xf=new Z(0,1,0),_f=new Z(0,0,1),yf={type:"added"},n0={type:"removed"},Ps={type:"childadded",child:null},yc={type:"childremoved",child:null},Mn=class n extends ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qm++}),this.uuid=Xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new Z,e=new qi,i=new fi,s=new Z(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ge},normalMatrix:{value:new ce}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Is.setFromAxisAngle(t,e),this.quaternion.multiply(Is),this}rotateOnWorldAxis(t,e){return Is.setFromAxisAngle(t,e),this.quaternion.premultiply(Is),this}rotateX(t){return this.rotateOnAxis(gf,t)}rotateY(t){return this.rotateOnAxis(xf,t)}rotateZ(t){return this.rotateOnAxis(_f,t)}translateOnAxis(t,e){return mf.copy(t).applyQuaternion(this.quaternion),this.position.add(mf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(gf,t)}translateY(t){return this.translateOnAxis(xf,t)}translateZ(t){return this.translateOnAxis(_f,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?No.copy(t):No.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(yr,No,this.up):wi.lookAt(No,yr,this.up),this.quaternion.setFromRotationMatrix(wi),s&&(wi.extractRotation(s.matrixWorld),Is.setFromRotationMatrix(wi),this.quaternion.premultiply(Is.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(re("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(yf),Ps.child=t,this.dispatchEvent(Ps),Ps.child=null):re("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(n0),yc.child=t,this.dispatchEvent(yc),yc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wi.multiply(t.parent.matrixWorld)),t.applyMatrix4(wi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(yf),Ps.child=t,this.dispatchEvent(Ps),Ps.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,t,t0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,e0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,l=r.length;o<l;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let a=0,d=c.length;a<d;a++){let h=c[a];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,a=this.material.length;c<a;c++)l.push(r(t.materials,this.material[c]));s.material=l}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];s.animations.push(r(t.animations,c))}}if(e){let l=o(t.geometries),c=o(t.materials),a=o(t.textures),d=o(t.images),h=o(t.shapes),u=o(t.skeletons),x=o(t.animations),_=o(t.nodes);l.length>0&&(i.geometries=l),c.length>0&&(i.materials=c),a.length>0&&(i.textures=a),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),u.length>0&&(i.skeletons=u),x.length>0&&(i.animations=x),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(l){let c=[];for(let a in l){let d=l[a];delete d.metadata,c.push(d)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Mn.DEFAULT_UP=new Z(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Dn=class extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}},i0={type:"move"},Zs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,l=this._targetRay,c=this._grip,a=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(a&&t.hand){o=!0;for(let M of t.hand.values()){let g=e.getJointPose(M,i),m=this._getHandJoint(a,M);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let d=a.joints["index-finger-tip"],h=a.joints["thumb-tip"],u=d.position.distanceTo(h.position),x=.02,_=.005;a.inputState.pinching&&u>x+_?(a.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!a.inputState.pinching&&u<=x-_&&(a.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));l!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(i0)))}return l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),a!==null&&(a.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Dn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},yd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},Uo={h:0,s:0,l:0};function vc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var ae=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Se.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Se.workingColorSpace){return this.r=t,this.g=e,this.b=i,Se.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Se.workingColorSpace){if(t=Ym(t,1),e=be(e,0,1),i=be(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=vc(o,r,t+1/3),this.g=vc(o,r,t),this.b=vc(o,r,t-1/3)}return Se.colorSpaceToWorking(this,s),this}setStyle(t,e=rn){function i(r){r!==void 0&&parseFloat(r)<1&&te("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],l=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:te("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);te("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=rn){let i=yd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):te("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ri(t.r),this.g=Ri(t.g),this.b=Ri(t.b),this}copyLinearToSRGB(t){return this.r=Xs(t.r),this.g=Xs(t.g),this.b=Xs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=rn){return Se.workingToColorSpace(dn.copy(this),t),Math.round(be(dn.r*255,0,255))*65536+Math.round(be(dn.g*255,0,255))*256+Math.round(be(dn.b*255,0,255))}getHexString(t=rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Se.workingColorSpace){Se.workingToColorSpace(dn.copy(this),e);let i=dn.r,s=dn.g,r=dn.b,o=Math.max(i,s,r),l=Math.min(i,s,r),c,a,d=(l+o)/2;if(l===o)c=0,a=0;else{let h=o-l;switch(a=d<=.5?h/(o+l):h/(2-o-l),o){case i:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-i)/h+2;break;case r:c=(i-s)/h+4;break}c/=6}return t.h=c,t.s=a,t.l=d,t}getRGB(t,e=Se.workingColorSpace){return Se.workingToColorSpace(dn.copy(this),e),t.r=dn.r,t.g=dn.g,t.b=dn.b,t}getStyle(t=rn){Se.workingToColorSpace(dn.copy(this),t);let e=dn.r,i=dn.g,s=dn.b;return t!==rn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Vi),this.setHSL(Vi.h+t,Vi.s+e,Vi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Vi),t.getHSL(Uo);let i=pc(Vi.h,Uo.h,e),s=pc(Vi.s,Uo.s,e),r=pc(Vi.l,Uo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},dn=new ae;ae.NAMES=yd;var Ur=class extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qi,this.environmentIntensity=1,this.environmentRotation=new qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Zn=new Z,Ai=new Z,Mc=new Z,Ei=new Z,Ls=new Z,Ds=new Z,vf=new Z,Sc=new Z,bc=new Z,wc=new Z,Ac=new Xe,Ec=new Xe,Tc=new Xe,li=class n{constructor(t=new Z,e=new Z,i=new Z){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Zn.subVectors(t,e),s.cross(Zn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Zn.subVectors(s,e),Ai.subVectors(i,e),Mc.subVectors(t,e);let o=Zn.dot(Zn),l=Zn.dot(Ai),c=Zn.dot(Mc),a=Ai.dot(Ai),d=Ai.dot(Mc),h=o*a-l*l;if(h===0)return r.set(0,0,0),null;let u=1/h,x=(a*c-l*d)*u,_=(o*d-l*c)*u;return r.set(1-x-_,_,x)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(t,e,i,s,r,o,l,c){return this.getBarycoord(t,e,i,s,Ei)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ei.x),c.addScaledVector(o,Ei.y),c.addScaledVector(l,Ei.z),c)}static getInterpolatedAttribute(t,e,i,s,r,o){return Ac.setScalar(0),Ec.setScalar(0),Tc.setScalar(0),Ac.fromBufferAttribute(t,e),Ec.fromBufferAttribute(t,i),Tc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ac,r.x),o.addScaledVector(Ec,r.y),o.addScaledVector(Tc,r.z),o}static isFrontFacing(t,e,i,s){return Zn.subVectors(i,e),Ai.subVectors(t,e),Zn.cross(Ai).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Zn.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),Zn.cross(Ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,l;Ls.subVectors(s,i),Ds.subVectors(r,i),Sc.subVectors(t,i);let c=Ls.dot(Sc),a=Ds.dot(Sc);if(c<=0&&a<=0)return e.copy(i);bc.subVectors(t,s);let d=Ls.dot(bc),h=Ds.dot(bc);if(d>=0&&h<=d)return e.copy(s);let u=c*h-d*a;if(u<=0&&c>=0&&d<=0)return o=c/(c-d),e.copy(i).addScaledVector(Ls,o);wc.subVectors(t,r);let x=Ls.dot(wc),_=Ds.dot(wc);if(_>=0&&x<=_)return e.copy(r);let M=x*a-c*_;if(M<=0&&a>=0&&_<=0)return l=a/(a-_),e.copy(i).addScaledVector(Ds,l);let g=d*_-x*h;if(g<=0&&h-d>=0&&x-_>=0)return vf.subVectors(r,s),l=(h-d)/(h-d+(x-_)),e.copy(s).addScaledVector(vf,l);let m=1/(g+M+u);return o=M*m,l=u*m,e.copy(i).addScaledVector(Ls,o).addScaledVector(Ds,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Yi=class{constructor(t=new Z(1/0,1/0,1/0),e=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Jn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Jn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Jn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,l=r.count;o<l;o++)t.isMesh===!0?t.getVertexPosition(o,Jn):Jn.fromBufferAttribute(r,o),Jn.applyMatrix4(t.matrixWorld),this.expandByPoint(Jn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fo.copy(i.boundingBox)),Fo.applyMatrix4(t.matrixWorld),this.union(Fo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Jn),Jn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vr),Oo.subVectors(this.max,vr),Ns.subVectors(t.a,vr),Us.subVectors(t.b,vr),Fs.subVectors(t.c,vr),Gi.subVectors(Us,Ns),Hi.subVectors(Fs,Us),cs.subVectors(Ns,Fs);let e=[0,-Gi.z,Gi.y,0,-Hi.z,Hi.y,0,-cs.z,cs.y,Gi.z,0,-Gi.x,Hi.z,0,-Hi.x,cs.z,0,-cs.x,-Gi.y,Gi.x,0,-Hi.y,Hi.x,0,-cs.y,cs.x,0];return!Cc(e,Ns,Us,Fs,Oo)||(e=[1,0,0,0,1,0,0,0,1],!Cc(e,Ns,Us,Fs,Oo))?!1:(Bo.crossVectors(Gi,Hi),e=[Bo.x,Bo.y,Bo.z],Cc(e,Ns,Us,Fs,Oo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Jn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Jn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ti=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Jn=new Z,Fo=new Yi,Ns=new Z,Us=new Z,Fs=new Z,Gi=new Z,Hi=new Z,cs=new Z,vr=new Z,Oo=new Z,Bo=new Z,hs=new Z;function Cc(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){hs.fromArray(n,r);let l=s.x*Math.abs(hs.x)+s.y*Math.abs(hs.y)+s.z*Math.abs(hs.z),c=t.dot(hs),a=e.dot(hs),d=i.dot(hs);if(Math.max(-Math.max(c,a,d),Math.min(c,a,d))>l)return!1}return!0}var Je=new Z,zo=new xe,s0=0,Ye=class extends ui{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:s0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ph,this.updateRanges=[],this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)zo.fromBufferAttribute(this,e),zo.applyMatrix3(t),this.setXY(e,zo.x,zo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix3(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix4(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Je.fromBufferAttribute(this,e),Je.applyNormalMatrix(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Je.fromBufferAttribute(this,e),Je.transformDirection(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ai(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Fe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ai(e,this.array)),e}setX(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ai(e,this.array)),e}setY(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ai(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ai(e,this.array)),e}setW(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),i=Fe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),i=Fe(i,this.array),s=Fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),i=Fe(i,this.array),s=Fe(s,this.array),r=Fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Fr=class extends Ye{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Or=class extends Ye{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var vn=class extends Ye{constructor(t,e,i){super(new Float32Array(t),e,i)}},r0=new Yi,Mr=new Z,Rc=new Z,$i=class{constructor(t=new Z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):r0.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Mr.subVectors(t,this.center);let e=Mr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Mr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Rc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Mr.copy(t.center).add(Rc)),this.expandByPoint(Mr.copy(t.center).sub(Rc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},o0=0,Vn=new Ge,Ic=new Mn,Os=new Z,Ln=new Yi,Sr=new Yi,sn=new Z,Qe=class n extends ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=Xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xm(t)?Or:Fr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ce().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Vn.makeRotationFromQuaternion(t),this.applyMatrix4(Vn),this}rotateX(t){return Vn.makeRotationX(t),this.applyMatrix4(Vn),this}rotateY(t){return Vn.makeRotationY(t),this.applyMatrix4(Vn),this}rotateZ(t){return Vn.makeRotationZ(t),this.applyMatrix4(Vn),this}translate(t,e,i){return Vn.makeTranslation(t,e,i),this.applyMatrix4(Vn),this}scale(t,e,i){return Vn.makeScale(t,e,i),this.applyMatrix4(Vn),this}lookAt(t){return Ic.lookAt(t),Ic.updateMatrix(),this.applyMatrix4(Ic.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new vn(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&te("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){re("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Ln.setFromBufferAttribute(r),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&re('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $i);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){re("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){let i=this.boundingSphere.center;if(Ln.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let l=e[r];Sr.setFromBufferAttribute(l),this.morphTargetsRelative?(sn.addVectors(Ln.min,Sr.min),Ln.expandByPoint(sn),sn.addVectors(Ln.max,Sr.max),Ln.expandByPoint(sn)):(Ln.expandByPoint(Sr.min),Ln.expandByPoint(Sr.max))}Ln.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)sn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(sn));if(e)for(let r=0,o=e.length;r<o;r++){let l=e[r],c=this.morphTargetsRelative;for(let a=0,d=l.count;a<d;a++)sn.fromBufferAttribute(l,a),c&&(Os.fromBufferAttribute(t,a),sn.add(Os)),s=Math.max(s,i.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&re('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){re("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Ye(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let l=[],c=[];for(let v=0;v<i.count;v++)l[v]=new Z,c[v]=new Z;let a=new Z,d=new Z,h=new Z,u=new xe,x=new xe,_=new xe,M=new Z,g=new Z;function m(v,b,R){a.fromBufferAttribute(i,v),d.fromBufferAttribute(i,b),h.fromBufferAttribute(i,R),u.fromBufferAttribute(r,v),x.fromBufferAttribute(r,b),_.fromBufferAttribute(r,R),d.sub(a),h.sub(a),x.sub(u),_.sub(u);let F=1/(x.x*_.y-_.x*x.y);isFinite(F)&&(M.copy(d).multiplyScalar(_.y).addScaledVector(h,-x.y).multiplyScalar(F),g.copy(h).multiplyScalar(x.x).addScaledVector(d,-_.x).multiplyScalar(F),l[v].add(M),l[b].add(M),l[R].add(M),c[v].add(g),c[b].add(g),c[R].add(g))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let v=0,b=C.length;v<b;++v){let R=C[v],F=R.start,Y=R.count;for(let B=F,L=F+Y;B<L;B+=3)m(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let N=new Z,w=new Z,A=new Z,T=new Z;function U(v){A.fromBufferAttribute(s,v),T.copy(A);let b=l[v];N.copy(b),N.sub(A.multiplyScalar(A.dot(b))).normalize(),w.crossVectors(T,b);let F=w.dot(c[v])<0?-1:1;o.setXYZW(v,N.x,N.y,N.z,F)}for(let v=0,b=C.length;v<b;++v){let R=C[v],F=R.start,Y=R.count;for(let B=F,L=F+Y;B<L;B+=3)U(t.getX(B+0)),U(t.getX(B+1)),U(t.getX(B+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Ye(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,x=i.count;u<x;u++)i.setXYZ(u,0,0,0);let s=new Z,r=new Z,o=new Z,l=new Z,c=new Z,a=new Z,d=new Z,h=new Z;if(t)for(let u=0,x=t.count;u<x;u+=3){let _=t.getX(u+0),M=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,M),o.fromBufferAttribute(e,g),d.subVectors(o,r),h.subVectors(s,r),d.cross(h),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,M),a.fromBufferAttribute(i,g),l.add(d),c.add(d),a.add(d),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(M,c.x,c.y,c.z),i.setXYZ(g,a.x,a.y,a.z)}else for(let u=0,x=e.count;u<x;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),d.subVectors(o,r),h.subVectors(s,r),d.cross(h),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)sn.fromBufferAttribute(t,e),sn.normalize(),t.setXYZ(e,sn.x,sn.y,sn.z)}toNonIndexed(){function t(l,c){let a=l.array,d=l.itemSize,h=l.normalized,u=new a.constructor(c.length*d),x=0,_=0;for(let M=0,g=c.length;M<g;M++){l.isInterleavedBufferAttribute?x=c[M]*l.data.stride+l.offset:x=c[M]*d;for(let m=0;m<d;m++)u[_++]=a[x++]}return new Ye(u,d,h)}if(this.index===null)return te("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let l in s){let c=s[l],a=t(c,i);e.setAttribute(l,a)}let r=this.morphAttributes;for(let l in r){let c=[],a=r[l];for(let d=0,h=a.length;d<h;d++){let u=a[d],x=t(u,i);c.push(x)}e.morphAttributes[l]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let l=0,c=o.length;l<c;l++){let a=o[l];e.addGroup(a.start,a.count,a.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let a in c)c[a]!==void 0&&(t[a]=c[a]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let a=i[c];t.data.attributes[c]=a.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let a=this.morphAttributes[c],d=[];for(let h=0,u=a.length;h<u;h++){let x=a[h];d.push(x.toJSON(t.data))}d.length>0&&(s[c]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let l=this.boundingSphere;return l!==null&&(t.data.boundingSphere=l.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let a in s){let d=s[a];this.setAttribute(a,d.clone(e))}let r=t.morphAttributes;for(let a in r){let d=[],h=r[a];for(let u=0,x=h.length;u<x;u++)d.push(h[u].clone(e));this.morphAttributes[a]=d}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let a=0,d=o.length;a<d;a++){let h=o[a];this.addGroup(h.start,h.count,h.materialIndex)}let l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Aa=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ph,this.updateRanges=[],this.version=0,this.uuid=Xi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},yn=new Z,Br=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)yn.fromBufferAttribute(this,e),yn.applyMatrix4(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)yn.fromBufferAttribute(this,e),yn.applyNormalMatrix(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)yn.fromBufferAttribute(this,e),yn.transformDirection(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=ai(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Fe(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Fe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ai(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ai(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ai(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ai(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Fe(e,this.array),i=Fe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Fe(e,this.array),i=Fe(i,this.array),s=Fe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Fe(e,this.array),i=Fe(i,this.array),s=Fe(s,this.array),r=Fe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Lr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ye(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Lr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Pc=new Z,a0=new Z,l0=new ce,Kn=class{constructor(t=new Z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Pc.subVectors(i,e).cross(a0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(Pc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||l0.getNormalMatrix(t),s=this.coplanarPoint(Pc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},c0=0,di=class extends ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=Xi(),this.name="",this.type="Material",this.blending=Qs,this.side=ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zc,this.blendDst=Jc,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ae(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ld,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ca,this.stencilZFail=ca,this.stencilZPass=ca,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){te(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){te(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let l in r){let c=r[l];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ae().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Kn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new xe().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new xe().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Zi=class extends di{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ae(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Bs,br=new Z,zs=new Z,ks=new Z,Vs=new xe,wr=new xe,vd=new Ge,ko=new Z,Ar=new Z,Vo=new Z,Mf=new xe,Lc=new xe,Sf=new xe,ps=class extends Mn{constructor(t=new Zi){if(super(),this.isSprite=!0,this.type="Sprite",Bs===void 0){Bs=new Qe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Aa(e,5);Bs.setIndex([0,1,2,0,2,3]),Bs.setAttribute("position",new Br(i,3,0,!1)),Bs.setAttribute("uv",new Br(i,2,3,!1))}this.geometry=Bs,this.material=t,this.center=new xe(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&re('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),zs.setFromMatrixScale(this.matrixWorld),vd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ks.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&zs.multiplyScalar(-ks.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Go(ko.set(-.5,-.5,0),ks,o,zs,s,r),Go(Ar.set(.5,-.5,0),ks,o,zs,s,r),Go(Vo.set(.5,.5,0),ks,o,zs,s,r),Mf.set(0,0),Lc.set(1,0),Sf.set(1,1);let l=t.ray.intersectTriangle(ko,Ar,Vo,!1,br);if(l===null&&(Go(Ar.set(-.5,.5,0),ks,o,zs,s,r),Lc.set(0,1),l=t.ray.intersectTriangle(ko,Vo,Ar,!1,br),l===null))return;let c=t.ray.origin.distanceTo(br);c<t.near||c>t.far||e.push({distance:c,point:br.clone(),uv:li.getInterpolation(br,ko,Ar,Vo,Mf,Lc,Sf,new xe),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Go(n,t,e,i,s,r){Vs.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(wr.x=r*Vs.x-s*Vs.y,wr.y=s*Vs.x+r*Vs.y):wr.copy(Vs),n.copy(t),n.x+=wr.x,n.y+=wr.y,n.applyMatrix4(vd)}var Ci=new Z,Dc=new Z,Ho=new Z,Wo=new Z,Js=class{constructor(t=new Z,e=new Z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ci)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ci.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ci.copy(this.origin).addScaledVector(this.direction,e),Ci.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Dc.copy(t).add(e).multiplyScalar(.5),Ho.copy(e).sub(t).normalize(),Wo.copy(this.origin).sub(Dc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ho),l=Wo.dot(this.direction),c=-Wo.dot(Ho),a=Wo.lengthSq(),d=Math.abs(1-o*o),h,u,x,_;if(d>0)if(h=o*c-l,u=o*l-c,_=r*d,h>=0)if(u>=-_)if(u<=_){let M=1/d;h*=M,u*=M,x=h*(h+o*u+2*l)+u*(o*h+u+2*c)+a}else u=r,h=Math.max(0,-(o*u+l)),x=-h*h+u*(u+2*c)+a;else u=-r,h=Math.max(0,-(o*u+l)),x=-h*h+u*(u+2*c)+a;else u<=-_?(h=Math.max(0,-(-o*r+l)),u=h>0?-r:Math.min(Math.max(-r,-c),r),x=-h*h+u*(u+2*c)+a):u<=_?(h=0,u=Math.min(Math.max(-r,-c),r),x=u*(u+2*c)+a):(h=Math.max(0,-(o*r+l)),u=h>0?r:Math.min(Math.max(-r,-c),r),x=-h*h+u*(u+2*c)+a);else u=o>0?-r:r,h=Math.max(0,-(o*u+l)),x=-h*h+u*(u+2*c)+a;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Dc).addScaledVector(Ho,u),x}intersectSphere(t,e){if(t.radius<0)return null;Ci.subVectors(t.center,this.origin);let i=Ci.dot(this.direction),s=Ci.dot(Ci)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),l=i-o,c=i+o;return c<0?null:l<0?this.at(c,e):this.at(l,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,l,c,a=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return a>=0?(i=(t.min.x-u.x)*a,s=(t.max.x-u.x)*a):(i=(t.max.x-u.x)*a,s=(t.min.x-u.x)*a),d>=0?(r=(t.min.y-u.y)*d,o=(t.max.y-u.y)*d):(r=(t.max.y-u.y)*d,o=(t.min.y-u.y)*d),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(l=(t.min.z-u.z)*h,c=(t.max.z-u.z)*h):(l=(t.max.z-u.z)*h,c=(t.min.z-u.z)*h),i>c||l>s)||((l>i||i!==i)&&(i=l),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Ci)!==null}intersectTriangle(t,e,i,s,r){let o=this.origin,l=this.direction,c=l.x,a=l.y,d=l.z,h=t.x-o.x,u=t.y-o.y,x=t.z-o.z,_=e.x-o.x,M=e.y-o.y,g=e.z-o.z,m=i.x-o.x,C=i.y-o.y,N=i.z-o.z,w=Math.abs(c),A=Math.abs(a),T=Math.abs(d),U,v,b,R,F,Y,B,L,k,W,$,J;if(w>=A&&w>=T?(b=c,Y=h,k=_,J=m,c>=0?(U=a,v=d,R=u,F=x,B=M,L=g,W=C,$=N):(U=d,v=a,R=x,F=u,B=g,L=M,W=N,$=C)):A>=T?(b=a,Y=u,k=M,J=C,a>=0?(U=d,v=c,R=x,F=h,B=g,L=_,W=N,$=m):(U=c,v=d,R=h,F=x,B=_,L=g,W=m,$=N)):(b=d,Y=x,k=g,J=N,d>=0?(U=c,v=a,R=h,F=u,B=_,L=M,W=m,$=C):(U=a,v=c,R=u,F=h,B=M,L=_,W=C,$=m)),b===0)return null;let K=U/b,st=v/b,ot=1/b,Tt=R-K*Y,j=F-st*Y,At=B-K*k,vt=L-st*k,_t=W-K*J,q=$-st*J,nt=_t*vt-q*At,yt=Tt*q-j*_t,Ot=At*j-vt*Tt;if(s){if(nt<0||yt<0||Ot<0)return null}else if((nt<0||yt<0||Ot<0)&&(nt>0||yt>0||Ot>0))return null;let xt=nt+yt+Ot;if(xt===0)return null;let Bt=ot*(nt*Y+yt*k+Ot*J);return(xt>0?Bt<0:Bt>0)?null:this.at(Bt/xt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Gn=class extends di{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.combine=Kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},bf=new Ge,us=new Js,Xo=new $i,wf=new Z,qo=new Z,Yo=new Z,$o=new Z,Nc=new Z,Zo=new Z,Af=new Z,Jo=new Z,ke=class extends Mn{constructor(t=new Qe,e=new Gn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let l=this.morphTargetInfluences;if(r&&l){Zo.set(0,0,0);for(let c=0,a=r.length;c<a;c++){let d=l[c],h=r[c];d!==0&&(Nc.fromBufferAttribute(h,t),o?Zo.addScaledVector(Nc,d):Zo.addScaledVector(Nc.sub(e),d))}e.add(Zo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xo.copy(i.boundingSphere),Xo.applyMatrix4(r),us.copy(t.ray).recast(t.near),!(Xo.containsPoint(us.origin)===!1&&(us.intersectSphere(Xo,wf)===null||us.origin.distanceToSquared(wf)>(t.far-t.near)**2))&&(bf.copy(r).invert(),us.copy(t.ray).applyMatrix4(bf),!(i.boundingBox!==null&&us.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,us)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,l=r.index,c=r.attributes.position,a=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,u=r.groups,x=r.drawRange;if(l!==null)if(Array.isArray(o))for(let _=0,M=u.length;_<M;_++){let g=u[_],m=o[g.materialIndex],C=Math.max(g.start,x.start),N=Math.min(l.count,Math.min(g.start+g.count,x.start+x.count));for(let w=C,A=N;w<A;w+=3){let T=l.getX(w),U=l.getX(w+1),v=l.getX(w+2);s=Ko(this,m,t,i,a,d,h,T,U,v),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let _=Math.max(0,x.start),M=Math.min(l.count,x.start+x.count);for(let g=_,m=M;g<m;g+=3){let C=l.getX(g),N=l.getX(g+1),w=l.getX(g+2);s=Ko(this,o,t,i,a,d,h,C,N,w),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,M=u.length;_<M;_++){let g=u[_],m=o[g.materialIndex],C=Math.max(g.start,x.start),N=Math.min(c.count,Math.min(g.start+g.count,x.start+x.count));for(let w=C,A=N;w<A;w+=3){let T=w,U=w+1,v=w+2;s=Ko(this,m,t,i,a,d,h,T,U,v),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let _=Math.max(0,x.start),M=Math.min(c.count,x.start+x.count);for(let g=_,m=M;g<m;g+=3){let C=g,N=g+1,w=g+2;s=Ko(this,o,t,i,a,d,h,C,N,w),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function h0(n,t,e,i,s,r,o,l){let c;if(t.side===Sn?c=i.intersectTriangle(o,r,s,!0,l):c=i.intersectTriangle(s,r,o,t.side===ts,l),c===null)return null;Jo.copy(l),Jo.applyMatrix4(n.matrixWorld);let a=e.ray.origin.distanceTo(Jo);return a<e.near||a>e.far?null:{distance:a,point:Jo.clone(),object:n}}function Ko(n,t,e,i,s,r,o,l,c,a){n.getVertexPosition(l,qo),n.getVertexPosition(c,Yo),n.getVertexPosition(a,$o);let d=h0(n,t,e,i,qo,Yo,$o,Af);if(d){let h=new Z;li.getBarycoord(Af,qo,Yo,$o,h),s&&(d.uv=li.getInterpolatedAttribute(s,l,c,a,h,new xe)),r&&(d.uv1=li.getInterpolatedAttribute(r,l,c,a,h,new xe)),o&&(d.normal=li.getInterpolatedAttribute(o,l,c,a,h,new Z),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));let u={a:l,b:c,c:a,normal:new Z,materialIndex:0};li.getNormal(qo,Yo,$o,u.normal),d.face=u,d.barycoord=h}return d}var Ea=class extends hn{constructor(t=null,e=1,i=1,s,r,o,l,c,a=on,d=on,h,u){super(null,o,l,c,a,d,s,r,h,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fs=new $i,u0=new xe(.5,.5),jo=new Z,zr=class{constructor(t=new Kn,e=new Kn,i=new Kn,s=new Kn,r=new Kn,o=new Kn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(i),l[3].copy(s),l[4].copy(r),l[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=jn,i=!1){let s=this.planes,r=t.elements,o=r[0],l=r[1],c=r[2],a=r[3],d=r[4],h=r[5],u=r[6],x=r[7],_=r[8],M=r[9],g=r[10],m=r[11],C=r[12],N=r[13],w=r[14],A=r[15];if(s[0].setComponents(a-o,x-d,m-_,A-C).normalize(),s[1].setComponents(a+o,x+d,m+_,A+C).normalize(),s[2].setComponents(a+l,x+h,m+M,A+N).normalize(),s[3].setComponents(a-l,x-h,m-M,A-N).normalize(),i)s[4].setComponents(c,u,g,w).normalize(),s[5].setComponents(a-c,x-u,m-g,A-w).normalize();else if(s[4].setComponents(a-c,x-u,m-g,A-w).normalize(),e===jn)s[5].setComponents(a+c,x+u,m+g,A+w).normalize();else if(e===Ir)s[5].setComponents(c,u,g,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(t){fs.center.set(0,0,0);let e=u0.distanceTo(t.center);return fs.radius=.7071067811865476+e,fs.applyMatrix4(t.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(jo.x=s.normal.x>0?t.max.x:t.min.x,jo.y=s.normal.y>0?t.max.y:t.min.y,jo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(jo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ms=class extends di{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ta=new Z,Ca=new Z,Ef=new Ge,Er=new Js,Qo=new $i,Uc=new Z,Tf=new Z,Ra=class extends Mn{constructor(t=new Qe,e=new ms){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Ta.fromBufferAttribute(e,s-1),Ca.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Ta.distanceTo(Ca);t.setAttribute("lineDistance",new vn(i,1))}else te("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Qo.copy(i.boundingSphere),Qo.applyMatrix4(s),Qo.radius+=r,t.ray.intersectsSphere(Qo)===!1)return;Ef.copy(s).invert(),Er.copy(t.ray).applyMatrix4(Ef);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,a=this.isLineSegments?2:1,d=i.index,u=i.attributes.position;if(d!==null){let x=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let M=x,g=_-1;M<g;M+=a){let m=d.getX(M),C=d.getX(M+1),N=ta(this,t,Er,c,m,C,M);N&&e.push(N)}if(this.isLineLoop){let M=d.getX(_-1),g=d.getX(x),m=ta(this,t,Er,c,M,g,_-1);m&&e.push(m)}}else{let x=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let M=x,g=_-1;M<g;M+=a){let m=ta(this,t,Er,c,M,M+1,M);m&&e.push(m)}if(this.isLineLoop){let M=ta(this,t,Er,c,_-1,x,_-1);M&&e.push(M)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function ta(n,t,e,i,s,r,o){let l=n.geometry.attributes.position;if(Ta.fromBufferAttribute(l,s),Ca.fromBufferAttribute(l,r),e.distanceSqToSegment(Ta,Ca,Uc,Tf)>i)return;Uc.applyMatrix4(n.matrixWorld);let a=t.ray.origin.distanceTo(Uc);if(!(a<t.near||a>t.far))return{distance:a,point:Tf.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Cf=new Z,Rf=new Z,gs=class extends Ra{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Cf.fromBufferAttribute(e,s),Rf.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Cf.distanceTo(Rf);t.setAttribute("lineDistance",new vn(i,1))}else te("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ks=class extends di{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},If=new Ge,Gc=new Js,ea=new $i,na=new Z,kr=class extends Mn{constructor(t=new Qe,e=new Ks){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ea.copy(i.boundingSphere),ea.applyMatrix4(s),ea.radius+=r,t.ray.intersectsSphere(ea)===!1)return;If.copy(s).invert(),Gc.copy(t.ray).applyMatrix4(If);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,a=i.index,h=i.attributes.position;if(a!==null){let u=Math.max(0,o.start),x=Math.min(a.count,o.start+o.count);for(let _=u,M=x;_<M;_++){let g=a.getX(_);na.fromBufferAttribute(h,g),Pf(na,g,c,s,t,e,this)}}else{let u=Math.max(0,o.start),x=Math.min(h.count,o.start+o.count);for(let _=u,M=x;_<M;_++)na.fromBufferAttribute(h,_),Pf(na,_,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function Pf(n,t,e,i,s,r,o){let l=Gc.distanceSqToPoint(n);if(l<e){let c=new Z;Gc.closestPointToPoint(n,c),c.applyMatrix4(i);let a=s.ray.origin.distanceTo(c);if(a<s.near||a>s.far)return;r.push({distance:a,distanceToRay:Math.sqrt(l),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Vr=class extends hn{constructor(t=[],e=es,i,s,r,o,l,c,a,d){super(t,e,i,s,r,o,l,c,a,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},pi=class extends hn{constructor(t,e,i,s,r,o,l,c,a){super(t,e,i,s,r,o,l,c,a),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ji=class extends hn{constructor(t,e,i=ti,s,r,o,l=on,c=on,a,d=hi,h=1){if(d!==hi&&d!==is)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:h};super(u,s,r,o,l,c,d,i,a),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new $s(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ia=class extends Ji{constructor(t,e=ti,i=es,s,r,o=on,l=on,c,a=hi){let d={width:t,height:t,depth:1},h=[d,d,d,d,d,d];super(t,t,e,i,s,r,o,l,c,a),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Gr=class extends hn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},un=class n extends Qe{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let l=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],a=[],d=[],h=[],u=0,x=0;_("z","y","x",-1,-1,i,e,t,o,r,0),_("z","y","x",1,-1,i,e,-t,o,r,1),_("x","z","y",1,1,t,i,e,s,o,2),_("x","z","y",1,-1,t,i,-e,s,o,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new vn(a,3)),this.setAttribute("normal",new vn(d,3)),this.setAttribute("uv",new vn(h,2));function _(M,g,m,C,N,w,A,T,U,v,b){let R=w/U,F=A/v,Y=w/2,B=A/2,L=T/2,k=U+1,W=v+1,$=0,J=0,K=new Z;for(let st=0;st<W;st++){let ot=st*F-B;for(let Tt=0;Tt<k;Tt++){let j=Tt*R-Y;K[M]=j*C,K[g]=ot*N,K[m]=L,a.push(K.x,K.y,K.z),K[M]=0,K[g]=0,K[m]=T>0?1:-1,d.push(K.x,K.y,K.z),h.push(Tt/U),h.push(1-st/v),$+=1}}for(let st=0;st<v;st++)for(let ot=0;ot<U;ot++){let Tt=u+ot+k*st,j=u+ot+k*(st+1),At=u+(ot+1)+k*(st+1),vt=u+(ot+1)+k*st;c.push(Tt,j,vt),c.push(j,At,vt),J+=6}l.addGroup(x,J,b),x+=J,u+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ia=new Z,sa=new Z,Fc=new Z,ra=new li,Hr=class extends Qe{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(ha*e),o=t.getIndex(),l=t.getAttribute("position"),c=o?o.count:l.count,a=[0,0,0],d=["a","b","c"],h=new Array(3),u={},x=[];for(let _=0;_<c;_+=3){o?(a[0]=o.getX(_),a[1]=o.getX(_+1),a[2]=o.getX(_+2)):(a[0]=_,a[1]=_+1,a[2]=_+2);let{a:M,b:g,c:m}=ra;if(M.fromBufferAttribute(l,a[0]),g.fromBufferAttribute(l,a[1]),m.fromBufferAttribute(l,a[2]),ra.getNormal(Fc),h[0]=`${Math.round(M.x*s)},${Math.round(M.y*s)},${Math.round(M.z*s)}`,h[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,h[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let C=0;C<3;C++){let N=(C+1)%3,w=h[C],A=h[N],T=ra[d[C]],U=ra[d[N]],v=`${w}_${A}`,b=`${A}_${w}`;b in u&&u[b]?(Fc.dot(u[b].normal)<=r&&(x.push(T.x,T.y,T.z),x.push(U.x,U.y,U.z)),u[b]=null):v in u||(u[v]={index0:a[C],index1:a[N],normal:Fc.clone()})}}for(let _ in u)if(u[_]){let{index0:M,index1:g}=u[_];ia.fromBufferAttribute(l,M),sa.fromBufferAttribute(l,g),x.push(ia.x,ia.y,ia.z),x.push(sa.x,sa.y,sa.z)}this.setAttribute("position",new vn(x,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var Wr=class n extends Qe{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,l=Math.floor(i),c=Math.floor(s),a=l+1,d=c+1,h=t/l,u=e/c,x=[],_=[],M=[],g=[];for(let m=0;m<d;m++){let C=m*u-o;for(let N=0;N<a;N++){let w=N*h-r;_.push(w,-C,0),M.push(0,0,1),g.push(N/l),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let C=0;C<l;C++){let N=C+a*m,w=C+a*(m+1),A=C+1+a*(m+1),T=C+1+a*m;x.push(N,w,T),x.push(w,A,T)}this.setIndex(x),this.setAttribute("position",new vn(_,3)),this.setAttribute("normal",new vn(M,3)),this.setAttribute("uv",new vn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};function ys(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Lf(s))s.isRenderTargetTexture?(te("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Lf(s[0])){let r=[];for(let o=0,l=s.length;o<l;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function gn(n){let t={};for(let e=0;e<n.length;e++){let i=ys(n[e]);for(let s in i)t[s]=i[s]}return t}function Lf(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function f0(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function gh(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Se.workingColorSpace}var Md={clone:ys,merge:gn},d0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,p0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mn=class extends di{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=d0,this.fragmentShader=p0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ys(t.uniforms),this.uniformsGroups=f0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new ae().setHex(s.value);break;case"v2":this.uniforms[i].value=new xe().fromArray(s.value);break;case"v3":this.uniforms[i].value=new Z().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Xe().fromArray(s.value);break;case"m3":this.uniforms[i].value=new ce().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Ge().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Pa=class extends mn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var La=class extends di{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=od,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Da=class extends di{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Gs(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Oc(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Ki=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let l=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===l)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let l=e[1];t<l&&(i=2,r=l);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let l=i+o>>>1;t<e[l]?o=l:i=l+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Na=class extends Ki{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zc,endingEnd:zc}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,l=s[r],c=s[o];if(l===void 0)switch(this.getSettings_().endingStart){case kc:r=t,l=2*e-i;break;case Vc:r=s.length-2,l=e+s[r]-s[r+1];break;default:r=t,l=i}if(c===void 0)switch(this.getSettings_().endingEnd){case kc:o=t,c=2*i-e;break;case Vc:o=1,c=i+s[1]-s[0];break;default:o=t-1,c=e}let a=(i-e)*.5,d=this.valueSize;this._weightPrev=a/(e-l),this._weightNext=a/(c-i),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=t*l,a=c-l,d=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,x=this._weightNext,_=(i-e)/(s-e),M=_*_,g=M*_,m=-u*g+2*u*M-u*_,C=(1+u)*g+(-1.5-2*u)*M+(-.5+u)*_+1,N=(-1-x)*g+(1.5+x)*M+.5*_,w=x*g-x*M;for(let A=0;A!==l;++A)r[A]=m*o[d+A]+C*o[a+A]+N*o[c+A]+w*o[h+A];return r}},Ua=class extends Ki{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=t*l,a=c-l,d=(i-e)/(s-e),h=1-d;for(let u=0;u!==l;++u)r[u]=o[a+u]*h+o[c+u]*d;return r}},Fa=class extends Ki{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Oa=class extends Ki{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=t*l,a=c-l,d=this.inTangents,h=this.outTangents;if(!d||!h){let _=(i-e)/(s-e),M=1-_;for(let g=0;g!==l;++g)r[g]=o[a+g]*M+o[c+g]*_;return r}let u=l*2,x=t-1;for(let _=0;_!==l;++_){let M=o[a+_],g=o[c+_],m=x*u+_*2,C=h[m],N=h[m+1],w=t*u+_*2,A=d[w],T=d[w+1],U=g0(i,e,C,A,s);r[_]=Sd(U,M,N,T,g)}return r}};function Sd(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function m0(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function g0(n,t,e,i,s){let r=(n-t)/(s-t);for(let o=0;o<8;o++){let l=Sd(r,t,e,i,s)-n;if(Math.abs(l)<1e-10)break;let c=m0(r,t,e,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-l/c))}return r}var Nn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Gs(e,this.TimeBufferType),this.values=Gs(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Gs(t.times,Array),values:Gs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Oc(t.settings)&&(i.settings={inTangents:Gs(t.settings.inTangents,Array),outTangents:Gs(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Fa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ua(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Na(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Oa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Tr:e=this.InterpolantFactoryMethodDiscrete;break;case va:e=this.InterpolantFactoryMethodLinear;break;case la:e=this.InterpolantFactoryMethodSmooth;break;case Bc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return te("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Tr;case this.InterpolantFactoryMethodLinear:return va;case this.InterpolantFactoryMethodSmooth:return la;case this.InterpolantFactoryMethodBezier:return Bc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;Oc(this.settings)&&(Df(this.settings.inTangents,t),Df(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let l=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*l,o*l)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(re("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(re("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let l=0;l!==r;l++){let c=i[l];if(typeof c=="number"&&isNaN(c)){re("KeyframeTrack: Time is not a valid number.",this,l,c),t=!1;break}if(o!==null&&o>c){re("KeyframeTrack: Out of order keys.",this,l,c,o),t=!1;break}o=c}if(s!==void 0&&qm(s))for(let l=0,c=s.length;l!==c;++l){let a=s[l];if(isNaN(a)){re("KeyframeTrack: Value is not a valid number.",this,l,a),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===la,r=t.length-1,o=1;for(let l=1;l<r;++l){let c=!1,a=t[l],d=t[l+1];if(a!==d&&(l!==1||a!==t[0]))if(s)c=!0;else{let h=l*i,u=h-i,x=h+i;for(let _=0;_!==i;++_){let M=e[h+_];if(M!==e[u+_]||M!==e[x+_]){c=!0;break}}}if(c){if(l!==o){t[o]=t[l];let h=l*i,u=o*i;for(let x=0;x!==i;++x)e[u+x]=e[h+x]}++o}}if(r>0){t[o]=t[r];for(let l=r*i,c=o*i,a=0;a!==i;++a)e[c+a]=e[l+a];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,Oc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Df(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}Nn.prototype.ValueTypeName="";Nn.prototype.TimeBufferType=Float32Array;Nn.prototype.ValueBufferType=Float32Array;Nn.prototype.DefaultInterpolation=va;var ji=class extends Nn{constructor(t,e,i){super(t,e,i)}};ji.prototype.ValueTypeName="bool";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=Tr;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var Ba=class extends Nn{constructor(t,e,i,s){super(t,e,i,s)}};Ba.prototype.ValueTypeName="color";var za=class extends Nn{constructor(t,e,i,s){super(t,e,i,s)}};za.prototype.ValueTypeName="number";var ka=class extends Ki{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=(i-e)/(s-e),a=t*l;for(let d=a+l;a!==d;a+=4)fi.slerpFlat(r,0,o,a-l,o,a,c);return r}},Xr=class extends Nn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new ka(this.times,this.values,this.getValueSize(),t)}};Xr.prototype.ValueTypeName="quaternion";Xr.prototype.InterpolantFactoryMethodSmooth=void 0;var Qi=class extends Nn{constructor(t,e,i){super(t,e,i)}};Qi.prototype.ValueTypeName="string";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=Tr;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Va=class extends Nn{constructor(t,e,i,s){super(t,e,i,s)}};Va.prototype.ValueTypeName="vector";var Ga=class{constructor(t,e,i){let s=this,r=!1,o=0,l=0,c,a=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(d){l++,r===!1&&s.onStart!==void 0&&s.onStart(d,o,l),r=!0},this.itemEnd=function(d){o++,s.onProgress!==void 0&&s.onProgress(d,o,l),o===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,h){return a.push(d,h),this},this.removeHandler=function(d){let h=a.indexOf(d);return h!==-1&&a.splice(h,2),this},this.getHandler=function(d){for(let h=0,u=a.length;h<u;h+=2){let x=a[h],_=a[h+1];if(x.global&&(x.lastIndex=0),x.test(d))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},bd=new Ga,Ha=class{constructor(t){this.manager=t!==void 0?t:bd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ha.DEFAULT_MATERIAL_NAME="__DEFAULT";var oa=new Z,aa=new fi,oi=new Z,qr=class extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(oa,aa,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oa,aa,oi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(oa,aa,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oa,aa,oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Wi=new Z,Nf=new xe,Uf=new xe,pn=class extends qr{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ma*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ha*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ma*2*Math.atan(Math.tan(ha*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Wi.x,Wi.y).multiplyScalar(-t/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wi.x,Wi.y).multiplyScalar(-t/Wi.z)}getViewSize(t,e){return this.getViewBounds(t,Nf,Uf),e.subVectors(Uf,Nf)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ha*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,a=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/a,s*=o.width/c,i*=o.height/a}let l=this.filmOffset;l!==0&&(r+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Yr=class extends qr{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,l=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let a=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=a*this.view.offsetX,o=r+a*this.view.width,l-=d*this.view.offsetY,c=l-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Hs=-90,Ws=1,Wa=class extends Mn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new pn(Hs,Ws,t,e);s.layers=this.layers,this.add(s);let r=new pn(Hs,Ws,t,e);r.layers=this.layers,this.add(r);let o=new pn(Hs,Ws,t,e);o.layers=this.layers,this.add(o);let l=new pn(Hs,Ws,t,e);l.layers=this.layers,this.add(l);let c=new pn(Hs,Ws,t,e);c.layers=this.layers,this.add(c);let a=new pn(Hs,Ws,t,e);a.layers=this.layers,this.add(a)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,l,c]=e;for(let a of e)this.remove(a);if(t===jn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ir)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let a of e)this.add(a),a.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,l,c,a,d]=this.children,h=t.getRenderTarget(),u=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(h,u,x),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},Xa=class extends pn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var xh="\\[\\]\\.:\\/",x0=new RegExp("["+xh+"]","g"),_h="[^"+xh+"]",_0="[^"+xh.replace("\\.","")+"]",y0=/((?:WC+[\/:])*)/.source.replace("WC",_h),v0=/(WCOD+)?/.source.replace("WCOD",_0),M0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_h),S0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_h),b0=new RegExp("^"+y0+v0+M0+S0+"$"),w0=["material","materials","bones","map"],Hc=class{constructor(t,e,i){let s=i||ze.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},ze=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(x0,"")}static parseTrackName(t){let e=b0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);w0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let l=r[o];if(l.name===e||l.uuid===e)return l;let c=i(l.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){te("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let a=e.objectIndex;switch(i){case"materials":if(!t.material){re("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){re("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){re("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===a){a=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){re("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){re("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){re("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(a!==void 0){if(t[a]===void 0){re("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[a]}}let o=t[s];if(o===void 0){let a=e.nodeName;re("PropertyBinding: Trying to update property for track: "+a+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){re("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){re("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ze.Composite=Hc;ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ze.prototype.GetterByBindingType=[ze.prototype._getValue_direct,ze.prototype._getValue_array,ze.prototype._getValue_arrayElement,ze.prototype._getValue_toArray];ze.prototype.SetterByBindingTypeAndVersioning=[[ze.prototype._setValue_direct,ze.prototype._setValue_direct_setNeedsUpdate,ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_array,ze.prototype._setValue_array_setNeedsUpdate,ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_arrayElement,ze.prototype._setValue_arrayElement_setNeedsUpdate,ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_fromArray,ze.prototype._setValue_fromArray_setNeedsUpdate,ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var cM=new Float32Array(1);var wh=class wh{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};wh.prototype.isMatrix2=!0;var Wc=wh;function yh(n,t,e,i){let s=A0(i);switch(e){case hh:return n*t;case fh:return n*t/s.components*s.byteLength;case Qa:return n*t/s.components*s.byteLength;case ss:return n*t*2/s.components*s.byteLength;case tl:return n*t*2/s.components*s.byteLength;case uh:return n*t*3/s.components*s.byteLength;case Wn:return n*t*4/s.components*s.byteLength;case el:return n*t*4/s.components*s.byteLength;case Kr:case jr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Qr:case to:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case il:case rl:return Math.max(n,16)*Math.max(t,8)/4;case nl:case sl:return Math.max(n,8)*Math.max(t,8)/2;case ol:case al:case cl:case hl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ll:case eo:case ul:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case fl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case dl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case pl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ml:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case gl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case xl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case _l:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case yl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case vl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Ml:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Sl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case bl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case wl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Al:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case El:case Tl:case Cl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Rl:case Il:return Math.ceil(n/4)*Math.ceil(t/4)*8;case no:case Pl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function A0(n){switch(n){case Un:case oh:return{byteLength:1,components:1};case tr:case ah:case ni:return{byteLength:2,components:1};case Ka:case ja:return{byteLength:2,components:4};case ti:case Ja:case ei:return{byteLength:4,components:1};case lh:case ch:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?te("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Xd(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function T0(n){let t=new WeakMap;function e(l,c){let a=l.array,d=l.usage,h=a.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,a,d),l.onUploadCallback();let x;if(a instanceof Float32Array)x=n.FLOAT;else if(typeof Float16Array<"u"&&a instanceof Float16Array)x=n.HALF_FLOAT;else if(a instanceof Uint16Array)l.isFloat16BufferAttribute?x=n.HALF_FLOAT:x=n.UNSIGNED_SHORT;else if(a instanceof Int16Array)x=n.SHORT;else if(a instanceof Uint32Array)x=n.UNSIGNED_INT;else if(a instanceof Int32Array)x=n.INT;else if(a instanceof Int8Array)x=n.BYTE;else if(a instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(a instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+a);return{buffer:u,type:x,bytesPerElement:a.BYTES_PER_ELEMENT,version:l.version,size:h}}function i(l,c,a){let d=c.array,h=c.updateRanges;if(n.bindBuffer(a,l),h.length===0)n.bufferSubData(a,0,d);else{h.sort((x,_)=>x.start-_.start);let u=0;for(let x=1;x<h.length;x++){let _=h[u],M=h[x];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++u,h[u]=M)}h.length=u+1;for(let x=0,_=h.length;x<_;x++){let M=h[x];n.bufferSubData(a,M.start*d.BYTES_PER_ELEMENT,d,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let c=t.get(l);c&&(n.deleteBuffer(c.buffer),t.delete(l))}function o(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let d=t.get(l);(!d||d.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let a=t.get(l);if(a===void 0)t.set(l,e(l,c));else if(a.version<l.version){if(a.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(a.buffer,l,c),a.version=l.version}}return{get:s,remove:r,update:o}}var C0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,R0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,I0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,P0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,L0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,D0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,N0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,U0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,F0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,O0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,B0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,z0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,k0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,V0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,G0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,X0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,q0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Y0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,$0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Z0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,J0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,K0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,j0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Q0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,tg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ng=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ig=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sg="gl_FragColor = linearToOutputTexel( gl_FragColor );",rg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,og=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ag=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,lg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ug=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_g=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,vg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Mg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ag=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Eg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Tg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Rg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ig=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Pg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ng=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ug=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Og=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Bg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Xg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Yg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$g=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Kg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ex=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ix=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,sx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ox=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ax=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ux=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,dx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,px=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_x=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,bx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,wx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Tx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Cx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Px=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ux=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Fx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ox=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Hx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Yx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$x=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Zx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Jx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Qx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,i_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,s_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,r_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,o_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,a_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,me={alphahash_fragment:C0,alphahash_pars_fragment:R0,alphamap_fragment:I0,alphamap_pars_fragment:P0,alphatest_fragment:L0,alphatest_pars_fragment:D0,aomap_fragment:N0,aomap_pars_fragment:U0,batching_pars_vertex:F0,batching_vertex:O0,begin_vertex:B0,beginnormal_vertex:z0,bsdfs:k0,iridescence_fragment:V0,bumpmap_pars_fragment:G0,clipping_planes_fragment:H0,clipping_planes_pars_fragment:W0,clipping_planes_pars_vertex:X0,clipping_planes_vertex:q0,color_fragment:Y0,color_pars_fragment:$0,color_pars_vertex:Z0,color_vertex:J0,common:K0,cube_uv_reflection_fragment:j0,defaultnormal_vertex:Q0,displacementmap_pars_vertex:tg,displacementmap_vertex:eg,emissivemap_fragment:ng,emissivemap_pars_fragment:ig,colorspace_fragment:sg,colorspace_pars_fragment:rg,envmap_fragment:og,envmap_common_pars_fragment:ag,envmap_pars_fragment:lg,envmap_pars_vertex:cg,envmap_physical_pars_fragment:vg,envmap_vertex:hg,fog_vertex:ug,fog_pars_vertex:fg,fog_fragment:dg,fog_pars_fragment:pg,gradientmap_pars_fragment:mg,lightmap_pars_fragment:gg,lights_lambert_fragment:xg,lights_lambert_pars_fragment:_g,lights_pars_begin:yg,lights_toon_fragment:Mg,lights_toon_pars_fragment:Sg,lights_phong_fragment:bg,lights_phong_pars_fragment:wg,lights_physical_fragment:Ag,lights_physical_pars_fragment:Eg,lights_fragment_begin:Tg,lights_fragment_maps:Cg,lights_fragment_end:Rg,lightprobes_pars_fragment:Ig,logdepthbuf_fragment:Pg,logdepthbuf_pars_fragment:Lg,logdepthbuf_pars_vertex:Dg,logdepthbuf_vertex:Ng,map_fragment:Ug,map_pars_fragment:Fg,map_particle_fragment:Og,map_particle_pars_fragment:Bg,metalnessmap_fragment:zg,metalnessmap_pars_fragment:kg,morphinstance_vertex:Vg,morphcolor_vertex:Gg,morphnormal_vertex:Hg,morphtarget_pars_vertex:Wg,morphtarget_vertex:Xg,normal_fragment_begin:qg,normal_fragment_maps:Yg,normal_pars_fragment:$g,normal_pars_vertex:Zg,normal_vertex:Jg,normalmap_pars_fragment:Kg,clearcoat_normal_fragment_begin:jg,clearcoat_normal_fragment_maps:Qg,clearcoat_pars_fragment:tx,iridescence_pars_fragment:ex,opaque_fragment:nx,packing:ix,premultiplied_alpha_fragment:sx,project_vertex:rx,dithering_fragment:ox,dithering_pars_fragment:ax,roughnessmap_fragment:lx,roughnessmap_pars_fragment:cx,shadowmap_pars_fragment:hx,shadowmap_pars_vertex:ux,shadowmap_vertex:fx,shadowmask_pars_fragment:dx,skinbase_vertex:px,skinning_pars_vertex:mx,skinning_vertex:gx,skinnormal_vertex:xx,specularmap_fragment:_x,specularmap_pars_fragment:yx,tonemapping_fragment:vx,tonemapping_pars_fragment:Mx,transmission_fragment:Sx,transmission_pars_fragment:bx,uv_pars_fragment:wx,uv_pars_vertex:Ax,uv_vertex:Ex,worldpos_vertex:Tx,background_vert:Cx,background_frag:Rx,backgroundCube_vert:Ix,backgroundCube_frag:Px,cube_vert:Lx,cube_frag:Dx,depth_vert:Nx,depth_frag:Ux,distance_vert:Fx,distance_frag:Ox,equirect_vert:Bx,equirect_frag:zx,linedashed_vert:kx,linedashed_frag:Vx,meshbasic_vert:Gx,meshbasic_frag:Hx,meshlambert_vert:Wx,meshlambert_frag:Xx,meshmatcap_vert:qx,meshmatcap_frag:Yx,meshnormal_vert:$x,meshnormal_frag:Zx,meshphong_vert:Jx,meshphong_frag:Kx,meshphysical_vert:jx,meshphysical_frag:Qx,meshtoon_vert:t_,meshtoon_frag:e_,points_vert:n_,points_frag:i_,shadow_vert:s_,shadow_frag:r_,sprite_vert:o_,sprite_frag:a_},Ft={common:{diffuse:{value:new ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Z},probesMax:{value:new Z},probesResolution:{value:new Z}},points:{diffuse:{value:new ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new ae(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},xi={basic:{uniforms:gn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:gn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new ae(0)},envMapIntensity:{value:1}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:gn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new ae(0)},specular:{value:new ae(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:gn([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:gn([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new ae(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:gn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:gn([Ft.points,Ft.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:gn([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:gn([Ft.common,Ft.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:gn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:gn([Ft.sprite,Ft.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distance:{uniforms:gn([Ft.common,Ft.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distance_vert,fragmentShader:me.distance_frag},shadow:{uniforms:gn([Ft.lights,Ft.fog,{color:{value:new ae(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};xi.physical={uniforms:gn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new ae(0)},specularColor:{value:new ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};var Nl={r:0,b:0,g:0},l_=new Ge,qd=new ce;qd.set(-1,0,0,0,1,0,0,0,1);function c_(n,t,e,i,s,r){let o=new ae(0),l=s===!0?0:1,c,a,d=null,h=0,u=null;function x(C){let N=C.isScene===!0?C.background:null;if(N&&N.isTexture){let w=C.backgroundBlurriness>0;N=t.get(N,w)}return N}function _(C){let N=!1,w=x(C);w===null?g(o,l):w&&w.isColor&&(g(w,1),N=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||N)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function M(C,N){let w=x(N);w&&(w.isCubeTexture||w.mapping===Zr)?(a===void 0&&(a=new ke(new un(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:ys(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),a.geometry.deleteAttribute("normal"),a.geometry.deleteAttribute("uv"),a.onBeforeRender=function(A,T,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(a.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(a)),a.material.uniforms.envMap.value=w,a.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,a.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,a.material.uniforms.backgroundRotation.value.setFromMatrix4(l_.makeRotationFromEuler(N.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&a.material.uniforms.backgroundRotation.value.premultiply(qd),a.material.toneMapped=Se.getTransfer(w.colorSpace)!==Re,(d!==w||h!==w.version||u!==n.toneMapping)&&(a.material.needsUpdate=!0,d=w,h=w.version,u=n.toneMapping),a.layers.enableAll(),C.unshift(a,a.geometry,a.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new ke(new Wr(2,2),new mn({name:"BackgroundMaterial",uniforms:ys(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,c.material.toneMapped=Se.getTransfer(w.colorSpace)!==Re,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||h!==w.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,d=w,h=w.version,u=n.toneMapping),c.layers.enableAll(),C.unshift(c,c.geometry,c.material,0,0,null))}function g(C,N){C.getRGB(Nl,gh(n)),e.buffers.color.setClear(Nl.r,Nl.g,Nl.b,N,r)}function m(){a!==void 0&&(a.geometry.dispose(),a.material.dispose(),a=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(C,N=1){o.set(C),l=N,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(C){l=C,g(o,l)},render:_,addToRenderList:M,dispose:m}}function h_(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function l(F,Y,B,L,k){let W=!1,$=h(F,L,B,Y);r!==$&&(r=$,a(r.object)),W=x(F,L,B,k),W&&_(F,L,B,k),k!==null&&t.update(k,n.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,w(F,Y,B,L),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function c(){return n.createVertexArray()}function a(F){return n.bindVertexArray(F)}function d(F){return n.deleteVertexArray(F)}function h(F,Y,B,L){let k=L.wireframe===!0,W=i[Y.id];W===void 0&&(W={},i[Y.id]=W);let $=F.isInstancedMesh===!0?F.id:0,J=W[$];J===void 0&&(J={},W[$]=J);let K=J[B.id];K===void 0&&(K={},J[B.id]=K);let st=K[k];return st===void 0&&(st=u(c()),K[k]=st),st}function u(F){let Y=[],B=[],L=[];for(let k=0;k<e;k++)Y[k]=0,B[k]=0,L[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:B,attributeDivisors:L,object:F,attributes:{},index:null}}function x(F,Y,B,L){let k=r.attributes,W=Y.attributes,$=0,J=B.getAttributes();for(let K in J)if(J[K].location>=0){let ot=k[K],Tt=W[K];if(Tt===void 0&&(K==="instanceMatrix"&&F.instanceMatrix&&(Tt=F.instanceMatrix),K==="instanceColor"&&F.instanceColor&&(Tt=F.instanceColor)),ot===void 0||ot.attribute!==Tt||Tt&&ot.data!==Tt.data)return!0;$++}return r.attributesNum!==$||r.index!==L}function _(F,Y,B,L){let k={},W=Y.attributes,$=0,J=B.getAttributes();for(let K in J)if(J[K].location>=0){let ot=W[K];ot===void 0&&(K==="instanceMatrix"&&F.instanceMatrix&&(ot=F.instanceMatrix),K==="instanceColor"&&F.instanceColor&&(ot=F.instanceColor));let Tt={};Tt.attribute=ot,ot&&ot.data&&(Tt.data=ot.data),k[K]=Tt,$++}r.attributes=k,r.attributesNum=$,r.index=L}function M(){let F=r.newAttributes;for(let Y=0,B=F.length;Y<B;Y++)F[Y]=0}function g(F){m(F,0)}function m(F,Y){let B=r.newAttributes,L=r.enabledAttributes,k=r.attributeDivisors;B[F]=1,L[F]===0&&(n.enableVertexAttribArray(F),L[F]=1),k[F]!==Y&&(n.vertexAttribDivisor(F,Y),k[F]=Y)}function C(){let F=r.newAttributes,Y=r.enabledAttributes;for(let B=0,L=Y.length;B<L;B++)Y[B]!==F[B]&&(n.disableVertexAttribArray(B),Y[B]=0)}function N(F,Y,B,L,k,W,$){$===!0?n.vertexAttribIPointer(F,Y,B,k,W):n.vertexAttribPointer(F,Y,B,L,k,W)}function w(F,Y,B,L){M();let k=L.attributes,W=B.getAttributes(),$=Y.defaultAttributeValues;for(let J in W){let K=W[J];if(K.location>=0){let st=k[J];if(st===void 0&&(J==="instanceMatrix"&&F.instanceMatrix&&(st=F.instanceMatrix),J==="instanceColor"&&F.instanceColor&&(st=F.instanceColor)),st!==void 0){let ot=st.normalized,Tt=st.itemSize,j=t.get(st);if(j===void 0)continue;let At=j.buffer,vt=j.type,_t=j.bytesPerElement,q=vt===n.INT||vt===n.UNSIGNED_INT||st.gpuType===Ja;if(st.isInterleavedBufferAttribute){let nt=st.data,yt=nt.stride,Ot=st.offset;if(nt.isInstancedInterleavedBuffer){for(let xt=0;xt<K.locationSize;xt++)m(K.location+xt,nt.meshPerAttribute);F.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let xt=0;xt<K.locationSize;xt++)g(K.location+xt);n.bindBuffer(n.ARRAY_BUFFER,At);for(let xt=0;xt<K.locationSize;xt++)N(K.location+xt,Tt/K.locationSize,vt,ot,yt*_t,(Ot+Tt/K.locationSize*xt)*_t,q)}else{if(st.isInstancedBufferAttribute){for(let nt=0;nt<K.locationSize;nt++)m(K.location+nt,st.meshPerAttribute);F.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let nt=0;nt<K.locationSize;nt++)g(K.location+nt);n.bindBuffer(n.ARRAY_BUFFER,At);for(let nt=0;nt<K.locationSize;nt++)N(K.location+nt,Tt/K.locationSize,vt,ot,Tt*_t,Tt/K.locationSize*nt*_t,q)}}else if($!==void 0){let ot=$[J];if(ot!==void 0)switch(ot.length){case 2:n.vertexAttrib2fv(K.location,ot);break;case 3:n.vertexAttrib3fv(K.location,ot);break;case 4:n.vertexAttrib4fv(K.location,ot);break;default:n.vertexAttrib1fv(K.location,ot)}}}}C()}function A(){b();for(let F in i){let Y=i[F];for(let B in Y){let L=Y[B];for(let k in L){let W=L[k];for(let $ in W)d(W[$].object),delete W[$];delete L[k]}}delete i[F]}}function T(F){if(i[F.id]===void 0)return;let Y=i[F.id];for(let B in Y){let L=Y[B];for(let k in L){let W=L[k];for(let $ in W)d(W[$].object),delete W[$];delete L[k]}}delete i[F.id]}function U(F){for(let Y in i){let B=i[Y];for(let L in B){let k=B[L];if(k[F.id]===void 0)continue;let W=k[F.id];for(let $ in W)d(W[$].object),delete W[$];delete k[F.id]}}}function v(F){for(let Y in i){let B=i[Y],L=F.isInstancedMesh===!0?F.id:0,k=B[L];if(k!==void 0){for(let W in k){let $=k[W];for(let J in $)d($[J].object),delete $[J];delete k[W]}delete B[L],Object.keys(B).length===0&&delete i[Y]}}}function b(){R(),o=!0,r!==s&&(r=s,a(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:b,resetDefaultState:R,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:U,initAttributes:M,enableAttribute:g,disableUnusedAttributes:C}}function u_(n,t,e){let i;function s(c){i=c}function r(c,a){n.drawArrays(i,c,a),e.update(a,i,1)}function o(c,a,d){d!==0&&(n.drawArraysInstanced(i,c,a,d),e.update(a,i,d))}function l(c,a,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,a,0,d);let u=0;for(let x=0;x<d;x++)u+=a[x];e.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=l}function f_(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let U=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(U){return!(U!==Wn&&i.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(U){let v=U===ni&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(U!==Un&&U!==ei&&!v&&i.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(U){if(U==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=e.precision!==void 0?e.precision:"highp",d=c(a);d!==a&&(te("WebGLRenderer:",a,"not supported, using",d,"instead."),a=d);let h=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&te("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let x=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),C=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),N=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:l,precision:a,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:x,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:C,maxVaryings:N,maxFragmentUniforms:w,maxSamples:A,samples:T}}function d_(n){let t=this,e=null,i=0,s=!1,r=!1,o=new Kn,l=new ce,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let x=h.length!==0||u||i!==0||s;return s=u,i=h.length,x},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){e=d(h,u,0)},this.setState=function(h,u,x){let _=h.clippingPlanes,M=h.clipIntersection,g=h.clipShadows,m=n.get(h);if(!s||_===null||_.length===0||r&&!g)r?d(null):a();else{let C=r?0:i,N=C*4,w=m.clippingState||null;c.value=w,w=d(_,u,N,x);for(let A=0;A!==N;++A)w[A]=e[A];m.clippingState=w,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=C}};function a(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(h,u,x,_){let M=h!==null?h.length:0,g=null;if(M!==0){if(g=c.value,_!==!0||g===null){let m=x+M*4,C=u.matrixWorldInverse;l.getNormalMatrix(C),(g===null||g.length<m)&&(g=new Float32Array(m));for(let N=0,w=x;N!==M;++N,w+=4)o.copy(h[N]).applyMatrix4(C,l),o.normal.toArray(g,w),g[w+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,g}}var ir=4,p_=6,m_=20,g_=256,io=new Yr,wd=new ae,Ah=null,Eh=0,Th=0,Ch=!1,x_=new Z,vs=new Z,Fl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:l=x_}=r;Ah=this._renderer.getRenderTarget(),Eh=this._renderer.getActiveCubeFace(),Th=this._renderer.getActiveMipmapLevel(),Ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,s,c,l),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Td(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ed(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ah,Eh,Th),this._renderer.xr.enabled=Ch,t.scissorTest=!1,nr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===es||t.mapping===_s?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ah=this._renderer.getRenderTarget(),Eh=this._renderer.getActiveCubeFace(),Th=this._renderer.getActiveMipmapLevel(),Ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ke,minFilter:Ke,generateMipmaps:!1,type:ni,format:Wn,colorSpace:Cr,depthBuffer:!1},s=Ad(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ad(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=__(r)),this._blurMaterial=v_(r,t,e),this._ggxMaterial=y_(r,t,e)}return s}_compileMaterial(t){let e=new ke(new Qe,t);this._renderer.compile(e,io)}_sceneToCubeUV(t,e,i,s,r){let c=new pn(90,1,e,i),a=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,x=h.toneMapping;h.getClearColor(wd),h.toneMapping=Qn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ke(new un,new Gn({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,g=M.material,m=!1,C=t.background;C?C.isColor&&(g.color.copy(C),t.background=null,m=!0):(g.color.copy(wd),m=!0);for(let N=0;N<6;N++){let w=N%3;w===0?(c.up.set(0,a[N],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+d[N],r.y,r.z)):w===1?(c.up.set(0,0,a[N]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+d[N],r.z)):(c.up.set(0,a[N],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+d[N]));let A=this._cubeSize;nr(s,w*A,N>2?A:0,A,A),h.setRenderTarget(s),m&&h.render(M,c),h.render(t,c)}h.toneMapping=x,h.autoClear=u,t.background=C}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===es||t.mapping===_s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Td()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ed());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let l=r.uniforms;l.envMap.value=t;let c=this._cubeSize;nr(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,io)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,l=this._lodMeshes[i];l.material=o;let c=o.uniforms,a=i/(this._lodMeshes.length-1),d=e/(this._lodMeshes.length-1),h=Math.sqrt(a*a-d*d),u=a*1.25,x=h*u,{_lodMax:_}=this,M=this._sizeLods[i],g=3*M*(i>_-ir?i-_+ir:0),m=4*(this._cubeSize-M);c.envMap.value=t.texture,c.roughness.value=x,c.mipInt.value=_-e,nr(r,g,m,3*M,2*M),s.setRenderTarget(r),s.render(l,io),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=_-i,nr(t,g,m,3*M,2*M),s.setRenderTarget(t),s.render(l,io)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,o),this._blurPass(r,t,i,i,o)}_blurPass(t,e,i,s,r){let o=this._renderer,l=this._blurMaterial,c=this._lodMeshes[s];c.material=l;let a=l.uniforms;a.envMap.value=t.texture,a.sigma.value=r,a.mipInt.value=this._lodMax-i;let d=this._sizeLods[s],h=3*d*(s>this._lodMax-ir?s-this._lodMax+ir:0),u=4*(this._cubeSize-d);nr(e,h,u,3*d,2*d),o.setRenderTarget(e),o.render(c,io)}};function __(n){let t=[],e=[],i=n,s=n-ir+1+p_;for(let r=0;r<s;r++){let o=Math.pow(2,i);t.push(o);let l=1/(o-2),c=-l,a=1+l,d=[c,c,a,c,a,a,c,c,a,a,c,a],h=6,u=6,x=3,_=new Float32Array(x*u*h),M=new Float32Array(x*u*h);for(let m=0;m<h;m++){let C=m%3*2/3-1,N=m>2?0:-1,w=[C,N,0,C+2/3,N,0,C+2/3,N+1,0,C,N,0,C+2/3,N+1,0,C,N+1,0];_.set(w,x*u*m);for(let A=0;A<u;A++){let T=d[A*2]*2-1,U=d[A*2+1]*2-1;m===0?vs.set(1,U,T):m===1?vs.set(-T,1,-U):m===2?vs.set(-T,U,1):m===3?vs.set(-1,U,-T):m===4?vs.set(-T,-1,U):vs.set(T,U,-1),vs.toArray(M,(m*u+A)*x)}}let g=new Qe;g.setAttribute("position",new Ye(_,x)),g.setAttribute("outputDirection",new Ye(M,x)),e.push(new ke(g,null)),i>ir&&i--}return{lodMeshes:e,sizeLods:t}}function Ad(n,t,e){let i=new bn(n,t,e);return i.texture.mapping=Zr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function nr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function y_(n,t,e){return new mn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:g_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:zl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function v_(n,t,e){return new mn({name:"SphericalGaussianBlur",defines:{SAMPLES:m_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:zl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Ed(){return new mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Td(){return new mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function zl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ol=class extends bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Vr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new un(5,5,5),r=new mn({name:"CubemapFromEquirect",uniforms:ys(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Sn,blending:mi});r.uniforms.tEquirect.value=e;let o=new ke(s,r),l=e.minFilter;return e.minFilter===ns&&(e.minFilter=Ke),new Wa(1,10,this).update(t,o),e.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}};function M_(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,x=!1){return u==null?null:x?o(u):r(u)}function r(u){if(u&&u.isTexture){let x=u.mapping;if(x===Ya||x===$a)if(t.has(u)){let _=t.get(u).texture;return l(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let M=new Ol(_.height);return M.fromEquirectangularTexture(n,u),t.set(u,M),u.addEventListener("dispose",a),l(M.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let x=u.mapping,_=x===Ya||x===$a,M=x===es||x===_s;if(_||M){let g=e.get(u),m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return i===null&&(i=new Fl(n)),g=_?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let C=u.image;return _&&C&&C.height>0||M&&C&&c(C)?(i===null&&(i=new Fl(n)),g=_?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",d),g.texture):null}}}return u}function l(u,x){return x===Ya?u.mapping=es:x===$a&&(u.mapping=_s),u}function c(u){let x=0,_=6;for(let M=0;M<_;M++)u[M]!==void 0&&x++;return x===_}function a(u){let x=u.target;x.removeEventListener("dispose",a);let _=t.get(x);_!==void 0&&(t.delete(x),_.dispose())}function d(u){let x=u.target;x.removeEventListener("dispose",d);let _=e.get(x);_!==void 0&&(e.delete(x),_.dispose())}function h(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function S_(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&ds("WebGLRenderer: "+i+" extension not supported."),s}}}function b_(n,t,e,i){let s={},r=new WeakMap;function o(h){let u=h.target;u.index!==null&&t.remove(u.index);for(let _ in u.attributes)t.remove(u.attributes[_]);u.removeEventListener("dispose",o),delete s[u.id];let x=r.get(u);x&&(t.remove(x),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function l(h,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function c(h){let u=h.attributes;for(let x in u)t.update(u[x],n.ARRAY_BUFFER)}function a(h){let u=[],x=h.index,_=h.attributes.position,M=0;if(_===void 0)return;if(x!==null){let C=x.array;M=x.version;for(let N=0,w=C.length;N<w;N+=3){let A=C[N+0],T=C[N+1],U=C[N+2];u.push(A,T,T,U,U,A)}}else{let C=_.array;M=_.version;for(let N=0,w=C.length/3-1;N<w;N+=3){let A=N+0,T=N+1,U=N+2;u.push(A,T,T,U,U,A)}}let g=new(_.count>=65535?Or:Fr)(u,1);g.version=M;let m=r.get(h);m&&t.remove(m),r.set(h,g)}function d(h){let u=r.get(h);if(u){let x=h.index;x!==null&&u.version<x.version&&a(h)}else a(h);return r.get(h)}return{get:l,update:c,getWireframeAttribute:d}}function w_(n,t,e){let i;function s(h){i=h}let r,o;function l(h){r=h.type,o=h.bytesPerElement}function c(h,u){n.drawElements(i,u,r,h*o),e.update(u,i,1)}function a(h,u,x){x!==0&&(n.drawElementsInstanced(i,u,r,h*o,x),e.update(u,i,x))}function d(h,u,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,h,0,x);let M=0;for(let g=0;g<x;g++)M+=u[g];e.update(M,i,1)}this.setMode=s,this.setIndex=l,this.render=c,this.renderInstances=a,this.renderMultiDraw=d}function A_(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,l){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=l*(r/3);break;case n.LINES:e.lines+=l*(r/2);break;case n.LINE_STRIP:e.lines+=l*(r-1);break;case n.LINE_LOOP:e.lines+=l*r;break;case n.POINTS:e.points+=l*r;break;default:re("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function E_(n,t,e){let i=new WeakMap,s=new Xe;function r(o,l,c){let a=o.morphTargetInfluences,d=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,h=d!==void 0?d.length:0,u=i.get(l);if(u===void 0||u.count!==h){let b=function(){U.dispose(),i.delete(l),l.removeEventListener("dispose",b)};u!==void 0&&u.texture.dispose();let x=l.morphAttributes.position!==void 0,_=l.morphAttributes.normal!==void 0,M=l.morphAttributes.color!==void 0,g=l.morphAttributes.position||[],m=l.morphAttributes.normal||[],C=l.morphAttributes.color||[],N=0;x===!0&&(N=1),_===!0&&(N=2),M===!0&&(N=3);let w=l.attributes.position.count*N,A=1;w>t.maxTextureSize&&(A=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);let T=new Float32Array(w*A*4*h),U=new Dr(T,w,A,h);U.type=ei,U.needsUpdate=!0;let v=N*4;for(let R=0;R<h;R++){let F=g[R],Y=m[R],B=C[R],L=w*A*4*R;for(let k=0;k<F.count;k++){let W=k*v;x===!0&&(s.fromBufferAttribute(F,k),T[L+W+0]=s.x,T[L+W+1]=s.y,T[L+W+2]=s.z,T[L+W+3]=0),_===!0&&(s.fromBufferAttribute(Y,k),T[L+W+4]=s.x,T[L+W+5]=s.y,T[L+W+6]=s.z,T[L+W+7]=0),M===!0&&(s.fromBufferAttribute(B,k),T[L+W+8]=s.x,T[L+W+9]=s.y,T[L+W+10]=s.z,T[L+W+11]=B.itemSize===4?s.w:1)}}u={count:h,texture:U,size:new xe(w,A)},i.set(l,u),l.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let x=0;for(let M=0;M<a.length;M++)x+=a[M];let _=l.morphTargetsRelative?1:1-x;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",a)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function T_(n,t,e,i,s){let r=new WeakMap;function o(a){let d=s.render.frame,h=a.geometry,u=t.get(a,h);if(r.get(u)!==d&&(t.update(u),r.set(u,d)),a.isInstancedMesh&&(a.hasEventListener("dispose",c)===!1&&a.addEventListener("dispose",c),r.get(a)!==d&&(e.update(a.instanceMatrix,n.ARRAY_BUFFER),a.instanceColor!==null&&e.update(a.instanceColor,n.ARRAY_BUFFER),r.set(a,d))),a.isSkinnedMesh){let x=a.skeleton;r.get(x)!==d&&(x.update(),r.set(x,d))}return u}function l(){r=new WeakMap}function c(a){let d=a.target;d.removeEventListener("dispose",c),i.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:o,dispose:l}}var C_={[jc]:"LINEAR_TONE_MAPPING",[Qc]:"REINHARD_TONE_MAPPING",[th]:"CINEON_TONE_MAPPING",[eh]:"ACES_FILMIC_TONE_MAPPING",[ih]:"AGX_TONE_MAPPING",[sh]:"NEUTRAL_TONE_MAPPING",[nh]:"CUSTOM_TONE_MAPPING"};function R_(n,t,e,i,s,r){let o=new bn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,c=null,a=new Qe;a.setAttribute("position",new vn([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new vn([0,2,0,0,2,0],2));let d=new Pa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new ke(a,d),u=new Yr(-1,1,1,-1,0,1),x=null,_=null,M=!1,g,m=null,C=[],N=!1;this.setSize=function(w,A){o.setSize(w,A),l!==null&&l.setSize(w,A),c!==null&&c.setSize(w,A);for(let T=0;T<C.length;T++){let U=C[T];U.setSize&&U.setSize(w,A)}},this.setEffects=function(w){C=w,N=C.length>0&&C[0].isRenderPass===!0;let A=o.width,T=o.height;C.length>0&&l===null&&(l=new bn(A,T,{type:ni,depthBuffer:!1,stencilBuffer:!1}),c=new bn(A,T,{type:ni,depthBuffer:!1,stencilBuffer:!1}));for(let U=0;U<C.length;U++){let v=C[U];v.setSize&&v.setSize(A,T)}},this.begin=function(w,A){if(M||w.toneMapping===Qn&&C.length===0)return!1;if(m=A,A!==null){let T=A.width,U=A.height;(o.width!==T||o.height!==U)&&this.setSize(T,U)}return N===!1&&w.setRenderTarget(o),g=w.toneMapping,w.toneMapping=Qn,!0},this.hasRenderPass=function(){return N},this.end=function(w,A){w.toneMapping=g,M=!0;let T=o,U=l;for(let v=0;v<C.length;v++){let b=C[v];b.enabled!==!1&&(b.render(w,U,T,A),b.needsSwap!==!1&&(T=U,U=U===l?c:l))}if(x!==w.outputColorSpace||_!==w.toneMapping){x=w.outputColorSpace,_=w.toneMapping,d.defines={},Se.getTransfer(x)===Re&&(d.defines.SRGB_TRANSFER="");let v=C_[_];v&&(d.defines[v]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=T.texture,w.setRenderTarget(m),w.render(h,u),m=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){o.dispose(),l!==null&&l.dispose(),c!==null&&c.dispose(),a.dispose(),d.dispose()}}var Yd=new hn,Ph=new Ji(1,1),$d=new Dr,Zd=new wa,Jd=new Vr,Cd=[],Rd=[],Id=new Float32Array(16),Pd=new Float32Array(9),Ld=new Float32Array(4);function rr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Cd[s];if(r===void 0&&(r=new Float32Array(s),Cd[s]=r),t!==0){i.toArray(r,0);for(let o=1,l=0;o!==t;++o)l+=e,n[o].toArray(r,l)}return r}function tn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function en(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function kl(n,t){let e=Rd[t];e===void 0&&(e=new Int32Array(t),Rd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function I_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function P_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;n.uniform2fv(this.addr,t),en(e,t)}}function L_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(tn(e,t))return;n.uniform3fv(this.addr,t),en(e,t)}}function D_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;n.uniform4fv(this.addr,t),en(e,t)}}function N_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(tn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),en(e,t)}else{if(tn(e,i))return;Ld.set(i),n.uniformMatrix2fv(this.addr,!1,Ld),en(e,i)}}function U_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(tn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),en(e,t)}else{if(tn(e,i))return;Pd.set(i),n.uniformMatrix3fv(this.addr,!1,Pd),en(e,i)}}function F_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(tn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),en(e,t)}else{if(tn(e,i))return;Id.set(i),n.uniformMatrix4fv(this.addr,!1,Id),en(e,i)}}function O_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function B_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;n.uniform2iv(this.addr,t),en(e,t)}}function z_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;n.uniform3iv(this.addr,t),en(e,t)}}function k_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;n.uniform4iv(this.addr,t),en(e,t)}}function V_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function G_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;n.uniform2uiv(this.addr,t),en(e,t)}}function H_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;n.uniform3uiv(this.addr,t),en(e,t)}}function W_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;n.uniform4uiv(this.addr,t),en(e,t)}}function X_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Ph.compareFunction=e.isReversedDepthBuffer()?Dl:Ll,r=Ph):r=Yd,e.setTexture2D(t||r,s)}function q_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Zd,s)}function Y_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Jd,s)}function $_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||$d,s)}function Z_(n){switch(n){case 5126:return I_;case 35664:return P_;case 35665:return L_;case 35666:return D_;case 35674:return N_;case 35675:return U_;case 35676:return F_;case 5124:case 35670:return O_;case 35667:case 35671:return B_;case 35668:case 35672:return z_;case 35669:case 35673:return k_;case 5125:return V_;case 36294:return G_;case 36295:return H_;case 36296:return W_;case 35678:case 36198:case 36298:case 36306:case 35682:return X_;case 35679:case 36299:case 36307:return q_;case 35680:case 36300:case 36308:case 36293:return Y_;case 36289:case 36303:case 36311:case 36292:return $_}}function J_(n,t){n.uniform1fv(this.addr,t)}function K_(n,t){let e=rr(t,this.size,2);n.uniform2fv(this.addr,e)}function j_(n,t){let e=rr(t,this.size,3);n.uniform3fv(this.addr,e)}function Q_(n,t){let e=rr(t,this.size,4);n.uniform4fv(this.addr,e)}function ty(n,t){let e=rr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function ey(n,t){let e=rr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function ny(n,t){let e=rr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function iy(n,t){n.uniform1iv(this.addr,t)}function sy(n,t){n.uniform2iv(this.addr,t)}function ry(n,t){n.uniform3iv(this.addr,t)}function oy(n,t){n.uniform4iv(this.addr,t)}function ay(n,t){n.uniform1uiv(this.addr,t)}function ly(n,t){n.uniform2uiv(this.addr,t)}function cy(n,t){n.uniform3uiv(this.addr,t)}function hy(n,t){n.uniform4uiv(this.addr,t)}function uy(n,t,e){let i=this.cache,s=t.length,r=kl(e,s);tn(i,r)||(n.uniform1iv(this.addr,r),en(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Ph:o=Yd;for(let l=0;l!==s;++l)e.setTexture2D(t[l]||o,r[l])}function fy(n,t,e){let i=this.cache,s=t.length,r=kl(e,s);tn(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Zd,r[o])}function dy(n,t,e){let i=this.cache,s=t.length,r=kl(e,s);tn(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Jd,r[o])}function py(n,t,e){let i=this.cache,s=t.length,r=kl(e,s);tn(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||$d,r[o])}function my(n){switch(n){case 5126:return J_;case 35664:return K_;case 35665:return j_;case 35666:return Q_;case 35674:return ty;case 35675:return ey;case 35676:return ny;case 5124:case 35670:return iy;case 35667:case 35671:return sy;case 35668:case 35672:return ry;case 35669:case 35673:return oy;case 5125:return ay;case 36294:return ly;case 36295:return cy;case 36296:return hy;case 35678:case 36198:case 36298:case 36306:case 35682:return uy;case 35679:case 36299:case 36307:return fy;case 35680:case 36300:case 36308:case 36293:return dy;case 36289:case 36303:case 36311:case 36292:return py}}var Lh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Z_(e.type)}},Dh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=my(e.type)}},Nh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let l=s[r];l.setValue(t,e[l.id],i)}}},Rh=/(\w+)(\])?(\[|\.)?/g;function Dd(n,t){n.seq.push(t),n.map[t.id]=t}function gy(n,t,e){let i=n.name,s=i.length;for(Rh.lastIndex=0;;){let r=Rh.exec(i),o=Rh.lastIndex,l=r[1],c=r[2]==="]",a=r[3];if(c&&(l=l|0),a===void 0||a==="["&&o+2===s){Dd(e,a===void 0?new Lh(l,n,t):new Dh(l,n,t));break}else{let h=e.map[l];h===void 0&&(h=new Nh(l),Dd(e,h)),e=h}}}var sr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let l=t.getActiveUniform(e,o),c=t.getUniformLocation(e,l.name);gy(l,c,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let l=e[r],c=i[l.id];c.needsUpdate!==!1&&l.setValue(t,c.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function Nd(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var xy=37297,_y=0;function yy(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let l=o+1;i.push(`${l===t?">":" "} ${l}: ${e[o]}`)}return i.join(`
`)}var Ud=new ce;function vy(n){Se._getMatrix(Ud,Se.workingColorSpace,n);let t=`mat3( ${Ud.elements.map(e=>e.toFixed(4))} )`;switch(Se.getTransfer(n)){case Rr:return[t,"LinearTransferOETF"];case Re:return[t,"sRGBTransferOETF"];default:return te("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Fd(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let l=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+yy(n.getShaderSource(t),l)}else return r}function My(n,t){let e=vy(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Sy={[jc]:"Linear",[Qc]:"Reinhard",[th]:"Cineon",[eh]:"ACESFilmic",[ih]:"AgX",[sh]:"Neutral",[nh]:"Custom"};function by(n,t){let e=Sy[t];return e===void 0?(te("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ul=new Z;function wy(){Se.getLuminanceCoefficients(Ul);let n=Ul.x.toFixed(4),t=Ul.y.toFixed(4),e=Ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ay(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ro).join(`
`)}function Ey(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Ty(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,l=1;r.type===n.FLOAT_MAT2&&(l=2),r.type===n.FLOAT_MAT3&&(l=3),r.type===n.FLOAT_MAT4&&(l=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:l}}return e}function ro(n){return n!==""}function Od(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Bd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Cy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uh(n){return n.replace(Cy,Iy)}var Ry=new Map;function Iy(n,t){let e=me[t];if(e===void 0){let i=Ry.get(t);if(i!==void 0)e=me[i],te('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Uh(e)}var Py=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zd(n){return n.replace(Py,Ly)}function Ly(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function kd(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Dy={[$r]:"SHADOWMAP_TYPE_PCF",[js]:"SHADOWMAP_TYPE_VSM"};function Ny(n){return Dy[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Uy={[es]:"ENVMAP_TYPE_CUBE",[_s]:"ENVMAP_TYPE_CUBE",[Zr]:"ENVMAP_TYPE_CUBE_UV"};function Fy(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Uy[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var Oy={[_s]:"ENVMAP_MODE_REFRACTION"};function By(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Oy[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var zy={[Kc]:"ENVMAP_BLENDING_MULTIPLY",[id]:"ENVMAP_BLENDING_MIX",[sd]:"ENVMAP_BLENDING_ADD"};function ky(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":zy[n.combine]||"ENVMAP_BLENDING_NONE"}function Vy(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Gy(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,l=e.fragmentShader,c=Ny(e),a=Fy(e),d=By(e),h=ky(e),u=Vy(e),x=Ay(e),_=Ey(r),M=s.createProgram(),g,m,C=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ro).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ro).join(`
`),m.length>0&&(m+=`
`)):(g=[kd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ro).join(`
`),m=[kd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+a:"",e.envMap?"#define "+d:"",e.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qn?"#define TONE_MAPPING":"",e.toneMapping!==Qn?me.tonemapping_pars_fragment:"",e.toneMapping!==Qn?by("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,My("linearToOutputTexel",e.outputColorSpace),wy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ro).join(`
`)),o=Uh(o),o=Od(o,e),o=Bd(o,e),l=Uh(l),l=Od(l,e),l=Bd(l,e),o=zd(o),l=zd(l),e.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,g=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===mh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===mh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let N=C+g+o,w=C+m+l,A=Nd(s,s.VERTEX_SHADER,N),T=Nd(s,s.FRAGMENT_SHADER,w);s.attachShader(M,A),s.attachShader(M,T),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function U(F){if(n.debug.checkShaderErrors){let Y=s.getProgramInfoLog(M)||"",B=s.getShaderInfoLog(A)||"",L=s.getShaderInfoLog(T)||"",k=Y.trim(),W=B.trim(),$=L.trim(),J=!0,K=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,M,A,T);else{let st=Fd(s,A,"vertex"),ot=Fd(s,T,"fragment");re("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+k+`
`+st+`
`+ot)}else k!==""?te("WebGLProgram: Program Info Log:",k):(W===""||$==="")&&(K=!1);K&&(F.diagnostics={runnable:J,programLog:k,vertexShader:{log:W,prefix:g},fragmentShader:{log:$,prefix:m}})}s.deleteShader(A),s.deleteShader(T),v=new sr(s,M),b=Ty(s,M)}let v;this.getUniforms=function(){return v===void 0&&U(this),v};let b;this.getAttributes=function(){return b===void 0&&U(this),b};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(M,xy)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=_y++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=A,this.fragmentShader=T,this}var Hy=0,Fh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Oh(t),e.set(t,i)),i}},Oh=class{constructor(t){this.id=Hy++,this.code=t,this.usedTimes=0}};function Wy(n){return n===ss||n===eo||n===no}function Xy(n,t,e,i,s,r){let o=new Nr,l=new Fh,c=new Set,a=[],d=new Map,h=i.logarithmicDepthBuffer,u=i.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return c.add(v),v===0?"uv":`uv${v}`}function M(v,b,R,F,Y,B){let L=F.fog,k=Y.geometry,W=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?F.environment:null,$=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,J=t.get(v.envMap||W,$),K=J&&J.mapping===Zr?J.image.height:null,st=x[v.type];v.precision!==null&&(u=i.getMaxPrecision(v.precision),u!==v.precision&&te("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let ot=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Tt=ot!==void 0?ot.length:0,j=0;k.morphAttributes.position!==void 0&&(j=1),k.morphAttributes.normal!==void 0&&(j=2),k.morphAttributes.color!==void 0&&(j=3);let At,vt,_t,q;if(st){let Ue=xi[st];At=Ue.vertexShader,vt=Ue.fragmentShader}else{At=v.vertexShader,vt=v.fragmentShader;let Ue=l.getVertexShaderStage(v),ee=l.getFragmentShaderStage(v);l.update(v,Ue,ee),_t=Ue.id,q=ee.id}let nt=n.getRenderTarget(),yt=n.state.buffers.depth.getReversed(),Ot=Y.isInstancedMesh===!0,xt=Y.isBatchedMesh===!0,Bt=!!v.map,jt=!!v.matcap,Xt=!!J,Zt=!!v.aoMap,he=!!v.lightMap,Ht=!!v.bumpMap&&v.wireframe===!1,le=!!v.normalMap,Ne=!!v.displacementMap,He=!!v.emissiveMap,Ce=!!v.metalnessMap,we=!!v.roughnessMap,V=v.anisotropy>0,We=v.clearcoat>0,ve=v.dispersion>0,I=v.retroreflectivity>0,y=v.iridescence>0,X=v.sheen>0,it=v.transmission>0,at=V&&!!v.anisotropyMap,wt=We&&!!v.clearcoatMap,Et=We&&!!v.clearcoatNormalMap,lt=We&&!!v.clearcoatRoughnessMap,ht=y&&!!v.iridescenceMap,Rt=y&&!!v.iridescenceThicknessMap,Yt=X&&!!v.sheenColorMap,Nt=X&&!!v.sheenRoughnessMap,Ct=!!v.specularMap,$t=!!v.specularColorMap,Qt=!!v.specularIntensityMap,ue=it&&!!v.transmissionMap,H=it&&!!v.thicknessMap,It=!!v.gradientMap,ut=!!v.alphaMap,Pt=v.alphaTest>0,Lt=!!v.alphaHash,gt=!!v.extensions,ct=Qn;v.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(ct=n.toneMapping);let ft={shaderID:st,shaderType:v.type,shaderName:v.name,vertexShader:At,fragmentShader:vt,defines:v.defines,customVertexShaderID:_t,customFragmentShaderID:q,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:xt,batchingColor:xt&&Y._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&Y.instanceColor!==null,instancingMorph:Ot&&Y.morphTexture!==null,outputColorSpace:nt===null?n.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Se.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Bt,matcap:jt,envMap:Xt,envMapMode:Xt&&J.mapping,envMapCubeUVHeight:K,aoMap:Zt,lightMap:he,bumpMap:Ht,normalMap:le,displacementMap:Ne,emissiveMap:He,normalMapObjectSpace:le&&v.normalMapType===ad,normalMapTangentSpace:le&&v.normalMapType===dh,packedNormalMap:le&&v.normalMapType===dh&&Wy(v.normalMap.format),metalnessMap:Ce,roughnessMap:we,anisotropy:V,anisotropyMap:at,clearcoat:We,clearcoatMap:wt,clearcoatNormalMap:Et,clearcoatRoughnessMap:lt,dispersion:ve,retroreflection:I,iridescence:y,iridescenceMap:ht,iridescenceThicknessMap:Rt,sheen:X,sheenColorMap:Yt,sheenRoughnessMap:Nt,specularMap:Ct,specularColorMap:$t,specularIntensityMap:Qt,transmission:it,transmissionMap:ue,thicknessMap:H,gradientMap:It,opaque:v.transparent===!1&&v.blending===Qs&&v.alphaToCoverage===!1,alphaMap:ut,alphaTest:Pt,alphaHash:Lt,combine:v.combine,mapUv:Bt&&_(v.map.channel),aoMapUv:Zt&&_(v.aoMap.channel),lightMapUv:he&&_(v.lightMap.channel),bumpMapUv:Ht&&_(v.bumpMap.channel),normalMapUv:le&&_(v.normalMap.channel),displacementMapUv:Ne&&_(v.displacementMap.channel),emissiveMapUv:He&&_(v.emissiveMap.channel),metalnessMapUv:Ce&&_(v.metalnessMap.channel),roughnessMapUv:we&&_(v.roughnessMap.channel),anisotropyMapUv:at&&_(v.anisotropyMap.channel),clearcoatMapUv:wt&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:Et&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ht&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Yt&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&_(v.sheenRoughnessMap.channel),specularMapUv:Ct&&_(v.specularMap.channel),specularColorMapUv:$t&&_(v.specularColorMap.channel),specularIntensityMapUv:Qt&&_(v.specularIntensityMap.channel),transmissionMapUv:ue&&_(v.transmissionMap.channel),thicknessMapUv:H&&_(v.thicknessMap.channel),alphaMapUv:ut&&_(v.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(le||V),vertexNormals:!!k.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!k.attributes.uv&&(Bt||ut),fog:!!L,useFog:v.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||k.attributes.normal===void 0&&le===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:yt,skinning:Y.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:j,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:ct,decodeVideoTexture:Bt&&v.map.isVideoTexture===!0&&Se.getTransfer(v.map.colorSpace)===Re,decodeVideoTextureEmissive:He&&v.emissiveMap.isVideoTexture===!0&&Se.getTransfer(v.emissiveMap.colorSpace)===Re,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Hn,flipSided:v.side===Sn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:gt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&v.extensions.multiDraw===!0||xt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ft.vertexUv1s=c.has(1),ft.vertexUv2s=c.has(2),ft.vertexUv3s=c.has(3),c.clear(),ft}function g(v){let b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(let R in v.defines)b.push(R),b.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(m(b,v),C(b,v),b.push(n.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function m(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numSunLights),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numSunLightShadows),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function C(v,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function N(v){let b=x[v.type],R;if(b){let F=xi[b];R=Md.clone(F.uniforms)}else R=v.uniforms;return R}function w(v,b){let R=d.get(b);return R!==void 0?++R.usedTimes:(R=new Gy(n,b,v,s),a.push(R),d.set(b,R)),R}function A(v){if(--v.usedTimes===0){let b=a.indexOf(v);a[b]=a[a.length-1],a.pop(),d.delete(v.cacheKey),v.destroy()}}function T(v){l.remove(v)}function U(){l.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:N,acquireProgram:w,releaseProgram:A,releaseShaderCache:T,programs:a,dispose:U}}function qy(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let l=n.get(o);return l===void 0&&(l={},n.set(o,l)),l}function i(o){n.delete(o)}function s(o,l,c){n.get(o)[l]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Yy(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Vd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Gd(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u){let x=0;return u.isInstancedMesh&&(x+=2),u.isSkinnedMesh&&(x+=1),x}function l(u,x,_,M,g,m){let C=n[t];return C===void 0?(C={id:u.id,object:u,geometry:x,material:_,materialVariant:o(u),groupOrder:M,renderOrder:u.renderOrder,z:g,group:m},n[t]=C):(C.id=u.id,C.object=u,C.geometry=x,C.material=_,C.materialVariant=o(u),C.groupOrder=M,C.renderOrder=u.renderOrder,C.z=g,C.group=m),t++,C}function c(u,x,_,M,g,m,C){C.reversedDepth===!0&&(g=-g);let N=l(u,x,_,M,g,m);_.transmission>0?i.push(N):_.transparent===!0?s.push(N):e.push(N)}function a(u,x,_,M,g,m){let C=l(u,x,_,M,g,m);_.transmission>0?i.unshift(C):_.transparent===!0?s.unshift(C):e.unshift(C)}function d(u,x){e.length>1&&e.sort(u||Yy),i.length>1&&i.sort(x||Vd),s.length>1&&s.sort(x||Vd)}function h(){for(let u=t,x=n.length;u<x;u++){let _=n[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:c,unshift:a,finish:h,sort:d}}function $y(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Gd,n.set(i,[o])):s>=r.length?(o=new Gd,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Zy(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new Z,color:new ae};break;case"SpotLight":e={position:new Z,direction:new Z,color:new ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Z,color:new ae,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Z,skyColor:new ae,groundColor:new ae};break;case"RectAreaLight":e={color:new ae,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return n[t.id]=e,e}}}function Jy(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Ky=0;function jy(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Qy(n){let t=new Zy,e=Jy(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let a=0;a<9;a++)i.probe.push(new Z);let s=new Z,r=new Ge,o=new Ge;function l(a){let d=0,h=0,u=0;for(let Y=0;Y<9;Y++)i.probe[Y].set(0,0,0);let x=0,_=0,M=0,g=0,m=0,C=0,N=0,w=0,A=0,T=0,U=0,v=0,b=0,R=0;a.sort(jy);for(let Y=0,B=a.length;Y<B;Y++){let L=a[Y],k=L.color,W=L.intensity,$=L.distance,J=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===ss?J=L.shadow.map.texture:J=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)d+=k.r*W,h+=k.g*W,u+=k.b*W;else if(L.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(L.sh.coefficients[K],W);R++}else if(L.isSunLight){let K=t.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let st=L.shadow,ot=e.get(L);ot.shadowIntensity=st.intensity,ot.shadowBias=st.bias,ot.shadowNormalBias=st.normalBias,ot.shadowRadius=st.radius,ot.shadowMapSize.copy(st.mapSize).multiply(st.getFrameExtents()),i.sunShadow[_]=ot,i.sunShadowMap[_]=J;let Tt=st.getViewportCount();for(let j=0;j<Tt;j++)i.sunShadowMatrix[M+j]=st.getMatrix(j),i.sunShadowCascade[M+j]=st._cascadeData[j];M+=Tt,_++}i.sun[x]=K,x++}else if(L.isDirectionalLight){let K=t.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let st=L.shadow,ot=e.get(L);ot.shadowIntensity=st.intensity,ot.shadowBias=st.bias,ot.shadowNormalBias=st.normalBias,ot.shadowRadius=st.radius,ot.shadowMapSize=st.mapSize,i.directionalShadow[g]=ot,i.directionalShadowMap[g]=J,i.directionalShadowMatrix[g]=L.shadow.matrix,A++}i.directional[g]=K,g++}else if(L.isSpotLight){let K=t.get(L);K.position.setFromMatrixPosition(L.matrixWorld),K.color.copy(k).multiplyScalar(W),K.distance=$,K.coneCos=Math.cos(L.angle),K.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),K.decay=L.decay,i.spot[C]=K;let st=L.shadow;if(L.map&&(i.spotLightMap[v]=L.map,v++,st.updateMatrices(L),L.castShadow&&b++),i.spotLightMatrix[C]=st.matrix,L.castShadow){let ot=e.get(L);ot.shadowIntensity=st.intensity,ot.shadowBias=st.bias,ot.shadowNormalBias=st.normalBias,ot.shadowRadius=st.radius,ot.shadowMapSize=st.mapSize,i.spotShadow[C]=ot,i.spotShadowMap[C]=J,U++}C++}else if(L.isRectAreaLight){let K=t.get(L);K.color.copy(k).multiplyScalar(W),K.halfWidth.set(L.width*.5,0,0),K.halfHeight.set(0,L.height*.5,0),i.rectArea[N]=K,N++}else if(L.isPointLight){let K=t.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),K.distance=L.distance,K.decay=L.decay,L.castShadow){let st=L.shadow,ot=e.get(L);ot.shadowIntensity=st.intensity,ot.shadowBias=st.bias,ot.shadowNormalBias=st.normalBias,ot.shadowRadius=st.radius,ot.shadowMapSize=st.mapSize,ot.shadowCameraNear=st.camera.near,ot.shadowCameraFar=st.camera.far,i.pointShadow[m]=ot,i.pointShadowMap[m]=J,i.pointShadowMatrix[m]=L.shadow.matrix,T++}i.point[m]=K,m++}else if(L.isHemisphereLight){let K=t.get(L);K.skyColor.copy(L.color).multiplyScalar(W),K.groundColor.copy(L.groundColor).multiplyScalar(W),i.hemi[w]=K,w++}}N>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ft.LTC_FLOAT_1,i.rectAreaLTC2=Ft.LTC_FLOAT_2):(i.rectAreaLTC1=Ft.LTC_HALF_1,i.rectAreaLTC2=Ft.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=u;let F=i.hash;(F.sunLength!==x||F.directionalLength!==g||F.pointLength!==m||F.spotLength!==C||F.rectAreaLength!==N||F.hemiLength!==w||F.numSunShadows!==_||F.numDirectionalShadows!==A||F.numPointShadows!==T||F.numSpotShadows!==U||F.numSpotMaps!==v||F.numLightProbes!==R)&&(i.sun.length=x,i.directional.length=g,i.spot.length=C,i.rectArea.length=N,i.point.length=m,i.hemi.length=w,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=U,i.spotShadowMap.length=U,i.spotLightMatrix.length=U+v-b,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=R,F.sunLength=x,F.directionalLength=g,F.pointLength=m,F.spotLength=C,F.rectAreaLength=N,F.hemiLength=w,F.numSunShadows=_,F.numDirectionalShadows=A,F.numPointShadows=T,F.numSpotShadows=U,F.numSpotMaps=v,F.numLightProbes=R,i.version=Ky++)}function c(a,d){let h=0,u=0,x=0,_=0,M=0,g=0,m=d.matrixWorldInverse;for(let C=0,N=a.length;C<N;C++){let w=a[C];if(w.isSunLight){let A=i.sun[h];A.direction.setFromMatrixPosition(w.matrixWorld),A.direction.transformDirection(m),h++}else if(w.isDirectionalLight){let A=i.directional[u];A.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),u++}else if(w.isSpotLight){let A=i.spot[_];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),_++}else if(w.isRectAreaLight){let A=i.rectArea[M];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(m),o.identity(),r.copy(w.matrixWorld),r.premultiply(m),o.extractRotation(r),A.halfWidth.set(w.width*.5,0,0),A.halfHeight.set(0,w.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),M++}else if(w.isPointLight){let A=i.point[x];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(m),x++}else if(w.isHemisphereLight){let A=i.hemi[g];A.direction.setFromMatrixPosition(w.matrixWorld),A.direction.transformDirection(m),g++}}}return{setup:l,setupView:c,state:i}}function Hd(n){let t=new Qy(n),e=[],i=[],s=[];function r(u){h.camera=u,e.length=0,i.length=0,s.length=0}function o(u){e.push(u)}function l(u){i.push(u)}function c(u){s.push(u)}function a(){t.setup(e)}function d(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:a,setupLightsView:d,pushLight:o,pushShadow:l,pushLightProbeGrid:c}}function tv(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),l;return o===void 0?(l=new Hd(n),t.set(s,[l])):r>=o.length?(l=new Hd(n),o.push(l)):l=o[r],l}function i(){t=new WeakMap}return{get:e,dispose:i}}var ev=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,iv=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],sv=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],Wd=new Ge,so=new Z,Ih=new Z;function rv(n,t,e){let i=new zr,s=new xe,r=new xe,o=new Xe,l=new La,c=new Da,a={},d=e.maxTextureSize,h={[ts]:Sn,[Sn]:ts,[Hn]:Hn},u=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:ev,fragmentShader:nv}),x=u.clone();x.defines.HORIZONTAL_PASS=1;let _=new Qe;_.setAttribute("position",new Ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new ke(_,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$r;let m=this.type;this.render=function(T,U,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===Bf&&(te("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=$r);let b=n.getRenderTarget(),R=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),Y=n.state;Y.setBlending(mi),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);let B=m!==this.type;B&&U.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(k=>k.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,k=T.length;L<k;L++){let W=T[L],$=W.shadow;if($===void 0){te("WebGLShadowMap:",W,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let J=$.getFrameExtents();s.multiply(J),r.copy($.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/J.x),s.x=r.x*J.x,$.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/J.y),s.y=r.y*J.y,$.mapSize.y=r.y));let K=n.state.buffers.depth.getReversed();if($.camera._reversedDepth=K,$.map===null||B===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===js){if(W.isPointLight){te("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new bn(s.x,s.y,{format:ss,type:ni,minFilter:Ke,magFilter:Ke,generateMipmaps:!1}),$.map.texture.name=W.name+".shadowMap",$.map.depthTexture=new Ji(s.x,s.y,ei),$.map.depthTexture.name=W.name+".shadowMapDepth",$.map.depthTexture.format=hi,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=on,$.map.depthTexture.magFilter=on}else W.isPointLight?($.map=new Ol(s.x),$.map.depthTexture=new Ia(s.x,ti)):($.map=new bn(s.x,s.y),$.map.depthTexture=new Ji(s.x,s.y,ti)),$.map.depthTexture.name=W.name+".shadowMap",$.map.depthTexture.format=hi,this.type===$r?($.map.depthTexture.compareFunction=K?Dl:Ll,$.map.depthTexture.minFilter=Ke,$.map.depthTexture.magFilter=Ke):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=on,$.map.depthTexture.magFilter=on);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==s.x||$.map.height!==s.y)&&$.map.setSize(s.x,s.y);let st=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();W.isPointLight!==!0&&$.updateMatrices(W,v);for(let ot=0;ot<st;ot++){let Tt=$.getCamera(ot);if(W.isPointLight){let j=$.camera,At=$.matrix,vt=W.distance||j.far;vt!==j.far&&(j.far=vt,j.updateProjectionMatrix()),so.setFromMatrixPosition(W.matrixWorld),j.position.copy(so),Ih.copy(j.position),Ih.add(iv[ot]),j.up.copy(sv[ot]),j.lookAt(Ih),j.updateMatrixWorld(),At.makeTranslation(-so.x,-so.y,-so.z),Wd.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),$._frustum.setFromProjectionMatrix(Wd,j.coordinateSystem,j.reversedDepth)}if($.map.isWebGLCubeRenderTarget)n.setRenderTarget($.map,ot),n.clear();else{ot===0&&(n.setRenderTarget($.map),n.clear());let j=$.getViewport(ot);o.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),Y.viewport(o)}i=$.getFrustum(ot),w(U,v,Tt,W,this.type)}$.isPointLightShadow!==!0&&this.type===js&&C($,v),$.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(b,R,F)};function C(T,U){let v=t.update(M);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,x.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,x.needsUpdate=!0),T.mapPass===null?T.mapPass=new bn(s.x,s.y,{format:ss,type:ni}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(U,null,v,u,M,null),x.uniforms.shadow_pass.value=T.mapPass.texture,x.uniforms.resolution.value.set(T.map.width,T.map.height),x.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(U,null,v,x,M,null)}function N(T,U,v,b){let R=null,F=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(F!==void 0)R=F;else if(R=v.isPointLight===!0?c:l,n.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){let Y=R.uuid,B=U.uuid,L=a[Y];L===void 0&&(L={},a[Y]=L);let k=L[B];k===void 0&&(k=R.clone(),L[B]=k,U.addEventListener("dispose",A)),R=k}if(R.visible=U.visible,R.wireframe=U.wireframe,b===js?R.side=U.shadowSide!==null?U.shadowSide:U.side:R.side=U.shadowSide!==null?U.shadowSide:h[U.side],R.alphaMap=U.alphaMap,R.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,R.map=U.map,R.clipShadows=U.clipShadows,R.clippingPlanes=U.clippingPlanes,R.clipIntersection=U.clipIntersection,R.displacementMap=U.displacementMap,R.displacementScale=U.displacementScale,R.displacementBias=U.displacementBias,R.wireframeLinewidth=U.wireframeLinewidth,R.linewidth=U.linewidth,v.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let Y=n.properties.get(R);Y.light=v}return R}function w(T,U,v,b,R){if(T.visible===!1)return;if(T.layers.test(U.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&R===js)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);let B=t.update(T),L=T.material;if(Array.isArray(L)){let k=B.groups;for(let W=0,$=k.length;W<$;W++){let J=k[W],K=L[J.materialIndex];if(K&&K.visible){let st=N(T,K,b,R);T.onBeforeShadow(n,T,U,v,B,st,J),n.renderBufferDirect(v,null,B,st,T,J),T.onAfterShadow(n,T,U,v,B,st,J)}}}else if(L.visible){let k=N(T,L,b,R);T.onBeforeShadow(n,T,U,v,B,k,null),n.renderBufferDirect(v,null,B,k,T,null),T.onAfterShadow(n,T,U,v,B,k,null)}}let Y=T.children;for(let B=0,L=Y.length;B<L;B++)w(Y[B],U,v,b,R)}function A(T){T.target.removeEventListener("dispose",A);for(let v in a){let b=a[v],R=T.target.uuid;R in b&&(b[R].dispose(),delete b[R])}}}function ov(n,t){function e(){let H=!1,It=new Xe,ut=null,Pt=new Xe(0,0,0,0);return{setMask:function(Lt){ut!==Lt&&!H&&(n.colorMask(Lt,Lt,Lt,Lt),ut=Lt)},setLocked:function(Lt){H=Lt},setClear:function(Lt,gt,ct,ft,Ue){Ue===!0&&(Lt*=ft,gt*=ft,ct*=ft),It.set(Lt,gt,ct,ft),Pt.equals(It)===!1&&(n.clearColor(Lt,gt,ct,ft),Pt.copy(It))},reset:function(){H=!1,ut=null,Pt.set(-1,0,0,0)}}}function i(){let H=!1,It=!1,ut=null,Pt=null,Lt=null;return{setReversed:function(gt){if(It!==gt){let ct=t.get("EXT_clip_control");gt?ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.ZERO_TO_ONE_EXT):ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.NEGATIVE_ONE_TO_ONE_EXT),It=gt;let ft=Lt;Lt=null,this.setClear(ft)}},getReversed:function(){return It},setTest:function(gt){gt?nt(n.DEPTH_TEST):yt(n.DEPTH_TEST)},setMask:function(gt){ut!==gt&&!H&&(n.depthMask(gt),ut=gt)},setFunc:function(gt){if(It&&(gt=_d[gt]),Pt!==gt){switch(gt){case ua:n.depthFunc(n.NEVER);break;case fa:n.depthFunc(n.ALWAYS);break;case da:n.depthFunc(n.LESS);break;case qs:n.depthFunc(n.LEQUAL);break;case pa:n.depthFunc(n.EQUAL);break;case ma:n.depthFunc(n.GEQUAL);break;case ga:n.depthFunc(n.GREATER);break;case xa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Pt=gt}},setLocked:function(gt){H=gt},setClear:function(gt){Lt!==gt&&(Lt=gt,It&&(gt=1-gt),n.clearDepth(gt))},reset:function(){H=!1,ut=null,Pt=null,Lt=null,It=!1}}}function s(){let H=!1,It=null,ut=null,Pt=null,Lt=null,gt=null,ct=null,ft=null,Ue=null;return{setTest:function(ee){H||(ee?nt(n.STENCIL_TEST):yt(n.STENCIL_TEST))},setMask:function(ee){It!==ee&&!H&&(n.stencilMask(ee),It=ee)},setFunc:function(ee,Tn,On){(ut!==ee||Pt!==Tn||Lt!==On)&&(n.stencilFunc(ee,Tn,On),ut=ee,Pt=Tn,Lt=On)},setOp:function(ee,Tn,On){(gt!==ee||ct!==Tn||ft!==On)&&(n.stencilOp(ee,Tn,On),gt=ee,ct=Tn,ft=On)},setLocked:function(ee){H=ee},setClear:function(ee){Ue!==ee&&(n.clearStencil(ee),Ue=ee)},reset:function(){H=!1,It=null,ut=null,Pt=null,Lt=null,gt=null,ct=null,ft=null,Ue=null}}}let r=new e,o=new i,l=new s,c=new WeakMap,a=new WeakMap,d={},h={},u={},x=new WeakMap,_=[],M=null,g=!1,m=null,C=null,N=null,w=null,A=null,T=null,U=null,v=new ae(0,0,0),b=0,R=!1,F=null,Y=null,B=null,L=null,k=null,W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,J=0,K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(K)[1]),$=J>=1):K.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),$=J>=2);let st=null,ot={},Tt=n.getParameter(n.SCISSOR_BOX),j=n.getParameter(n.VIEWPORT),At=new Xe().fromArray(Tt),vt=new Xe().fromArray(j);function _t(H,It,ut,Pt){let Lt=new Uint8Array(4),gt=n.createTexture();n.bindTexture(H,gt),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ct=0;ct<ut;ct++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(It,0,n.RGBA,1,1,Pt,0,n.RGBA,n.UNSIGNED_BYTE,Lt):n.texImage2D(It+ct,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Lt);return gt}let q={};q[n.TEXTURE_2D]=_t(n.TEXTURE_2D,n.TEXTURE_2D,1),q[n.TEXTURE_CUBE_MAP]=_t(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[n.TEXTURE_2D_ARRAY]=_t(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),q[n.TEXTURE_3D]=_t(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),l.setClear(0),nt(n.DEPTH_TEST),o.setFunc(qs),Ht(!1),le(Xc),nt(n.CULL_FACE),Zt(mi);function nt(H){d[H]!==!0&&(n.enable(H),d[H]=!0)}function yt(H){d[H]!==!1&&(n.disable(H),d[H]=!1)}function Ot(H,It){return u[H]!==It?(n.bindFramebuffer(H,It),u[H]=It,H===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=It),H===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=It),!0):!1}function xt(H,It){let ut=_,Pt=!1;if(H){ut=x.get(It),ut===void 0&&(ut=[],x.set(It,ut));let Lt=H.textures;if(ut.length!==Lt.length||ut[0]!==n.COLOR_ATTACHMENT0){for(let gt=0,ct=Lt.length;gt<ct;gt++)ut[gt]=n.COLOR_ATTACHMENT0+gt;ut.length=Lt.length,Pt=!0}}else ut[0]!==n.BACK&&(ut[0]=n.BACK,Pt=!0);Pt&&n.drawBuffers(ut)}function Bt(H){return M!==H?(n.useProgram(H),M=H,!0):!1}let jt={[xs]:n.FUNC_ADD,[kf]:n.FUNC_SUBTRACT,[Vf]:n.FUNC_REVERSE_SUBTRACT};jt[Gf]=n.MIN,jt[Hf]=n.MAX;let Xt={[Wf]:n.ZERO,[Xf]:n.ONE,[qf]:n.SRC_COLOR,[Zc]:n.SRC_ALPHA,[jf]:n.SRC_ALPHA_SATURATE,[Jf]:n.DST_COLOR,[$f]:n.DST_ALPHA,[Yf]:n.ONE_MINUS_SRC_COLOR,[Jc]:n.ONE_MINUS_SRC_ALPHA,[Kf]:n.ONE_MINUS_DST_COLOR,[Zf]:n.ONE_MINUS_DST_ALPHA,[Qf]:n.CONSTANT_COLOR,[td]:n.ONE_MINUS_CONSTANT_COLOR,[ed]:n.CONSTANT_ALPHA,[nd]:n.ONE_MINUS_CONSTANT_ALPHA};function Zt(H,It,ut,Pt,Lt,gt,ct,ft,Ue,ee){if(H===mi){g===!0&&(yt(n.BLEND),g=!1);return}if(g===!1&&(nt(n.BLEND),g=!0),H!==zf){if(H!==m||ee!==R){if((C!==xs||A!==xs)&&(n.blendEquation(n.FUNC_ADD),C=xs,A=xs),ee)switch(H){case Qs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case qc:n.blendFunc(n.ONE,n.ONE);break;case Yc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $c:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:re("WebGLState: Invalid blending: ",H);break}else switch(H){case Qs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case qc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Yc:re("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $c:re("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:re("WebGLState: Invalid blending: ",H);break}N=null,w=null,T=null,U=null,v.set(0,0,0),b=0,m=H,R=ee}return}Lt=Lt||It,gt=gt||ut,ct=ct||Pt,(It!==C||Lt!==A)&&(n.blendEquationSeparate(jt[It],jt[Lt]),C=It,A=Lt),(ut!==N||Pt!==w||gt!==T||ct!==U)&&(n.blendFuncSeparate(Xt[ut],Xt[Pt],Xt[gt],Xt[ct]),N=ut,w=Pt,T=gt,U=ct),(ft.equals(v)===!1||Ue!==b)&&(n.blendColor(ft.r,ft.g,ft.b,Ue),v.copy(ft),b=Ue),m=H,R=!1}function he(H,It){H.side===Hn?yt(n.CULL_FACE):nt(n.CULL_FACE);let ut=H.side===Sn;It&&(ut=!ut),Ht(ut),H.blending===Qs&&H.transparent===!1?Zt(mi):Zt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);let Pt=H.stencilWrite;l.setTest(Pt),Pt&&(l.setMask(H.stencilWriteMask),l.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),l.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),He(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?nt(n.SAMPLE_ALPHA_TO_COVERAGE):yt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(H){F!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),F=H)}function le(H){H!==Ff?(nt(n.CULL_FACE),H!==Y&&(H===Xc?n.cullFace(n.BACK):H===Of?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):yt(n.CULL_FACE),Y=H}function Ne(H){H!==B&&($&&n.lineWidth(H),B=H)}function He(H,It,ut){H?(nt(n.POLYGON_OFFSET_FILL),(L!==It||k!==ut)&&(L=It,k=ut,o.getReversed()&&(It=-It),n.polygonOffset(It,ut))):yt(n.POLYGON_OFFSET_FILL)}function Ce(H){H?nt(n.SCISSOR_TEST):yt(n.SCISSOR_TEST)}function we(H){H===void 0&&(H=n.TEXTURE0+W-1),st!==H&&(n.activeTexture(H),st=H)}function V(H,It,ut){ut===void 0&&(st===null?ut=n.TEXTURE0+W-1:ut=st);let Pt=ot[ut];Pt===void 0&&(Pt={type:void 0,texture:void 0},ot[ut]=Pt),(Pt.type!==H||Pt.texture!==It)&&(st!==ut&&(n.activeTexture(ut),st=ut),n.bindTexture(H,It||q[H]),Pt.type=H,Pt.texture=It)}function We(){let H=ot[st];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function ve(){try{n.compressedTexImage2D(...arguments)}catch(H){re("WebGLState:",H)}}function I(){try{n.compressedTexImage3D(...arguments)}catch(H){re("WebGLState:",H)}}function y(){try{n.texSubImage2D(...arguments)}catch(H){re("WebGLState:",H)}}function X(){try{n.texSubImage3D(...arguments)}catch(H){re("WebGLState:",H)}}function it(){try{n.compressedTexSubImage2D(...arguments)}catch(H){re("WebGLState:",H)}}function at(){try{n.compressedTexSubImage3D(...arguments)}catch(H){re("WebGLState:",H)}}function wt(){try{n.texStorage2D(...arguments)}catch(H){re("WebGLState:",H)}}function Et(){try{n.texStorage3D(...arguments)}catch(H){re("WebGLState:",H)}}function lt(){try{n.texImage2D(...arguments)}catch(H){re("WebGLState:",H)}}function ht(){try{n.texImage3D(...arguments)}catch(H){re("WebGLState:",H)}}function Rt(H){return h[H]!==void 0?h[H]:n.getParameter(H)}function Yt(H,It){h[H]!==It&&(n.pixelStorei(H,It),h[H]=It)}function Nt(H){At.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),At.copy(H))}function Ct(H){vt.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),vt.copy(H))}function $t(H,It){let ut=a.get(It);ut===void 0&&(ut=new WeakMap,a.set(It,ut));let Pt=ut.get(H);Pt===void 0&&(Pt=n.getUniformBlockIndex(It,H.name),ut.set(H,Pt))}function Qt(H,It){let Pt=a.get(It).get(H);c.get(It)!==Pt&&(n.uniformBlockBinding(It,Pt,H.__bindingPointIndex),c.set(It,Pt))}function ue(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),d={},h={},st=null,ot={},u={},x=new WeakMap,_=[],M=null,g=!1,m=null,C=null,N=null,w=null,A=null,T=null,U=null,v=new ae(0,0,0),b=0,R=!1,F=null,Y=null,B=null,L=null,k=null,At.set(0,0,n.canvas.width,n.canvas.height),vt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),l.reset()}return{buffers:{color:r,depth:o,stencil:l},enable:nt,disable:yt,bindFramebuffer:Ot,drawBuffers:xt,useProgram:Bt,setBlending:Zt,setMaterial:he,setFlipSided:Ht,setCullFace:le,setLineWidth:Ne,setPolygonOffset:He,setScissorTest:Ce,activeTexture:we,bindTexture:V,unbindTexture:We,compressedTexImage2D:ve,compressedTexImage3D:I,texImage2D:lt,texImage3D:ht,pixelStorei:Yt,getParameter:Rt,updateUBOMapping:$t,uniformBlockBinding:Qt,texStorage2D:wt,texStorage3D:Et,texSubImage2D:y,texSubImage3D:X,compressedTexSubImage2D:it,compressedTexSubImage3D:at,scissor:Nt,viewport:Ct,reset:ue}}function av(n,t,e,i,s,r,o){let l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),a=new xe,d=new WeakMap,h=new Set,u,x=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(I,y){return _?new OffscreenCanvas(I,y):Pr("canvas")}function g(I,y,X){let it=1,at=ve(I);if((at.width>X||at.height>X)&&(it=X/Math.max(at.width,at.height)),it<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let wt=Math.floor(it*at.width),Et=Math.floor(it*at.height);u===void 0&&(u=M(wt,Et));let lt=y?M(wt,Et):u;return lt.width=wt,lt.height=Et,lt.getContext("2d").drawImage(I,0,0,wt,Et),te("WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+wt+"x"+Et+")."),lt}else return"data"in I&&te("WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),I;return I}function m(I){return I.generateMipmaps}function C(I){n.generateMipmap(I)}function N(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(I,y,X,it,at,wt=!1){if(I!==null){if(n[I]!==void 0)return n[I];te("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Et;it&&(Et=t.get("EXT_texture_norm16"),Et||te("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let lt=y;if(y===n.RED&&(X===n.FLOAT&&(lt=n.R32F),X===n.HALF_FLOAT&&(lt=n.R16F),X===n.UNSIGNED_BYTE&&(lt=n.R8),X===n.UNSIGNED_SHORT&&Et&&(lt=Et.R16_EXT),X===n.SHORT&&Et&&(lt=Et.R16_SNORM_EXT)),y===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(lt=n.R8UI),X===n.UNSIGNED_SHORT&&(lt=n.R16UI),X===n.UNSIGNED_INT&&(lt=n.R32UI),X===n.BYTE&&(lt=n.R8I),X===n.SHORT&&(lt=n.R16I),X===n.INT&&(lt=n.R32I)),y===n.RG&&(X===n.FLOAT&&(lt=n.RG32F),X===n.HALF_FLOAT&&(lt=n.RG16F),X===n.UNSIGNED_BYTE&&(lt=n.RG8),X===n.UNSIGNED_SHORT&&Et&&(lt=Et.RG16_EXT),X===n.SHORT&&Et&&(lt=Et.RG16_SNORM_EXT)),y===n.RG_INTEGER&&(X===n.UNSIGNED_BYTE&&(lt=n.RG8UI),X===n.UNSIGNED_SHORT&&(lt=n.RG16UI),X===n.UNSIGNED_INT&&(lt=n.RG32UI),X===n.BYTE&&(lt=n.RG8I),X===n.SHORT&&(lt=n.RG16I),X===n.INT&&(lt=n.RG32I)),y===n.RGB_INTEGER&&(X===n.UNSIGNED_BYTE&&(lt=n.RGB8UI),X===n.UNSIGNED_SHORT&&(lt=n.RGB16UI),X===n.UNSIGNED_INT&&(lt=n.RGB32UI),X===n.BYTE&&(lt=n.RGB8I),X===n.SHORT&&(lt=n.RGB16I),X===n.INT&&(lt=n.RGB32I)),y===n.RGBA_INTEGER&&(X===n.UNSIGNED_BYTE&&(lt=n.RGBA8UI),X===n.UNSIGNED_SHORT&&(lt=n.RGBA16UI),X===n.UNSIGNED_INT&&(lt=n.RGBA32UI),X===n.BYTE&&(lt=n.RGBA8I),X===n.SHORT&&(lt=n.RGBA16I),X===n.INT&&(lt=n.RGBA32I)),y===n.RGB&&(X===n.UNSIGNED_SHORT&&Et&&(lt=Et.RGB16_EXT),X===n.SHORT&&Et&&(lt=Et.RGB16_SNORM_EXT),X===n.UNSIGNED_INT_5_9_9_9_REV&&(lt=n.RGB9_E5),X===n.UNSIGNED_INT_10F_11F_11F_REV&&(lt=n.R11F_G11F_B10F)),y===n.RGBA){let ht=wt?Rr:Se.getTransfer(at);X===n.FLOAT&&(lt=n.RGBA32F),X===n.HALF_FLOAT&&(lt=n.RGBA16F),X===n.UNSIGNED_BYTE&&(lt=ht===Re?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT&&Et&&(lt=Et.RGBA16_EXT),X===n.SHORT&&Et&&(lt=Et.RGBA16_SNORM_EXT),X===n.UNSIGNED_SHORT_4_4_4_4&&(lt=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(lt=n.RGB5_A1)}return(lt===n.R16F||lt===n.R32F||lt===n.RG16F||lt===n.RG32F||lt===n.RGBA16F||lt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function A(I,y){let X;return I?y===null||y===ti||y===er?X=n.DEPTH24_STENCIL8:y===ei?X=n.DEPTH32F_STENCIL8:y===tr&&(X=n.DEPTH24_STENCIL8,te("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ti||y===er?X=n.DEPTH_COMPONENT24:y===ei?X=n.DEPTH_COMPONENT32F:y===tr&&(X=n.DEPTH_COMPONENT16),X}function T(I,y){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==on&&I.minFilter!==Ke?Math.log2(Math.max(y.width,y.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?y.mipmaps.length:1}function U(I){let y=I.target;y.removeEventListener("dispose",U),b(y),y.isVideoTexture&&d.delete(y),y.isHTMLTexture&&h.delete(y)}function v(I){let y=I.target;y.removeEventListener("dispose",v),F(y)}function b(I){let y=i.get(I);if(y.__webglInit===void 0)return;let X=I.source,it=x.get(X);if(it){let at=it[y.__cacheKey];at.usedTimes--,at.usedTimes===0&&R(I),Object.keys(it).length===0&&x.delete(X)}i.remove(I)}function R(I){let y=i.get(I);n.deleteTexture(y.__webglTexture);let X=I.source,it=x.get(X);delete it[y.__cacheKey],o.memory.textures--}function F(I){let y=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(y.__webglFramebuffer[it]))for(let at=0;at<y.__webglFramebuffer[it].length;at++)n.deleteFramebuffer(y.__webglFramebuffer[it][at]);else n.deleteFramebuffer(y.__webglFramebuffer[it]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[it])}else{if(Array.isArray(y.__webglFramebuffer))for(let it=0;it<y.__webglFramebuffer.length;it++)n.deleteFramebuffer(y.__webglFramebuffer[it]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let it=0;it<y.__webglColorRenderbuffer.length;it++)y.__webglColorRenderbuffer[it]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[it]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let X=I.textures;for(let it=0,at=X.length;it<at;it++){let wt=i.get(X[it]);wt.__webglTexture&&(n.deleteTexture(wt.__webglTexture),o.memory.textures--),i.remove(X[it])}i.remove(I)}let Y=0;function B(){Y=0}function L(){return Y}function k(I){Y=I}function W(){let I=Y;return I>=s.maxTextures&&te("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),Y+=1,I}function $(I){let y=[];return y.push(I.wrapS),y.push(I.wrapT),y.push(I.wrapR||0),y.push(I.magFilter),y.push(I.minFilter),y.push(I.anisotropy),y.push(I.internalFormat),y.push(I.format),y.push(I.type),y.push(I.generateMipmaps),y.push(I.premultiplyAlpha),y.push(I.flipY),y.push(I.unpackAlignment),y.push(I.colorSpace),y.join()}function J(I,y){let X=i.get(I);if(I.isVideoTexture&&V(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&X.__version!==I.version){let it=I.image;if(it===null)te("WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)te("WebGLRenderer: Texture marked for update but image is incomplete");else{yt(X,I,y);return}}else I.isExternalTexture&&(X.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+y)}function K(I,y){let X=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&X.__version!==I.version){yt(X,I,y);return}else I.isExternalTexture&&(X.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+y)}function st(I,y){let X=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&X.__version!==I.version){yt(X,I,y);return}e.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+y)}function ot(I,y){let X=i.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&X.__version!==I.version){Ot(X,I,y);return}e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+y)}let Tt={[_a]:n.REPEAT,[ci]:n.CLAMP_TO_EDGE,[ya]:n.MIRRORED_REPEAT},j={[on]:n.NEAREST,[rd]:n.NEAREST_MIPMAP_NEAREST,[Jr]:n.NEAREST_MIPMAP_LINEAR,[Ke]:n.LINEAR,[Za]:n.LINEAR_MIPMAP_NEAREST,[ns]:n.LINEAR_MIPMAP_LINEAR},At={[cd]:n.NEVER,[pd]:n.ALWAYS,[hd]:n.LESS,[Ll]:n.LEQUAL,[ud]:n.EQUAL,[Dl]:n.GEQUAL,[fd]:n.GREATER,[dd]:n.NOTEQUAL};function vt(I,y){if(y.type===ei&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Ke||y.magFilter===Za||y.magFilter===Jr||y.magFilter===ns||y.minFilter===Ke||y.minFilter===Za||y.minFilter===Jr||y.minFilter===ns)&&te("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,Tt[y.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,Tt[y.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,Tt[y.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,j[y.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,j[y.minFilter]),y.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,At[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===on||y.minFilter!==Jr&&y.minFilter!==ns||y.type===ei&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");n.texParameterf(I,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function _t(I,y){let X=!1;I.__webglInit===void 0&&(I.__webglInit=!0,y.addEventListener("dispose",U));let it=y.source,at=x.get(it);at===void 0&&(at={},x.set(it,at));let wt=$(y);if(wt!==I.__cacheKey){at[wt]===void 0&&(at[wt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,X=!0),at[wt].usedTimes++;let Et=at[I.__cacheKey];Et!==void 0&&(at[I.__cacheKey].usedTimes--,Et.usedTimes===0&&R(y)),I.__cacheKey=wt,I.__webglTexture=at[wt].texture}return X}function q(I,y,X){return Math.floor(Math.floor(I/X)/y)}function nt(I,y,X,it){let wt=I.updateRanges;if(wt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,X,it,y.data);else{wt.sort((Yt,Nt)=>Yt.start-Nt.start);let Et=0;for(let Yt=1;Yt<wt.length;Yt++){let Nt=wt[Et],Ct=wt[Yt],$t=Nt.start+Nt.count,Qt=q(Ct.start,y.width,4),ue=q(Nt.start,y.width,4);Ct.start<=$t+1&&Qt===ue&&q(Ct.start+Ct.count-1,y.width,4)===Qt?Nt.count=Math.max(Nt.count,Ct.start+Ct.count-Nt.start):(++Et,wt[Et]=Ct)}wt.length=Et+1;let lt=e.getParameter(n.UNPACK_ROW_LENGTH),ht=e.getParameter(n.UNPACK_SKIP_PIXELS),Rt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let Yt=0,Nt=wt.length;Yt<Nt;Yt++){let Ct=wt[Yt],$t=Math.floor(Ct.start/4),Qt=Math.ceil(Ct.count/4),ue=$t%y.width,H=Math.floor($t/y.width),It=Qt,ut=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,ue),e.pixelStorei(n.UNPACK_SKIP_ROWS,H),e.texSubImage2D(n.TEXTURE_2D,0,ue,H,It,ut,X,it,y.data)}I.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,lt),e.pixelStorei(n.UNPACK_SKIP_PIXELS,ht),e.pixelStorei(n.UNPACK_SKIP_ROWS,Rt)}}function yt(I,y,X){let it=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(it=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(it=n.TEXTURE_3D);let at=_t(I,y),wt=y.source;e.bindTexture(it,I.__webglTexture,n.TEXTURE0+X);let Et=i.get(wt);if(wt.version!==Et.__version||at===!0){if(e.activeTexture(n.TEXTURE0+X),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let ut=Se.getPrimaries(Se.workingColorSpace),Pt=y.colorSpace===Ii?null:Se.getPrimaries(y.colorSpace),Lt=y.colorSpace===Ii||ut===Pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt)}e.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment);let ht=g(y.image,!1,s.maxTextureSize);ht=We(y,ht);let Rt=r.convert(y.format,y.colorSpace),Yt=r.convert(y.type),Nt=w(y.internalFormat,Rt,Yt,y.normalized,y.colorSpace,y.isVideoTexture);vt(it,y);let Ct,$t=y.mipmaps,Qt=y.isVideoTexture!==!0,ue=Et.__version===void 0||at===!0,H=wt.dataReady,It=T(y,ht);if(y.isDepthTexture)Nt=A(y.format===is,y.type),ue&&(Qt?e.texStorage2D(n.TEXTURE_2D,1,Nt,ht.width,ht.height):e.texImage2D(n.TEXTURE_2D,0,Nt,ht.width,ht.height,0,Rt,Yt,null));else if(y.isDataTexture)if($t.length>0){Qt&&ue&&e.texStorage2D(n.TEXTURE_2D,It,Nt,$t[0].width,$t[0].height);for(let ut=0,Pt=$t.length;ut<Pt;ut++)Ct=$t[ut],Qt?H&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,Ct.width,Ct.height,Rt,Yt,Ct.data):e.texImage2D(n.TEXTURE_2D,ut,Nt,Ct.width,Ct.height,0,Rt,Yt,Ct.data);y.generateMipmaps=!1}else Qt?(ue&&e.texStorage2D(n.TEXTURE_2D,It,Nt,ht.width,ht.height),H&&nt(y,ht,Rt,Yt)):e.texImage2D(n.TEXTURE_2D,0,Nt,ht.width,ht.height,0,Rt,Yt,ht.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Qt&&ue&&e.texStorage3D(n.TEXTURE_2D_ARRAY,It,Nt,$t[0].width,$t[0].height,ht.depth);for(let ut=0,Pt=$t.length;ut<Pt;ut++)if(Ct=$t[ut],y.format!==Wn)if(Rt!==null)if(Qt){if(H)if(y.layerUpdates.size>0){let Lt=yh(Ct.width,Ct.height,y.format,y.type);for(let gt of y.layerUpdates){let ct=Ct.data.subarray(gt*Lt/Ct.data.BYTES_PER_ELEMENT,(gt+1)*Lt/Ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,gt,Ct.width,Ct.height,1,Rt,ct)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,0,Ct.width,Ct.height,ht.depth,Rt,Ct.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ut,Nt,Ct.width,Ct.height,ht.depth,0,Ct.data,0,0);else te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qt?H&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,0,Ct.width,Ct.height,ht.depth,Rt,Yt,Ct.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ut,Nt,Ct.width,Ct.height,ht.depth,0,Rt,Yt,Ct.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Qt&&ue&&e.texStorage2D(n.TEXTURE_2D,It,Nt,$t[0].width,$t[0].height);for(let ut=0,Pt=$t.length;ut<Pt;ut++)Ct=$t[ut],y.format!==Wn?Rt!==null?Qt?H&&e.compressedTexSubImage2D(n.TEXTURE_2D,ut,0,0,Ct.width,Ct.height,Rt,Ct.data):e.compressedTexImage2D(n.TEXTURE_2D,ut,Nt,Ct.width,Ct.height,0,Ct.data):te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?H&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,Ct.width,Ct.height,Rt,Yt,Ct.data):e.texImage2D(n.TEXTURE_2D,ut,Nt,Ct.width,Ct.height,0,Rt,Yt,Ct.data)}else if(y.isDataArrayTexture)if(Qt){if(ue&&e.texStorage3D(n.TEXTURE_2D_ARRAY,It,Nt,ht.width,ht.height,ht.depth),H)if(y.layerUpdates.size>0){let ut=yh(ht.width,ht.height,y.format,y.type);for(let Pt of y.layerUpdates){let Lt=ht.data.subarray(Pt*ut/ht.data.BYTES_PER_ELEMENT,(Pt+1)*ut/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Pt,ht.width,ht.height,1,Rt,Yt,Lt)}y.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,Rt,Yt,ht.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Nt,ht.width,ht.height,ht.depth,0,Rt,Yt,ht.data);else if(y.isData3DTexture)Qt?(ue&&e.texStorage3D(n.TEXTURE_3D,It,Nt,ht.width,ht.height,ht.depth),H&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,Rt,Yt,ht.data)):e.texImage3D(n.TEXTURE_3D,0,Nt,ht.width,ht.height,ht.depth,0,Rt,Yt,ht.data);else if(y.isFramebufferTexture){if(ue)if(Qt)e.texStorage2D(n.TEXTURE_2D,It,Nt,ht.width,ht.height);else{let ut=ht.width,Pt=ht.height;for(let Lt=0;Lt<It;Lt++)e.texImage2D(n.TEXTURE_2D,Lt,Nt,ut,Pt,0,Rt,Yt,null),ut>>=1,Pt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in n){let ut=n.canvas;if(ut.hasAttribute("layoutsubtree")||ut.setAttribute("layoutsubtree","true"),ht.parentNode!==ut){ut.appendChild(ht),h.add(y),ut.onpaint=Pt=>{let Lt=Pt.changedElements;for(let gt of h)Lt.includes(gt.image)&&(gt.needsUpdate=!0)},ut.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ht);else{let Lt=n.RGBA,gt=n.RGBA,ct=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Lt,gt,ct,ht)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if($t.length>0){if(Qt&&ue){let ut=ve($t[0]);e.texStorage2D(n.TEXTURE_2D,It,Nt,ut.width,ut.height)}for(let ut=0,Pt=$t.length;ut<Pt;ut++)Ct=$t[ut],Qt?H&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,Rt,Yt,Ct):e.texImage2D(n.TEXTURE_2D,ut,Nt,Rt,Yt,Ct);y.generateMipmaps=!1}else if(Qt){if(ue){let ut=ve(ht);e.texStorage2D(n.TEXTURE_2D,It,Nt,ut.width,ut.height)}H&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Rt,Yt,ht)}else e.texImage2D(n.TEXTURE_2D,0,Nt,Rt,Yt,ht);m(y)&&C(it),Et.__version=wt.version,y.onUpdate&&y.onUpdate(y)}I.__version=y.version}function Ot(I,y,X){if(y.image.length!==6)return;let it=_t(I,y),at=y.source;e.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+X);let wt=i.get(at);if(at.version!==wt.__version||it===!0){e.activeTexture(n.TEXTURE0+X);let Et=Se.getPrimaries(Se.workingColorSpace),lt=y.colorSpace===Ii?null:Se.getPrimaries(y.colorSpace),ht=y.colorSpace===Ii||Et===lt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let Rt=y.isCompressedTexture||y.image[0].isCompressedTexture,Yt=y.image[0]&&y.image[0].isDataTexture,Nt=[];for(let gt=0;gt<6;gt++)!Rt&&!Yt?Nt[gt]=g(y.image[gt],!0,s.maxCubemapSize):Nt[gt]=Yt?y.image[gt].image:y.image[gt],Nt[gt]=We(y,Nt[gt]);let Ct=Nt[0],$t=r.convert(y.format,y.colorSpace),Qt=r.convert(y.type),ue=w(y.internalFormat,$t,Qt,y.normalized,y.colorSpace),H=y.isVideoTexture!==!0,It=wt.__version===void 0||it===!0,ut=at.dataReady,Pt=T(y,Ct);vt(n.TEXTURE_CUBE_MAP,y);let Lt;if(Rt){H&&It&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Pt,ue,Ct.width,Ct.height);for(let gt=0;gt<6;gt++){Lt=Nt[gt].mipmaps;for(let ct=0;ct<Lt.length;ct++){let ft=Lt[ct];y.format!==Wn?$t!==null?H?ut&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,ct,0,0,ft.width,ft.height,$t,ft.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,ct,ue,ft.width,ft.height,0,ft.data):te("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,ct,0,0,ft.width,ft.height,$t,Qt,ft.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,ct,ue,ft.width,ft.height,0,$t,Qt,ft.data)}}}else{if(Lt=y.mipmaps,H&&It){Lt.length>0&&Pt++;let gt=ve(Nt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Pt,ue,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(Yt){H?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Nt[gt].width,Nt[gt].height,$t,Qt,Nt[gt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ue,Nt[gt].width,Nt[gt].height,0,$t,Qt,Nt[gt].data);for(let ct=0;ct<Lt.length;ct++){let Ue=Lt[ct].image[gt].image;H?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,ct+1,0,0,Ue.width,Ue.height,$t,Qt,Ue.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,ct+1,ue,Ue.width,Ue.height,0,$t,Qt,Ue.data)}}else{H?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,$t,Qt,Nt[gt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ue,$t,Qt,Nt[gt]);for(let ct=0;ct<Lt.length;ct++){let ft=Lt[ct];H?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,ct+1,0,0,$t,Qt,ft.image[gt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,ct+1,ue,$t,Qt,ft.image[gt])}}}m(y)&&C(n.TEXTURE_CUBE_MAP),wt.__version=at.version,y.onUpdate&&y.onUpdate(y)}I.__version=y.version}function xt(I,y,X,it,at,wt){let Et=r.convert(X.format,X.colorSpace),lt=r.convert(X.type),ht=w(X.internalFormat,Et,lt,X.normalized,X.colorSpace),Rt=i.get(y),Yt=i.get(X);if(Yt.__renderTarget=y,!Rt.__hasExternalTextures){let Nt=Math.max(1,y.width>>wt),Ct=Math.max(1,y.height>>wt);at===n.TEXTURE_3D||at===n.TEXTURE_2D_ARRAY?e.texImage3D(at,wt,ht,Nt,Ct,y.depth,0,Et,lt,null):e.texImage2D(at,wt,ht,Nt,Ct,0,Et,lt,null)}e.bindFramebuffer(n.FRAMEBUFFER,I),we(y)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,it,at,Yt.__webglTexture,0,Ce(y)):(at===n.TEXTURE_2D||at>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,it,at,Yt.__webglTexture,wt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Bt(I,y,X){if(n.bindRenderbuffer(n.RENDERBUFFER,I),y.depthBuffer){let it=y.depthTexture,at=it&&it.isDepthTexture?it.type:null,wt=A(y.stencilBuffer,at),Et=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;we(y)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ce(y),wt,y.width,y.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce(y),wt,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,wt,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Et,n.RENDERBUFFER,I)}else{let it=y.textures;for(let at=0;at<it.length;at++){let wt=it[at],Et=r.convert(wt.format,wt.colorSpace),lt=r.convert(wt.type),ht=w(wt.internalFormat,Et,lt,wt.normalized,wt.colorSpace);we(y)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ce(y),ht,y.width,y.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce(y),ht,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,ht,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function jt(I,y,X){let it=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,I),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let at=i.get(y.depthTexture);if(at.__renderTarget=y,(!at.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),it){if(at.__webglInit===void 0&&(at.__webglInit=!0,y.depthTexture.addEventListener("dispose",U)),at.__webglTexture===void 0){at.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,at.__webglTexture),vt(n.TEXTURE_CUBE_MAP,y.depthTexture);let Rt=r.convert(y.depthTexture.format),Yt=r.convert(y.depthTexture.type),Nt;y.depthTexture.format===hi?Nt=n.DEPTH_COMPONENT24:y.depthTexture.format===is&&(Nt=n.DEPTH24_STENCIL8);for(let Ct=0;Ct<6;Ct++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,Nt,y.width,y.height,0,Rt,Yt,null)}}else J(y.depthTexture,0);let wt=at.__webglTexture,Et=Ce(y),lt=it?n.TEXTURE_CUBE_MAP_POSITIVE_X+X:n.TEXTURE_2D,ht=y.depthTexture.format===is?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(y.depthTexture.format===hi)we(y)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ht,lt,wt,0,Et):n.framebufferTexture2D(n.FRAMEBUFFER,ht,lt,wt,0);else if(y.depthTexture.format===is)we(y)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ht,lt,wt,0,Et):n.framebufferTexture2D(n.FRAMEBUFFER,ht,lt,wt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Xt(I){let y=i.get(I),X=I.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==I.depthTexture){let it=I.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),it){let at=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,it.removeEventListener("dispose",at)};it.addEventListener("dispose",at),y.__depthDisposeCallback=at}y.__boundDepthTexture=it}if(I.depthTexture&&!y.__autoAllocateDepthBuffer)if(X)for(let it=0;it<6;it++)jt(y.__webglFramebuffer[it],I,it);else{let it=I.texture.mipmaps;it&&it.length>0?jt(y.__webglFramebuffer[0],I,0):jt(y.__webglFramebuffer,I,0)}else if(X){y.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[it]),y.__webglDepthbuffer[it]===void 0)y.__webglDepthbuffer[it]=n.createRenderbuffer(),Bt(y.__webglDepthbuffer[it],I,!1);else{let at=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,wt=y.__webglDepthbuffer[it];n.bindRenderbuffer(n.RENDERBUFFER,wt),n.framebufferRenderbuffer(n.FRAMEBUFFER,at,n.RENDERBUFFER,wt)}}else{let it=I.texture.mipmaps;if(it&&it.length>0?e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),Bt(y.__webglDepthbuffer,I,!1);else{let at=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,wt=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,wt),n.framebufferRenderbuffer(n.FRAMEBUFFER,at,n.RENDERBUFFER,wt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Zt(I,y,X){let it=i.get(I);y!==void 0&&xt(it.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&Xt(I)}function he(I){let y=I.texture,X=i.get(I),it=i.get(y);I.addEventListener("dispose",v);let at=I.textures,wt=I.isWebGLCubeRenderTarget===!0,Et=at.length>1;if(Et||(it.__webglTexture===void 0&&(it.__webglTexture=n.createTexture()),it.__version=y.version,o.memory.textures++),wt){X.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(y.mipmaps&&y.mipmaps.length>0){X.__webglFramebuffer[lt]=[];for(let ht=0;ht<y.mipmaps.length;ht++)X.__webglFramebuffer[lt][ht]=n.createFramebuffer()}else X.__webglFramebuffer[lt]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){X.__webglFramebuffer=[];for(let lt=0;lt<y.mipmaps.length;lt++)X.__webglFramebuffer[lt]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(Et)for(let lt=0,ht=at.length;lt<ht;lt++){let Rt=i.get(at[lt]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=n.createTexture(),o.memory.textures++)}if(I.samples>0&&we(I)===!1){X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let lt=0;lt<at.length;lt++){let ht=at[lt];X.__webglColorRenderbuffer[lt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[lt]);let Rt=r.convert(ht.format,ht.colorSpace),Yt=r.convert(ht.type),Nt=w(ht.internalFormat,Rt,Yt,ht.normalized,ht.colorSpace,I.isXRRenderTarget===!0),Ct=Ce(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ct,Nt,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.RENDERBUFFER,X.__webglColorRenderbuffer[lt])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),Bt(X.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(wt){e.bindTexture(n.TEXTURE_CUBE_MAP,it.__webglTexture),vt(n.TEXTURE_CUBE_MAP,y);for(let lt=0;lt<6;lt++)if(y.mipmaps&&y.mipmaps.length>0)for(let ht=0;ht<y.mipmaps.length;ht++)xt(X.__webglFramebuffer[lt][ht],I,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,ht);else xt(X.__webglFramebuffer[lt],I,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);m(y)&&C(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let lt=0,ht=at.length;lt<ht;lt++){let Rt=at[lt],Yt=i.get(Rt),Nt=n.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Nt=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Nt,Yt.__webglTexture),vt(Nt,Rt),xt(X.__webglFramebuffer,I,Rt,n.COLOR_ATTACHMENT0+lt,Nt,0),m(Rt)&&C(Nt)}e.unbindTexture()}else{let lt=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(lt=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(lt,it.__webglTexture),vt(lt,y),y.mipmaps&&y.mipmaps.length>0)for(let ht=0;ht<y.mipmaps.length;ht++)xt(X.__webglFramebuffer[ht],I,y,n.COLOR_ATTACHMENT0,lt,ht);else xt(X.__webglFramebuffer,I,y,n.COLOR_ATTACHMENT0,lt,0);m(y)&&C(lt),e.unbindTexture()}I.depthBuffer&&Xt(I)}function Ht(I){let y=I.textures;for(let X=0,it=y.length;X<it;X++){let at=y[X];if(m(at)){let wt=N(I),Et=i.get(at).__webglTexture;e.bindTexture(wt,Et),C(wt),e.unbindTexture()}}}let le=[],Ne=[];function He(I){if(I.samples>0){if(we(I)===!1){let y=I.textures,X=I.width,it=I.height,at=n.COLOR_BUFFER_BIT,wt=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Et=i.get(I),lt=y.length>1;if(lt)for(let Rt=0;Rt<y.length;Rt++)e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Rt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Rt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer);let ht=I.texture.mipmaps;ht&&ht.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Et.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let Rt=0;Rt<y.length;Rt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(at|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(at|=n.STENCIL_BUFFER_BIT)),lt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Et.__webglColorRenderbuffer[Rt]);let Yt=i.get(y[Rt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Yt,0)}n.blitFramebuffer(0,0,X,it,0,0,X,it,at,n.NEAREST),c===!0&&(le.length=0,Ne.length=0,le.push(n.COLOR_ATTACHMENT0+Rt),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(le.push(wt),Ne.push(wt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ne)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,le))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),lt)for(let Rt=0;Rt<y.length;Rt++){e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Rt,n.RENDERBUFFER,Et.__webglColorRenderbuffer[Rt]);let Yt=i.get(y[Rt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Rt,n.TEXTURE_2D,Yt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&c){let y=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function Ce(I){return Math.min(s.maxSamples,I.samples)}function we(I){let y=i.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function V(I){let y=o.render.frame;d.get(I)!==y&&(d.set(I,y),I.update())}function We(I,y){let X=I.colorSpace,it=I.format,at=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||X!==Cr&&X!==Ii&&(Se.getTransfer(X)===Re?(it!==Wn||at!==Un)&&te("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):re("WebGLTextures: Unsupported texture color space:",X)),y}function ve(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(a.width=I.naturalWidth||I.width,a.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(a.width=I.displayWidth,a.height=I.displayHeight):(a.width=I.width,a.height=I.height),a}this.allocateTextureUnit=W,this.resetTextureUnits=B,this.getTextureUnits=L,this.setTextureUnits=k,this.setTexture2D=J,this.setTexture2DArray=K,this.setTexture3D=st,this.setTextureCube=ot,this.rebindTextures=Zt,this.setupRenderTarget=he,this.updateRenderTargetMipmap=Ht,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=Xt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=we,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function lv(n,t){function e(i,s=Ii){let r,o=Se.getTransfer(s);if(i===Un)return n.UNSIGNED_BYTE;if(i===Ka)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ja)return n.UNSIGNED_SHORT_5_5_5_1;if(i===lh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ch)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===oh)return n.BYTE;if(i===ah)return n.SHORT;if(i===tr)return n.UNSIGNED_SHORT;if(i===Ja)return n.INT;if(i===ti)return n.UNSIGNED_INT;if(i===ei)return n.FLOAT;if(i===ni)return n.HALF_FLOAT;if(i===hh)return n.ALPHA;if(i===uh)return n.RGB;if(i===Wn)return n.RGBA;if(i===hi)return n.DEPTH_COMPONENT;if(i===is)return n.DEPTH_STENCIL;if(i===fh)return n.RED;if(i===Qa)return n.RED_INTEGER;if(i===ss)return n.RG;if(i===tl)return n.RG_INTEGER;if(i===el)return n.RGBA_INTEGER;if(i===Kr||i===jr||i===Qr||i===to)if(o===Re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Kr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===to)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Kr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===jr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Qr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===to)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===nl||i===il||i===sl||i===rl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===nl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===il)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===sl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===rl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ol||i===al||i===ll||i===cl||i===hl||i===eo||i===ul)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ol||i===al)return o===Re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ll)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===cl)return r.COMPRESSED_R11_EAC;if(i===hl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===eo)return r.COMPRESSED_RG11_EAC;if(i===ul)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===fl||i===dl||i===pl||i===ml||i===gl||i===xl||i===_l||i===yl||i===vl||i===Ml||i===Sl||i===bl||i===wl||i===Al)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===fl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===dl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===pl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ml)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===gl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===xl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===_l)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===yl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===vl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ml)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Sl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===wl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Al)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===El||i===Tl||i===Cl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===El)return o===Re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Tl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Cl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Rl||i===Il||i===no||i===Pl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Rl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Il)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===no)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Pl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===er?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var cv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Bh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Gr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new mn({vertexShader:cv,fragmentShader:hv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ke(new Wr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},zh=class extends ui{constructor(t,e){super();let i=this,s=null,r=1,o=null,l="local-floor",c=1,a=null,d=null,h=null,u=null,x=null,_=null,M=typeof XRWebGLBinding<"u",g=new Bh,m={},C=e.getContextAttributes(),N=null,w=null,A=[],T=[],U=new xe,v=null,b=null,R=new pn;R.viewport=new Xe;let F=new pn;F.viewport=new Xe;let Y=[R,F],B=new Xa,L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let nt=A[q];return nt===void 0&&(nt=new Zs,A[q]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(q){let nt=A[q];return nt===void 0&&(nt=new Zs,A[q]=nt),nt.getGripSpace()},this.getHand=function(q){let nt=A[q];return nt===void 0&&(nt=new Zs,A[q]=nt),nt.getHandSpace()};function W(q){let nt=T.indexOf(q.inputSource);if(nt===-1)return;let yt=A[nt];yt!==void 0&&(yt.update(q.inputSource,q.frame,a||o),yt.dispatchEvent({type:q.type,data:q.inputSource}))}function $(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",J);for(let q=0;q<A.length;q++){let nt=T[q];nt!==null&&(T[q]=null,A[q].disconnect(nt))}L=null,k=null,g.reset();for(let q in m)delete m[q];if(t.setRenderTarget(N),x=null,u=null,h=null,s=null,w=null,_t.stop(),i.isPresenting=!1,t.setPixelRatio(v),t.setSize(U.width,U.height,!1),b!==null){let q=b.camera;q.fov=b.fov,q.zoom=b.zoom,q.updateProjectionMatrix(),b=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&te("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){l=q,i.isPresenting===!0&&te("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return a||o},this.setReferenceSpace=function(q){a=q},this.getBaseLayer=function(){return u!==null?u:x},this.getBinding=function(){return h===null&&M&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(N=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",$),s.addEventListener("inputsourceschange",J),C.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(U),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,Ot=null,xt=null;C.depth&&(xt=C.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=C.stencil?is:hi,Ot=C.stencil?er:ti);let Bt={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:r};h=this.getBinding(),u=h.createProjectionLayer(Bt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),w=new bn(u.textureWidth,u.textureHeight,{format:Wn,type:Un,depthTexture:new Ji(u.textureWidth,u.textureHeight,Ot,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:C.stencil,colorSpace:t.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let yt={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:r};x=new XRWebGLLayer(s,e,yt),s.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),w=new bn(x.framebufferWidth,x.framebufferHeight,{format:Wn,type:Un,colorSpace:t.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),a=null,o=await s.requestReferenceSpace(l),_t.setContext(s),_t.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function J(q){for(let nt=0;nt<q.removed.length;nt++){let yt=q.removed[nt],Ot=T.indexOf(yt);Ot>=0&&(T[Ot]=null,A[Ot].disconnect(yt))}for(let nt=0;nt<q.added.length;nt++){let yt=q.added[nt],Ot=T.indexOf(yt);if(Ot===-1){for(let Bt=0;Bt<A.length;Bt++)if(Bt>=T.length){T.push(yt),Ot=Bt;break}else if(T[Bt]===null){T[Bt]=yt,Ot=Bt;break}if(Ot===-1)break}let xt=A[Ot];xt&&xt.connect(yt)}}let K=new Z,st=new Z;function ot(q,nt,yt){K.setFromMatrixPosition(nt.matrixWorld),st.setFromMatrixPosition(yt.matrixWorld);let Ot=K.distanceTo(st),xt=nt.projectionMatrix.elements,Bt=yt.projectionMatrix.elements,jt=xt[14]/(xt[10]-1),Xt=xt[14]/(xt[10]+1),Zt=(xt[9]+1)/xt[5],he=(xt[9]-1)/xt[5],Ht=(xt[8]-1)/xt[0],le=(Bt[8]+1)/Bt[0],Ne=jt*Ht,He=jt*le,Ce=Ot/(-Ht+le),we=Ce*-Ht;if(nt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(we),q.translateZ(Ce),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),xt[10]===-1)q.projectionMatrix.copy(nt.projectionMatrix),q.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{let V=jt+Ce,We=Xt+Ce,ve=Ne-we,I=He+(Ot-we),y=Zt*Xt/We*V,X=he*Xt/We*V;q.projectionMatrix.makePerspective(ve,I,y,X,V,We),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Tt(q,nt){nt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(nt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let nt=q.near,yt=q.far;g.texture!==null&&(g.depthNear>0&&(nt=g.depthNear),g.depthFar>0&&(yt=g.depthFar)),B.near=F.near=R.near=nt,B.far=F.far=R.far=yt,(L!==B.near||k!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),L=B.near,k=B.far),B.layers.mask=q.layers.mask|6,R.layers.mask=B.layers.mask&-5,F.layers.mask=B.layers.mask&-3;let Ot=q.parent,xt=B.cameras;Tt(B,Ot);for(let Bt=0;Bt<xt.length;Bt++)Tt(xt[Bt],Ot);xt.length===2?ot(B,R,F):B.projectionMatrix.copy(R.projectionMatrix),b===null&&q.isPerspectiveCamera&&(b={camera:q,fov:q.fov,zoom:q.zoom}),j(q,B,Ot)};function j(q,nt,yt){yt===null?q.matrix.copy(nt.matrixWorld):(q.matrix.copy(yt.matrixWorld),q.matrix.invert(),q.matrix.multiply(nt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(nt.projectionMatrix),q.projectionMatrixInverse.copy(nt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ma*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&x===null))return c},this.setFoveation=function(q){c=q,u!==null&&(u.fixedFoveation=q),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(B)},this.getCameraTexture=function(q){return m[q]};let At=null;function vt(q,nt){if(d=nt.getViewerPose(a||o),_=nt,d!==null){let yt=d.views;x!==null&&(t.setRenderTargetFramebuffer(w,x.framebuffer),t.setRenderTarget(w));let Ot=!1;yt.length!==B.cameras.length&&(B.cameras.length=0,Ot=!0);for(let Xt=0;Xt<yt.length;Xt++){let Zt=yt[Xt],he=null;if(x!==null)he=x.getViewport(Zt);else{let le=h.getViewSubImage(u,Zt);he=le.viewport,Xt===0&&(t.setRenderTargetTextures(w,le.colorTexture,le.depthStencilTexture),t.setRenderTarget(w))}let Ht=Y[Xt];Ht===void 0&&(Ht=new pn,Ht.layers.enable(Xt),Ht.viewport=new Xe,Y[Xt]=Ht),Ht.matrix.fromArray(Zt.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(Zt.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(he.x,he.y,he.width,he.height),Xt===0&&(B.matrix.copy(Ht.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ot===!0&&B.cameras.push(Ht)}let xt=s.enabledFeatures;if(xt&&xt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){h=i.getBinding();let Xt=h.getDepthInformation(yt[0]);Xt&&Xt.isValid&&Xt.texture&&g.init(Xt,s.renderState)}if(xt&&xt.includes("camera-access")&&M){t.state.unbindTexture(),h=i.getBinding();for(let Xt=0;Xt<yt.length;Xt++){let Zt=yt[Xt].camera;if(Zt){let he=m[Zt];he||(he=new Gr,m[Zt]=he);let Ht=h.getCameraImage(Zt);he.sourceTexture=Ht}}}}for(let yt=0;yt<A.length;yt++){let Ot=T[yt],xt=A[yt];Ot!==null&&xt!==void 0&&xt.update(Ot,nt,a||o)}At&&At(q,nt),nt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:nt}),_=null}let _t=new Xd;_t.setAnimationLoop(vt),this.setAnimationLoop=function(q){At=q},this.dispose=function(){}}},uv=new Ge,Kd=new ce;Kd.set(-1,0,0,0,1,0,0,0,1);function fv(n,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,gh(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,C,N,w){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),h(g,m)):m.isMeshPhongMaterial?(r(g,m),d(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),u(g,m),m.isMeshPhysicalMaterial&&x(g,m,w)):m.isMeshMatcapMaterial?(r(g,m),_(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),M(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&l(g,m)):m.isPointsMaterial?c(g,m,C,N):m.isSpriteMaterial?a(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Sn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Sn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let C=t.get(m),N=C.envMap,w=C.envMapRotation;N&&(g.envMap.value=N,g.envMapRotation.value.setFromMatrix4(uv.makeRotationFromEuler(w)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Kd),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function l(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,C,N){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*C,g.scale.value=N*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function d(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function x(g,m,C){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Sn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=C.texture,g.transmissionSamplerSize.value.set(C.width,C.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,m){m.matcap&&(g.matcap.value=m.matcap)}function M(g,m){let C=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(C.matrixWorld),g.nearDistance.value=C.shadow.camera.near,g.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function dv(n,t,e,i){let s={},r={},o=[],l=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,A){let T=A.program;i.uniformBlockBinding(w,T)}function a(w,A){let T=s[w.id];T===void 0&&(g(w),T=d(w),s[w.id]=T,w.addEventListener("dispose",C));let U=A.program;i.updateUBOMapping(w,U);let v=t.render.frame;r[w.id]!==v&&(u(w),r[w.id]=v)}function d(w){let A=h();w.__bindingPointIndex=A;let T=n.createBuffer(),U=w.__size,v=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,U,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,T),T}function h(){for(let w=0;w<l;w++)if(o.indexOf(w)===-1)return o.push(w),w;return re("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(w){let A=s[w.id],T=w.uniforms,U=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let v=0,b=T.length;v<b;v++){let R=T[v];if(Array.isArray(R))for(let F=0,Y=R.length;F<Y;F++)x(R[F],v,F,U);else x(R,v,0,U)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function x(w,A,T,U){if(M(w,A,T,U)===!0){let v=w.__offset,b=w.value;if(Array.isArray(b)){let R=0;for(let F=0;F<b.length;F++){let Y=b[F],B=m(Y);_(Y,w.__data,R),typeof Y!="number"&&typeof Y!="boolean"&&!Y.isMatrix3&&!ArrayBuffer.isView(Y)&&(R+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(b,w.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,w.__data)}}function _(w,A,T){typeof w=="number"||typeof w=="boolean"?A[0]=w:w.isMatrix3?(A[0]=w.elements[0],A[1]=w.elements[1],A[2]=w.elements[2],A[3]=0,A[4]=w.elements[3],A[5]=w.elements[4],A[6]=w.elements[5],A[7]=0,A[8]=w.elements[6],A[9]=w.elements[7],A[10]=w.elements[8],A[11]=0):ArrayBuffer.isView(w)?A.set(new w.constructor(w.buffer,w.byteOffset,A.length)):w.toArray(A,T)}function M(w,A,T,U){let v=w.value,b=A+"_"+T;if(U[b]===void 0)return typeof v=="number"||typeof v=="boolean"?U[b]=v:ArrayBuffer.isView(v)?U[b]=v.slice():U[b]=v.clone(),!0;{let R=U[b];if(typeof v=="number"||typeof v=="boolean"){if(R!==v)return U[b]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(R.equals(v)===!1)return R.copy(v),!0}}return!1}function g(w){let A=w.uniforms,T=0,U=16;for(let b=0,R=A.length;b<R;b++){let F=Array.isArray(A[b])?A[b]:[A[b]];for(let Y=0,B=F.length;Y<B;Y++){let L=F[Y],k=Array.isArray(L.value)?L.value:[L.value];for(let W=0,$=k.length;W<$;W++){let J=k[W],K=m(J),st=T%U,ot=st%K.boundary,Tt=st+ot;T+=ot,Tt!==0&&U-Tt<K.storage&&(T+=U-Tt),L.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=T,T+=K.storage}}}let v=T%U;return v>0&&(T+=U-v),w.__size=T,w.__cache={},this}function m(w){let A={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(A.boundary=4,A.storage=4):w.isVector2?(A.boundary=8,A.storage=8):w.isVector3||w.isColor?(A.boundary=16,A.storage=12):w.isVector4?(A.boundary=16,A.storage=16):w.isMatrix3?(A.boundary=48,A.storage=48):w.isMatrix4?(A.boundary=64,A.storage=64):w.isTexture?te("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(A.boundary=16,A.storage=w.byteLength):te("WebGLRenderer: Unsupported uniform value type.",w),A}function C(w){let A=w.target;A.removeEventListener("dispose",C);let T=o.indexOf(A.__bindingPointIndex);o.splice(T,1),n.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function N(){for(let w in s)n.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:c,update:a,dispose:N}}var pv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),gi=null;function mv(){return gi===null&&(gi=new Ea(pv,16,16,ss,ni),gi.name="DFG_LUT",gi.minFilter=Ke,gi.magFilter=Ke,gi.wrapS=ci,gi.wrapT=ci,gi.generateMipmaps=!1,gi.needsUpdate=!0),gi}var Bl=class{constructor(t={}){let{canvas:e=md(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:a=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:x=Un}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;let M=x,g=new Set([el,tl,Qa]),m=new Set([Un,ti,tr,er,Ka,ja]),C=new Uint32Array(4),N=new Int32Array(4),w=new Z,A=null,T=null,U=[],v=[],b=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,F=!1,Y=null,B=null,L=null,k=null;this._outputColorSpace=rn;let W=0,$=0,J=null,K=-1,st=null,ot=new Xe,Tt=new Xe,j=null,At=new ae(0),vt=0,_t=e.width,q=e.height,nt=1,yt=null,Ot=null,xt=new Xe(0,0,_t,q),Bt=new Xe(0,0,_t,q),jt=!1,Xt=new zr,Zt=!1,he=!1,Ht=new Ge,le=new Z,Ne=new Xe,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ce=!1;function we(){return J===null?nt:1}let V=i;function We(S,G){return e.getContext(S,G)}let ve,I,y,X,it,at,wt,Et,lt,ht,Rt,Yt,Nt,Ct,$t,Qt,ue,H,It,ut,Pt,Lt,gt;try{let S={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:a,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ue,!1),e.addEventListener("webglcontextrestored",ee,!1),e.addEventListener("webglcontextcreationerror",Tn,!1),V===null){let G="webgl2";if(V=We(G,S),V===null)throw We(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ct()}catch(S){throw e.removeEventListener("webglcontextlost",Ue,!1),e.removeEventListener("webglcontextrestored",ee,!1),e.removeEventListener("webglcontextcreationerror",Tn,!1),re("WebGLRenderer: "+S.message),S}function ct(){ve=new S_(V),ve.init(),Pt=new lv(V,ve),I=new f_(V,ve,t,Pt),y=new ov(V,ve),I.reversedDepthBuffer&&u&&y.buffers.depth.setReversed(!0),B=V.createFramebuffer(),L=V.createFramebuffer(),k=V.createFramebuffer(),X=new A_(V),it=new qy,at=new av(V,ve,y,it,I,Pt,X),wt=new M_(R),Et=new T0(V),Lt=new h_(V,Et),lt=new b_(V,Et,X,Lt),ht=new T_(V,lt,Et,Lt,X),H=new E_(V,I,at),$t=new d_(it),Rt=new Xy(R,wt,ve,I,Lt,$t),Yt=new fv(R,it),Nt=new $y,Ct=new tv(ve),ue=new c_(R,wt,y,ht,_,c),Qt=new rv(R,ht,I),gt=new dv(V,X,I,y),It=new u_(V,ve,X),ut=new w_(V,ve,X),X.programs=Rt.programs,R.capabilities=I,R.extensions=ve,R.properties=it,R.renderLists=Nt,R.shadowMap=Qt,R.state=y,R.info=X}M!==Un&&(b=new R_(M,e.width,e.height,l,s,r));let ft=new zh(R,V);this.xr=ft,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let S=ve.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=ve.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(S){S!==void 0&&(nt=S,this.setSize(_t,q,!1))},this.getSize=function(S){return S.set(_t,q)},this.setSize=function(S,G,rt=!0){if(ft.isPresenting){te("WebGLRenderer: Can't change size while VR device is presenting.");return}_t=S,q=G,e.width=Math.floor(S*nt),e.height=Math.floor(G*nt),rt===!0&&(e.style.width=S+"px",e.style.height=G+"px"),b!==null&&b.setSize(e.width,e.height),this.setViewport(0,0,S,G)},this.getDrawingBufferSize=function(S){return S.set(_t*nt,q*nt).floor()},this.setDrawingBufferSize=function(S,G,rt){_t=S,q=G,nt=rt,e.width=Math.floor(S*rt),e.height=Math.floor(G*rt),this.setViewport(0,0,S,G)},this.setEffects=function(S){if(M===Un){re("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let G=0;G<S.length;G++)if(S[G].isOutputPass===!0){te("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(ot)},this.getViewport=function(S){return S.copy(xt)},this.setViewport=function(S,G,rt,Q){S.isVector4?xt.set(S.x,S.y,S.z,S.w):xt.set(S,G,rt,Q),y.viewport(ot.copy(xt).multiplyScalar(nt).round())},this.getScissor=function(S){return S.copy(Bt)},this.setScissor=function(S,G,rt,Q){S.isVector4?Bt.set(S.x,S.y,S.z,S.w):Bt.set(S,G,rt,Q),y.scissor(Tt.copy(Bt).multiplyScalar(nt).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(S){y.setScissorTest(jt=S)},this.setOpaqueSort=function(S){yt=S},this.setTransparentSort=function(S){Ot=S},this.getClearColor=function(S){return S.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor(...arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha(...arguments)},this.clear=function(S=!0,G=!0,rt=!0){let Q=0;if(S){let tt=!1;if(J!==null){let Dt=J.texture.format;tt=g.has(Dt)}if(tt){let Dt=J.texture.type,zt=m.has(Dt),Ut=ue.getClearColor(),Gt=ue.getClearAlpha(),qt=Ut.r,de=Ut.g,ge=Ut.b;zt?(C[0]=qt,C[1]=de,C[2]=ge,C[3]=Gt,V.clearBufferuiv(V.COLOR,0,C)):(N[0]=qt,N[1]=de,N[2]=ge,N[3]=Gt,V.clearBufferiv(V.COLOR,0,N))}else Q|=V.COLOR_BUFFER_BIT}G&&(Q|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),rt&&(Q|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&V.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),Y=S},this.dispose=function(){e.removeEventListener("webglcontextlost",Ue,!1),e.removeEventListener("webglcontextrestored",ee,!1),e.removeEventListener("webglcontextcreationerror",Tn,!1),ue.dispose(),Nt.dispose(),Ct.dispose(),it.dispose(),wt.dispose(),ht.dispose(),Lt.dispose(),gt.dispose(),Rt.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",Ao),ft.removeEventListener("sessionend",Eo),Ae.stop()};function Ue(S){S.preventDefault(),Lr("WebGLRenderer: Context Lost."),F=!0}function ee(){Lr("WebGLRenderer: Context Restored."),F=!1;let S=X.autoReset,G=Qt.enabled,rt=Qt.autoUpdate,Q=Qt.needsUpdate,tt=Qt.type;ct(),X.autoReset=S,Qt.enabled=G,Qt.autoUpdate=rt,Qt.needsUpdate=Q,Qt.type=tt}function Tn(S){re("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function On(S){let G=S.target;G.removeEventListener("dispose",On),bo(G)}function bo(S){qn(S),it.remove(S)}function qn(S){let G=it.get(S).programs;G!==void 0&&(G.forEach(function(rt){Rt.releaseProgram(rt)}),S.isShaderMaterial&&Rt.releaseShaderCache(S))}this.renderBufferDirect=function(S,G,rt,Q,tt,Dt){G===null&&(G=He);let zt=tt.isMesh&&tt.matrixWorld.determinantAffine()<0,Ut=ls(S,G,rt,Q,tt);y.setMaterial(Q,zt);let Gt=rt.index,qt=1;if(Q.wireframe===!0){if(Gt=lt.getWireframeAttribute(rt),Gt===void 0)return;qt=2}let de=rt.drawRange,ge=rt.attributes.position,Vt=de.start*qt,Me=(de.start+de.count)*qt;Dt!==null&&(Vt=Math.max(Vt,Dt.start*qt),Me=Math.min(Me,(Dt.start+Dt.count)*qt)),Gt!==null?(Vt=Math.max(Vt,0),Me=Math.min(Me,Gt.count)):ge!=null&&(Vt=Math.max(Vt,0),Me=Math.min(Me,ge.count));let qe=Me-Vt;if(qe<0||qe===1/0)return;Lt.setup(tt,Q,Ut,rt,Gt);let Ie,Pe=It;if(Gt!==null&&(Ie=Et.get(Gt),Pe=ut,Pe.setIndex(Ie)),tt.isMesh)Q.wireframe===!0?(y.setLineWidth(Q.wireframeLinewidth*we()),Pe.setMode(V.LINES)):Pe.setMode(V.TRIANGLES);else if(tt.isLine){let Ze=Q.linewidth;Ze===void 0&&(Ze=1),y.setLineWidth(Ze*we()),tt.isLineSegments?Pe.setMode(V.LINES):tt.isLineLoop?Pe.setMode(V.LINE_LOOP):Pe.setMode(V.LINE_STRIP)}else tt.isPoints?Pe.setMode(V.POINTS):tt.isSprite&&Pe.setMode(V.TRIANGLES);if(tt.isBatchedMesh)if(ve.get("WEBGL_multi_draw"))Pe.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{let Ze=tt._multiDrawStarts,kt=tt._multiDrawCounts,an=tt._multiDrawCount,ne=Gt?Et.get(Gt).bytesPerElement:1,_e=it.get(Q).currentProgram.getUniforms();for(let Cn=0;Cn<an;Cn++)_e.setValue(V,"_gl_DrawID",Cn),Pe.render(Ze[Cn]/ne,kt[Cn])}else if(tt.isInstancedMesh)Pe.renderInstances(Vt,qe,tt.count);else if(rt.isInstancedBufferGeometry){let Ze=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,kt=Math.min(rt.instanceCount,Ze);Pe.renderInstances(Vt,qe,kt)}else Pe.render(Vt,qe)};function pr(S,G,rt,Q){Y!==null&&S.isNodeMaterial&&Y.setObject(Q,S),Zt===!0&&$t.setState(S,rt,!1),S.transparent===!0&&S.side===Hn&&S.forceSinglePass===!1?(S.side=Sn,S.needsUpdate=!0,Mi(S,G,Q),S.side=ts,S.needsUpdate=!0,Mi(S,G,Q),S.side=Hn):Mi(S,G,Q)}this.compile=function(S,G,rt=null){rt===null&&(rt=S),Y!==null&&Y.renderStart(S,G,rt),T=Ct.get(rt),T.init(G),v.push(T),rt.traverseVisible(function(tt){tt.isLight&&tt.layers.test(G.layers)&&(T.pushLight(tt),tt.castShadow&&T.pushShadow(tt))}),S!==rt&&S.traverseVisible(function(tt){tt.isLight&&tt.layers.test(G.layers)&&(T.pushLight(tt),tt.castShadow&&T.pushShadow(tt))}),T.setupLights(),Y!==null&&Y.updateLights(T.state.lightsArray),he=this.localClippingEnabled,Zt=$t.init(this.clippingPlanes,he),Zt===!0&&$t.setGlobalState(this.clippingPlanes,G),Y!==null&&Qt.render(T.state.shadowsArray,rt,G);let Q=new Set;return S.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;let Dt=tt.material;if(Dt)if(Array.isArray(Dt))for(let zt=0;zt<Dt.length;zt++){let Ut=Dt[zt];pr(Ut,rt,G,tt),Q.add(Ut)}else pr(Dt,rt,G,tt),Q.add(Dt)}),T=v.pop(),Y!==null&&Y.renderEnd(),Q},this.compileAsync=function(S,G,rt=null){let Q=this.compile(S,G,rt);return new Promise(tt=>{function Dt(){if(Q.forEach(function(zt){let Gt=it.get(zt).currentProgram;(Gt===void 0||Gt.isReady())&&Q.delete(zt)}),Q.size===0){tt(S);return}setTimeout(Dt,10)}ve.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let vi=null;function wo(S){vi&&vi(S)}function Ao(){Ae.stop()}function Eo(){Ae.start()}let Ae=new Xd;Ae.setAnimationLoop(wo),typeof self<"u"&&Ae.setContext(self),this.setAnimationLoop=function(S){vi=S,ft.setAnimationLoop(S),S===null?Ae.stop():Ae.start()},ft.addEventListener("sessionstart",Ao),ft.addEventListener("sessionend",Eo),this.render=function(S,G){if(G!==void 0&&G.isCamera!==!0){re("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;Y!==null&&Y.renderStart(S,G);let rt=ft.enabled===!0&&ft.isPresenting===!0,Q=b!==null&&(J===null||rt)&&b.begin(R,J);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(G),G=ft.getCamera()),S.isScene===!0&&S.onBeforeRender(R,S,G,J),T=Ct.get(S,v.length),T.init(G),T.state.textureUnits=at.getTextureUnits(),v.push(T),Ht.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Xt.setFromProjectionMatrix(Ht,jn,G.reversedDepth),he=this.localClippingEnabled,Zt=$t.init(this.clippingPlanes,he),A=Nt.get(S,U.length),A.init(),U.push(A),ft.enabled===!0&&ft.isPresenting===!0){let zt=R.xr.getDepthSensingMesh();zt!==null&&ws(zt,G,-1/0,R.sortObjects)}ws(S,G,0,R.sortObjects),A.finish(),Y!==null&&Y.updateLights(T.state.lightsArray),R.sortObjects===!0&&A.sort(yt,Ot),Ce=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,Ce&&ue.addToRenderList(A,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Zt===!0&&$t.beginShadows();let tt=T.state.shadowsArray;if(Qt.render(tt,S,G),Zt===!0&&$t.endShadows(),(Q&&b.hasRenderPass())===!1){let zt=A.opaque,Ut=A.transmissive;if(T.setupLights(),G.isArrayCamera){let Gt=G.cameras;if(Ut.length>0)for(let qt=0,de=Gt.length;qt<de;qt++){let ge=Gt[qt];As(zt,Ut,S,ge)}Ce&&ue.render(S);for(let qt=0,de=Gt.length;qt<de;qt++){let ge=Gt[qt];To(A,S,ge,ge.viewport)}}else Ut.length>0&&As(zt,Ut,S,G),Ce&&ue.render(S),To(A,S,G)}J!==null&&$===0&&(at.updateMultisampleRenderTarget(J),at.updateRenderTargetMipmap(J)),Q&&b.end(R),S.isScene===!0&&S.onAfterRender(R,S,G),Lt.resetDefaultState(),K=-1,st=null,v.pop(),v.length>0?(T=v[v.length-1],at.setTextureUnits(T.state.textureUnits),Zt===!0&&$t.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,U.pop(),U.length>0?A=U[U.length-1]:A=null,Y!==null&&Y.renderEnd()};function ws(S,G,rt,Q){if(S.visible===!1)return;if(S.layers.test(G.layers)){if(S.isGroup)rt=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(G);else if(S.isLightProbeGrid)T.pushLightProbeGrid(S);else if(S.isLight)T.pushLight(S),S.castShadow&&T.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(Xt)){Q&&Ne.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ht);let zt=ht.update(S),Ut=S.material;Ut.visible&&A.push(S,zt,Ut,rt,Ne.z,null,G)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(Xt))){let zt=ht.update(S),Ut=S.material;if(Q&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ne.copy(S.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),Ne.copy(zt.boundingSphere.center)),Ne.applyMatrix4(S.matrixWorld).applyMatrix4(Ht)),Array.isArray(Ut)){let Gt=zt.groups;for(let qt=0,de=Gt.length;qt<de;qt++){let ge=Gt[qt],Vt=Ut[ge.materialIndex];Vt&&Vt.visible&&A.push(S,zt,Vt,rt,Ne.z,ge,G)}}else Ut.visible&&A.push(S,zt,Ut,rt,Ne.z,null,G)}}let Dt=S.children;for(let zt=0,Ut=Dt.length;zt<Ut;zt++)ws(Dt[zt],G,rt,Q)}function To(S,G,rt,Q){let{opaque:tt,transmissive:Dt,transparent:zt}=S;T.setupLightsView(rt),Zt===!0&&$t.setGlobalState(R.clippingPlanes,rt),Q&&y.viewport(ot.copy(Q)),tt.length>0&&Es(tt,G,rt),Dt.length>0&&Es(Dt,G,rt),zt.length>0&&Es(zt,G,rt),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function As(S,G,rt,Q){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[Q.id]===void 0){let Vt=ve.has("EXT_color_buffer_half_float")||ve.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[Q.id]=new bn(1,1,{generateMipmaps:!0,type:Vt?ni:Un,minFilter:ns,samples:Math.max(4,I.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Se.workingColorSpace})}let Dt=T.state.transmissionRenderTarget[Q.id],zt=Q.viewport||ot;Dt.setSize(zt.z*R.transmissionResolutionScale,zt.w*R.transmissionResolutionScale);let Ut=R.getRenderTarget(),Gt=R.getActiveCubeFace(),qt=R.getActiveMipmapLevel();R.setRenderTarget(Dt),R.getClearColor(At),vt=R.getClearAlpha(),vt<1&&R.setClearColor(16777215,.5),R.clear(),Ce&&ue.render(rt);let de=R.toneMapping;R.toneMapping=Qn;let ge=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),T.setupLightsView(Q),Zt===!0&&$t.setGlobalState(R.clippingPlanes,Q),Es(S,rt,Q),at.updateMultisampleRenderTarget(Dt),at.updateRenderTargetMipmap(Dt),ve.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let Me=0,qe=G.length;Me<qe;Me++){let Ie=G[Me],{object:Pe,geometry:Ze,material:kt,group:an}=Ie;if(kt.side===Hn&&Pe.layers.test(Q.layers)){let ne=kt.side;kt.side=Sn,kt.needsUpdate=!0,Bn(Pe,rt,Q,Ze,kt,an),kt.side=ne,kt.needsUpdate=!0,Vt=!0}}Vt===!0&&(at.updateMultisampleRenderTarget(Dt),at.updateRenderTargetMipmap(Dt))}R.setRenderTarget(Ut,Gt,qt),R.setClearColor(At,vt),ge!==void 0&&(Q.viewport=ge),R.toneMapping=de}function Es(S,G,rt){let Q=G.isScene===!0?G.overrideMaterial:null;for(let tt=0,Dt=S.length;tt<Dt;tt++){let zt=S[tt],{object:Ut,geometry:Gt,group:qt}=zt,de=zt.material;de.allowOverride===!0&&Q!==null&&(de=Q),Ut.layers.test(rt.layers)&&Bn(Ut,G,rt,Gt,de,qt)}}function Bn(S,G,rt,Q,tt,Dt){Y!==null&&tt.isNodeMaterial&&Y.setObject(S,tt),S.onBeforeRender(R,G,rt,Q,tt,Dt),S.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),tt.onBeforeRender(R,G,rt,Q,S,Dt),tt.transparent===!0&&tt.side===Hn&&tt.forceSinglePass===!1?(tt.side=Sn,tt.needsUpdate=!0,R.renderBufferDirect(rt,G,Q,tt,S,Dt),tt.side=ts,tt.needsUpdate=!0,R.renderBufferDirect(rt,G,Q,tt,S,Dt),tt.side=Hn):R.renderBufferDirect(rt,G,Q,tt,S,Dt),S.onAfterRender(R,G,rt,Q,tt,Dt)}function Mi(S,G,rt){G.isScene!==!0&&(G=He);let Q=it.get(S),tt=T.state.lights,Dt=T.state.shadowsArray,zt=tt.state.version,Ut=Rt.getParameters(S,tt.state,Dt,G,rt,T.state.lightProbeGridArray),Gt=Rt.getProgramCacheKey(Ut),qt=Q.programs;Q.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?G.environment:null,Q.fog=G.fog;let de=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;Q.envMap=wt.get(S.envMap||Q.environment,de),Q.envMapRotation=Q.environment!==null&&S.envMap===null?G.environmentRotation:S.envMapRotation,qt===void 0&&(S.addEventListener("dispose",On),qt=new Map,Q.programs=qt);let ge=qt.get(Gt);if(ge!==void 0){if(Q.currentProgram===ge&&Q.lightsStateVersion===zt)return mr(S,Ut),ge}else Ut.uniforms=Rt.getUniforms(S),Y!==null&&S.isNodeMaterial&&Y.build(S,rt,Ut),S.onBeforeCompile(Ut,R),ge=Rt.acquireProgram(Ut,Gt),qt.set(Gt,ge),Q.uniforms=Ut.uniforms;let Vt=Q.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Vt.clippingPlanes=$t.uniform),mr(S,Ut),Q.needsLights=cc(S),Q.lightsStateVersion=zt,Q.needsLights&&(Vt.ambientLightColor.value=tt.state.ambient,Vt.lightProbe.value=tt.state.probe,Vt.sunLights.value=tt.state.sun,Vt.sunLightShadows.value=tt.state.sunShadow,Vt.directionalLights.value=tt.state.directional,Vt.directionalLightShadows.value=tt.state.directionalShadow,Vt.spotLights.value=tt.state.spot,Vt.spotLightShadows.value=tt.state.spotShadow,Vt.rectAreaLights.value=tt.state.rectArea,Vt.ltc_1.value=tt.state.rectAreaLTC1,Vt.ltc_2.value=tt.state.rectAreaLTC2,Vt.pointLights.value=tt.state.point,Vt.pointLightShadows.value=tt.state.pointShadow,Vt.hemisphereLights.value=tt.state.hemi,Vt.sunShadowMatrix.value=tt.state.sunShadowMatrix,Vt.sunShadowCascade.value=tt.state.sunShadowCascade,Vt.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,Vt.spotLightMatrix.value=tt.state.spotLightMatrix,Vt.spotLightMap.value=tt.state.spotLightMap,Vt.pointShadowMatrix.value=tt.state.pointShadowMatrix),Q.lightProbeGrid=T.state.lightProbeGridArray.length>0,Q.currentProgram=ge,Q.uniformsList=null,ge}function Oi(S){if(S.uniformsList===null){let G=S.currentProgram.getUniforms();S.uniformsList=sr.seqWithValue(G.seq,S.uniforms)}return S.uniformsList}function mr(S,G){let rt=it.get(S);rt.outputColorSpace=G.outputColorSpace,rt.batching=G.batching,rt.batchingColor=G.batchingColor,rt.instancing=G.instancing,rt.instancingColor=G.instancingColor,rt.instancingMorph=G.instancingMorph,rt.skinning=G.skinning,rt.morphTargets=G.morphTargets,rt.morphNormals=G.morphNormals,rt.morphColors=G.morphColors,rt.morphTargetsCount=G.morphTargetsCount,rt.numClippingPlanes=G.numClippingPlanes,rt.numIntersection=G.numClipIntersection,rt.vertexAlphas=G.vertexAlphas,rt.vertexTangents=G.vertexTangents,rt.toneMapping=G.toneMapping}function Co(S,G){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;w.setFromMatrixPosition(G.matrixWorld);for(let rt=0,Q=S.length;rt<Q;rt++){let tt=S[rt];if(tt.texture!==null&&tt.boundingBox.containsPoint(w))return tt}return null}function ls(S,G,rt,Q,tt){G.isScene!==!0&&(G=He),at.resetTextureUnits();let Dt=G.fog,zt=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?G.environment:null,Ut=J===null?R.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Se.workingColorSpace,Gt=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,qt=wt.get(Q.envMap||zt,Gt),de=Q.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,ge=!!rt.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Vt=!!rt.morphAttributes.position,Me=!!rt.morphAttributes.normal,qe=!!rt.morphAttributes.color,Ie=Qn;Q.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ie=R.toneMapping);let Pe=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Ze=Pe!==void 0?Pe.length:0,kt=it.get(Q),an=T.state.lights;if(Zt===!0&&(he===!0||S!==st)){let Le=S===st&&Q.id===K;$t.setState(Q,S,Le)}let ne=!1;Q.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==an.state.version||kt.outputColorSpace!==Ut||tt.isBatchedMesh&&kt.batching===!1||!tt.isBatchedMesh&&kt.batching===!0||tt.isBatchedMesh&&kt.batchingColor===!0&&tt._colorsTexture===null||tt.isBatchedMesh&&kt.batchingColor===!1&&tt._colorsTexture!==null||tt.isInstancedMesh&&kt.instancing===!1||!tt.isInstancedMesh&&kt.instancing===!0||tt.isSkinnedMesh&&kt.skinning===!1||!tt.isSkinnedMesh&&kt.skinning===!0||tt.isInstancedMesh&&kt.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&kt.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&kt.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&kt.instancingMorph===!1&&tt.morphTexture!==null||kt.envMap!==qt||Q.fog===!0&&kt.fog!==Dt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==$t.numPlanes||kt.numIntersection!==$t.numIntersection)||kt.vertexAlphas!==de||kt.vertexTangents!==ge||kt.morphTargets!==Vt||kt.morphNormals!==Me||kt.morphColors!==qe||kt.toneMapping!==Ie||kt.morphTargetsCount!==Ze||!!kt.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(ne=!0):(ne=!0,kt.__version=Q.version);let _e=kt.currentProgram;ne===!0&&(_e=Mi(Q,G,tt),Y&&Q.isNodeMaterial&&Y.onUpdateProgram(Q,_e,kt));let Cn=!1,Yn=!1,Si=!1,ye=_e.getUniforms(),Be=kt.uniforms;if(y.useProgram(_e.program)&&(Cn=!0,Yn=!0,Si=!0),Q.id!==K&&(K=Q.id,Yn=!0),kt.needsLights){let Le=Co(T.state.lightProbeGridArray,tt);kt.lightProbeGrid!==Le&&(kt.lightProbeGrid=Le,Yn=!0)}if(Cn||st!==S){y.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ye.setValue(V,"projectionMatrix",S.projectionMatrix),ye.setValue(V,"viewMatrix",S.matrixWorldInverse);let zn=ye.map.cameraPosition;zn!==void 0&&zn.setValue(V,le.setFromMatrixPosition(S.matrixWorld)),I.logarithmicDepthBuffer&&ye.setValue(V,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&ye.setValue(V,"isOrthographic",S.isOrthographicCamera===!0),st!==S&&(st=S,Yn=!0,Si=!0)}if(kt.needsLights&&(an.state.sunShadowMap.length>0&&ye.setValue(V,"sunShadowMap",an.state.sunShadowMap,at),an.state.directionalShadowMap.length>0&&ye.setValue(V,"directionalShadowMap",an.state.directionalShadowMap,at),an.state.spotShadowMap.length>0&&ye.setValue(V,"spotShadowMap",an.state.spotShadowMap,at),an.state.pointShadowMap.length>0&&ye.setValue(V,"pointShadowMap",an.state.pointShadowMap,at)),tt.isSkinnedMesh){ye.setOptional(V,tt,"bindMatrix"),ye.setOptional(V,tt,"bindMatrixInverse");let Le=tt.skeleton;Le&&(Le.boneTexture===null&&Le.computeBoneTexture(),ye.setValue(V,"boneTexture",Le.boneTexture,at))}tt.isBatchedMesh&&(ye.setOptional(V,tt,"batchingTexture"),ye.setValue(V,"batchingTexture",tt._matricesTexture,at),ye.setOptional(V,tt,"batchingIdTexture"),ye.setValue(V,"batchingIdTexture",tt._indirectTexture,at),ye.setOptional(V,tt,"batchingColorTexture"),tt._colorsTexture!==null&&ye.setValue(V,"batchingColorTexture",tt._colorsTexture,at));let Rn=rt.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&H.update(tt,rt,_e),(Yn||kt.receiveShadow!==tt.receiveShadow)&&(kt.receiveShadow=tt.receiveShadow,ye.setValue(V,"receiveShadow",tt.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&G.environment!==null&&(Be.envMapIntensity.value=G.environmentIntensity),Be.dfgLUT!==void 0&&(Be.dfgLUT.value=mv()),Yn){if(ye.setValue(V,"toneMappingExposure",R.toneMappingExposure),kt.needsLights&&lc(Be,Si),Dt&&Q.fog===!0&&Yt.refreshFogUniforms(Be,Dt),Yt.refreshMaterialUniforms(Be,Q,nt,q,T.state.transmissionRenderTarget[S.id]),kt.needsLights&&kt.lightProbeGrid){let Le=kt.lightProbeGrid;Be.probesSH.value=Le.texture,Be.probesMin.value.copy(Le.boundingBox.min),Be.probesMax.value.copy(Le.boundingBox.max),Be.probesResolution.value.copy(Le.resolution)}sr.upload(V,Oi(kt),Be,at)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(sr.upload(V,Oi(kt),Be,at),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&ye.setValue(V,"center",tt.center),ye.setValue(V,"modelViewMatrix",tt.modelViewMatrix),ye.setValue(V,"normalMatrix",tt.normalMatrix),ye.setValue(V,"modelMatrix",tt.matrixWorld),Q.uniformsGroups!==void 0){let Le=Q.uniformsGroups;for(let zn=0,ln=Le.length;zn<ln;zn++){let kn=Le[zn];gt.update(kn,_e),gt.bind(kn,_e)}}return _e}function lc(S,G){S.ambientLightColor.needsUpdate=G,S.lightProbe.needsUpdate=G,S.sunLights.needsUpdate=G,S.sunLightShadows.needsUpdate=G,S.directionalLights.needsUpdate=G,S.directionalLightShadows.needsUpdate=G,S.pointLights.needsUpdate=G,S.pointLightShadows.needsUpdate=G,S.spotLights.needsUpdate=G,S.spotLightShadows.needsUpdate=G,S.rectAreaLights.needsUpdate=G,S.hemisphereLights.needsUpdate=G}function cc(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(S,G,rt){let Q=it.get(S);Q.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),it.get(S.texture).__webglTexture=G,it.get(S.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:rt,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,G){let rt=it.get(S);rt.__webglFramebuffer=G,rt.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(S,G=0,rt=0){J=S,W=G,$=rt;let Q=null,tt=!1,Dt=!1;if(S){let Ut=it.get(S);if(Ut.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(V.FRAMEBUFFER,Ut.__webglFramebuffer),ot.copy(S.viewport),Tt.copy(S.scissor),j=S.scissorTest,y.viewport(ot),y.scissor(Tt),y.setScissorTest(j),K=-1;return}else if(Ut.__webglFramebuffer===void 0)at.setupRenderTarget(S);else if(Ut.__hasExternalTextures)at.rebindTextures(S,it.get(S.texture).__webglTexture,it.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let de=S.depthTexture;if(Ut.__boundDepthTexture!==de){if(de!==null&&it.has(de)&&(S.width!==de.image.width||S.height!==de.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");at.setupDepthRenderbuffer(S)}}let Gt=S.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(Dt=!0);let qt=it.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(qt[G])?Q=qt[G][rt]:Q=qt[G],tt=!0):S.samples>0&&at.useMultisampledRTT(S)===!1?Q=it.get(S).__webglMultisampledFramebuffer:Array.isArray(qt)?Q=qt[rt]:Q=qt,ot.copy(S.viewport),Tt.copy(S.scissor),j=S.scissorTest}else ot.copy(xt).multiplyScalar(nt).floor(),Tt.copy(Bt).multiplyScalar(nt).floor(),j=jt;if(rt!==0&&(Q=B),y.bindFramebuffer(V.FRAMEBUFFER,Q)&&y.drawBuffers(S,Q),y.viewport(ot),y.scissor(Tt),y.setScissorTest(j),tt){let Ut=it.get(S.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ut.__webglTexture,rt)}else if(Dt){let Ut=G;for(let Gt=0;Gt<S.textures.length;Gt++){let qt=it.get(S.textures[Gt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Gt,qt.__webglTexture,rt,Ut)}}else if(S!==null&&rt!==0){let Ut=it.get(S.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ut.__webglTexture,rt)}K=-1};function Ts(S){let G=it.get(S);return(G.__readFormat!==S.format||G.__readType!==S.type)&&(G.__readFormat=S.format,G.__readType=S.type,G.__formatReadable=I.textureFormatReadable(S.format),G.__typeReadable=I.textureTypeReadable(S.type)),G}this.readRenderTargetPixels=function(S,G,rt,Q,tt,Dt,zt,Ut=0){if(!(S&&S.isWebGLRenderTarget)){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=it.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&zt!==void 0&&(Gt=Gt[zt]),Gt){y.bindFramebuffer(V.FRAMEBUFFER,Gt);try{let qt=S.textures[Ut],de=qt.format,ge=qt.type;S.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ut);let Vt=Ts(qt);if(Vt.__formatReadable===!1){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Vt.__typeReadable===!1){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=S.width-Q&&rt>=0&&rt<=S.height-tt&&V.readPixels(G,rt,Q,tt,Pt.convert(de),Pt.convert(ge),Dt)}finally{let qt=J!==null?it.get(J).__webglFramebuffer:null;y.bindFramebuffer(V.FRAMEBUFFER,qt)}}},this.readRenderTargetPixelsAsync=async function(S,G,rt,Q,tt,Dt,zt,Ut=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=it.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&zt!==void 0&&(Gt=Gt[zt]),Gt)if(G>=0&&G<=S.width-Q&&rt>=0&&rt<=S.height-tt){y.bindFramebuffer(V.FRAMEBUFFER,Gt);let qt=S.textures[Ut],de=qt.format,ge=qt.type;S.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ut);let Vt=Ts(qt);if(Vt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Vt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Me=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Me),V.bufferData(V.PIXEL_PACK_BUFFER,Dt.byteLength,V.STREAM_READ),V.readPixels(G,rt,Q,tt,Pt.convert(de),Pt.convert(ge),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let qe=J!==null?it.get(J).__webglFramebuffer:null;y.bindFramebuffer(V.FRAMEBUFFER,qe);let Ie=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await xd(V,Ie,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Me),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Dt),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(Me),V.deleteSync(Ie),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,G=null,rt=0){let Q=Math.pow(2,-rt),tt=Math.floor(S.image.width*Q),Dt=Math.floor(S.image.height*Q),zt=G!==null?G.x:0,Ut=G!==null?G.y:0;at.setTexture2D(S,0),V.copyTexSubImage2D(V.TEXTURE_2D,rt,0,0,zt,Ut,tt,Dt),y.unbindTexture()},this.copyTextureToTexture=function(S,G,rt=null,Q=null,tt=0,Dt=0){let zt,Ut,Gt,qt,de,ge,Vt,Me,qe,Ie=S.isCompressedTexture?S.mipmaps[Dt]:S.image;if(rt!==null)zt=rt.max.x-rt.min.x,Ut=rt.max.y-rt.min.y,Gt=rt.isBox3?rt.max.z-rt.min.z:1,qt=rt.min.x,de=rt.min.y,ge=rt.isBox3?rt.min.z:0;else{let Be=Math.pow(2,-tt);zt=Math.floor(Ie.width*Be),Ut=Math.floor(Ie.height*Be),S.isDataArrayTexture?Gt=Ie.depth:S.isData3DTexture?Gt=Math.floor(Ie.depth*Be):Gt=1,qt=0,de=0,ge=0}Q!==null?(Vt=Q.x,Me=Q.y,qe=Q.z):(Vt=0,Me=0,qe=0);let Pe=Pt.convert(G.format),Ze=Pt.convert(G.type),kt;G.isData3DTexture?(at.setTexture3D(G,0),kt=V.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(at.setTexture2DArray(G,0),kt=V.TEXTURE_2D_ARRAY):(at.setTexture2D(G,0),kt=V.TEXTURE_2D),y.activeTexture(V.TEXTURE0),y.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,G.flipY),y.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),y.pixelStorei(V.UNPACK_ALIGNMENT,G.unpackAlignment);let an=y.getParameter(V.UNPACK_ROW_LENGTH),ne=y.getParameter(V.UNPACK_IMAGE_HEIGHT),_e=y.getParameter(V.UNPACK_SKIP_PIXELS),Cn=y.getParameter(V.UNPACK_SKIP_ROWS),Yn=y.getParameter(V.UNPACK_SKIP_IMAGES);y.pixelStorei(V.UNPACK_ROW_LENGTH,Ie.width),y.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ie.height),y.pixelStorei(V.UNPACK_SKIP_PIXELS,qt),y.pixelStorei(V.UNPACK_SKIP_ROWS,de),y.pixelStorei(V.UNPACK_SKIP_IMAGES,ge);let Si=S.isDataArrayTexture||S.isData3DTexture,ye=G.isDataArrayTexture||G.isData3DTexture;if(S.isDepthTexture){let Be=it.get(S),Rn=it.get(G),Le=it.get(Be.__renderTarget),zn=it.get(Rn.__renderTarget);y.bindFramebuffer(V.READ_FRAMEBUFFER,Le.__webglFramebuffer),y.bindFramebuffer(V.DRAW_FRAMEBUFFER,zn.__webglFramebuffer);for(let ln=0;ln<Gt;ln++)Si&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,it.get(S).__webglTexture,tt,ge+ln),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,it.get(G).__webglTexture,Dt,qe+ln)),V.blitFramebuffer(qt,de,zt,Ut,Vt,Me,zt,Ut,V.DEPTH_BUFFER_BIT,V.NEAREST);y.bindFramebuffer(V.READ_FRAMEBUFFER,null),y.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(tt!==0||S.isRenderTargetTexture||it.has(S)){let Be=it.get(S),Rn=it.get(G);y.bindFramebuffer(V.READ_FRAMEBUFFER,L),y.bindFramebuffer(V.DRAW_FRAMEBUFFER,k);for(let Le=0;Le<Gt;Le++)Si?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Be.__webglTexture,tt,ge+Le):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Be.__webglTexture,tt),ye?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Rn.__webglTexture,Dt,qe+Le):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Rn.__webglTexture,Dt),tt!==0?V.blitFramebuffer(qt,de,zt,Ut,Vt,Me,zt,Ut,V.COLOR_BUFFER_BIT,V.NEAREST):ye?V.copyTexSubImage3D(kt,Dt,Vt,Me,qe+Le,qt,de,zt,Ut):V.copyTexSubImage2D(kt,Dt,Vt,Me,qt,de,zt,Ut);y.bindFramebuffer(V.READ_FRAMEBUFFER,null),y.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else ye?S.isDataTexture||S.isData3DTexture?V.texSubImage3D(kt,Dt,Vt,Me,qe,zt,Ut,Gt,Pe,Ze,Ie.data):G.isCompressedArrayTexture?V.compressedTexSubImage3D(kt,Dt,Vt,Me,qe,zt,Ut,Gt,Pe,Ie.data):V.texSubImage3D(kt,Dt,Vt,Me,qe,zt,Ut,Gt,Pe,Ze,Ie):S.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Dt,Vt,Me,zt,Ut,Pe,Ze,Ie.data):S.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Dt,Vt,Me,Ie.width,Ie.height,Pe,Ie.data):V.texSubImage2D(V.TEXTURE_2D,Dt,Vt,Me,zt,Ut,Pe,Ze,Ie);y.pixelStorei(V.UNPACK_ROW_LENGTH,an),y.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ne),y.pixelStorei(V.UNPACK_SKIP_PIXELS,_e),y.pixelStorei(V.UNPACK_SKIP_ROWS,Cn),y.pixelStorei(V.UNPACK_SKIP_IMAGES,Yn),Dt===0&&G.generateMipmaps&&V.generateMipmap(kt),y.unbindTexture()},this.initRenderTarget=function(S){it.get(S).__webglFramebuffer===void 0&&at.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?at.setTextureCube(S,0):S.isData3DTexture?at.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?at.setTexture2DArray(S,0):at.setTexture2D(S,0),y.unbindTexture()},this.resetState=function(){W=0,$=0,J=null,y.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Se._getDrawingBufferColorSpace(t),e.unpackColorSpace=Se._getUnpackColorSpace()}};var gv=["top","side","bottom"],xv={slab_bottom:1,slab_top:1,stairs:1},jd=[[0,.5,0,1,1,.5],[.5,.5,0,1,1,1],[0,.5,.5,1,1,1],[0,.5,0,.5,1,1]];function _v(n){return!n||!n.shape?null:n.shape==="slab_bottom"?[[0,0,0,1,.5,1]]:n.shape==="slab_top"?[[0,.5,0,1,1,1]]:n.shape==="stairs"?[[0,0,0,1,.5,1],jd[n.facing|0]]:null}function Qd(n){let t=n&&n.blocks||[],e=n&&n.items||[],i=new Array(256).fill(null),s=Object.create(null),r=[];for(let b of t){if(!b||typeof b.id!="string")throw new Error("block without id");if(!Number.isInteger(b.n)||b.n<0||b.n>255)throw new Error("bad n for "+b.id);if(i[b.n])throw new Error("duplicate n "+b.n+" ("+b.id+")");if(s[b.id])throw new Error("duplicate id "+b.id);let R=b.colors||{},F=Object.assign({solid:!0,transparent:!1,liquid:!1,emissive:!1,hardness:1,drops:"self",buy:null,maxStack:64,pattern:"plain",kind:"block"},b);if(F.placeable=F.n!==0&&!F.liquid,F.colors={top:R.top||"#888888",side:R.side||R.top||"#888888",bottom:R.bottom||R.top||"#888888"},F.opaque=F.solid&&!F.transparent&&!F.cutout&&!xv[F.shape],F.tile={},F.tileOf&&s[F.tileOf])F.tile=Object.assign({},s[F.tileOf].tile);else if(F.n!==0){let Y={};for(let B of gv){let L=F.colors[B]+"|"+(F.pattern==="grass"||F.pattern==="log"||F.pattern==="lamp"||F.pattern==="table"||F.pattern==="stele"||F.pattern==="torch"||F.pattern==="bed"||F.pattern==="snow"||F.pattern==="lantern"||F.pattern==="bookshelf"||F.pattern==="hay"||F.pattern==="barrel"||F.pattern==="chest"||F.pattern==="farmland"?B:"");Y[L]===void 0&&(Y[L]=r.length,r.push({block:F.id,face:B,color:F.colors[B],pattern:F.pattern,accent:F.accent||null,top:F.colors.top})),F.tile[B]=Y[L]}}i[F.n]=F,s[F.id]=F}if(!s.air)throw new Error("registry needs air");for(let b of e){if(s[b.id])throw new Error("duplicate id "+b.id);s[b.id]=Object.assign({kind:"item",placeable:!1,maxStack:64,buy:null},b)}for(let b in s){let R=s[b].drops;if(R&&R!=="self"&&!s[R])throw new Error(b+" drops unknown "+R)}let o=b=>(typeof b=="number"?i[b]:s[b])||null,l=new Uint8Array(256),c=new Uint8Array(256),a=new Uint8Array(256),d=new Uint8Array(256),h=new Uint8Array(256),u=new Uint8Array(256),x={torch:1,cross:2,small:3,carpet:4,slab_bottom:5,slab_top:6,stairs:7},_=new Uint8Array(256),M=new Array(256).fill(null),g=new Uint8Array(256),m=new Uint8Array(256),C=new Uint8Array(256),N=new Uint8Array(256),w=new Uint8Array(256),A=new Int16Array(256).fill(-1),T=new Int16Array(256).fill(-1),U=new Int16Array(256).fill(-1);i.forEach((b,R)=>{b&&(g[R]=b.solid?1:0,m[R]=b.opaque?1:0,C[R]=b.transparent?1:0,N[R]=b.emissive?1:0,w[R]=b.liquid?1:0,l[R]=b.light!=null?b.light:b.emissive?15:0,c[R]=b.liquid?2:0,a[R]=x[b.shape]||0,d[R]=b.cutout?1:0,h[R]=b.climbable?1:0,u[R]=b.plant?1:0,_[R]=b.facing|0,b.solid&&(M[R]=_v(b)),R&&(A[R]=b.tile.top,T[R]=b.tile.side,U[R]=b.tile.bottom))});let v=(n&&n.blueprints||[]).map(b=>Object.assign({kind:"blueprint"},b));return{blocks:i.filter(Boolean),items:e.map(b=>s[b.id]),blueprints:v,tiles:r,get:o,toolOf:b=>{let R=b&&s[b];return R&&R.kind==="item"&&R.tool&&typeof R.tool=="object"?R.tool:null},num:b=>{let R=s[b];if(!R||R.kind!=="block")throw new Error("no block "+b);return R.n},name:b=>{let R=o(b);return R?R.name_zh:String(b)},maxStack:b=>{let R=s[b];return R?R.maxStack:64},dropOf:b=>{let R=i[b];return!R||!R.drops?null:R.drops==="self"?R.id:R.drops},breakTime:b=>{let R=i[b];return!R||R.hardness<0?1/0:.25+R.hardness*.55},flat:{solid:g,opaque:m,trans:C,emit:N,liquid:w,tileTop:A,tileSide:T,tileBottom:U,lightEmit:l,attn:c,shape:a,cutout:d,climb:h,plant:u,facing:_,boxes:M}}}var Pi=n=>Math.floor(n/16);var Ee=(n,t,e)=>(t*16+e)*16+n;var _i=(n,t)=>n+","+t,tp=n=>n.split(",").map(Number);function kh(n,t,e){if(n=Math.floor(n),t=Math.floor(t),e=Math.floor(e),t<0||t>=64)return null;let i=Pi(n),s=Pi(e);return{cx:i,cz:s,i:Ee(n-i*16,t,e-s*16)}}function ep(n,t,e){let i=[];for(let s=-e;s<=e;s++)for(let r=-e;r<=e;r++){let o=r*r+s*s;o<=e*e+e&&i.push({cx:n+r,cz:t+s,d2:o})}return i.sort((s,r)=>s.d2-r.d2)}function ii(n,t,e,i){let s=(n|0)^Math.imul(t|0,668265261)^Math.imul(e|0,374761393)^Math.imul(i|0,2654435761);return s=Math.imul(s^s>>>15,2246822507),s=Math.imul(s^s>>>13,3266489909),s^=s>>>16,(s>>>0)/4294967296}var or=(n,t,e)=>ii(n,t,0,e);function yv(n){let t=n>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>>17,t^=t<<5,t>>>=0,t/4294967296)}var Vh=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],vv=.5*(Math.sqrt(3)-1),oo=(3-Math.sqrt(3))/6;function Ms(n){let t=yv(n),e=new Uint8Array(256);for(let s=0;s<256;s++)e[s]=s;for(let s=255;s>0;s--){let r=Math.floor(t()*(s+1)),o=e[s];e[s]=e[r],e[r]=o}let i=new Uint8Array(512);for(let s=0;s<512;s++)i[s]=e[s&255];return function(s,r){let o=(s+r)*vv,l=Math.floor(s+o),c=Math.floor(r+o),a=(l+c)*oo,d=s-(l-a),h=r-(c-a),u=d>h?1:0,x=1-u,_=d-u+oo,M=h-x+oo,g=d-1+2*oo,m=h-1+2*oo,C=l&255,N=c&255,w=0,A,T;return A=.5-d*d-h*h,A>0&&(T=Vh[i[C+i[N]]&7],A*=A,w+=A*A*(T[0]*d+T[1]*h)),A=.5-_*_-M*M,A>0&&(T=Vh[i[C+u+i[N+x]]&7],A*=A,w+=A*A*(T[0]*_+T[1]*M)),A=.5-g*g-m*m,A>0&&(T=Vh[i[C+1+i[N+1]]&7],A*=A,w+=A*A*(T[0]*g+T[1]*m)),70*w}}function Ss(n,t,e,i){let s=1,r=1,o=0,l=0;for(let c=0;c<i;c++)o+=s*n(t*r,e*r),l+=s,s*=.5,r*=2;return o/l}function Gh(n){let t=e=>e*e*(3-2*e);return function(e,i,s){let r=Math.floor(e),o=Math.floor(i),l=Math.floor(s),c=t(e-r),a=t(i-o),d=t(s-l),h=(x,_,M)=>ii(n,r+x,o+_,l+M),u=(x,_,M)=>x+(_-x)*M;return u(u(u(h(0,0,0),h(1,0,0),c),u(h(0,1,0),h(1,1,0),c),a),u(u(h(0,0,1),h(1,0,1),c),u(h(0,1,1),h(1,1,1),c),a),d)}}var ar=160,si=18,Hh=[[0,1],[-1,0],[0,-1],[1,0]];function np(n,t,e,i,s){return s===1?[i-1-t,n]:s===2?[e-1-n,i-1-t]:s===3?[t,e-1-n]:[n,t]}var Mv=(n,t,e)=>e&1?[t,n]:[n,t];function ip(n,t,e){let i=new Map,s=t.SEA,r=e&&e.templates||{};function o(c,a){let d=c+","+a;if(i.has(d))return i.get(d);let h=null,u=x=>ii(n+909,c,x,a);if(u(0)<.45&&e&&e.houses&&e.houses.length){let x=Math.floor((c+.2+u(1)*.6)*ar),_=Math.floor((a+.2+u(2)*.6)*ar),M=t.biomeOf(x,_),g=t.height(x,_),m=(M==="plains"||M==="desert")&&Math.hypot(x,_)>110;if(m&&g>s+1)for(let C=0;C<16&&m;C++)for(let N of[7,14]){let w=t.height(x+Math.round(Math.cos(C*.39)*N),_+Math.round(Math.sin(C*.39)*N));(Math.abs(w-g)>3||w<=s)&&(m=!1)}else m=!1;if(m){let C=[],N=[],w=3+Math.floor(u(3)*4),A=(T,U,v,b)=>{let R=r[T];if(!R)return null;let[F,Y]=Mv(R.size[0],R.size[2],b),B={tpl:T,rot:b,x0:U-(F>>1),z0:v-(Y>>1),y:g,w:F,d:Y,h:R.size[1]};return C.push(B),B};A("well",x,_,0),A("lamp_post",x+3,_+3,0),A("lamp_post",x-3,_-3,0);for(let T=0;T<w;T++){let U=T/w*Math.PI*2+u(10+T)*.5,v=9+u(20+T)*3,b=x+Math.round(Math.cos(U)*v),R=_+Math.round(Math.sin(U)*v),F=x-b,Y=_-R,B=0,L=-1/0;Hh.forEach((ot,Tt)=>{let j=ot[0]*F+ot[1]*Y;j>L&&(L=j,B=Tt)});let k=e.houses[Math.floor(u(30+T)*e.houses.length)],W=A(k,b,R,B);if(!W)continue;let $=r[k],[J,K]=np($.door[0],$.door[1],$.size[0],$.size[2],B),st={x:W.x0+J+Hh[B][0],z:W.z0+K+Hh[B][1]};N.push({ax:x,az:_,bx:st.x,bz:st.z})}h={id:d,x,z:_,y:g,biome:M,structures:C,paths:N,villagers:2+Math.floor(u(4)*3)}}}return i.set(d,h),h}function l(c,a,d,h){let u=[];for(let x=Math.floor((a-si)/ar);x<=Math.floor((h+si)/ar);x++)for(let _=Math.floor((c-si)/ar);_<=Math.floor((d+si)/ar);_++){let M=o(_,x);M&&M.x+si>=c&&M.x-si<=d&&M.z+si>=a&&M.z-si<=h&&u.push(M)}return u}return{plan:o,around:l,chunk:(c,a)=>l(c*16,a*16,c*16+16-1,a*16+16-1)}}function sp(n,t,e,i,s,r,o){let l=t*16,c=e*16,a=(_,M)=>_>=l&&_<l+16&&M>=c&&M<c+16,d=i.biome==="desert",h=d?s.desert||{}:{},u=_=>{let M=s.palette[_];if(!M)return null;let g=h[M]||M;return r.byId(g)},x=d?r.byId("sandstone"):r.byId("cobblestone");for(let _ of i.paths){let M=Math.max(Math.abs(_.bx-_.ax),Math.abs(_.bz-_.az));for(let g=0;g<=M;g++){let m=Math.round(_.ax+(_.bx-_.ax)*g/M),C=Math.round(_.az+(_.bz-_.az)*g/M);if(!a(m,C))continue;let N=o.height(m,C),w=Ee(m-l,N,C-c);n[w]&&n[w]!==r.water&&(n[w]=r.path);for(let A=N+1;A<Math.min(64,N+4);A++){let T=Ee(m-l,A,C-c);(n[T]===r.leaves||n[T]===r.log||A===N+1)&&(n[T]=0)}}}for(let _ of i.structures){let M=s.templates[_.tpl];if(!M)continue;let[g,,m]=M.size;for(let C=0;C<m;C++)for(let N=0;N<g;N++){let[w,A]=np(N,C,g,m,_.rot),T=_.x0+w,U=_.z0+A;if(!a(T,U))continue;let v=T-l,b=U-c;for(let R=_.y-1;R>Math.max(0,_.y-8);R--){let F=Ee(v,R,b);if(n[F]&&n[F]!==r.water)break;n[F]=x}for(let R=_.y+M.size[1];R<Math.min(64,_.y+M.size[1]+3);R++)n[Ee(v,R,b)]=0;M.layers.forEach((R,F)=>{let Y=(R[C]||"")[N];if(!Y||Y===" ")return;let B=_.y+F;B>=64||(n[Ee(v,B,b)]=Y==="."?0:u(Y)||0)})}}}var wn=24;var op={ocean:"\u6D77\u6D0B",plains:"\u8349\u539F",forest:"\u68EE\u6797",desert:"\u6C99\u6F20",snow:"\u96EA\u5730"},rp=[{ore:"coal",y0:5,y1:55,count:12,chance:1,size:7},{ore:"iron",y0:4,y1:40,count:8,chance:1,size:5},{ore:"gold",y0:3,y1:24,count:3,chance:.8,size:4},{ore:"diamond",y0:2,y1:13,count:2,chance:.6,size:3}],lr=112;function ap(n,t,e){let i=B=>t.num(B),s=B=>{try{return i(B)}catch{return 0}},r={air:0,grass:i("grass"),dirt:i("dirt"),stone:i("stone"),sand:i("sand"),water:i("water"),log:i("log"),leaves:i("leaves"),coal:i("coal_ore"),iron:i("iron_ore"),ruby:i("ruby_ore"),gold:i("gold_ore"),diamond:i("diamond_ore"),bedrock:i("bedrock"),stele:i("stele")};Object.assign(r,{portal:s("portal_forest"),sandstone:s("sandstone")||r.stone,cactus:s("cactus"),snow:s("snow")||r.grass,ice:s("ice")||r.water,slog:s("spruce_log")||r.log,sleaves:s("spruce_leaves")||r.leaves}),r.path=s("path")||r.dirt,r.byId=s;let o=["flower_rose","flower_marigold","flower_dandelion","flower_hydrangea","flower_cornflower","flower_lavender","flower_peony"].map(s).filter(Boolean);Object.assign(r,{tallgrass:s("tallgrass"),fern:s("fern"),deadbush:s("deadbush"),mushR:s("mushroom_red"),mushB:s("mushroom_brown")});let l=Ms(n),c=Ms(n+101),a=Ms(n+202),d=Ms(n+303),h=Ms(n+404),u=Gh(n+505),x=Gh(n+606);function _(B,L){let k=Ss(l,B/190,L/190,3),W=Ss(c,B/55,L/55,4),$=Math.max(0,Ss(a,B/130,L/130,2)-.1),J=27+k*9+W*6+$*$*75;return Math.max(4,Math.min(54,Math.floor(J)))}let M=Ms(n+808);function g(B,L){let k=_(B,L),W=Ss(M,B/900,L/900,2),$=Math.min(1,Math.max(0,(Math.hypot(B,L)-240)/80)),J=Math.min(1,Math.max(0,(-.18-W)/.17)),K=J*J*(3-2*J)*$;return K>0&&(k=Math.round(k*(1-K)+(wn-14)*K)),k<wn-1?Math.max(3,Math.floor(wn-1-(wn-1-k)*1.8)):k}function m(B,L){let k=(or(n+3,B,L)-.5)*.025;return{t:Ss(d,B/420,L/420,2)+k,u:Ss(h,B/380,L/380,2)-k}}function C(B,L,k=g(B,L)){if(k<wn-1)return"ocean";let{t:W,u:$}=m(B,L);return W<-.3?"snow":W>.28&&$<.05?"desert":$>.12?"forest":"plains"}let N=null;function w(){if(N)return N;let B=(L,k)=>{let W=g(L,k);return W>=wn+2&&Math.abs(g(L+1,k)-W)<2&&Math.abs(g(L,k+1)-W)<2};for(let L=0;L<400;L+=2)for(let k=0;k<Math.max(1,L*2);k++){let W=k/Math.max(1,L*2)*Math.PI*2,$=Math.round(Math.cos(W)*L),J=Math.round(Math.sin(W)*L);if(B($,J)&&B($+3,J+2))return N={x:$+.5,y:g($,J)+1,z:J+.5,stele:{x:$+3,y:g($+3,J+2)+1,z:J+2},portal:{x:$-3,y:Math.max(wn+1,g($-3,J+2))+1,z:J+2}},N}return N={x:.5,y:60,z:.5,stele:{x:3,y:58,z:2}},N}function A(B,L){let k=[],W=B*16,$=L*16,J=Math.floor((W-80)/lr),K=Math.floor((W+16+80)/lr),st=Math.floor(($-80)/lr),ot=Math.floor(($+16+80)/lr);for(let Tt=st;Tt<=ot;Tt++)for(let j=J;j<=K;j++){let At=yt=>ii(n+707,j,yt,Tt);if(At(0)>.25)continue;let vt=(j+At(1))*lr,_t=(Tt+At(2))*lr,q=At(3)*Math.PI,nt=40+At(4)*30;k.push({ax:vt-Math.cos(q)*nt/2,az:_t-Math.sin(q)*nt/2,dx:Math.cos(q)*nt,dz:Math.sin(q)*nt,len:nt,floor:7+Math.floor(At(5)*6),w:1.6+At(6)*1.2})}return k}function T(B,L){let k=new Uint8Array(16384),W=B*16,$=L*16,J=18,K=new Int16Array(J*J);for(let vt=-1;vt<=16;vt++)for(let _t=-1;_t<=16;_t++)K[(vt+1)*J+_t+1]=g(W+_t,$+vt);let st=w(),ot=new Array(256);for(let vt=0;vt<16;vt++)for(let _t=0;_t<16;_t++){let q=W+_t,nt=$+vt,yt=K[(vt+1)*J+_t+1],Ot=Math.max(Math.abs(K[(vt+1)*J+_t]-yt),Math.abs(K[(vt+1)*J+_t+2]-yt),Math.abs(K[vt*J+_t+1]-yt),Math.abs(K[(vt+2)*J+_t+1]-yt))>=3,xt=ot[vt*16+_t]=C(q,nt,yt),Bt=yt<=wn+1,jt,Xt;xt==="ocean"||Bt||xt==="desert"?(jt=r.sand,Xt=r.sand):Ot?(jt=r.stone,Xt=r.stone):xt==="snow"?(jt=r.snow,Xt=r.dirt):(jt=r.grass,Xt=r.dirt);for(let Zt=0;Zt<=yt;Zt++){let he;if(Zt===0?he=r.bedrock:Zt===yt?he=jt:Zt>=yt-3?he=Xt:xt==="desert"&&Zt>=yt-7?he=r.sandstone:he=r.stone,he===r.stone&&Ot&&Zt>=yt-4){let Ht=ii(n,q,Zt,nt);Ht<.06?he=r.coal:Ht<.09?he=r.iron:Ht<.096&&(he=r.ruby)}k[Ee(_t,Zt,vt)]=he}for(let Zt=yt+1;Zt<=wn;Zt++)k[Ee(_t,Zt,vt)]=Zt===wn&&xt==="snow"?r.ice:r.water}U(k,B,L,K,J);for(let vt=0;vt<rp.length;vt++){let _t=rp[vt],q=r[_t.ore];for(let nt=0;nt<_t.count;nt++){let yt=jt=>ii(n+31*vt+jt,B*977+nt,jt,L*131+nt);if(yt(9)>_t.chance)continue;let Ot=Math.floor(yt(1)*16),xt=_t.y0+Math.floor(yt(2)*(_t.y1-_t.y0)),Bt=Math.floor(yt(3)*16);for(let jt=0;jt<_t.size;jt++){Ot>=0&&Ot<16&&Bt>=0&&Bt<16&&xt>0&&xt<64&&k[Ee(Ot,xt,Bt)]===r.stone&&(k[Ee(Ot,xt,Bt)]=q);let Xt=Math.floor(yt(10+jt)*6);Xt===0?Ot++:Xt===1?Ot--:Xt===2?xt++:Xt===3?xt--:Xt===4?Bt++:Bt--}}}let Tt=e?Y.chunk(B,L):[];v(k,B,L,K,J,ot,st,Tt);for(let vt of Tt)sp(k,B,L,vt,e,r,F);let j=st.stele;if(Math.floor(j.x/16)===B&&Math.floor(j.z/16)===L){let vt=j.x-W,_t=j.z-$;k[Ee(vt,j.y,_t)]=r.stele,k[Ee(vt,j.y+1,_t)]=r.stele}let At=st.portal;if(r.portal&&At&&Math.floor(At.x/16)===B&&Math.floor(At.z/16)===L){let vt=At.x-W,_t=At.z-$;for(let q=Math.max(1,At.y-3);q<At.y;q++)(!k[Ee(vt,q,_t)]||k[Ee(vt,q,_t)]===r.water)&&(k[Ee(vt,q,_t)]=r.stone);k[Ee(vt,At.y,_t)]=r.portal,k[Ee(vt,At.y+1,_t)]=r.portal}return k}function U(B,L,k,W,$){let J=L*16,K=k*16,st=4,ot=16/st+1,Tt=64/st+1,j=new Float32Array(ot*ot*Tt);for(let _t=0;_t<Tt;_t++)for(let q=0;q<ot;q++)for(let nt=0;nt<ot;nt++){let yt=J+nt*st,Ot=_t*st,xt=K+q*st,Bt=u(yt/22,Ot/14,xt/22)-.5,jt=x(yt/22,Ot/14,xt/22)-.5;j[(_t*ot+q)*ot+nt]=Bt*Bt+jt*jt}let At=(_t,q,nt)=>j[(q*ot+nt)*ot+_t],vt=A(L,k);for(let _t=0;_t<16;_t++)for(let q=0;q<16;q++){let nt=W[(_t+1)*$+q+1],yt=nt<=wn+1,Ot=yt?nt-5:nt,xt=q>>2,Bt=_t>>2,jt=(q&3)/st,Xt=(_t&3)/st;for(let Ht=3;Ht<=Ot;Ht++){let le=Ht>>2,Ne=(Ht&3)/st,He=At(xt,le,Bt)+(At(xt+1,le,Bt)-At(xt,le,Bt))*jt,Ce=At(xt,le,Bt+1)+(At(xt+1,le,Bt+1)-At(xt,le,Bt+1))*jt,we=At(xt,le+1,Bt)+(At(xt+1,le+1,Bt)-At(xt,le+1,Bt))*jt,V=At(xt,le+1,Bt+1)+(At(xt+1,le+1,Bt+1)-At(xt,le+1,Bt+1))*jt;if((He+(Ce-He)*Xt)*(1-Ne)+(we+(V-we)*Xt)*Ne<.008){let ve=Ee(q,Ht,_t);B[ve]!==r.bedrock&&B[ve]!==r.water&&(B[ve]=0)}}if(!vt.length||yt)continue;let Zt=J+q,he=K+_t;for(let Ht of vt){let le=Math.max(0,Math.min(1,((Zt-Ht.ax)*Ht.dx+(he-Ht.az)*Ht.dz)/(Ht.len*Ht.len))),Ne=Ht.ax+Ht.dx*le,He=Ht.az+Ht.dz*le,Ce=Math.hypot(Zt-Ne,he-He),we=Ht.w*Math.sin(Math.PI*le);if(Ce<we)for(let V=Ht.floor+Math.floor(Ce*2);V<=nt;V++){let We=Ee(q,V,_t);B[We]!==r.water&&(B[We]=0)}}}}function v(B,L,k,W,$,J,K,st){let ot=L*16,Tt=k*16;for(let j=0;j<16;j++)for(let At=0;At<16;At++){let vt=ot+At,_t=Tt+j,q=W[(j+1)*$+At+1],nt=J[j*16+At];if(q+1>=64||Math.hypot(vt-K.x,_t-K.z)<48)continue;let yt=B[Ee(At,q,j)],Ot=Ee(At,q+1,j);if(B[Ot])continue;let xt=or(n+11,vt,_t),Bt=or(n+13,vt,_t);yt===r.grass?xt<.012&&o.length?B[Ot]=o[Math.floor(Bt*o.length)]:xt<(nt==="plains"?.1:.05)&&r.tallgrass?B[Ot]=r.tallgrass:nt==="forest"&&xt<.08&&r.fern?B[Ot]=r.fern:nt==="forest"&&xt<.084&&r.mushR&&(B[Ot]=Bt<.5?r.mushR:r.mushB):yt===r.sand&&nt==="desert"&&q>wn+1&&xt<.008&&r.deadbush&&(B[Ot]=r.deadbush)}for(let j=2;j<14;j++)for(let At=2;At<14;At++){let vt=ot+At,_t=Tt+j,q=W[(j+1)*$+At+1],nt=J[j*16+At],yt=B[Ee(At,q,j)];if(Math.abs(vt-K.x)<7&&Math.abs(_t-K.z)<7||st.some(jt=>Math.abs(vt-jt.x)<si+2&&Math.abs(_t-jt.z)<si+2))continue;let Ot=or(n+7,vt,_t),xt=or(n+9,vt,_t);if(nt==="desert"&&yt===r.sand&&q>wn+1&&Ot<.008&&r.cactus){let jt=1+Math.floor(xt*3);for(let Xt=q+1;Xt<=q+jt&&Xt<64;Xt++)B[Ee(At,Xt,j)]=r.cactus;continue}if(nt==="snow"&&yt===r.snow&&Ot<.02){R(B,At,j,q,5+Math.floor(xt*3));continue}let Bt=nt==="forest"?.035:nt==="plains"?.003:0;yt===r.grass&&Ot<Bt&&b(B,At,j,q,vt,_t,4+Math.floor(xt*2))}}function b(B,L,k,W,$,J,K){let st=W+K;if(!(st+2>=64)){for(let ot=st-2;ot<=st+1;ot++){let Tt=ot>=st?1:2;for(let j=-Tt;j<=Tt;j++)for(let At=-Tt;At<=Tt;At++){if(Tt===2&&Math.abs(At)===2&&Math.abs(j)===2&&ii(n,$+At,ot,J+j)<.6)continue;let vt=Ee(L+At,ot,k+j);B[vt]===r.air&&(B[vt]=r.leaves)}}B[Ee(L,W,k)]=r.dirt;for(let ot=W+1;ot<=st;ot++)B[Ee(L,ot,k)]=r.log}}function R(B,L,k,W,$){let J=W+$;if(!(J+2>=64)){for(let K=W+2;K<=J+1;K++){let st=J+1-K,ot=st>=4?2:st>=1?1:0;for(let Tt=-ot;Tt<=ot;Tt++)for(let j=-ot;j<=ot;j++){if(ot===2&&Math.abs(j)+Math.abs(Tt)>3)continue;let At=Ee(L+j,K,k+Tt);B[At]===r.air&&(B[At]=r.sleaves)}}B[Ee(L,W,k)]=r.dirt;for(let K=W+1;K<=J;K++)B[Ee(L,K,k)]=r.slog}}let F={height:g,baseHeight:_,biomeOf:C,climate:m,genChunk:T,findSpawn:w,SEA:wn},Y=ip(n,F,e);return F.villages=Y,F}function Wh(n,t,e,i,s,r,o){let l=i/2,c=n-l,a=n+l,d=t,h=t+s,u=e-l,x=e+l,_=Math.floor(c),M=Math.floor(a-1e-6),g=Math.floor(d),m=Math.floor(h-1e-6),C=Math.floor(u),N=Math.floor(x-1e-6),w=!1;for(let A=g;A<=m;A++)for(let T=C;T<=N;T++)for(let U=_;U<=M;U++){let v=r(U,A,T);if(!v)continue;let b=v===!0?bv:v;for(let R of b){let F=U+R[0],Y=A+R[1],B=T+R[2],L=U+R[3],k=A+R[4],W=T+R[5];if(!(L<=c+1e-6||F>=a-1e-6||k<=d+1e-6||Y>=h-1e-6||W<=u+1e-6||B>=x-1e-6)){if(!o)return!0;w=!0,o.push([F,Y,B,L,k,W])}}}return w}var bv=[[0,0,0,1,1,1]],ao=(n,t,e,i,s,r)=>Wh(n,t,e,i,s,r,null),lp=(n,t,e=.6,i=1.8)=>!ao(n.x,n.y,n.z,e,i,t);function Vl(n,t,e,i,s={}){let r=s.w||.6,o=s.h||1.8,l=!!s.canStep,c=r/2,a=!1,d=0,h=Math.max(Math.abs(t.x),Math.abs(t.y),Math.abs(t.z))*e,u=Math.max(1,Math.ceil(h/.3)),x=e/u,_=[];for(let M=0;M<u;M++){let g=t.y*x;g&&(_.length=0,Wh(n.x,n.y+g,n.z,r,o,i,_)?(g<0?(n.y=Math.max(..._.map(m=>m[4])),a=!0):n.y=Math.min(..._.map(m=>m[1]))-o,t.y=0):n.y+=g);for(let m of["x","z"]){let C=t[m]*x;if(!C)continue;let N={x:n.x,y:n.y,z:n.z};if(N[m]+=C,_.length=0,!Wh(N.x,N.y,N.z,r,o,i,_)){n[m]=N[m];continue}if(l&&(a||s.grounded)){let A=Math.max(..._.map(T=>T[4]));if(A-n.y>0&&A-n.y<=1.01&&!ao(N.x,A,N.z,r,o,i)&&!ao(n.x,A,n.z,r,o,i)){d+=A-n.y,n.y=A,n[m]=N[m];continue}}let w=m==="x"?0:2;n[m]=C>0?Math.min(..._.map(A=>A[w]))-c-1e-4:Math.max(..._.map(A=>A[w+3]))+c+1e-4,ao(n.x,n.y,n.z,r,o,i)&&(n[m]=N[m]-C),t[m]=0}}return!a&&t.y<=0&&ao(n.x,n.y-.02,n.z,r,o,i)&&(a=!0),{onGround:a,stepped:d}}function wv(n,t,e,i,s,r){let o=[n.x,n.y,n.z],l=[t.x,t.y,t.z],c=null;for(let a of r){let d=[e+a[0],i+a[1],s+a[2]],h=[e+a[3],i+a[4],s+a[5]],u=0,x=1/0,_=-1,M=!0;for(let g=0;g<3&&M;g++){if(Math.abs(l[g])<1e-12){(o[g]<d[g]||o[g]>h[g])&&(M=!1);continue}let m=(d[g]-o[g])/l[g],C=(h[g]-o[g])/l[g];m>C&&([m,C]=[C,m]),m>u&&(u=m,_=g),C<x&&(x=C),u>x&&(M=!1)}if(M&&(!c||u<c.t)){let g=[0,0,0];_>=0&&(g[_]=-Math.sign(l[_])),c={t:u,face:_>=0?g:null}}}return c}function cr(n,t,e,i,s,r){let o=Math.floor(n.x),l=Math.floor(n.y),c=Math.floor(n.z),a=Math.sign(t.x),d=Math.sign(t.y),h=Math.sign(t.z),u=a?Math.abs(1/t.x):1/0,x=d?Math.abs(1/t.y):1/0,_=h?Math.abs(1/t.z):1/0,M=a?(a>0?o+1-n.x:n.x-o)*u:1/0,g=d?(d>0?l+1-n.y:n.y-l)*x:1/0,m=h?(h>0?c+1-n.z:n.z-c)*_:1/0,C=[0,0,0],N=0;for(;N<=e;){let w=i(o,l,c);if(w&&s(w)){let A=r&&r(w);if(!A)return{x:o,y:l,z:c,n:w,face:C,dist:N};let T=wv(n,t,o,l,c,A);if(T&&T.t<=e)return{x:o,y:l,z:c,n:w,face:T.face||C,dist:T.t}}M<g&&M<m?(o+=a,N=M,M+=u,C=[-a,0,0]):g<m?(l+=d,N=g,g+=x,C=[0,-d,0]):(c+=h,N=m,m+=_,C=[0,0,-h])}return null}var Kh={};zi(Kh,{ACC:()=>hp,BOOST:()=>Xh,BRAKE:()=>fp,CONN:()=>An,DECAY:()=>dp,DIR:()=>En,FRIC:()=>up,MAX:()=>lo,OPP:()=>Gl,blockId:()=>Hl,connect:()=>Yh,isStraight:()=>qh,linked:()=>mp,mount:()=>$h,pos:()=>Jh,shapeOf:()=>rs,step:()=>Zh});var An={ns:["n","s"],ew:["e","w"],ne:["n","e"],nw:["n","w"],se:["s","e"],sw:["s","w"]},En={n:[0,-1],s:[0,1],e:[1,0],w:[-1,0]},Gl={n:"s",s:"n",e:"w",w:"e"},cp={n:[.5,0],s:[.5,1],e:[1,.5],w:[0,.5]},hp=3,lo=6,Xh=11,up=.8,fp=6,dp=1.5,qh=n=>n==="ns"||n==="ew",Hl=(n,t)=>(n?"powered_rail":"rail")+(t==="ns"?"":"_"+t);function rs(n,t){if(!t||n===t)return n==="n"||n==="s"?"ns":"ew";for(let e in An)if(An[e].includes(n)&&An[e].includes(t))return e;return null}var pp=(n,t,e,i)=>n(t+En[i][0],e+En[i][1]);function mp(n,t,e){let i=n(t,e);return i?An[i.shape].filter(s=>{let r=pp(n,t,e,s);return r&&An[r.shape].includes(Gl[s])}):[]}function Yh(n,t,e,i,s="n"){let r=[];for(let c of["n","e","s","w"]){let a=pp(n,t,e,c);if(!a)continue;let d=t+En[c][0],h=e+En[c][1],u=Gl[c];if(An[a.shape].includes(u)){r.push({d:c,pri:0});continue}let x=mp(n,d,h);if(x.length>=2)continue;let _=x.length?rs(x[0],u):rs(u);_&&(!a.powered||qh(_))&&r.push({d:c,pri:1,ns:_})}r.sort((c,a)=>c.pri-a.pri);let o=[];for(let c of r){if(o.length===2)break;let a=o.length?rs(o[0].d,c.d):rs(c.d);!a||i&&!qh(a)||o.push(c)}return{shape:o.length===2?rs(o[0].d,o[1].d):o.length?rs(o[0].d):rs(s),updates:o.filter(c=>c.pri===1).map(c=>[t+En[c.d][0],e+En[c.d][1],c.ns])}}function $h(n,t,e,i,s,r,o=()=>!1){let l=An[n],c=d=>En[d][0]*s+En[d][1]*r+(o(d)?.01:0),a=c(l[0])>=c(l[1])?l[0]:l[1];return{x:t,y:e,z:i,shape:n,from:a===l[0]?l[1]:l[0],s:.5,v:0,lastIn:0}}function Zh(n,t,e,i){let s=i(n.x,n.z);if(!s)return n.v=0,n;for(n.shape=s.shape,An[s.shape].includes(n.from)||(n.from=An[s.shape][0]),e<-.1&&n.lastIn>=-.1&&n.v===0&&(n.from=An[s.shape].find(r=>r!==n.from),n.s=1-n.s),n.lastIn=e,s.powered&&(n.v=Math.max(n.v,Xh)),e>.1?n.v<lo&&(n.v=Math.min(lo,n.v+hp*t)):e<-.1?n.v=Math.max(0,n.v-fp*t):n.v=Math.max(0,n.v-up*t),n.v>lo&&!s.powered&&(n.v=Math.max(lo,n.v-dp*t)),n.s+=n.v*t;n.s>=1;){let r=An[s.shape].find(d=>d!==n.from),o=n.x+En[r][0],l=n.z+En[r][1],c=i(o,l),a=Gl[r];if(c&&An[c.shape].includes(a))n.x=o,n.z=l,n.from=a,n.s-=1,s=c,n.shape=c.shape,c.powered&&(n.v=Math.max(n.v,Xh));else{n.s=1,n.v=0;break}}return n}function Jh(n){let t=An[n.shape],e=t.includes(n.from)?n.from:t[0],i=t[0]===e?t[1]:t[0],s=cp[e],r=cp[i],o=[.5,.5],l=Math.max(0,Math.min(1,n.s)),[c,a,d]=l<.5?[s,o,l*2]:[o,r,l*2-1];return{x:n.x+c[0]+(a[0]-c[0])*d,z:n.z+c[1]+(a[1]-c[1])*d,yaw:Math.atan2(-(a[0]-c[0]),-(a[1]-c[1]))}}var nu={};zi(nu,{WINDOW:()=>Av,create:()=>jh,reel:()=>tu,roll:()=>eu,tick:()=>Qh});var Av=1.3,gp=n=>3+n()*6;function jh(n=Math.random){return{phase:"wait",t:0,biteAt:gp(n),rnd:n}}function Qh(n,t){return n.t+=t,n.phase==="wait"&&n.t>=n.biteAt?(n.phase="bite",n.t=0,"bite"):n.phase==="bite"&&n.t>1.3?(n.phase="wait",n.t=0,n.biteAt=gp(n.rnd),"escape"):null}var tu=n=>n&&n.phase==="bite"?"catch":"early";function eu(n,t=Math.random){let e=n.reduce((s,r)=>s+r.w,0),i=t()*e;for(let s of n)if(i-=s.w,i<0)return s;return n[n.length-1]}function xp(n){return{stats:Object.assign({},n&&n.stats),done:Object.assign({},n&&n.done)}}function _p(n,t,e=1){n.stats[t]=(n.stats[t]||0)+e}function yp(n,t,e=Date.now()){let i=[];for(let s of t)!n.done[s.id]&&(n.stats[s.stat]||0)>=s.need&&(n.done[s.id]=e,i.push(s));return i}var vp=(n,t)=>Math.min(t.need,n.stats[t.stat]||0);function Mp(n,t,e,i,s=5){let r=0;for(let o of n)Math.abs(o[0]-t)<=s&&Math.abs(o[1]-e)<=s&&Math.abs(o[2]-i)<=s&&r++;return r}function Sp(n){let t=new Uint8Array(256);for(let e=0;e<16;e++)for(let i=0;i<16;i++){let s=0;for(let r=63;r>=0;r--){let o=n[Ee(i,r,e)];if(o){s=o;break}}t[e*16+i]=s}return t}var bp=n=>btoa(String.fromCharCode.apply(null,n)),wp=n=>Uint8Array.from(atob(n),t=>t.charCodeAt(0));var Tv=n=>[parseInt(n.slice(1,3),16),parseInt(n.slice(3,5),16),parseInt(n.slice(5,7),16)],Wl=class{constructor(t,e){this.reg=t,this.tops=new Map,this.tiles=new Map,this.portals=new Map,this.dirty=!1,this.rgb=[];for(let i of t.blocks)this.rgb[i.n]=Tv(i.colors.top);if(e&&e.tops)for(let i in e.tops)try{this.tops.set(i,wp(e.tops[i]))}catch{}if(e&&Array.isArray(e.portals))for(let i of e.portals)this.portals.set(i.x+","+i.z,i)}scan(t,e,i=4){let s=0;for(let[r,o]of t.chunks){if(s>=i)break;if(!o.vox||this.tops.has(r)&&!(e&&e.has(r)))continue;e&&e.delete(r);let l=Sp(o.vox);this.tops.set(r,l),this.tiles.delete(r),this.dirty=!0,s++;let[c,a]=tp(r);for(let[d,h]of[...this.portals])Math.floor(h.x/16)===c&&Math.floor(h.z/16)===a&&this.portals.delete(d);for(let d=0;d<256;d++){let h=this.reg.get(l[d]);if(h&&h.interact==="portal"){let u=c*16+d%16,x=a*16+Math.floor(d/16);this.portals.set(u+","+x,{x:u,z:x,name:h.name_zh})}}}}tile(t){let e=this.tiles.get(t);if(e)return e;let i=this.tops.get(t);if(!i)return null;e=document.createElement("canvas"),e.width=e.height=16;let s=e.getContext("2d"),r=s.createImageData(16,16);for(let o=0;o<256;o++){let l=this.rgb[i[o]]||[239,235,221],c=o*4,a=.95+(o*2654435761>>>28)/16*.1;r.data[c]=l[0]*a,r.data[c+1]=l[1]*a,r.data[c+2]=l[2]*a,r.data[c+3]=i[o]?255:0}return s.putImageData(r,0,0),this.tiles.set(t,e),e}draw(t,e,i,s,r,o){t.imageSmoothingEnabled=!1;let l=e-r/2/s,c=i-o/2/s,a=e+r/2/s,d=i+o/2/s;for(let h=Math.floor(c/16);h<=Math.floor(d/16);h++)for(let u=Math.floor(l/16);u<=Math.floor(a/16);u++){let x=this.tile(_i(u,h));x&&t.drawImage(x,Math.round((u*16-l)*s),Math.round((h*16-c)*s),Math.ceil(16*s),Math.ceil(16*s))}return{x0:l,z0:c}}explored(t,e){return this.tops.has(_i(Math.floor(t/16),Math.floor(e/16)))}serialize(){let t={};for(let[e,i]of this.tops)t[e]=bp(i);return this.dirty=!1,{tops:t,portals:[...this.portals.values()]}}};function iu(n,t,e,i,s,r){let o=Math.atan2(-Math.cos(i),-Math.sin(i));n.save(),n.translate(t,e),n.rotate(o),n.fillStyle=r,n.strokeStyle="#EFEBDD",n.lineWidth=2,n.beginPath(),n.moveTo(s,0),n.lineTo(-s*.7,s*.65),n.lineTo(-s*.35,0),n.lineTo(-s*.7,-s*.65),n.closePath(),n.stroke(),n.fill(),n.restore()}var lu={};zi(lu,{HOTBAR:()=>su,SIZE:()=>Xl,add:()=>xn,canAdd:()=>uo,count:()=>ri,craft:()=>ou,craftable:()=>Yl,createInventory:()=>co,deserialize:()=>ql,moveBetween:()=>au,moveSlot:()=>ru,remove:()=>ho,serialize:()=>fo,takeFromSlot:()=>Li});var Xl=36,su=9;function co(n=36){return{slots:new Array(n).fill(null)}}function xn(n,t,e,i=()=>64){let s=i(t);for(let r=0;r<n.slots.length&&e>0;r++){let o=n.slots[r];if(o&&o.id===t&&o.count<s){let l=Math.min(e,s-o.count);o.count+=l,e-=l}}for(let r=0;r<n.slots.length&&e>0;r++)if(!n.slots[r]){let o=Math.min(e,s);n.slots[r]={id:t,count:o},e-=o}return e}function ri(n,t){return n.slots.reduce((e,i)=>e+(i&&i.id===t?i.count:0),0)}function ho(n,t,e){if(ri(n,t)<e)return!1;for(let i=n.slots.length-1;i>=0&&e>0;i--){let s=n.slots[i];if(s&&s.id===t){let r=Math.min(e,s.count);s.count-=r,e-=r,s.count||(n.slots[i]=null)}}return!0}function Li(n,t,e=1){let i=n.slots[t];if(!i||i.count<e)return null;i.count-=e;let s=i.id;return i.count||(n.slots[t]=null),s}function ru(n,t,e,i=()=>64){if(t===e)return;let s=n.slots[t],r=n.slots[e];if(s&&r&&s.id===r.id){let o=Math.min(s.count,i(s.id)-r.count);r.count+=o,s.count-=o,s.count||(n.slots[t]=null);return}n.slots[t]=r,n.slots[e]=s}function uo(n,t,e,i=()=>64){let s={slots:n.slots.map(r=>r&&{...r})};return xn(s,t,e,i)===0}var fo=n=>n.slots.map(t=>t?Number.isFinite(t.dur)?[t.id,t.count,t.dur]:[t.id,t.count]:0);function ql(n,t=36){let e=co(t);return(n||[]).slice(0,t).forEach((i,s)=>{Array.isArray(i)&&typeof i[0]=="string"&&i[1]>0&&(e.slots[s]={id:i[0],count:i[1]|0},Number.isFinite(i[2])&&(e.slots[s].dur=i[2]))}),e}function Yl(n,t,e={}){if(t.blueprint&&!(e.owned&&e.owned.has(t.blueprint)))return{ok:!1,reason:"blueprint"};if(t.needs&&!(e.near&&e.near.has(t.needs)))return{ok:!1,reason:"needs"};for(let i in t.in)if(ri(n,i)<t.in[i])return{ok:!1,reason:"materials"};return{ok:!0}}function ou(n,t,e=()=>64,i){let s=Yl(n,t,i||{near:new Set([t.needs]),owned:new Set([t.blueprint])});if(!s.ok)return s;let r=n.slots.map(o=>o&&{...o});for(let o in t.in)ho(n,o,t.in[o]);return xn(n,t.out.id,t.out.count,e)>0?(n.slots=r,{ok:!1,reason:"full"}):{ok:!0}}function au(n,t,e,i,s=()=>64){let r=n.slots[t],o=e.slots[i];if(r&&o&&r.id===o.id){let l=Math.min(r.count,s(r.id)-o.count);o.count+=l,r.count-=l,r.count||(n.slots[t]=null);return}n.slots[t]=o,e.slots[i]=r}function Cv(n=0){return{coins:n|0,earned:0,spent:0,owned:[]}}var hr=(n,t)=>n.owned.includes(t),Ap=(n,t)=>n?t?2:1:0;function Di(n,t){return t=Math.max(0,t|0),n.coins+=t,n.earned+=t,n.coins}function po(n,t){return t=Math.max(0,t|0),n.coins<t?!1:(n.coins-=t,n.spent+=t,!0)}function Ep(n){return n.blocks.concat(n.items).filter(t=>t&&t.buy).map(t=>({id:t.id,name_zh:t.name_zh,qty:t.buy.qty||1,price:t.buy.price|0,locked:t.buy.locked||null})).concat((n.blueprints||[]).map(t=>({id:t.id,name_zh:t.name_zh,qty:1,price:t.price|0,locked:t.locked||null,blueprint:!0,desc:t.desc||""})))}function Tp(n,t,e,i=()=>64){return e?e.locked?{ok:!1,reason:"locked"}:e.blueprint&&hr(n,e.id)?{ok:!1,reason:"owned"}:n.coins<e.price?{ok:!1,reason:"coins"}:e.blueprint?(po(n,e.price),n.owned.push(e.id),{ok:!0}):uo(t,e.id,e.qty,i)?(po(n,e.price),xn(t,e.id,e.qty,i),{ok:!0}):{ok:!1,reason:"full"}:{ok:!1,reason:"missing"}}var Cp=n=>({coins:n.coins,earned:n.earned,spent:n.spent,owned:n.owned.slice()});function Rp(n){let t=Cv(n&&n.coins);return n&&(t.earned=n.earned|0,t.spent=n.spent|0,t.owned=Array.isArray(n.owned)?n.owned.slice():[]),t}function Iv(){return new Map}function Ip(n,t,e,i){let s=n.get(t);s||(s=new Map,n.set(t,s)),s.set(e,i)}function cu(n){let t=new Array(n.size*2),e=0;for(let[i,s]of n)t[e++]=i,t[e++]=s;return t}function Pv(n){let t=new Map;for(let e=0;e+1<(n||[]).length;e+=2)t.set(n[e]|0,n[e+1]|0);return t}function Pp(n){let t=Iv();for(let e in n||{})t.set(e,Pv(n[e]));return t}var $l=16;var uw=18;var Ui=32;function Lp(n){let t=n>>>0||7;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var $e=n=>[parseInt(n.slice(1,3),16),parseInt(n.slice(3,5),16),parseInt(n.slice(5,7),16)],Mt=(n,t=1,e=1)=>`rgba(${Math.round(Math.min(255,n[0]*t))},${Math.round(Math.min(255,n[1]*t))},${Math.round(Math.min(255,n[2]*t))},${e})`;function Lv(n){let t=2166136261;for(let e=0;e<n.length;e++)t=Math.imul(t^n.charCodeAt(e),16777619);return t>>>0}function Kt(n,t){n.beginPath(),n.moveTo(t[0][0],t[0][1]);for(let e=1;e<t.length;e++)n.lineTo(t[e][0],t[e][1]);n.closePath(),n.fill()}function Ni(n,t,e,i,s){let r=3+Math.floor(t()*2),o=[];for(let l=0;l<r;l++){let c=l/r*Math.PI*2+t()*.8;o.push([e+Math.cos(c)*s*(.6+t()*.5),i+Math.sin(c)*s*(.6+t()*.5)])}Kt(n,o)}var Dv=new Set(["flower","tallgrass","fern","deadbush","mushroom","ladder","door_open","wheat","rail"]);function Nv(n,t){let e=$e(t.color),i=Lp(Lv(t.block+t.face)),s=Ui;if(Dv.has(t.pattern)){Uv(n,t,e,i,s);return}let r=1;t.pattern==="stained"?r=.5:t.pattern==="glass"?r=.22:t.pattern==="water"?r=.72:t.pattern==="ice"&&(r=.78),n.fillStyle=Mt(e,1,r),n.fillRect(0,0,s,s);let o=t.pattern,l=t.accent?$e(t.accent):null;if(o==="grass"&&t.face==="top"){n.fillStyle=Mt(e,1.12);for(let h=0;h<4;h++)Ni(n,i,i()*s,i()*s,5+i()*4)}if(o==="snow"&&t.face==="top"){n.fillStyle=Mt(e,.96);for(let h=0;h<4;h++)Ni(n,i,i()*s,i()*s,4+i()*4)}if((o==="grass"||o==="snow")&&t.face==="side"){let h=$e(t.top);n.fillStyle=Mt(h);let u=[[0,0],[s,0]];for(let x=s;x>=0;x-=4)u.push([x,8+Math.round(i()*5)]);Kt(n,u)}if(o==="stone"||o==="bedrock")for(let h=0;h<5;h++)n.fillStyle=Mt(e,i()<.5?.9:1.08),Ni(n,i,i()*s,i()*s,4+i()*6);if(o==="ore"){for(let h=0;h<4;h++)n.fillStyle=Mt(e,.92),Ni(n,i,i()*s,i()*s,5);n.fillStyle=Mt(l);for(let h=0;h<5;h++)Ni(n,i,5+i()*(s-10),5+i()*(s-10),2.5+i()*2.5)}if(o==="sand")for(let h=0;h<26;h++)n.fillStyle=Mt(e,i()<.5?.92:1.05),n.fillRect(Math.floor(i()*s),Math.floor(i()*s),2,2);if(o==="log"&&t.face==="side")for(let h=3;h<s;h+=7)n.fillStyle=Mt(e,.82),n.fillRect(h,0,2,s);if(o==="log"&&t.face!=="side"&&(n.fillStyle=Mt(e,.85),n.fillRect(6,6,s-12,s-12),n.fillStyle=Mt(e,1.05),n.fillRect(11,11,s-22,s-22)),o==="leaves")for(let h=0;h<9;h++)n.fillStyle=Mt(e,i()<.5?.78:1.15),Ni(n,i,i()*s,i()*s,3+i()*4);if(o==="planks"||o==="table"&&t.face==="bottom"){for(let h=7;h<s;h+=8)n.fillStyle=Mt(e,.78),n.fillRect(0,h,s,1);n.fillStyle=Mt(e,.85),n.fillRect(12,0,1,7),n.fillRect(22,8,1,7),n.fillRect(6,16,1,7),n.fillRect(18,24,1,8)}if(o==="table"&&t.face==="top"&&(n.fillStyle=Mt(e,.8),n.fillRect(s/2-1,3,2,s-6),n.fillRect(3,s/2-1,s-6,2)),o==="table"&&t.face==="side"&&(n.fillStyle=Mt(e,.7),n.fillRect(6,10,7,14),n.fillStyle=Mt([185,182,174]),Kt(n,[[18,10],[27,12],[25,15],[19,14]]),n.fillStyle=Mt(e,.6),n.fillRect(21,14,2,10)),o==="glass"&&(n.fillStyle="rgba(255,255,255,0.45)",Kt(n,[[6,24],[9,24],[24,9],[24,6]])),o==="water"){n.fillStyle=Mt(e,1.18,.72);for(let h=6;h<s;h+=10)n.fillRect(4+Math.floor(i()*10),h,10,2)}if(o==="gold"&&(n.fillStyle=Mt(e,1.15),Kt(n,[[0,0],[s,0],[0,s]]),n.fillStyle=Mt(e,.9),Kt(n,[[s,s],[s,8],[8,s]])),o==="lamp"&&(t.face==="side"?(n.fillStyle=Mt($e("#F3E3B5")),n.fillRect(7,6,s-14,s-12),n.fillStyle=Mt(e,.85),n.fillRect(0,0,s,3),n.fillRect(0,s-3,s,3)):t.face==="top"&&(n.fillStyle=Mt(e,1.05),n.fillRect(8,8,s-16,s-16))),o==="torch"&&(n.clearRect(0,0,s,s),t.face==="side"?(n.fillStyle=Mt($e("#8C6640")),n.fillRect(13,0,6,s),n.fillStyle=Mt($e("#F2C46B")),n.fillRect(13,0,6,8),n.fillStyle=Mt(l),n.fillRect(14,0,4,4)):(n.fillStyle=Mt($e(t.face==="top"?"#F2C46B":"#8C6640")),n.fillRect(12,12,8,8))),o==="bed"&&(t.face==="top"?(n.fillStyle=Mt(l),n.fillRect(0,0,s,10),n.fillStyle=Mt(e,.85),n.fillRect(0,10,s,3)):t.face==="side"&&(n.fillStyle=Mt($e("#E0352B")),n.fillRect(0,0,s,14),n.fillStyle=Mt(l),n.fillRect(0,0,9,14))),o==="wool")for(let h=0;h<7;h++)n.fillStyle=Mt(e,i()<.5?.94:1.04),Ni(n,i,i()*s,i()*s,4+i()*4);if(o==="portal"&&(n.fillStyle=Mt(l),n.fillRect(5,5,s-10,s-10),n.fillStyle=Mt(l,1.3),Kt(n,[[s/2,8],[s-9,s/2],[s/2,s-8],[9,s/2]]),n.fillStyle=Mt($e("#EFEBDD"),1,.8),Kt(n,[[s/2,12],[s-13,s/2],[s/2,s-12],[13,s/2]]),n.fillStyle=Mt(l),n.fillRect(s/2-3,s/2-3,6,6)),o==="sandstone")for(let h=8;h<s;h+=9)n.fillStyle=Mt(e,.9),n.fillRect(0,h,s,2);if(o==="cactus")if(t.face==="side"){for(let h=4;h<s;h+=8)n.fillStyle=Mt(e,.82),n.fillRect(h,0,2,s);n.fillStyle=Mt($e("#EFEBDD"),1,.7);for(let h=0;h<6;h++)n.fillRect(Math.floor(i()*s),Math.floor(i()*s),2,2)}else n.fillStyle=Mt(e,.85),n.fillRect(6,6,s-12,s-12);if(o==="ice"&&(n.fillStyle="rgba(255,255,255,0.4)",Kt(n,[[4,22],[8,22],[22,6],[18,6]])),o==="stained"&&(n.fillStyle="rgba(255,255,255,0.35)",Kt(n,[[6,24],[9,24],[24,9],[24,6]])),o==="paper"&&(n.fillStyle=Mt(e,1.1),Kt(n,[[0,0],[s,0],[0,s*.7]]),n.fillStyle=Mt(e,.92),Kt(n,[[s,s],[s*.45,s],[s,s*.4]])),o==="stonebricks"||o==="mossy"&&t.block.includes("bricks")||o==="cracked"){n.fillStyle=Mt(e,.78);for(let h=0;h<s;h+=8){n.fillRect(0,h+7,s,1);let u=h/8%2?0:8;for(let x=u;x<s;x+=16)n.fillRect(x,h,1,8)}}if(o==="mossy"){n.fillStyle=Mt(l);for(let h=0;h<6;h++)Ni(n,i,i()*s,i()*s,3+i()*4)}if(o==="cracked"&&(n.fillStyle=Mt(e,.6),Kt(n,[[4,2],[12,14],[10,15],[3,4]]),Kt(n,[[20,18],[29,30],[27,31],[19,20]])),o==="chiseled"&&(n.fillStyle=Mt(e,.8),n.fillRect(5,5,s-10,s-10),n.fillStyle=Mt(e,1.08),n.fillRect(9,9,s-18,s-18),n.fillStyle=Mt(e,.85),n.fillRect(13,13,s-26,s-26)),o==="smooth"&&(n.fillStyle=Mt(e,.9),n.fillRect(0,s/2,s,1)),o==="polished"&&(n.fillStyle=Mt(e,1.08),Kt(n,[[0,0],[s*.6,0],[0,s*.6]])),o==="bricks"){n.fillStyle=Mt($e("#D9CBB5"));for(let h=0;h<s;h+=8){n.fillRect(0,h+6,s,2);let u=h/8%2?0:8;for(let x=u;x<s;x+=16)n.fillRect(x,h,2,6)}}if(o==="checker"&&(n.fillStyle=Mt(l),n.fillRect(0,0,s/2,s/2),n.fillRect(s/2,s/2,s/2,s/2)),o==="bookshelf"&&t.face==="side"){let h=["#C2443A","#4D6A99","#5E8B4E","#E1C04F","#7A5C8E","#D99AA5"];for(let u of[3,18]){let x=3;for(;x<s-4;){let _=3+Math.floor(i()*3);n.fillStyle=h[Math.floor(i()*h.length)],n.fillRect(x,u+Math.floor(i()*3),_,11),x+=_+1}}n.fillStyle=Mt(e,.7),n.fillRect(0,15,s,2)}if(o==="bookshelf"&&t.face!=="side")for(let h=7;h<s;h+=8)n.fillStyle=Mt(e,.8),n.fillRect(0,h,s,1);if(o==="hay")if(t.face==="side"){for(let h=3;h<s;h+=5)n.fillStyle=Mt(e,.88),n.fillRect(h,0,1,s);n.fillStyle=Mt($e("#8C6640")),n.fillRect(0,9,s,2),n.fillRect(0,21,s,2)}else n.fillStyle=Mt(e,.9),n.fillRect(8,8,s-16,s-16);if(o==="barrel")if(t.face==="side"){for(let h=5;h<s;h+=6)n.fillStyle=Mt(e,.85),n.fillRect(h,0,1,s);n.fillStyle=Mt($e("#3B3D3A")),n.fillRect(0,5,s,2),n.fillRect(0,s-7,s,2)}else n.fillStyle=Mt(e,.85),n.beginPath(),n.arc(s/2,s/2,11,0,7),n.fill(),n.fillStyle=Mt(e,1.05),n.beginPath(),n.arc(s/2,s/2,7,0,7),n.fill();if(o==="crate"&&(n.fillStyle=Mt(e,.78),n.fillRect(0,0,s,4),n.fillRect(0,s-4,s,4),n.fillRect(0,0,4,s),n.fillRect(s-4,0,4,s),Kt(n,[[4,s-7],[s-7,4],[s-4,7],[7,s-4]])),o==="door"){for(let h=7;h<s;h+=8)n.fillStyle=Mt(e,.85),n.fillRect(h,0,1,s);n.fillStyle=Mt($e("#EFEBDD"),1,.9),n.fillRect(8,5,6,7),n.fillRect(18,5,6,7),n.fillStyle=Mt($e("#26302A")),n.fillRect(24,17,3,3)}if(o==="lantern"&&(t.face==="side"?(n.fillStyle=Mt(l),n.fillRect(0,0,s,5),n.fillRect(0,s-5,s,5),n.fillRect(0,0,5,s),n.fillRect(s-5,0,5,s)):(n.fillStyle=Mt(e),n.fillRect(0,0,s,s),n.fillStyle=Mt($e("#F2C46B")),n.fillRect(12,12,8,8))),o==="chest"){for(let h=7;h<s;h+=8)n.fillStyle=Mt(e,.85),n.fillRect(0,h,s,1);t.face==="side"&&(n.fillStyle=Mt(l),n.fillRect(0,11,s,3),n.fillStyle=Mt($e("#D9A63A")),n.fillRect(s/2-3,10,6,7))}if(o==="farmland"&&t.face==="top")for(let h=3;h<s;h+=6)n.fillStyle=Mt(e,.72),n.fillRect(0,h,s,2);if(o==="furnace"){for(let h=0;h<4;h++)n.fillStyle=Mt(e,i()<.5?.9:1.08),Ni(n,i,i()*s,i()*s,4+i()*5);t.face==="side"?(n.fillStyle=Mt(l),n.fillRect(8,15,s-16,11),n.fillStyle=Mt($e("#E0352B"),1,.85),Kt(n,[[11,26],[s/2,18],[s-11,26]])):(n.fillStyle=Mt(e,.8),n.fillRect(9,9,s-18,s-18))}o==="stele"&&t.face==="side"&&(n.fillStyle=Mt(e,1.12),n.fillRect(5,4,s-10,s-8),n.fillStyle=Mt(l),Kt(n,[[s/2,8],[s/2+6,s/2],[s/2,s-8],[s/2-6,s/2]]));let c=n.getImageData(0,0,s,s),a=c.data;for(let h=0;h<a.length;h+=4){let u=1+(i()-.5)*.09;a[h]=Math.min(255,a[h]*u),a[h+1]=Math.min(255,a[h+1]*u),a[h+2]=Math.min(255,a[h+2]*u)}n.putImageData(c,0,0);let d=o==="glass"?"rgba(207,227,223,0.75)":"rgba(20,24,20,0.13)";n.fillStyle=d,n.fillRect(0,0,s,2),n.fillRect(0,s-2,s,2),n.fillRect(0,2,2,s-4),n.fillRect(s-2,2,2,s-4),o!=="glass"&&o!=="water"&&(n.fillStyle="rgba(20,24,20,0.06)",n.fillRect(2,2,s-4,2),n.fillRect(2,s-4,s-4,2))}function Dp(n){let t=document.createElement("canvas");t.width=t.height=Ui*$l;let e=t.getContext("2d",{willReadFrequently:!0}),i=[];return n.tiles.forEach((s,r)=>{let o=document.createElement("canvas");o.width=o.height=Ui;let l=o.getContext("2d",{willReadFrequently:!0});Nv(l,s),e.drawImage(o,r%$l*Ui,Math.floor(r/$l)*Ui),i[r]=o}),{canvas:t,tileCanvas:i}}function Np(n,t){let e={};for(let i of n.blocks){if(!i.n)continue;let s=document.createElement("canvas");s.width=s.height=48;let r=s.getContext("2d");if(i.shape==="cross"||i.pattern==="ladder"||i.pattern==="door_open"||i.pattern==="rail"){r.drawImage(t.tileCanvas[i.tile.side],4,4,40,40),e[i.id]=s.toDataURL();continue}if(i.shape==="torch"){r.fillStyle="#8C6640",r.fillRect(21,16,6,28),r.fillStyle="#F2C46B",Kt(r,[[18,18],[24,4],[30,18],[24,22]]),r.fillStyle="#E0352B",Kt(r,[[21,16],[24,9],[27,16]]),e[i.id]=s.toDataURL();continue}let o=t.tileCanvas,l=1/Ui,c=(a,d,h,u,x,_,M,g)=>{r.setTransform(d*l,h*l,u*l,x*l,_,M),r.drawImage(o[a],0,0),g&&(r.fillStyle=`rgba(20,24,20,${g})`,r.fillRect(0,0,Ui,Ui))};c(i.tile.top,20,10,-20,10,24,4,0),c(i.tile.side,20,10,0,22,4,14,.12),c(i.tile.side,20,-10,0,22,24,24,.26),e[i.id]=s.toDataURL()}for(let i of n.items){let s=document.createElement("canvas");s.width=s.height=48;let r=s.getContext("2d"),o=i.icon,l=i.color,c="#8C6640";if(r.save(),r.translate(24,24),o==="lump")r.fillStyle=l,Kt(r,[[-14,4],[-8,-12],[6,-14],[15,-2],[10,12],[-6,14]]),r.fillStyle="rgba(255,255,255,.18)",Kt(r,[[-8,-12],[6,-14],[2,-4]]);else if(o==="ingot")r.fillStyle=l,Kt(r,[[-18,8],[-10,-6],[12,-6],[18,8]]),r.fillStyle="rgba(255,255,255,.3)",Kt(r,[[-10,-6],[12,-6],[9,-1],[-8,-1]]),r.fillStyle="rgba(0,0,0,.12)",r.fillRect(-18,8,36,4);else if(o==="hide")r.fillStyle=l,Kt(r,[[-15,-10],[-6,-15],[8,-13],[16,-6],[13,12],[0,15],[-14,10]]),r.fillStyle="rgba(0,0,0,.14)",Kt(r,[[-6,-4],[6,-6],[4,6],[-5,5]]);else if(o==="feather")r.rotate(-Math.PI/4),r.fillStyle=l,Kt(r,[[0,-20],[7,-6],[5,10],[0,14],[-5,10],[-7,-6]]),r.fillStyle="#B9B6AE",r.fillRect(-1,-14,2,32);else if(o==="seeds"){r.fillStyle=l;for(let[a,d]of[[-6,-4],[3,-8],[6,3],[-3,6],[-9,6]])r.beginPath(),r.ellipse(a,d,3,2,.6,0,7),r.fill()}else if(o==="wheat"){r.rotate(-Math.PI/4),r.fillStyle="#B89A4A",r.fillRect(-1,-6,2,24),r.fillStyle=l;for(let a=0;a<4;a++)Kt(r,[[0,-18+a*5],[-5,-14+a*5],[0,-12+a*5]]),Kt(r,[[0,-18+a*5],[5,-14+a*5],[0,-12+a*5]])}else if(o==="bread"){r.fillStyle=l,r.beginPath(),r.ellipse(0,2,17,10,-.2,0,7),r.fill(),r.fillStyle="rgba(255,255,255,.25)";for(let a of[-8,0,8])r.fillRect(a-1,-6,3,8)}else if(o==="armor_helmet")r.fillStyle=l,Kt(r,[[-14,6],[-14,-6],[-6,-14],[6,-14],[14,-6],[14,6],[8,6],[8,-2],[-8,-2],[-8,6]]);else if(o==="armor_chest")r.fillStyle=l,Kt(r,[[-16,-12],[-6,-16],[0,-10],[6,-16],[16,-12],[12,-2],[10,16],[-10,16],[-12,-2]]);else if(o==="armor_legs")r.fillStyle=l,Kt(r,[[-12,-16],[12,-16],[12,16],[3,16],[0,-4],[-3,16],[-12,16]]);else if(o==="armor_boots")r.fillStyle=l,Kt(r,[[-16,-4],[-8,-4],[-8,8],[-2,12],[-2,16],[-16,16]]),Kt(r,[[2,-4],[10,-4],[10,8],[16,12],[16,16],[2,16]]);else if(o==="dye")r.fillStyle=l,r.beginPath(),r.arc(-2,2,12,0,7),r.fill(),r.beginPath(),r.arc(9,-8,5,0,7),r.fill(),r.fillStyle="rgba(255,255,255,.25)",r.beginPath(),r.arc(-6,-2,4,0,7),r.fill();else if(o==="fish")r.fillStyle=l,r.beginPath(),r.ellipse(-3,0,14,8,0,0,7),r.fill(),Kt(r,[[9,0],[19,-9],[19,9]]),r.fillStyle="rgba(255,255,255,.25)",Kt(r,[[-12,-3],[2,-7],[-2,-1]]),r.fillStyle="#26302A",r.beginPath(),r.arc(-10,-2,2,0,7),r.fill();else if(o==="rod")r.strokeStyle=l,r.lineWidth=4,r.beginPath(),r.moveTo(-16,17),r.lineTo(14,-16),r.stroke(),r.strokeStyle="#26302A",r.lineWidth=1,r.beginPath(),r.moveTo(14,-16),r.lineTo(14,8),r.stroke(),r.fillStyle="#E0352B",r.beginPath(),r.arc(14,10,4,0,7),r.fill();else if(o==="boat")r.fillStyle=l,Kt(r,[[-19,-3],[19,-3],[13,10],[-13,10]]),r.fillStyle="rgba(0,0,0,.2)",Kt(r,[[-15,-3],[15,-3],[13,1],[-13,1]]),r.fillStyle=c,r.fillRect(-2,-14,3,11);else if(o==="minecart"){r.fillStyle=l,Kt(r,[[-16,-10],[16,-10],[13,8],[-13,8]]),r.fillStyle="rgba(0,0,0,.25)",Kt(r,[[-12,-10],[12,-10],[11,-5],[-11,-5]]),r.fillStyle="#26302A";for(let a of[-8,8])r.beginPath(),r.arc(a,10,4,0,7),r.fill()}else o==="saddle"?(r.fillStyle=l,Kt(r,[[-16,-2],[-10,-10],[-2,-6],[6,-12],[16,-4],[12,8],[-12,8]]),r.fillStyle="#26302A",r.fillRect(-2,8,4,9),r.fillStyle="#D9A63A",r.fillRect(-4,15,8,3)):o==="gem"?(r.fillStyle=l,Kt(r,[[0,-16],[14,-4],[0,16],[-14,-4]]),r.fillStyle="rgba(255,255,255,.35)",Kt(r,[[0,-16],[14,-4],[0,-2]])):(r.rotate(-Math.PI/4),r.fillStyle=o==="stick"?l:c,r.fillRect(-3,-14,6,32),r.fillStyle=l,o==="pickaxe"&&(r.beginPath(),r.moveTo(-16,-14),r.quadraticCurveTo(0,-24,16,-14),r.lineTo(14,-9),r.quadraticCurveTo(0,-17,-14,-9),r.closePath(),r.fill()),o==="axe"&&Kt(r,[[2,-18],[15,-14],[15,-2],[2,-6]]),o==="shovel"&&Kt(r,[[-7,-22],[7,-22],[8,-10],[0,-5],[-8,-10]]),o==="hoe"&&r.fillRect(-3,-18,14,5),o==="sword"&&(r.fillRect(-4,-24,8,30),Kt(r,[[-4,-24],[0,-30],[4,-24]]),r.fillStyle=c,r.fillRect(-9,6,18,4)));r.restore(),e[i.id]=s.toDataURL()}for(let i of n.blueprints||[]){let s=document.createElement("canvas");s.width=s.height=48;let r=s.getContext("2d");r.fillStyle="#26302A",Kt(r,[[6,10],[40,6],[42,38],[8,42]]),r.fillStyle="rgba(239,235,221,.55)";for(let o=0;o<4;o++)r.fillRect(12,14+o*7,24,2);r.fillStyle=i.id==="bp_diamond"?"#6FC7C0":"#D8D4CA",Kt(r,[[28,26],[36,30],[30,38],[24,32]]),e[i.id]=s.toDataURL()}return e}function Up(){let n=Lp(99),t=[],e=[];for(let i=0;i<4;i++){let s=document.createElement("canvas");s.width=s.height=Ui;let r=s.getContext("2d");i&&r.drawImage(e[i-1],0,0),r.fillStyle="rgba(21,23,20,0.55)";for(let o=0;o<3+i*2;o++){let l=6+n()*20,c=6+n()*20,a=n()*Math.PI;Kt(r,[[l,c],[l+Math.cos(a)*9,c+Math.sin(a)*9],[l+Math.cos(a+.3)*6,c+Math.sin(a+.3)*6]])}e.push(s),t.push(s)}return t}function Uv(n,t,e,i,s){n.clearRect(0,0,s,s);let r=t.pattern,o=t.accent?$e(t.accent):e,l=(c,a,d)=>{n.fillStyle=d,n.fillRect(c,s-a,2,a)};if(r==="flower"){l(15,18,Mt(e)),n.fillStyle=Mt(e,1.1),Kt(n,[[16,26],[9,20],[15,22]]),Kt(n,[[17,24],[24,18],[18,21]]),n.fillStyle=Mt(o);for(let c=0;c<5;c++){let a=c/5*Math.PI*2;Kt(n,[[16,9],[16+Math.cos(a)*7,9+Math.sin(a)*7],[16+Math.cos(a+.6)*7,9+Math.sin(a+.6)*7]])}n.fillStyle=Mt($e("#E1C04F")),n.fillRect(14,7,4,4)}else if(r==="tallgrass"||r==="fern")for(let c=0;c<6;c++){let a=4+c*4+Math.floor(i()*2),d=14+Math.floor(i()*14);n.fillStyle=Mt(e,i()<.5?.9:1.1),Kt(n,[[a,s],[a+3,s],[a+1+(r==="fern"?2:0),s-d]])}else if(r==="deadbush")n.strokeStyle=Mt(e),n.lineWidth=2,n.beginPath(),n.moveTo(16,s),n.lineTo(16,18),n.lineTo(9,10),n.moveTo(16,20),n.lineTo(24,11),n.moveTo(16,24),n.lineTo(7,19),n.stroke();else if(r==="mushroom")n.fillStyle=Mt(e),n.fillRect(14,18,4,14),n.fillStyle=Mt(o),Kt(n,[[6,19],[10,11],[16,8],[22,11],[26,19]]),n.fillStyle=Mt($e("#EFEBDD")),n.fillRect(12,13,3,2),n.fillRect(19,15,2,2);else if(r==="ladder"){n.fillStyle=Mt(e),n.fillRect(5,0,3,s),n.fillRect(s-8,0,3,s),n.fillStyle=Mt(e,1.12);for(let c=3;c<s;c+=7)n.fillRect(5,c,s-10,3)}else if(r==="wheat"){let c=Number(t.block.split("_")[1])||0,a=[8,14,21,28][c];for(let d=0;d<5;d++){let h=5+d*5;n.fillStyle=Mt(e),n.fillRect(h,s-a,2,a),c===3&&(n.fillStyle=Mt(o),Kt(n,[[h-2,s-a+9],[h+1,s-a-1],[h+4,s-a+9]]))}}else if(r==="rail"){let c=(t.block.match(/_(ew|ne|nw|se|sw)$/)||[0,"ns"])[1],a={ns:0,ew:1,ne:0,se:1,sw:2,nw:3}[c];n.save(),n.translate(s/2,s/2),n.rotate(a*Math.PI/2),n.translate(-s/2,-s/2);let d=Mt($e("#8C6640")),h=Mt(e),u=s*.33,x=s*.67;if(c==="ns"||c==="ew"){n.fillStyle=d;for(let _=2;_<s;_+=6)n.fillRect(4,_,s-8,3);n.fillStyle=h,n.fillRect(u-1.5,0,3,s),n.fillRect(x-1.5,0,3,s),t.accent&&(n.fillStyle=Mt(o),n.fillRect(s/2-1.5,3,3,s-6))}else{n.strokeStyle=d,n.lineWidth=3;for(let _=0;_<5;_++){let M=Math.PI/2+(_+.5)/5*Math.PI/2;n.beginPath(),n.moveTo(s+Math.cos(M)*(s-x-4),Math.sin(M)*(s-x-4)),n.lineTo(s+Math.cos(M)*(s-u+4),Math.sin(M)*(s-u+4)),n.stroke()}n.strokeStyle=h;for(let _ of[s-u,s-x])n.beginPath(),n.arc(s,0,_,Math.PI/2,Math.PI),n.stroke()}n.restore()}else r==="door_open"&&(n.fillStyle=Mt(e),n.fillRect(0,0,s,3),n.fillRect(0,s-3,s,3),n.fillRect(0,0,3,s),n.fillRect(s-3,0,3,s))}var Fp=`attribute float light; attribute vec2 lt; varying vec2 vUv; varying float vL; varying vec2 vLt; varying float vD;
void main(){ vUv=uv; vL=light; vLt=lt; vec4 mv=modelViewMatrix*vec4(position,1.0); vD=-mv.z; gl_Position=projectionMatrix*mv; }`,Op=`uniform sampler2D uAtlas; uniform float uDay; uniform vec3 uFog; uniform float uNear; uniform float uFar;
varying vec2 vUv; varying float vL; varying vec2 vLt; varying float vD;
void main(){ vec4 t=texture2D(uAtlas,vUv); if(t.a<0.04) discard;
 vec3 tint=vec3(1.0); float l;
 if(vL>1.5){ l=1.12; } else {
  float sky=vLt.x*mix(0.35,1.0,uDay), bl=vLt.y;
  l=vL*mix(0.16,1.0,max(sky,bl)); l=floor(l*5.0+0.5)/5.0; l=max(l,0.08);
  tint=mix(vec3(1.0),vec3(1.12,0.97,0.8),step(sky,bl)*bl);
 }
 float f=smoothstep(uNear,uFar,vD); gl_FragColor=vec4(mix(t.rgb*l*tint,uFog,f), t.a); }`;function Fv(n,t){let e=Pi(n),i=Pi(t),s=[[e,i]];for(let r=-1;r<=1;r++)for(let o=-1;o<=1;o++){if(!o&&!r)continue;let l=(e+o)*16,c=(i+r)*16,a=n<l?l-n:n>=l+16?n-(l+16-1):0,d=t<c?c-t:t>=c+16?t-(c+16-1):0;Math.max(a,d)<=14&&s.push([e+o,i+r])}return s}function zp(n){let t=new pi(n);t.magFilter=Ke,t.minFilter=Ke,t.generateMipmaps=!1;let e={uAtlas:{value:t},uDay:{value:1},uFog:{value:new Z(.94,.92,.87)},uNear:{value:30},uFar:{value:60}},i=new mn({uniforms:e,vertexShader:Fp,fragmentShader:Op}),s=new mn({uniforms:e,vertexShader:Fp,fragmentShader:Op,transparent:!0,depthWrite:!1,side:Hn});return{opaque:i,trans:s,uniforms:e,tex:t}}function Bp(n){let t=new Qe;return t.setAttribute("position",new Ye(n.pos,3)),t.setAttribute("uv",new Ye(n.uv,2)),t.setAttribute("light",new Ye(n.light,1)),t.setAttribute("lt",new Ye(n.lt,2,!0)),t.setIndex(new Ye(n.index,1)),t.computeBoundingSphere(),t}var Zl=class{constructor({scene:t,mats:e,reg:i,worker:s,diffs:r,onDirty:o}){Object.assign(this,{scene:t,mats:e,reg:i,worker:s,diffs:r,onDirty:o}),this.chunks=new Map,this.dirtyMesh=new Set,this.inflight=0,this.maxInflight=3,this.rd=4,this.rev=0,this.stats={meshMs:[],genMs:[],loaded:0},s.addEventListener("message",l=>this.onMsg(l.data))}onMsg(t){if(t.type!=="chunk"&&t.type!=="mesh")return;let e=_i(t.cx,t.cz),i=this.chunks.get(e);t.type==="chunk"&&this.inflight--,i&&(t.type==="chunk"&&(i.vox=t.vox,i.state="ready",this.stats.genMs.push(t.genMs)),!(t.rev<i.meshRev)&&(this.stats.meshMs.push(t.ms),this.stats.meshMs.length>400&&this.stats.meshMs.shift(),this.setMesh(i,t.mesh)))}setMesh(t,e){for(let i of["o","t"])t[i]&&(this.scene.remove(t[i]),t[i].geometry.dispose(),t[i]=null);e.opaque.index.length&&(t.o=new ke(Bp(e.opaque),this.mats.opaque),t.o.position.set(t.cx*16,0,t.cz*16),t.o.matrixAutoUpdate=!1,t.o.updateMatrix(),this.scene.add(t.o)),e.trans.index.length&&(t.t=new ke(Bp(e.trans),this.mats.trans),t.t.position.set(t.cx*16,0,t.cz*16),t.t.matrixAutoUpdate=!1,t.t.updateMatrix(),t.t.renderOrder=1,this.scene.add(t.t))}flushMeshes(){if(this.dirtyMesh.size){for(let t of this.dirtyMesh){let e=this.chunks.get(t);e&&e.state==="ready"&&(e.meshRev=++this.rev,this.worker.postMessage({type:"mesh",cx:e.cx,cz:e.cz,rev:e.meshRev}))}this.dirtyMesh.clear()}}update(t,e){this.flushMeshes();let i=Pi(t),s=Pi(e),r=ep(i,s,this.rd);for(let c of r){if(this.inflight>=this.maxInflight)break;let a=_i(c.cx,c.cz);if(this.chunks.has(a))continue;let d={cx:c.cx,cz:c.cz,vox:null,state:"loading",meshRev:++this.rev,o:null,t:null};this.chunks.set(a,d),this.inflight++,this.worker.postMessage({type:"load",cx:c.cx,cz:c.cz,rev:d.meshRev})}let o=this.rd+1.5,l=[];for(let[c,a]of this.chunks){let d=a.cx-i,h=a.cz-s;if(d*d+h*h>o*o){for(let u of["o","t"])a[u]&&(this.scene.remove(a[u]),a[u].geometry.dispose());this.chunks.delete(c),l.push(c)}}l.length&&this.worker.postMessage({type:"drop",keys:l.filter(c=>{let[a,d]=c.split(",").map(Number);return Math.abs(a-i)>this.rd+3||Math.abs(d-s)>this.rd+3})}),this.stats.loaded=[...this.chunks.values()].filter(c=>c.state==="ready").length}ready(t,e){let i=this.chunks.get(_i(Pi(t),Pi(e)));return!!(i&&i.state==="ready")}get(t,e,i){let s=kh(t,e,i);if(!s)return e<0?13:0;let r=this.chunks.get(_i(s.cx,s.cz));return r&&r.vox?r.vox[s.i]:0}set(t,e,i,s){let r=kh(t,e,i);if(!r)return!1;let o=_i(r.cx,r.cz),l=this.chunks.get(o);if(!l||!l.vox)return!1;l.vox[r.i]=s,Ip(this.diffs,o,r.i,s),this.worker.postMessage({type:"set",x:t,y:e,z:i,n:s});let c=Math.floor(t),a=Math.floor(i);for(let[d,h]of Fv(c,a))this.dirtyMesh.add(_i(d,h));return this.onDirty&&this.onDirty(o),!0}setRenderDistance(t){this.rd=t;let e=this.mats.uniforms;e.uFar.value=t*16-2,e.uNear.value=Math.max(8,t*16*.45)}clear(){for(let t of this.chunks.values())for(let e of["o","t"])t[e]&&(this.scene.remove(t[e]),t[e].geometry.dispose());this.chunks.clear()}};var hu="hw_world",mo=null;function kp(n){n!==hu&&(hu=n,mo=null)}function Vp(){return mo||(mo=new Promise((n,t)=>{if(!("indexedDB"in self))return t(new Error("no indexedDB"));let e=indexedDB.open(hu,1);e.onupgradeneeded=()=>e.result.createObjectStore("kv"),e.onsuccess=()=>n(e.result),e.onerror=()=>t(e.error)}),mo)}function uu(n,t){return Vp().then(e=>new Promise((i,s)=>{let r=e.transaction("kv",n),o=r.objectStore("kv"),l=t(o);r.oncomplete=()=>i(l instanceof IDBRequest?l.result:void 0),r.onerror=()=>s(r.error)}))}var fu=n=>uu("readonly",t=>t.get(n)),du=n=>uu("readwrite",t=>{for(let e in n)t.put(n[e],e)});async function Gp(n){let t=await Vp();return new Promise((e,i)=>{let s={},r=t.transaction("kv","readonly"),o=r.objectStore("kv").openCursor(IDBKeyRange.bound(n,n+"\uFFFF"));o.onsuccess=()=>{let l=o.result;l&&(s[l.key]=l.value,l.continue())},r.oncomplete=()=>e(s),r.onerror=()=>i(r.error)})}async function Hp(n){let t={};for(let e of n){let i=await fu(e);i!==void 0&&(t[e]=i)}await uu("readwrite",e=>e.clear()),await du(t)}function D(n,t,...e){let i=document.createElement(n);for(let s in t||{}){let r=t[s];r==null||r===!1||(s.startsWith("on")?i.addEventListener(s.slice(2),r):s==="html"?i.innerHTML=r:i.setAttribute(s,r===!0?"":r))}for(let s of e.flat())s!=null&&s!==!1&&i.append(s.nodeType?s:document.createTextNode(String(s)));return i}var Fi=n=>document.querySelector(n);var Bv="../../",zv=["data/words.js","data/words-2.js","data/words-3.js","data/words-4.js","data/phrases.js","data/roots.js","data/grammar.js","data/patterns.js","engine.js"],pu=["zh2en","en2zh","zh2en-type","phrase-fill","grammar-fill","pattern-choose"],Jl=null;function kv(n){return new Promise((t,e)=>{let i=document.createElement("script");i.src=n,i.onload=t,i.onerror=()=>e(new Error("load "+n)),document.head.appendChild(i)})}function mu(){return Jl||(Jl=(async()=>{for(let t of zv)await kv(Bv+t);let n=window;return new n.KE.Engine({words:n.DATA_WORDS||[],phrases:n.DATA_PHRASES||[],roots:n.DATA_ROOTS||[],grammar:n.DATA_GRAMMAR||[],patterns:n.DATA_PATTERNS||[]})})().catch(n=>{throw Jl=null,n})),Jl}async function Wp(n,{onReward:t,onAnswer:e,onClose:i,count:s=5}){n.innerHTML="",n.hidden=!1;let r=D("div",{class:"panel quiz"});n.append(r),r.append(D("div",{class:"p-head"},D("h2",{},"\u7DF4\u7FD2\u77F3\u7891"),D("button",{class:"x","aria-label":"\u95DC\u9589",onclick:u},"\xD7")),D("p",{class:"muted"},"\u984C\u5EAB\u8F09\u5165\u4E2D\u2026"));let o;try{o=await mu()}catch{r.lastChild.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557\uFF0C\u8ACB\u6AA2\u67E5\u7DB2\u8DEF\u5F8C\u518D\u8A66\u4E00\u6B21\u3002";return}let l=window.KE,c=[],a=0,d=0,h=0;function u(){n.hidden=!0,n.innerHTML="",i&&i()}function x(){c=o.buildQuiz({modules:["words","phrases","grammar","patterns"],types:pu,lv:1,count:s}),c.length||(c=o.buildQuiz({modules:["words"],types:["zh2en","en2zh"],count:s})),a=0,d=0,h=0,_()}function _(){r.innerHTML="";let m=c[a],C=l.isTyped(m);n._q=m;let N=D("div",{class:"fb"}),w=D("div",{class:"q-body"});r.append(D("div",{class:"p-head"},D("h2",{},"\u7DF4\u7FD2\u77F3\u7891 ",D("small",{},`\u7B2C ${a+1} / ${c.length} \u984C`)),D("button",{class:"x","aria-label":"\u95DC\u9589",onclick:u},"\xD7")),D("div",{class:"q-type"},(l.TYPES[m.type]||"\u984C\u76EE")+(C?"\u3000\u6253\u5B57\u984C \xB7 \u7B54\u5C0D 2 \u91D1\u5E63":"\u3000\u7B54\u5C0D 1 \u91D1\u5E63")),D("div",{class:"q-prompt"+(m.en?" en":"")},m.prompt),m.sub?D("div",{class:"q-sub"},m.sub):null,w,N);let A=!1,T=U=>{if(A)return;A=!0;let v=Ap(U,C);e&&e(U),U&&(h++,d+=v,t&&t(v)),N.className="fb "+(U?"ok":"bad"),N.append(D("div",{},U?`\u7B54\u5C0D\u4E86\uFF01 +${v} \u91D1\u5E63`:"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",U?null:D("b",{class:"en"},m.answer)),!U&&m.why?D("div",{class:"why"},m.why):null,D("button",{class:"btn",onclick:M},a+1<c.length?"\u4E0B\u4E00\u984C":"\u770B\u7D50\u679C"))};if(m.input==="type"){let U=D("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),v=()=>{A||!U.value.trim()||T(o.check(m,U.value).ok)};U.addEventListener("keydown",b=>{b.stopPropagation(),b.key==="Enter"&&v()}),w.append(D("div",{class:"typerow"},U,D("button",{class:"btn",onclick:v},"\u9001\u51FA"))),setTimeout(()=>U.focus(),50)}else{let U=D("div",{class:"opts"});(m.options||[]).forEach(v=>U.append(D("button",{class:"opt"+(/[a-z]/i.test(v)?" en":""),onclick:b=>{if(A)return;let R=o.check(m,v).ok;b.currentTarget.classList.add(R?"ok":"bad"),T(R)}},v))),w.append(U)}}function M(){a++,a<c.length?_():g()}function g(){r.innerHTML="",r.append(D("div",{class:"p-head"},D("h2",{},"\u9019\u4E00\u56DE\u7D50\u675F"),D("button",{class:"x","aria-label":"\u95DC\u9589",onclick:u},"\xD7")),D("p",{class:"big"},`\u7B54\u5C0D ${h} / ${c.length} \u984C\uFF0C\u62FF\u5230 ${d} \u91D1\u5E63`),D("div",{class:"row"},D("button",{class:"btn",onclick:x},"\u518D\u4F86\u4E00\u56DE"),D("button",{class:"btn ghost",onclick:u},"\u56DE\u53BB\u84CB\u623F\u5B50")))}x()}var Vv=new Set(pu);async function Xp(n,{ids:t=[],onDone:e}){n.innerHTML="",n.hidden=!1;let i=D("div",{class:"panel quiz"});n.append(i),i.append(D("p",{class:"muted"},"\u932F\u984C\u602A\u51FA\u984C\u4E2D\u2026"));let s;try{s=await mu()}catch{i.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557",setTimeout(()=>{n.hidden=!0,e&&e(null)},1200);return}let r=window.KE,o=null;for(let x of t){let _=s.byId[x];if(_&&Vv.has(_.type)){o=s.get(x);break}}let l=!!o;o||(o=s.buildQuiz({modules:["words","phrases","grammar","patterns"],types:pu,lv:1,count:1})[0]);let c=r.isTyped(o);n._q=o,i.innerHTML="";let a=D("div",{class:"fb"}),d=D("div",{class:"q-body"});i.append(D("div",{class:"p-head"},D("h2",{},"\u932F\u984C\u602A\u4F86\u4E86\uFF01")),D("div",{class:"q-type"},(l?"\u4F60\u4EE5\u524D\u932F\u904E\u7684\u984C\u76EE":r.TYPES[o.type]||"\u984C\u76EE")+"\u3000\u7B54\u5C0D\u5C31\u80FD\u6253\u6557\u5B83"),D("div",{class:"q-prompt"+(o.en?" en":"")},o.prompt),o.sub?D("div",{class:"q-sub"},o.sub):null,d,a);let h=!1,u=x=>{h||(h=!0,a.className="fb "+(x?"ok":"bad"),a.append(D("div",{},x?"\u7B54\u5C0D\u4E86\uFF01\u932F\u984C\u602A\u8B8A\u6210\u7D19\u7247\u98DB\u8D70\u4E86":"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",x?null:D("b",{class:"en"},o.answer)),!x&&o.why?D("div",{class:"why"},o.why):null,D("button",{class:"btn",onclick:()=>{n.hidden=!0,n.innerHTML="",e&&e(x,c)}},"\u7E7C\u7E8C")))};if(o.input==="type"){let x=D("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),_=()=>{h||!x.value.trim()||u(s.check(o,x.value).ok)};x.addEventListener("keydown",M=>{M.stopPropagation(),M.key==="Enter"&&_()}),d.append(D("div",{class:"typerow"},x,D("button",{class:"btn",onclick:_},"\u9001\u51FA"))),setTimeout(()=>x.focus(),50)}else{let x=D("div",{class:"opts"});(o.options||[]).forEach(_=>x.append(D("button",{class:"opt"+(/[a-z]/i.test(_)?" en":""),onclick:M=>{if(h)return;let g=s.check(o,_).ok;M.currentTarget.classList.add(g?"ok":"bad"),u(g)}},_))),d.append(x)}}async function qp(n,{quest:t,onDone:e}){n.innerHTML="",n.hidden=!1;let i=D("div",{class:"panel quiz"});n.append(i),i.append(D("p",{class:"muted"},"\u59D4\u8A17\u6E96\u5099\u4E2D\u2026"));let s;try{s=await mu()}catch{i.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557",setTimeout(()=>{n.hidden=!0,e&&e(-1)},1200);return}let r=window.KE,o=s.buildQuiz({modules:[t.module],types:t.types,lv:t.lv,count:t.count});o.length||(o=s.buildQuiz({modules:["words"],types:["zh2en","en2zh"],count:t.count}));let l=0,c=0,a=()=>{i.innerHTML="";let d=o[l];n._q=d;let h=D("div",{class:"fb"}),u=D("div",{class:"q-body"});i.append(D("div",{class:"p-head"},D("h2",{},t.title_zh+" ",D("small",{},`\u7B2C ${l+1} / ${o.length} \u984C \xB7 \u8981\u7B54\u5C0D ${t.need} \u984C`))),D("div",{class:"q-type"},r.TYPES[d.type]||"\u984C\u76EE"),D("div",{class:"q-prompt"+(d.en?" en":"")},d.prompt),d.sub?D("div",{class:"q-sub"},d.sub):null,u,h);let x=!1,_=M=>{x||(x=!0,M&&c++,h.className="fb "+(M?"ok":"bad"),h.append(D("div",{},M?"\u7B54\u5C0D\u4E86\uFF01":"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",M?null:D("b",{class:"en"},d.answer)),!M&&d.why?D("div",{class:"why"},d.why):null,D("button",{class:"btn",onclick:()=>{l++,l<o.length?a():(n.hidden=!0,n.innerHTML="",e&&e(c,o.length))}},l+1<o.length?"\u4E0B\u4E00\u984C":"\u5B8C\u6210")))};if(d.input==="type"){let M=D("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),g=()=>{x||!M.value.trim()||_(s.check(d,M.value).ok)};M.addEventListener("keydown",m=>{m.stopPropagation(),m.key==="Enter"&&g()}),u.append(D("div",{class:"typerow"},M,D("button",{class:"btn",onclick:g},"\u9001\u51FA"))),setTimeout(()=>M.focus(),50)}else{let M=D("div",{class:"opts"});(d.options||[]).forEach(g=>M.append(D("button",{class:"opt"+(/[a-z]/i.test(g)?" en":""),onclick:m=>{if(x)return;let C=s.check(d,g).ok;m.currentTarget.classList.add(C?"ok":"bad"),_(C)}},g))),u.append(M)}};a()}function Yp(n,t,e){let[i,s]=String(n).split(",").map(Number),r=d=>ii(4242,i|0,t*7+d,s|0),o=e.professions[Math.floor(r(1)*e.professions.length)],l=e.quests,c=Math.floor(r(2)*l.length),a=(c+1+Math.floor(r(3)*(l.length-1)))%l.length;return{prof:o,quests:[l[c],l[a]]}}function $p(n,t,e,i=()=>64){return n.coins<e.price?{ok:!1,reason:"coins"}:e.blueprint?hr(n,e.blueprint)?{ok:!1,reason:"owned"}:(po(n,e.price),n.owned.push(e.blueprint),{ok:!0}):uo(t,e.give,e.count,i)?(po(n,e.price),xn(t,e.give,e.count,i),{ok:!0}):{ok:!1,reason:"full"}}var gu=(n,t,e)=>!!(n&&n[t.id]===e);function Zp(n,t,e,i,s,r,o=()=>64){if(gu(n,t,i))return{ok:!1,reason:"done"};if(e<t.need)return{ok:!1,reason:"need"};n[t.id]=i,Di(s,t.reward.coins|0);let l={};for(let c in t.reward.items||{}){let a=xn(r,c,t.reward.items[c],o);a&&(l[c]=a)}return{ok:!0,coins:t.reward.coins|0,items:t.reward.items||{},leftovers:l}}function Jp(n=new Date){return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit"}).format(n)}var xu={survival:{db:"hw_world",seedOffset:0},creative:{db:"hw_creative",seedOffset:1}},Kl=n=>n==="creative"?"creative":"survival",Kp=n=>xu[Kl(n)].db;function jp(n,t,e){return n?n.isSet(e)?n.verify(t,e)?{ok:!0}:{ok:!1,reason:"wrong"}:{ok:!1,reason:"unset"}:{ok:!1,reason:"nopin"}}function Qp(n){let t=Kl(n)==="creative";return{creative:t,consume:!t,drops:!t,damage:!t,coins:!t,quizMobs:!t,portals:!t,trading:!t,breakTime:t?.08:null}}function tm(n){return n.blocks.filter(t=>t.n&&t.placeable&&!["stele","bedrock","door_open"].includes(t.id)&&!t.portal&&!t.liquid&&!t.hidden).map(t=>t.id)}var em=["grass","stone_bricks","planks","glass","wool_red","paper_yellow","lantern","door","flower_rose"];var Tu={};zi(Tu,{BREED_CAP:()=>Au,LOVE_MS:()=>im,MAX_STAGE:()=>Xv,STAGE_SECONDS:()=>Wv,armorMax:()=>nm,armorPoints:()=>go,canTill:()=>yu,eat:()=>wu,equip:()=>qv,findMate:()=>Eu,harvest:()=>vu,nearWater:()=>Mu,reduceDamage:()=>bu,stageAt:()=>_u,wearArmor:()=>Su});var Wv=60,Xv=3;function _u(n,t,e){let i=Math.floor((t-n)/1e3/(e?30:60));return Math.max(0,Math.min(3,i))}var yu=(n,t)=>(n==="grass"||n==="dirt")&&t;function vu(n,t=Math.random){return n>=3?[{id:"wheat",n:1},{id:"seeds",n:1+Math.floor(t()*2)}]:[{id:"seeds",n:1}]}function Mu(n,t,e,i,s,r=4){for(let o=-r;o<=r;o++)for(let l=-r;l<=r;l++)for(let c of[0,-1])if(t(n(e+l,i+c,s+o)))return!0;return!1}function go(n,t){return(n||[]).reduce((e,i)=>{let s=i&&t.get(i);return e+(s&&s.armor?s.armor.points:0)},0)}var nm=(n,t)=>{let e=n&&t.get(n);return e&&e.armor?e.armor.dur||100:0};function Su(n,t,e,i=1){let s=[];return n.forEach((r,o)=>{if(!r)return;let l=(t[o]==null?nm(r,e):t[o])-i;l<=0?(s.push(r),n[o]=null,t[o]=null):t[o]=l}),s}var bu=(n,t)=>Math.max(0,Math.round(n*(1-Math.min(.8,t*.04))));function qv(n,t,e,i){let s=e&&i.get(e);if(e&&(!s||!s.armor||s.armor.slot!==t))return{ok:!1};let r=n[t]||null;return n[t]=e||null,{ok:!0,old:r}}function wu(n,t,e){return n.hp>=e?!1:(n.hp=Math.min(e,n.hp+t),!0)}var im=3e4,Au=12;function Eu(n,t,e){return n.find(i=>i!==t&&!i.gone&&i.type===t.type&&i.love&&e-i.love<im&&Math.hypot(i.p.x-t.p.x,i.p.z-t.p.z)<8)||null}var Pu={};zi(Pu,{apply:()=>tc,duck:()=>os,muted:()=>xo,rainLevel:()=>Iu,scene:()=>Ru,setVolume:()=>ec,sfx:()=>_n,state:()=>Yv,toggleMute:()=>Cu,unlock:()=>Ql});var Ve=null,bs=null,jl=null,ur=null,Fn=()=>window.HIAudio||null,rm=()=>Fn()?Fn().get():{muted:!1,music:.35,sfx:.7};function Ql(){try{Fn()&&Fn().unlock()}catch{}if(!Ve){let n=window.AudioContext||window.webkitAudioContext;if(!n)return;Ve=new n,bs=Ve.createGain(),bs.connect(Ve.destination),jl=Ve.createBuffer(1,Ve.sampleRate,Ve.sampleRate);let t=jl.getChannelData(0);for(let e=0;e<t.length;e++)t[e]=Math.random()*2-1}Ve.state==="suspended"&&Ve.resume(),tc()}function tc(){if(bs){let n=rm();bs.gain.setTargetAtTime(n.muted?0:n.sfx,Ve.currentTime,.03)}}var xo=()=>rm().muted;function Cu(){return Fn()&&Fn().toggle(),tc(),xo()}function ec(n){Fn()&&Fn().set(n),tc()}function Ru(n){try{Fn()&&Fn().scene(n)}catch{}}function os(n){let t=Fn();t&&(n&&os.id==null?os.id=t.duckStart():!n&&os.id!=null&&(t.duckEnd(os.id),os.id=null))}function om(n,t,e,i,s){n.gain.setValueAtTime(1e-4,t),n.gain.exponentialRampToValueAtTime(i,t+e),n.gain.exponentialRampToValueAtTime(1e-4,t+e+s)}function Xn(n,t,e,i,s,r,o){let l=Ve.createOscillator(),c=Ve.createGain();l.type=n,l.frequency.setValueAtTime(t,e),o&&l.frequency.exponentialRampToValueAtTime(o,e+i+r),om(c,e,i,s,r),l.connect(c),c.connect(bs),l.start(e),l.stop(e+i+r+.05)}function as(n,t,e,i,s,r=1){let o=Ve.createBufferSource(),l=Ve.createBiquadFilter(),c=Ve.createGain();o.buffer=jl,l.type=n,l.frequency.value=t,l.Q.value=r,om(c,e,.004,i,s),o.connect(l),l.connect(c),c.connect(bs),o.start(e,Math.random()*.5),o.stop(e+s+.05)}var sm={wood:(n,t)=>{Xn("sine",190*t,n,.003,.16,.12,95*t),as("bandpass",700*t,n,.08,.08,2)},stone:(n,t)=>{as("highpass",1800*t,n,.1,.06),Xn("triangle",140*t,n,.002,.08,.08,90*t)},sand:(n,t)=>{as("lowpass",520*t,n,.12,.18)},glass:(n,t)=>{Xn("sine",1900*t,n,.002,.08,.25,1500*t),as("highpass",4200,n,.06,.12)},soft:(n,t)=>{as("bandpass",850*t,n,.09,.1,.8)}};function _n(n,t="soft"){if(!Ve||xo())return;let e=Ve.currentTime+.005,i=sm[t]||sm.soft;switch(n){case"break":i(e,1),i(e+.05,.8);break;case"hit":i(e,1.15);break;case"place":i(e,1.3);break;case"step":{as(t==="stone"?"highpass":"bandpass",t==="stone"?1500:650,e,t==="sand"?.05:.035,.06);break}case"pickup":Xn("sine",880,e,.002,.07,.08,1320);break;case"chest":Xn("triangle",160,e,.02,.07,.3,120),Xn("sine",330,e+.12,.005,.05,.15);break;case"door":Xn("sawtooth",120,e,.03,.04,.3,160),as("lowpass",400,e+.25,.08,.1);break;case"eat":[0,.13,.26].forEach(s=>as("bandpass",1200+Math.random()*600,e+s,.07,.07,1.5));break;case"trade":Xn("triangle",659,e,.005,.08,.15),Xn("triangle",988,e+.1,.005,.08,.25);break;case"coin":Xn("sine",1319,e,.002,.08,.08),Xn("sine",1976,e+.07,.002,.08,.22);break;case"hurt":Xn("triangle",300,e,.005,.1,.18,200);break;default:break}}function Iu(n){if(Ve){if(!ur&&n>.01){let t=Ve.createBufferSource(),e=Ve.createBiquadFilter(),i=Ve.createBiquadFilter(),s=Ve.createGain();t.buffer=jl,t.loop=!0,e.type="lowpass",e.frequency.value=2600,i.type="highpass",i.frequency.value=400,s.gain.value=0,t.connect(i),i.connect(e),e.connect(s),s.connect(bs),t.start(),ur={s:t,g:s}}ur&&ur.g.gain.setTargetAtTime(.06*n,Ve.currentTime,.4)}}var Yv=()=>({ctx:Ve?Ve.state:"none",hi:Fn()?Fn().state():null,rain:ur?+ur.g.gain.value.toFixed(3):0});var Ou={};zi(Ou,{HI_SCENE:()=>Du,createWeather:()=>Nu,precipFor:()=>Fu,sceneFor:()=>Lu,soundOf:()=>fr,stepWeather:()=>Uu});function fr(n){if(!n)return"soft";let t=n.pattern||"";return t==="glass"||t==="stained"||t==="ice"?"glass":t==="sand"||t==="snow"||n.id==="sand"||n.id==="farmland"?"sand":n.tool==="axe"||t==="planks"||t==="log"||t==="door"?"wood":n.tool==="pickaxe"?"stone":"soft"}function Lu({day:n,underground:t}){return t?"cave":n<.25?"night":"calm"}var Du={calm:"hub",night:"night",cave:"cave"};function Nu(n=Math.random){return{kind:"clear",left:180+n()*300,level:0}}function Uu(n,t,e=Math.random){n.left-=t,n.left<=0&&(n.kind==="clear"?(n.kind="rain",n.left=60+e()*90):(n.kind="clear",n.left=180+e()*300));let i=n.kind==="rain"?1:0;return n.level+=Math.sign(i-n.level)*Math.min(Math.abs(i-n.level),t/6),n}function Fu(n,t){return!t||t.level<=.01||n==="desert"?null:n==="snow"?"snow":"rain"}var $v=[1,2,4,6,8];function nc(n,t){if(t&&t.type==="rod"&&(t=null),!n||n.hardness<0)return{time:1/0,harvest:!1,usesTool:!1};let e=.25+n.hardness*.55,i=n.tier|0,r=!!(t&&n.tool&&t.type===n.tool)?t.tier:0;return i>0&&r<i?{time:e*3,harvest:!1,usesTool:!!t&&t.type!=="sword"}:{time:Math.max(.1,e/$v[r]),harvest:!0,usesTool:!!t&&t.type!=="sword"}}function _o(n,t,e,i=1){let s=n.slots[t];if(!s)return{broke:!1};let r=e.toolOf(s.id);if(!r)return{broke:!1};let o=r.durability;return s.dur=(s.dur==null?o:s.dur)-i,s.dur<=0?(n.slots[t]=null,{broke:!0,id:s.id}):{broke:!1,left:s.dur,max:o}}function am(n,t){if(!n)return null;let e=t.toolOf(n.id),i=!e&&t.get(n.id),s=e?e.durability:i&&i.armor?i.armor.dur||100:0;if(!s)return null;let r=n.dur==null?s:n.dur;return{left:r,max:s,frac:r/s}}var Hu={};zi(Hu,{collect:()=>Vu,createFurnace:()=>Bu,dismantle:()=>Gu,start:()=>zu,tick:()=>ku});function Bu(){return{fuel:0,jobs:[],done:{}}}function zu(n,t,e,i=4){if(ri(t,e.in)<1)return{ok:!1,reason:"materials"};let s=n.jobs.length;if(n.fuel-s<1){if(ri(t,"coal")<1)return{ok:!1,reason:"fuel"};ho(t,"coal",1),n.fuel+=i}return ho(t,e.in,1),n.jobs.push({in:e.in,out:e.out,left:e.time}),{ok:!0}}function ku(n,t){for(;t>0&&n.jobs.length;){let e=n.jobs[0],i=Math.min(t,e.left);e.left-=i,t-=i,e.left<=1e-9&&(n.jobs.shift(),n.fuel-=1,n.done[e.out]=(n.done[e.out]||0)+1)}return n}function Vu(n,t,e=()=>64){let i=0;for(let s of Object.keys(n.done)){let r=xn(t,s,n.done[s],e);i+=n.done[s]-r,r?n.done[s]=r:delete n.done[s]}return i}function Gu(n){let t=Object.assign({},n.done);for(let e of n.jobs)t[e.in]=(t[e.in]||0)+1;return t}var Ju={};zi(Ju,{MAX_HP:()=>yo,REGEN_EVERY:()=>Jv,SAFE_FALL:()=>Zv,createHealth:()=>Wu,damage:()=>qu,fallDamage:()=>Xu,hearts:()=>Zu,regen:()=>Yu,respawnPoint:()=>$u});var yo=20,Zv=4,Jv=4;function Wu(n=20){return{hp:Math.max(0,Math.min(20,n)),regenT:0}}function Xu(n,{water:t=!1,flying:e=!1}={}){return t||e||n<=4?0:Math.floor((n-4)/2)+1}function qu(n,t){return t>0&&(n.hp=Math.max(0,n.hp-t),n.regenT=0),n.hp<=0}function Yu(n,t){return n.hp<=0||n.hp>=20?(n.regenT=0,!1):(n.regenT+=t,n.regenT>=4?(n.regenT-=4,n.hp=Math.min(20,n.hp+1),!0):!1)}function $u(n,t,e){return n&&e?{x:n.x+.5,y:n.y+1,z:n.z+.5}:{x:t.x,y:t.y,z:t.z}}function Zu(n){let t=[];for(let e=0;e<20/2;e++){let i=n-e*2;t.push(i>=2?"full":i===1?"half":"empty")}return t}var ic={animal:8,quiz:4};function lm(){return{list:[],nextId:1}}var vo=(n,t)=>n.list.reduce((e,i)=>e+(i.kind===t&&!i.gone?1:0),0);function cm(n,t,e){let i={id:n.nextId++,type:t.id,kind:t.kind,def:t,p:{x:e.x,y:e.y,z:e.z},v:{x:0,y:0,z:0},yaw:0,hp:t.hp||2,t:0,turn:0,gone:!1,busy:!1,onGround:!1};return n.list.push(i),i}function hm(n,t){return n<.2&&!t}function um(n,t,e){return n.tame?!1:n.kind==="quiz"?t>.45||e>48:e>72}function fm(n,t,e,i){let s=n.def,r=t.x-n.p.x,o=t.z-n.p.z,l=Math.hypot(r,o);if(n.t+=e,n.busy){n.v.x=0,n.v.z=0,n.kind==="villager"&&(n.yaw=Math.atan2(-r,-o));return}if(n.home){let c=n.home.x-n.p.x,a=n.home.z-n.p.z,d=Math.hypot(c,a);if(d>10){n.yaw=Math.atan2(-c,-a),n.v.x=c/d*s.speed,n.v.z=a/d*s.speed,n.t=0,n.turn=1;return}}if(n.kind==="quiz"&&l<16){n.yaw=Math.atan2(-r,-o);let c=l>1.6?s.speed:0;n.v.x=r/(l||1)*c,n.v.z=o/(l||1)*c;return}n.t>=n.turn&&(n.t=0,n.turn=2+i()*4,i()<.35?(n.v.x=0,n.v.z=0):(n.yaw=i()*Math.PI*2,n.v.x=-Math.sin(n.yaw)*s.speed,n.v.z=-Math.cos(n.yaw)*s.speed))}function dm(n,t,e){if(n.kind!=="animal"||n.gone)return null;if(n.hp-=t?n.hp:1,n.hp>0)return{drops:null};n.gone=!0;let i=n.def.drops||{},s=(i.min||1)+Math.floor(e()*((i.max||1)-(i.min||1)+1));return{drops:i.id?{id:i.id,n:s}:null}}var pm=(n,t)=>n?(t?2:1)+1:0;function mm(n,t,e,i,s){let r=[e.x-i/2,e.y,e.z-i/2],o=[e.x+i/2,e.y+s,e.z+i/2],l=[n.x,n.y,n.z],c=[t.x,t.y,t.z],a=0,d=1/0;for(let h=0;h<3;h++){if(Math.abs(c[h])<1e-9){if(l[h]<r[h]||l[h]>o[h])return null;continue}let u=(r[h]-l[h])/c[h],x=(o[h]-l[h])/c[h];if(u>x&&([u,x]=[x,u]),a=Math.max(a,u),d=Math.min(d,x),a>d)return null}return a}function gm(n){return Object.keys(n||{}).filter(t=>n[t]&&!n[t].d).sort((t,e)=>(n[e].u||0)-(n[t].u||0))}var xm=n=>`../hero-island/?map=${encodeURIComponent(n)}&from=world`;function _m(n,t){let e=new Set(t||[]);return(Array.isArray(n)?n:[]).filter(i=>i&&i.id&&!e.has(i.id))}function ym(n,t,e,i,s=()=>64){let r=(t||[]).find(a=>a.map===n.map);if(!r)return{ok:!1,coins:0,items:{},leftovers:{}};let o=r.reward.coins|0,l=Object.assign({},r.reward.items),c={};Di(i,o);for(let a in l){let d=xn(e,a,l[a],s);d&&(c[a]=d)}return{ok:!0,coins:o,items:l,leftovers:c,name_zh:r.name_zh}}function vm(n,t,e){let i=new Set;for(let r of Array.isArray(n)?n:[])r&&r.map&&i.add(r.map);let s=t&&t.defeated;if(s)for(let r of e||[])r.boss&&s[r.boss]&&i.add(r.map);return i}function Ku(n,t,e){let i=(t||[]).findIndex(r=>r.map===n);if(i<0)return{ok:!1,need:null};if(i===0)return{ok:!0};let s=t[i-1];return e.has(s.map)?{ok:!0}:{ok:!1,need:s}}function Mm(n,t){let e=(n||[]).findIndex(i=>!t.has(i.map));return e<=0?null:Ku(n[e].map,n,t).ok?n[e]:null}var yi={};function dr(n){return yi[n]||(yi[n]=new Gn({color:n,transparent:!0}),yi[n].userData.base=new ae(n)),yi[n]}var Mo=null;function Qv(){if(Mo)return Mo;let n=document.createElement("canvas");n.width=n.height=64;let t=n.getContext("2d");return t.fillStyle="#26302A",t.fillRect(0,0,64,64),t.fillStyle="#EFEBDD",t.beginPath(),t.ellipse(20,28,8,10,0,0,7),t.ellipse(44,28,8,10,0,0,7),t.fill(),t.fillStyle="#151714",t.beginPath(),t.arc(22,31,4,0,7),t.arc(46,31,4,0,7),t.fill(),t.fillStyle="#E0352B",t.font="bold 18px sans-serif",t.textAlign="center",t.fillText("?",32,58),Mo=new pi(n),Mo.colorSpace=rn,Mo}function Sm(n,t){let e=new Dn,i=n.colors,[s,r]=n.size,o=(c,a,d,h,u,x,_,M)=>{let g=new ke(new un(c,a,d),M||dr(h));return g.position.set(u,x,_),e.add(g),g},l=[];if(n.kind==="villager"){for(let a of[-.13,.13]){let d=o(.2,.6,.22,i.leg,a,.6,0);d.geometry.translate(0,-.6/2,0),l.push(d)}o(.56,.78,.34,t||i.body,0,.6+.39,0);for(let a of[-.36,.36])o(.16,.62,.18,t||i.body,a,1.3399999999999999,0).geometry.translate(0,-.27,0);o(.42,.42,.4,i.head,0,.6+.78+.22,0),o(.5,.1,.48,i.hat,0,.6+.78+.46,0),o(.32,.14,.3,i.hat,0,.6+.78+.56,0),o(.08,.12,.06,"#C9A27A",0,.6+.78+.18,-.22)}else if(n.kind==="quiz"){let c=o(s,r*.72,s*.8,i.body,0,r*.36+.12,0);yi.__face||(yi.__face=new Gn({map:Qv(),transparent:!0}),yi.__face.userData.base=new ae("#ffffff"));let a=[dr(i.head),dr(i.head),dr(i.head),dr(i.head),dr(i.head),yi.__face],d=new ke(new un(s*.9,s*.8,s*.8),a);d.position.set(0,r*.72+s*.4,0),e.add(d),l.push(o(.18,.24,.18,i.head,-.2,.12,0),o(.18,.24,.18,i.head,.2,.12,0))}else{let c=n.id==="chicken"?.25:.45,a=r-c-(n.id==="chicken"?.15:.25);o(s,a,n.id==="chicken"?s:s*1.35,i.body,0,c+a/2,0),i.patch&&o(s*.5,a*.55,.02+s*1.36,i.patch,s*.12,c+a*.55,0);let d=n.id==="chicken"?.3:.45,h=o(d,d,d,i.head,0,c+a+d*.25,-(n.id==="chicken"?s*.35:s*.75));i.comb&&(o(.08,.12,.14,i.comb,0,h.position.y+d/2+.05,h.position.z),o(.12,.06,.12,"#D9A63A",0,h.position.y-.02,h.position.z-d/2-.05));let u=n.id==="chicken"?.06:.18,x=n.id==="chicken"?0:s*.45,_=s*.3;for(let[M,g]of n.id==="chicken"?[[-.1,0],[.1,0]]:[[-_,-x],[_,-x],[-_,x],[_,x]]){let m=o(u,c,u,i.leg,M,c/2,g);m.geometry.translate(0,-c/2,0),m.position.y=c,l.push(m)}}return e.userData.legs=l,e}function bm(n){for(let t in yi){let e=yi[t];e.color.copy(e.userData.base).multiplyScalar(n)}}function sc(n,t,e){n.position.set(t.p.x,t.p.y,t.p.z),n.rotation.y=t.yaw;let i=Math.hypot(t.v.x,t.v.z)>.05,s=i?Math.sin(e*8+t.id)*.5:0;if(n.userData.legs.forEach((r,o)=>{r.rotation.x=o%2?s:-s}),t.kind==="quiz"&&(n.position.y+=Math.sin(e*3+t.id)*.05),t.gone){let r=Math.max(.01,1-t.goneT*3);n.scale.setScalar(r),n.rotation.y+=t.goneT*12}}var rc="99294b7bab",ju=new URLSearchParams(location.search),nM=720,oc=5,Am={boat:-.85,minecart:-.6,horse:.75},iM=[[0,0,0,1,.1,1]],sM=20261008,rM=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,f={touch:rM,started:!1,paused:!0,overlay:null,p:{x:.5,y:40,z:.5},v:{x:0,y:0,z:0},yaw:0,pitch:-.2,fly:!1,onGround:!1,eyeOff:0,view:"fp",sel:0,time:.08,keys:{},joy:{x:0,y:0,active:!1},jumpHeld:!1,downHeld:!1,mining:{active:!1,src:"center",sx:0,sy:0,k:"",t:0},placeRepeat:0,dirty:new Set,dirtyMeta:!1,frames:[],drops:[]};function So(n,t){try{let e=localStorage.getItem(n);return e??t}catch{return t}}function ac(n,t){try{localStorage.setItem(n,t)}catch{}}async function oM(){let n=Kl(So("hw_mode","survival")),t=Qp(n);kp(Kp(n));let[e,i,s,r,o,l,c]=await Promise.all(["data/blocks.json","data/recipes.json","data/mobs.json","data/portals.json","data/structures.json","data/trades.json","data/life.json"].map(p=>fetch(p,{cache:"no-cache"}).then(E=>E.json()))),a=Qd(e),d=i.recipes||[],h=p=>a.maxStack(p),u={};try{let[p,E,P,O,z,et,mt,pt,dt,bt,Wt]=await Promise.all(["hw_meta","hw_player","hw_inventory","hw_coins","hw_furnaces","hw_portal_claimed","hw_quests","hw_chests","hw_crops","hw_ach","hw_map"].map(fu));u={meta:p,player:E,inv:P,coins:O,furnaces:z,claimed:et,quests:mt,chests:pt,crops:dt,achv:bt,mapd:Wt,chunks:await Gp("hw_chunk:")}}catch(p){console.warn("save unavailable",p)}let x=u.meta&&u.meta.seed||sM+xu[n].seedOffset,_=ap(x,a,o),M=Pp(Object.fromEntries(Object.entries(u.chunks||{}).map(([p,E])=>[p.slice(9),E]))),g=u.inv?ql(u.inv):co();t.creative&&!u.inv&&em.forEach((p,E)=>{a.get(p)&&(g.slots[E]={id:p,count:64})});let m=Rp(u.coins),C=xp(u.achv),N=c.achievements||[],w=new Wl(a,u.mapd),A=Wu(u.player&&u.player.hp!=null?u.player.hp:20);f.bed=u.player&&u.player.bed||null,f.horse=u.player&&u.player.horse||null;let T=r.portals||[],U=Array.isArray(u.claimed)?u.claimed.slice():[],v=u.furnaces||{},b=u.quests||{},R=Object.fromEntries(Object.entries(u.chests||{}).map(([p,E])=>[p,ql(E,27)])),F=u.crops||{};f.armor=u.player&&Array.isArray(u.player.armor)?u.player.armor.slice(0,4):[null,null,null,null],f.armorDur=u.player&&Array.isArray(u.player.armorDur)?u.player.armorDur.slice(0,4):[null,null,null,null];let Y=i.smelt||[],B=i.fuelPerCoal||4;u.meta&&typeof u.meta.time=="number"&&(f.time=u.meta.time);let L=Fi("#c"),k=new Bl({canvas:L,antialias:!1,powerPreference:"high-performance"});k.setPixelRatio(Math.min(window.devicePixelRatio||1,f.touch?1.5:1.25));let W=new Ur,$=new ae("#EFEBDD");W.background=$;let J=new pn(72,1,.08,200);J.rotation.order="YXZ";let K=Dp(a),st=Np(a,K),ot=zp(K.canvas),Tt=new Worker("assets/hw-worker.js?v="+rc),j=new Zl({scene:W,mats:ot,reg:a,worker:Tt,diffs:M,onDirty:p=>{f.dirty.add(p),(f.mapDirty||(f.mapDirty=new Set)).add(p)}}),At=Math.max(2,Math.min(6,parseInt(ju.get("rd")||So("hw_rd",f.touch?"3":"4"),10)||4));j.setRenderDistance(At),J.far=At*16+40,J.updateProjectionMatrix();let vt=await new Promise(p=>{let E=P=>{P.data.type==="ready"&&(Tt.removeEventListener("message",E),p(P.data.spawn))};Tt.addEventListener("message",E),Tt.postMessage({type:"init",seed:x,blocks:e,structures:o,diffs:Object.fromEntries([...M].map(([P,O])=>[P,cu(O)]))})});u.player?Object.assign(f,{p:{x:u.player.x,y:u.player.y,z:u.player.z},yaw:u.player.yaw||0,pitch:u.player.pitch||0,fly:!!u.player.fly,sel:u.player.sel|0}):(f.p={x:vt.x,y:vt.y,z:vt.z},f.yaw=Math.atan2(-(vt.stele.x+.5-vt.x),-(vt.stele.z+.5-vt.z)),f.pitch=-.15);let _t=new gs(new Hr(new un(1.004,1.004,1.004)),new ms({color:1382164,transparent:!0,opacity:.45}));_t.visible=!1,W.add(_t);let q=Up().map(p=>new pi(p)),nt=new ke(new un(1.01,1.01,1.01),new Gn({map:q[0],transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}));nt.visible=!1,W.add(nt);let yt=(p,E)=>{let P=document.createElement("canvas");P.width=P.height=64;let O=P.getContext("2d");O.fillStyle=p,O.beginPath(),O.arc(32,32,28,0,7),O.fill(),E&&(O.globalCompositeOperation="destination-out",O.beginPath(),O.arc(44,26,24,0,7),O.fill());let z=new pi(P);return z.colorSpace=rn,z},Ot=new ps(new Zi({map:yt("#F2C46B"),depthWrite:!1,fog:!1})),xt=new ps(new Zi({map:yt("#EDE6D0",!0),depthWrite:!1,fog:!1}));W.add(Ot,xt);let Bt=500,jt=new Float32Array(Bt*6),Xt=new Float32Array(Bt*3),Zt=new Float32Array(Bt*3);for(let p=0;p<Bt;p++)Zt[p*3]=Math.random()*24-12,Zt[p*3+1]=Math.random()*16,Zt[p*3+2]=Math.random()*24-12;let he=new Qe;he.setAttribute("position",new Ye(jt,3));let Ht=new gs(he,new ms({color:9414574,transparent:!0,opacity:.55,depthWrite:!1}));Ht.frustumCulled=!1,Ht.visible=!1,W.add(Ht);let le=new Qe;le.setAttribute("position",new Ye(Xt,3));let Ne=new kr(le,new Ks({color:16052712,size:.13,transparent:!0,opacity:.9,depthWrite:!1}));Ne.frustumCulled=!1,Ne.visible=!1,W.add(Ne),f.weather=Nu();let He=0;function Ce(p,E,P){if(Ht.visible=P==="rain",Ne.visible=P==="snow",!!P){He+=p;for(let O=0;O<Bt;O++){let z=Zt[O*3],et=Zt[O*3+2],mt=P==="rain"?16:1.6,pt=E.y+10-(Zt[O*3+1]+He*mt)%16;if(P==="rain"){let dt=O*6;jt[dt]=jt[dt+3]=E.x+z,jt[dt+2]=jt[dt+5]=E.z+et,jt[dt+1]=pt,jt[dt+4]=pt-.45}else{let dt=O*3,bt=Math.sin(He*.8+O)*.4;Xt[dt]=E.x+z+bt,Xt[dt+1]=pt,Xt[dt+2]=E.z+et+bt*.6}}(P==="rain"?he:le).attributes.position.needsUpdate=!0}}let we=new Dn,V=(p,E,P,O,z,et,mt)=>{let pt=new ke(new un(p,E,P),new Gn({color:O}));return pt.position.set(z,et,mt),pt.userData.base=new ae(O),we.add(pt),pt},We=V(.24,.75,.26,"#26302A",-.14,.375,0),ve=V(.24,.75,.26,"#26302A",.14,.375,0);V(.56,.7,.3,"#2F5A34",0,1.1,0);let I=V(.18,.66,.2,"#E7CDA6",-.38,1.12,0),y=V(.18,.66,.2,"#E7CDA6",.38,1.12,0);V(.46,.42,.42,"#E7CDA6",0,1.66,0),V(.5,.14,.46,"#151714",0,1.9,.02),V(.12,.12,.05,"#E0352B",.16,1.92,-.24),[We,ve,I,y].forEach(p=>{p.geometry.translate(0,-p.geometry.parameters.height/2+.05,0),p.position.y+=p.geometry.parameters.height/2-.05}),we.visible=!1,W.add(we);let X={},it=p=>X[p]||(X[p]=(()=>{let E=new Image;E.src=st[p];let P=new hn(E);return P.colorSpace=rn,E.onload=()=>{P.needsUpdate=!0},new Zi({map:P,depthWrite:!0,alphaTest:.3})})());function at(p,E,P,O){let z=new ps(it(p));z.scale.set(.42,.42,1),W.add(z),f.drops.push({id:p,s:z,p:{x:E,y:P,z:O},v:{x:(Math.random()-.5)*2,y:3,z:(Math.random()-.5)*2},age:0})}let wt=(p,E,P)=>{let O=j.get(p,E,P);return a.flat.solid[O]===1&&(a.flat.boxes[O]||!0)},Et=Object.fromEntries((s.mobs||[]).map(p=>[p.id,p])),lt=lm(),ht=new Map,Rt=0;function Yt(p,E){for(let P=61;P>0;P--){let O=j.get(p,P,E);if(a.flat.solid[O])return j.get(p,P+1,E)||j.get(p,P+2,E)?null:{y:P+1,n:O};if(a.flat.liquid[O])return null}return null}function Nt(p,E,P,O=7){for(let z=-O;z<=O;z++)for(let et=-O;et<=O;et++)for(let mt=-O;mt<=O;mt++)if(a.flat.lightEmit[j.get(p+mt,E+z,P+et)])return!0;return!1}function Ct(p,E,P,O,z){let et=cm(lt,p,{x:E+.5,y:P,z:O+.5}),mt=Sm(p,z);return ht.set(et.id,mt),W.add(mt),et}let $t=new Set;function Qt(){for(let p of _.villages.around(f.p.x-64,f.p.z-64,f.p.x+64,f.p.z+64))if(!($t.has(p.id)||!j.ready(p.x,p.z))){$t.add(p.id);for(let E=0;E<p.villagers;E++){let P=Yp(p.id,E,l),O=p.x+(E%2?2:-2),z=p.z+(E-1),et=Yt(O,z),mt=Ct(Et.villager,O,et?et.y:p.y+1,z,P.prof.color);Object.assign(mt,{home:{x:p.x,z:p.z},village:p.id,role:P})}}}function ue(p){if(Et.villager&&Qt(),f.horse&&!f.horseMob&&Et.horse&&j.ready(f.horse.x,f.horse.z)){let mt=Ct(Et.horse,Math.floor(f.horse.x),f.horse.y,Math.floor(f.horse.z));mt.tame=!0,f.horse.saddled&&tf(mt),f.horseMob=mt}let E=Math.random()*Math.PI*2,P=14+Math.random()*14,O=Math.floor(f.p.x+Math.cos(E)*P),z=Math.floor(f.p.z+Math.sin(E)*P);if(!j.ready(O,z))return;let et=Yt(O,z);if(et)if(vo(lt,"animal")<ic.animal&&et.n===a.num("grass")&&p>.3){let mt=Object.values(Et).filter(bt=>bt.kind==="animal"&&(!bt.biome||bt.biome===_.biomeOf(O,z))),pt=mt[Math.floor(Math.random()*mt.length)],dt=1+Math.floor(Math.random()*3);for(let bt=0;bt<dt&&vo(lt,"animal")<ic.animal;bt++){let Wt=O+bt%2,oe=z+(bt>>1),ie=Yt(Wt,oe);ie&&Ct(pt,Wt,ie.y,oe)}}else t.quizMobs&&vo(lt,"quiz")<ic.quiz&&hm(p,Nt(O,et.y,z))&&Et.quizling&&Ct(Et.quizling,O,et.y,z)}function H(p,E,P){Rt+=p,Rt>2.5&&f.started&&(Rt=0,ue(E));for(let O=lt.list.length-1;O>=0;O--){let z=lt.list[O],et=ht.get(z.id),mt=Math.hypot(z.p.x-f.p.x,z.p.z-f.p.z);if(z.riding){z.p.x=f.p.x,z.p.y=f.p.y,z.p.z=f.p.z,z.yaw=f.yaw,z.v.x=f.v.x,z.v.z=f.v.z,sc(et,z,P/1e3);continue}if(z.gone){z.goneT=(z.goneT||0)+p,sc(et,z,P/1e3),z.goneT>.35&&(W.remove(et),ht.delete(z.id),lt.list.splice(O,1));continue}if(um(z,E,mt)){z.gone=!0,z.goneT=0,z.village&&$t.delete(z.village);continue}if(!j.ready(z.p.x,z.p.z))continue;fm(z,f.p,p,Math.random),z.v.y-=20*p,z.v.y<-20&&(z.v.y=-20);let pt=Vl(z.p,z.v,p,wt,{w:Math.min(.9,z.def.size[0]),h:z.def.size[1],canStep:!0,grounded:z.onGround});z.onGround=pt.onGround,a.flat.liquid[j.get(z.p.x,z.p.y+.3,z.p.z)]&&(z.v.y=2),sc(et,z,P/1e3)}bm(.35+.65*E)}function It(p,E,P){let O,z;p==="screen"?(ye.set(E/innerWidth*2-1,-(P/innerHeight)*2+1,.5).unproject(J).sub(J.position).normalize(),O={x:J.position.x,y:J.position.y,z:J.position.z},z={x:ye.x,y:ye.y,z:ye.z}):(O=Rn(),z=Be());let et=p==="screen"?ln("screen",E,P):ln("center"),mt=null,pt=f.view==="tp"&&p==="screen"?8:4.5;et&&(pt=Math.min(pt,et.dist+.5));for(let dt of lt.list){if(dt.gone||dt.riding)continue;let bt=mm(O,z,dt.p,dt.def.size[0],dt.def.size[1]);bt!=null&&bt<pt&&(pt=bt,mt=dt)}return mt}function ut(){try{return gm(JSON.parse(localStorage.getItem("ke_mistakes")||"{}"))}catch{return[]}}function Pt(p){if(p.type==="horse"){Rm(p);return}if(p.kind==="villager"){if(!t.trading){ft("\u5275\u9020\u6A21\u5F0F\u88E1\u6751\u6C11\u4E0D\u505A\u751F\u610F\uFF0C\u6771\u897F\u90FD\u5728\u80CC\u5305\u76EE\u9304\u88E1");return}qe(p);return}if(p.kind==="animal"&&g.slots[f.sel]&&g.slots[f.sel].id==="wheat"){t.consume&&Li(g,f.sel,1),Ae();let P=Date.now();p.love=P,ft(`${p.def.name_zh}\u5403\u4E86\u5C0F\u9EA5\uFF0C\u597D\u958B\u5FC3`);let O=Eu(lt.list,p,P);if(O&&vo(lt,"animal")<Au){let z=Ct(p.def,Math.floor((p.p.x+O.p.x)/2),Math.floor(p.p.y),Math.floor((p.p.z+O.p.z)/2));ht.get(z.id).scale.setScalar(.65),p.love=0,O.love=0,ft(`\u751F\u4E86\u4E00\u96BB\u5C0F${p.def.name_zh}\uFF01`),f.stats.bred=(f.stats.bred||0)+1,ee("bred")}else O&&ft("\u52D5\u7269\u592A\u591A\u4E86\uFF0C\u5148\u4E0D\u751F");return}if(p.kind==="animal"){let P=g.slots[f.sel],O=!!(P&&a.toolOf(P.id)&&a.toolOf(P.id).type==="sword"),z=dm(p,O,Math.random);if(p.v.y=4,p.v.x+=(p.p.x-f.p.x)*1.5,p.v.z+=(p.p.z-f.p.z)*1.5,O){let et=_o(g,f.sel,a);et.broke&&ft(`\u4F60\u7684${a.name(et.id)}\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u628A\u5427\uFF01`),Ae()}if(z&&z.drops)for(let et=0;et<z.drops.n;et++)at(z.drops.id,p.p.x,p.p.y+.6,p.p.z);return}if(p.busy)return;p.busy=!0,kn(),document.pointerLockElement&&document.exitPointerLock(),f.overlay="ask";let E=ut().slice(0,30).sort(()=>Math.random()-.5);Xp(ct.ov,{ids:E,onDone:(P,O)=>{if(f.overlay=null,p.busy=!1,P){let z=pm(!0,O);Di(m,z),qn(),p.gone=!0,p.goneT=0,ft(`\u6253\u6557\u932F\u984C\u602A\uFF01 +${z} \u91D1\u5E63`),f.dirtyMeta=!0,In(),f.stats.quizWins=(f.stats.quizWins||0)+1,ee("quiz_wins")}else if(P===!1){let z=f.p.x-p.p.x,et=f.p.z-p.p.z,mt=Math.hypot(z,et)||1;f.v.x=z/mt*7,f.v.z=et/mt*7,f.v.y=4.5,p.p.x-=z/mt*1.5,p.p.z-=et/mt*1.5,ft("\u88AB\u932F\u984C\u602A\u63A8\u958B\u4E86\uFF0C\u518D\u8A66\u4E00\u6B21\uFF01")}}})}let Lt=(p,E,P)=>j.get(p,E,P),gt=(p,E,P)=>{let O=a.get(j.get(p,E,P));return O&&O.rail?{shape:O.rail,powered:!!O.powered}:null},ct=aM();function ft(p){let E=D("div",{class:"toast"},p);ct.toasts.append(E),setTimeout(()=>E.remove(),2200)}function Ue(p){let E=D("div",{class:"toast ach"},D("i",{class:"badge"}),D("span",{},"\u6210\u5C31\u9054\u6210\uFF1A",D("b",{},p.name_zh),p.coins&&t.coins?`\u3000+${p.coins} \u91D1\u5E63`:""));ct.toasts.append(E),setTimeout(()=>E.remove(),3500)}function ee(p,E=1){_p(C,p,E),f.dirtyMeta=!0;for(let P of yp(C,N))Ue(P),P.coins&&t.coins&&(Di(m,P.coins),qn())}function Tn(p,E,P,O){ee("placed"),O==="torch"&&ee("place:torch");let z=f.recentPlaced||(f.recentPlaced=[]);z.push([p,E,P]),z.length>80&&z.shift(),!C.done.house&&Mp(z,p,E,P)>=30&&ee("house")}function On(){let p=!1;for(let E of qt())C.stats["boss:"+E]||(C.stats["boss:"+E]=1,p=!0);p&&ee("boss",0)}let bo=m.coins;function qn(){m.coins>bo&&_n("coin"),bo=m.coins,ct.coins.textContent=m.coins}let pr="";function vi(){let p=Zu(A.hp),E=p.join();E!==pr&&(pr=E,ct.hearts.innerHTML="",p.forEach(P=>ct.hearts.append(D("i",{class:"ht "+P}))))}function wo(p){if(f.dead||p<=0||!t.damage)return;let E=p,P=go(f.armor,a);if(p=bu(p,P),P&&(Su(f.armor,f.armorDur,a,E).forEach(et=>ft(`\u4F60\u7684${a.name(et)}\u7A7F\u820A\u4E86\uFF0C\u8F15\u8F15\u88C2\u958B\u56C9\u3002\u518D\u505A\u4E00\u4EF6\u65B0\u7684\u5427\uFF01`)),Ts(),f.dirtyMeta=!0),p<=0)return;let O=qu(A,p);vi(),f.dirtyMeta=!0,_n("hurt"),ct.flash.classList.remove("on"),ct.flash.offsetWidth,ct.flash.classList.add("on"),O&&Ao()}function Ao(){Io(!0),f.dead=!0,kn(),document.pointerLockElement&&document.exitPointerLock(),f.overlay="dead";let p=ct.ov;p.innerHTML="",p.hidden=!1,p.append(D("div",{class:"panel start"},D("h2",{},"\u4F60\u6688\u5012\u4E86\uFF01"),D("p",{},"\u5225\u64D4\u5FC3\uFF0C\u80CC\u5305\u88E1\u7684\u6771\u897F\u90FD\u9084\u5728\u3002"),D("button",{class:"btn big",onclick:Eo},f.bed?"\u56DE\u5230\u5E8A\u908A":"\u56DE\u5230\u51FA\u751F\u9EDE")))}function Eo(){let p=$u(f.bed,vt,!!f.bed);f.p={x:p.x,y:p.y,z:p.z},f.v={x:0,y:0,z:0},f.fallTop=p.y,A.hp=20,f.dead=!1,vi(),_e(),f.dirtyMeta=!0,ft(f.bed?"\u5728\u5E8A\u908A\u9192\u4F86\u4E86":"\u56DE\u5230\u51FA\u751F\u9EDE\u4E86")}function Ae(){ct.hotbar.innerHTML="";for(let E=0;E<9;E++){let P=g.slots[E];ct.hotbar.append(D("button",{class:"slot"+(E===f.sel?" on":""),"aria-label":P?a.name(P.id):"\u7A7A\u683C",onpointerdown:O=>{O.stopPropagation(),f.sel=E,Ae()}},P?D("img",{src:st[P.id],alt:""}):null,P&&P.count>1?D("span",{class:"cnt"},P.count):null,ws(P),D("span",{class:"key"},E+1)))}let p=g.slots[f.sel];ct.selName.textContent=p?a.name(p.id):""}function ws(p){let E=am(p,a);return!E||E.left>=E.max?null:D("span",{class:"dur"+(E.frac<.25?" low":"")},D("i",{style:"width:"+Math.round(E.frac*100)+"%"}))}function To(p=4){let E=new Set,P=Math.floor(f.p.x),O=Math.floor(f.p.y),z=Math.floor(f.p.z);for(let et=-p;et<=p;et++)for(let mt=-p;mt<=p;mt++)for(let pt=-p;pt<=p;pt++){let dt=j.get(P+pt,O+et,z+mt);dt&&E.add(a.get(dt).id)}return E}let As=()=>({near:To(),owned:new Set(m.owned)}),Es=-1,Bn=null,Mi=null,Oi=p=>p==="inv"?g:p==="chest"?R[Mi]:null,mr=(p,E)=>p==="armor"?f.armor[E]?{id:f.armor[E],count:1,dur:f.armorDur[E]}:null:Oi(p).slots[E];function Co(p,E,P){if(!Bn){mr(p,E)&&(Bn={c:p,i:E}),P();return}let O=Bn;if(Bn=null,O.c===p&&O.i===E){P();return}if(p==="armor"||O.c==="armor"){let[z,et,mt,pt]=p==="armor"?[O.c,O.i,p,E]:[p,E,O.c,O.i];if(z==="armor"){P();return}let dt=Oi(z),bt=dt.slots[et],Wt=bt&&a.get(bt.id),oe=f.armor[pt];if(bt&&!(Wt.armor&&Wt.armor.slot===pt)){ft("\u9019\u500B\u4E0D\u80FD\u7A7F\u5728\u9019\u88E1"),P();return}let ie=f.armorDur[pt],Oe=oe?Number.isFinite(ie)?{id:oe,count:1,dur:ie}:{id:oe,count:1}:null;bt?(f.armor[pt]=bt.id,f.armorDur[pt]=Number.isFinite(bt.dur)?bt.dur:null,bt.count>1?(bt.count--,Oe&&xn(dt,oe,1,h)):dt.slots[et]=Oe):oe&&(f.armor[pt]=null,f.armorDur[pt]=null,dt.slots[et]=Oe),Ts(),f.dirtyMeta=!0,Ae(),P();return}O.c===p?ru(Oi(p),O.i,E,h):au(Oi(O.c),O.i,Oi(p),E,h),f.dirtyMeta=!0,Ae(),P()}let ls=(p,E,P,O="")=>{let z=mr(p,E),et=Bn&&Bn.c===p&&Bn.i===E;return D("button",{class:"slot"+(et?" pick":"")+O,title:z?a.name(z.id):"",onclick:()=>Co(p,E,P)},z?D("img",{src:st[z.id],alt:""}):null,z&&z.count>1?D("span",{class:"cnt"},z.count):null,ws(z))},lc=["\u982D","\u8EAB","\u817F","\u8173"];function cc(p){let E=go(f.armor,a);return D("div",{class:"armor-row"},lc.map((P,O)=>D("div",{class:"armor-slot"},ls("armor",O,p),D("small",{},P))),D("small",{class:"muted"},`\u8B77\u7532 ${E} \u9EDE\uFF08\u53D7\u50B7\u5C11 ${Math.min(80,E*4)}%\uFF09`))}function Ts(){if(ct.armor){let p=go(f.armor,a);ct.armor.textContent=p?`\u8B77\u7532 ${p}`:""}}function S(){let p=ct.ov;p.innerHTML="",p.hidden=!1;let E=R[Mi]||(R[Mi]=co(27)),P=D("div",{class:"inv-grid"});for(let et=0;et<27;et++)P.append(ls("chest",et,S));let O=D("div",{class:"inv-grid"});for(let et=9;et<36;et++)O.append(ls("inv",et,S));let z=D("div",{class:"inv-grid hbrow"});for(let et=0;et<9;et++)z.append(ls("inv",et,S," hb"));return p.append(D("div",{class:"panel inv"},D("div",{class:"p-head"},D("h2",{},"\u7BB1\u5B50"),D("button",{class:"x","aria-label":"\u95DC\u9589",onclick:_e},"\xD7")),D("p",{class:"muted"},"\u9EDE\u4E00\u683C\u3001\u518D\u9EDE\u53E6\u4E00\u683C\u5C31\u80FD\u642C\u904E\u53BB\uFF08\u7BB1\u5B50 \u2194 \u80CC\u5305\uFF09\u3002"),P,D("h3",{},"\u80CC\u5305"),O,z)),E}function G(){let p=ct.ov;p.innerHTML="",p.hidden=!1;let E=D("div",{class:"inv-grid"}),P=pt=>ls("inv",pt,G,pt<9?" hb":"");for(let pt=9;pt<36;pt++)E.append(P(pt));let O=D("div",{class:"inv-grid hbrow"});for(let pt=0;pt<9;pt++)O.append(P(pt));let z=D("div",{class:"craft"},D("h3",{},"\u5408\u6210"));if(t.creative){let pt=D("div",{class:"craft"},D("h3",{},"\u65B9\u584A\u76EE\u9304\uFF08\u7121\u9650\uFF09"),D("p",{class:"muted"},"\u9EDE\u4E00\u4E0B\u5C31\u653E\u9032\u5FEB\u6377\u5217\u76EE\u524D\u9078\u7684\u90A3\u683C\u3002")),dt=D("div",{class:"cat-grid"});tm(a).forEach(bt=>dt.append(D("button",{class:"slot",title:a.name(bt),onclick:()=>{g.slots[f.sel]={id:bt,count:64},f.dirtyMeta=!0,Ae(),G(),ft(`${a.name(bt)} \u653E\u9032\u7B2C ${f.sel+1} \u683C`)}},D("img",{src:st[bt],alt:""})))),pt.append(dt),p.append(D("div",{class:"panel inv"},D("div",{class:"p-head"},D("h2",{},"\u80CC\u5305\uFF08\u5275\u9020\u6A21\u5F0F\uFF09"),D("button",{class:"x","aria-label":"\u95DC\u9589",onclick:_e},"\xD7")),D("div",{class:"inv-wrap"},D("div",{},D("p",{class:"muted"},"\u9EDE\u4E00\u683C\u3001\u518D\u9EDE\u53E6\u4E00\u683C\u5C31\u80FD\u4EA4\u63DB\u3002\u6700\u4E0B\u9762\u4E00\u6392\uFF1D\u5FEB\u6377\u5217\u3002"),E,O),pt)));return}let et=As(),mt={needs:"\u8981\u7AD9\u5728\u5DE5\u4F5C\u53F0\u65C1\u908A",blueprint:"\u8981\u5148\u5728\u5546\u5E97\u8CB7\u85CD\u5716"};d.forEach(pt=>{let dt=Yl(g,pt,et),bt=dt.ok;pt.blueprint&&dt.reason==="blueprint"&&!Object.keys(pt.in).some(Wt=>Wt!=="stick"&&ri(g,Wt)>0)||z.append(D("div",{class:"rcp"+(bt?"":" no")},D("img",{src:st[pt.out.id],alt:""}),D("div",{class:"rcp-t"},D("b",{},`${pt.name_zh} \xD7${pt.out.count}`),D("small",{},Object.keys(pt.in).map(Wt=>`${a.name(Wt)} ${ri(g,Wt)}/${pt.in[Wt]}`).join("\u3001")+(mt[dt.reason]?"\u3000\xB7 "+mt[dt.reason]:""))),D("button",{class:"btn small",onclick:()=>{let Wt=ou(g,pt,h,As());Wt.ok?(ft(`\u505A\u597D\u4E86\uFF1A${pt.name_zh} \xD7${pt.out.count}`),f.dirtyMeta=!0,ee("craft:"+pt.out.id)):ft({full:"\u80CC\u5305\u6EFF\u4E86",needs:"\u8981\u7AD9\u5728\u5DE5\u4F5C\u53F0\u65C1\u908A",blueprint:"\u8981\u5148\u5728\u5546\u5E97\u8CB7\u85CD\u5716"}[Wt.reason]||"\u6750\u6599\u4E0D\u5920"),G(),Ae()}},"\u88FD\u4F5C")))}),p.append(D("div",{class:"panel inv"},D("div",{class:"p-head"},D("h2",{},"\u80CC\u5305"),D("button",{class:"x","aria-label":"\u95DC\u9589",onclick:_e},"\xD7")),D("div",{class:"inv-wrap"},D("div",{},D("p",{class:"muted"},"\u9EDE\u4E00\u683C\u3001\u518D\u9EDE\u53E6\u4E00\u683C\u5C31\u80FD\u4EA4\u63DB\u3002\u6700\u4E0B\u9762\u4E00\u6392\uFF1D\u5FEB\u6377\u5217\u3002\u4E0A\u9762\u662F\u76D4\u7532\uFF1A\u628A\u76D4\u7532\u9EDE\u5230\u5C0D\u7684\u683C\u5B50\u5C31\u7A7F\u4E0A\u3002"),cc(G),E,O),z)))}let rt=Ep(a);function Q(){let p=ct.ov;p.innerHTML="",p.hidden=!1;let E=D("div",{class:"shop"}),P=Mm(T,qt());rt.filter(O=>!O.id.startsWith("portal_")||P&&O.id===P.block).forEach(O=>E.append(D("div",{class:"offer"+(O.locked?" locked":"")},D("img",{src:st[O.id],alt:""}),D("div",{class:"of-t"},D("b",{},`${O.name_zh}${O.qty>1?" \xD7"+O.qty:""}`),D("small",{},O.locked?`\uFF08${O.locked}\uFF09`:`${O.price} \u91D1\u5E63${O.desc?"\u3000"+O.desc:""}`)),hr(m,O.id)?D("span",{class:"owned"},"\u5DF2\u64C1\u6709"):D("button",{class:"btn small",disabled:O.locked?!0:null,onclick:()=>tt(O)},O.locked?"\u672A\u958B\u653E":"\u8CFC\u8CB7")))),p.append(D("div",{class:"panel"},D("div",{class:"p-head"},D("h2",{},"\u5546\u5E97\u3000",D("span",{class:"coin"}),` ${m.coins}`),D("button",{class:"x","aria-label":"\u95DC\u9589",onclick:_e},"\xD7")),D("p",{class:"muted"},"\u91D1\u5E63\u600E\u9EBC\u4F86\uFF1F\u53BB\u300C\u7DF4\u7FD2\u77F3\u7891\u300D\u7B54\u82F1\u6587\u984C\uFF1A\u7B54\u5C0D 1 \u679A\u3001\u6253\u5B57\u984C 2 \u679A\u3002"),E))}function tt(p){let E=Tp(m,g,p,h);E.ok?(ft(p.blueprint?`\u62FF\u5230 ${p.name_zh}\uFF01\u53BB\u5DE5\u4F5C\u53F0\u505A\u505A\u770B`:`\u8CB7\u5230 ${p.name_zh} \xD7${p.qty}`),f.dirtyMeta=!0,qn(),Ae(),In()):ft({coins:"\u91D1\u5E63\u4E0D\u5920\uFF0C\u53BB\u77F3\u7891\u7B54\u984C\u5427\uFF01",full:"\u80CC\u5305\u6EFF\u4E86",locked:"\u9084\u6C92\u958B\u653E",owned:"\u5DF2\u7D93\u6709\u4E86"}[E.reason]||"\u8CB7\u4E0D\u4E86"),Q()}let Dt=null;function zt(){let p=ct.ov,E=v[Dt]||(v[Dt]=Bu());p.innerHTML="",p.hidden=!1;let P=E.jobs[0],O=D("div",{class:"shop"});Y.forEach(et=>{let mt=ri(g,et.in);O.append(D("div",{class:"offer"+(mt?"":" locked")},D("img",{src:st[et.in],alt:""}),D("div",{class:"of-t"},D("b",{},`${a.name(et.in)} \u2192 ${a.name(et.out)}`),D("small",{},`\u6709 ${mt} \u500B \xB7 \u6BCF\u500B ${et.time} \u79D2`)),D("button",{class:"btn small",onclick:()=>{let pt=zu(E,g,et,B);pt.ok||ft(pt.reason==="fuel"?"\u8981\u653E\u7164\u70AD\u7576\u71C3\u6599":"\u6C92\u6709\u6750\u6599"),f.dirtyMeta=!0,Ae(),zt()}},"\u653E\u9032\u53BB")))});let z=Object.values(E.done).reduce((et,mt)=>et+mt,0);p.append(D("div",{class:"panel"},D("div",{class:"p-head"},D("h2",{},"\u7194\u7210"),D("button",{class:"x","aria-label":"\u95DC\u9589",onclick:_e},"\xD7")),D("p",{class:"muted"},`\u71C3\u6599\u9084\u80FD\u71D2 ${Math.max(0,E.fuel-E.jobs.length)} \u500B\uFF08\u80CC\u5305\u7164\u70AD ${ri(g,"coal")}\uFF1B1 \u500B\u7164\u70AD\u71D2 ${B} \u500B\uFF09`),D("div",{class:"furnace-st"},P?`\u6B63\u5728\u71D2\uFF1A${a.name(P.in)}\uFF08\u9084\u8981 ${Math.ceil(P.left)} \u79D2\uFF0C\u6392\u968A ${E.jobs.length} \u500B\uFF09`:"\u7210\u5B50\u7A7A\u8457"),D("div",{class:"row"},D("button",{class:"btn",disabled:z?null:!0,onclick:()=>{let et=Vu(E,g,h);et&&(ft(`\u62FF\u51FA ${et} \u500B`),ee("smelted",et)),f.dirtyMeta=!0,Ae(),zt()}},`\u62FF\u51FA\u4F86\uFF08${z}\uFF09`)),O))}let Ut=null,Gt=(p,E)=>{try{return JSON.parse(localStorage.getItem(p)||"null")||E}catch{return E}},qt=()=>vm(Gt("hw_portal_rewards",[]),Gt("hi_save",null),T),de='<svg viewBox="0 0 64 64" width="72" height="72" aria-hidden="true"><path d="M20 30v-8a12 12 0 0 1 24 0v8h-6v-8a6 6 0 0 0-12 0v8z" fill="#26302A"/><polygon points="12,30 52,28 54,58 10,60" fill="#E0352B"/><polygon points="12,30 52,28 50,34 14,35" fill="rgba(0,0,0,.15)"/><circle cx="32" cy="44" r="4" fill="#EFEBDD"/><rect x="30" y="44" width="4" height="9" fill="#EFEBDD"/></svg>';function ge(){let p=T.find(z=>z.map===Ut),E=ct.ov;if(E.innerHTML="",E.hidden=!1,!p){_e();return}let P=Object.keys(p.reward.items).map(z=>`${a.name(z)} \xD7${p.reward.items[z]}`).join("\u3001"),O=Ku(p.map,T,qt());if(!O.ok){E.append(D("div",{class:"panel start"},D("div",{class:"p-head"},D("h2",{},"\u50B3\u9001\u9580\u30FB"+p.name_zh),D("button",{class:"x","aria-label":"\u95DC\u9589",onclick:_e},"\xD7")),D("div",{class:"padlock",html:de}),D("p",{class:"big"},`\u5148\u6253\u5012 ${O.need.boss_zh} \u624D\u80FD\u9032\u5165`),D("p",{class:"muted"},`\u5F9E\u300C${O.need.name_zh}\u300D\u50B3\u9001\u9580\u9032\u53BB\uFF0C\u6253\u5012 ${O.need.boss_zh}\uFF0C\u9019\u500B\u50B3\u9001\u9580\u5C31\u6703\u6253\u958B\u3002`),D("div",{class:"row"},D("button",{class:"btn ghost",onclick:_e},"\u77E5\u9053\u4E86"))));return}E.append(D("div",{class:"panel start"},D("div",{class:"p-head"},D("h2",{},"\u50B3\u9001\u9580\u30FB"+p.name_zh),D("button",{class:"x","aria-label":"\u95DC\u9589",onclick:_e},"\xD7")),D("p",{},`\u7A7F\u904E\u50B3\u9001\u9580\u5230\u52C7\u8005\u5CF6\u7684\u300C${p.name_zh}\u300D\u5192\u96AA\u3002\u6253\u5012\u90A3\u88E1\u7684 Boss\uFF0C\u56DE\u4F86\u53EF\u4EE5\u9818\uFF1A${p.reward.coins} \u91D1\u5E63\u3001${P}\u3002`),D("p",{class:"muted"},"\u4F60\u5728\u65B9\u584A\u4E16\u754C\u7684\u6771\u897F\u90FD\u6703\u81EA\u52D5\u5B58\u597D\u3002"),D("div",{class:"row"},D("button",{class:"btn big",onclick:async()=>{await In(),f.leaving=xm(p.map),location.href=f.leaving}},"\u9032\u5165"),D("button",{class:"btn ghost",onclick:_e},"\u5148\u4E0D\u8981"))))}function Vt(){if(!t.portals)return 0;let p;try{p=JSON.parse(localStorage.getItem("hw_portal_rewards")||"[]")}catch{p=[]}let E=_m(p,U);for(let P of E){let O=ym(P,T,g,m,h);if(U.push(P.id),!!O.ok){for(let z in O.leftovers)for(let et=0;et<O.leftovers[z];et++)at(z,f.p.x,f.p.y+1,f.p.z);ft(`\u5F9E${O.name_zh}\u5E36\u56DE\u4F86\uFF1A${O.coins} \u91D1\u5E63\u3001${Object.keys(O.items).map(z=>a.name(z)+" \xD7"+O.items[z]).join("\u3001")}`)}}return E.length&&(qn(),Ae(),f.dirtyMeta=!0,In()),On(),E.length}let Me=null;function qe(p){Me=p,p.busy=!0,ne("trade")}function Ie(){let p=Me,E=ct.ov;if(!p)return _e();E.innerHTML="",E.hidden=!1;let P=p.role,O=Jp(),z=D("div",{class:"shop"});P.prof.offers.forEach(mt=>{let pt=mt.blueprint||mt.give,dt=!!mt.blueprint,bt=dt&&a.blueprints.find(oe=>oe.id===mt.blueprint),Wt=dt&&hr(m,mt.blueprint);z.append(D("div",{class:"offer"},D("img",{src:st[pt],alt:""}),D("div",{class:"of-t"},D("b",{},dt?bt.name_zh:`${a.name(pt)}${mt.count>1?" \xD7"+mt.count:""}`),D("small",{},`${mt.price} \u91D1\u5E63${dt?"\u3000"+(bt.desc||""):""}`)),Wt?D("span",{class:"owned"},"\u5DF2\u64C1\u6709"):D("button",{class:"btn small",onclick:()=>{let oe=$p(m,g,mt,h);oe.ok?(_n("trade"),ee("traded"),ft(dt?`\u62FF\u5230 ${bt.name_zh}\uFF01`:`\u8CB7\u5230 ${a.name(pt)} \xD7${mt.count}`),f.dirtyMeta=!0,qn(),Ae(),In()):ft({coins:"\u91D1\u5E63\u4E0D\u5920\uFF0C\u53BB\u77F3\u7891\u7B54\u984C\u6216\u63A5\u82F1\u6587\u59D4\u8A17\u5427\uFF01",full:"\u80CC\u5305\u6EFF\u4E86",owned:"\u5DF2\u7D93\u6709\u4E86"}[oe.reason]||"\u8CB7\u4E0D\u4E86"),Ie()}},"\u8CFC\u8CB7")))});let et=D("div",{class:"quests"});P.quests.forEach(mt=>{let pt=gu(b,mt,O),dt=Object.keys(mt.reward.items||{}).map(bt=>`${a.name(bt)} \xD7${mt.reward.items[bt]}`).join("\u3001");et.append(D("div",{class:"offer quest"+(pt?" locked":"")},D("div",{class:"of-t"},D("b",{},"\u82F1\u6587\u59D4\u8A17\uFF1A"+mt.title_zh),D("small",{},`${mt.desc}\uFF0C\u7B54\u5C0D ${mt.need} \u984C \u2192 ${mt.reward.coins} \u91D1\u5E63\u3001${dt}`)),pt?D("span",{class:"owned"},"\u4ECA\u5929\u5B8C\u6210\u4E86"):D("button",{class:"btn small",onclick:()=>{f.overlay="quest",qp(ct.ov,{quest:mt,onDone:bt=>{if(f.overlay="trade",bt>=0){let Wt=Zp(b,mt,bt,O,m,g,h);if(Wt.ok){for(let oe in Wt.leftovers)for(let ie=0;ie<Wt.leftovers[oe];ie++)at(oe,f.p.x,f.p.y+1,f.p.z);ft(`\u59D4\u8A17\u5B8C\u6210\uFF01 +${Wt.coins} \u91D1\u5E63\u3001${dt}`),qn(),Ae(),f.dirtyMeta=!0,In(),f.stats.quests=(f.stats.quests||0)+1,ee("quests")}else ft(`\u7B54\u5C0D ${bt} \u984C\uFF0C\u8981 ${mt.need} \u984C\u624D\u7B97\u5B8C\u6210\uFF0C\u518D\u8A66\u4E00\u6B21\uFF01`)}Ie()}})}},"\u63A5\u59D4\u8A17")))}),E.append(D("div",{class:"panel"},D("div",{class:"p-head"},D("h2",{},`\u6751\u6C11\u30FB${P.prof.name_zh}\u3000`,D("span",{class:"coin"}),` ${m.coins}`),D("button",{class:"x","aria-label":"\u95DC\u9589",onclick:_e},"\xD7")),D("h3",{},"\u4EA4\u6613"),z,D("h3",{},"\u82F1\u6587\u59D4\u8A17"),D("p",{class:"muted"},"\u6BCF\u500B\u59D4\u8A17\u6BCF\u5929\u53EF\u4EE5\u9818\u4E00\u6B21\u734E\u3002"),et))}function Pe(){let p=ct.ov;p.innerHTML="",p.hidden=!1;let E=D("b",{},j.rd),P=D("input",{type:"range",min:2,max:6,step:1,value:j.rd,oninput:O=>{E.textContent=O.target.value},onchange:O=>{let z=+O.target.value;j.setRenderDistance(z),J.far=z*16+40,J.updateProjectionMatrix(),ac("hw_rd",z)}});p.append(D("div",{class:"panel"},D("div",{class:"p-head"},D("h2",{},"\u8A2D\u5B9A"),D("button",{class:"x","aria-label":"\u95DC\u9589",onclick:_e},"\xD7")),D("label",{class:"set"},"\u8996\u91CE\u8DDD\u96E2\uFF08\u5340\u584A\uFF09",E,P),D("label",{class:"set"},"\u97F3\u6A02",D("input",{type:"range",min:0,max:1,step:.05,value:window.HIAudio?HIAudio.get().music:.35,oninput:O=>ec({music:+O.target.value,muted:!1})})),D("label",{class:"set"},"\u97F3\u6548",D("input",{type:"range",min:0,max:1,step:.05,value:window.HIAudio?HIAudio.get().sfx:.7,oninput:O=>{ec({sfx:+O.target.value,muted:!1}),_n("place","wood")}})),t.creative?D("label",{class:"set"},"\u5929\u6C23\uFF08\u4E0B\u96E8\u3001\u4E0B\u96EA\uFF09",D("input",{type:"checkbox",checked:So("hw_weather","on")!=="off"?!0:null,onchange:O=>ac("hw_weather",O.target.checked?"on":"off")})):null,D("p",{class:"muted"},"iPad \u5EFA\u8B70 3\uFF1B\u5361\u5361\u7684\u5C31\u8ABF\u5C0F\u3002"),D("div",{class:"row"},D("button",{class:"btn ghost",onclick:an},"\u91CD\u7F6E\u4E16\u754C"),t.creative?D("button",{class:"btn",onclick:()=>Ze("survival")},"\u56DE\u5230\u751F\u5B58\u6A21\u5F0F"):D("button",{class:"btn",onclick:kt},"\u5275\u9020\u6A21\u5F0F\uFF08\u5BB6\u9577\u5BC6\u78BC\uFF09")),D("div",{id:"pinbox"}),D("p",{class:"muted"},"\u91CD\u7F6E\u4E16\u754C\u6703\u6E05\u6389\u84CB\u597D\u7684\u65B9\u584A\u3001\u80CC\u5305\u548C\u4F4D\u7F6E\uFF1B\u91D1\u5E63\uFF08\u7B54\u984C\u8CFA\u7684\uFF09\u6703\u4FDD\u7559\u3002"),D("p",{},D("a",{class:"home-link",href:"../../#s/game",onclick:()=>{In()}},"\u2190 \u56DE\u5C0F\u670B\u53CB\u5B78\u7FD2\u7AD9")),D("p",{class:"muted small"},"\u7248\u672C "+rc)))}async function Ze(p){await In(),ac("hw_mode",p),f.resetting=!0,location.reload()}function kt(){let p=document.getElementById("pinbox"),E=window.KSParentPin;if(p.innerHTML="",!E||!E.isSet()){p.append(D("div",{class:"pin-ask"},D("p",{},"\u5275\u9020\u6A21\u5F0F\u8981\u5BB6\u9577\u540C\u610F\u3002\u8ACB\u7238\u7238\u5ABD\u5ABD\u5148\u5230\u5B78\u7FD2\u7AD9\u7684\u300C\u5BB6\u9577\u300D\u9801\u8A2D\u5B9A\u5BB6\u9577\u5BC6\u78BC\u3002"),D("a",{class:"btn ghost",href:"../../#parent"},"\u524D\u5F80\u5BB6\u9577\u9801")));return}let P=D("input",{class:"typein",type:"password",inputmode:"numeric",pattern:"[0-9]*",maxlength:"6",autocomplete:"off",placeholder:"\u5BB6\u9577\u5BC6\u78BC","aria-label":"\u5BB6\u9577\u5BC6\u78BC"}),O=()=>{let z=jp(E,P.value.trim());z.ok?Ze("creative"):(ft(z.reason==="wrong"?"\u5BC6\u78BC\u4E0D\u5C0D":"\u9084\u6C92\u8A2D\u5B9A\u5BB6\u9577\u5BC6\u78BC"),P.value="")};P.addEventListener("keydown",z=>{z.stopPropagation(),z.key==="Enter"&&O()}),p.append(D("div",{class:"pin-ask"},D("p",{},"\u8ACB\u7238\u7238\u5ABD\u5ABD\u8F38\u5165\u5BB6\u9577\u5BC6\u78BC\uFF1A\u5275\u9020\u6A21\u5F0F\u662F\u53E6\u4E00\u500B\u4E16\u754C\uFF0C\u65B9\u584A\u7121\u9650\u3001\u4E0D\u80FD\u8CFA\u91D1\u5E63\u3002"),D("div",{class:"typerow"},P,D("button",{class:"btn",onclick:O},"\u78BA\u5B9A")))),setTimeout(()=>P.focus(),50)}async function an(){if(confirm("\u78BA\u5B9A\u8981\u91CD\u7F6E\u4E16\u754C\u55CE\uFF1F\u84CB\u597D\u7684\u6771\u897F\u6703\u5168\u90E8\u6D88\u5931\uFF08\u91D1\u5E63\u4FDD\u7559\uFF09\u3002")){f.resetting=!0;try{await Hp(["hw_coins"])}catch(p){console.warn(p)}location.reload()}}function ne(p){document.pointerLockElement&&document.exitPointerLock(),f.overlay=p,kn(),p==="inv"?(Es=-1,Bn=null,G()):p==="shop"?Q():p==="set"?Pe():p==="furnace"?zt():p==="portal"?ge():p==="trade"?Ie():p==="chest"?(Bn=null,S()):p==="map"?fc():p==="ach"?Um():p==="quiz"&&Wp(ct.ov,{onAnswer:()=>ee("stele_answers"),onReward:E=>{Di(m,E),qn(),f.dirtyMeta=!0,In()},onClose:()=>{f.overlay=null}})}function _e(){ct.ov.hidden=!0,ct.ov.innerHTML="",f.overlay=null,Me&&(Me.busy=!1,Me=null)}let Cn=()=>{ct.btnSnd.textContent=xo()?"\u{1F507}":"\u{1F50A}"};ct.btnSnd.onclick=()=>{Ql(),Cu(),Cn()},["pointerdown","keydown"].forEach(p=>addEventListener(p,()=>Ql(),{capture:!0,once:!0})),Cn(),ct.btnInv.onclick=()=>f.overlay==="inv"?_e():ne("inv"),ct.btnShop.onclick=()=>f.overlay==="shop"?_e():ne("shop"),ct.btnSet.onclick=()=>f.overlay==="set"?_e():ne("set"),ct.btnView.onclick=()=>Yn(),ct.bRide.onclick=()=>Io(),ct.bMap.onclick=()=>f.overlay==="map"?_e():ne("map"),ct.bAch.onclick=()=>f.overlay==="ach"?_e():ne("ach");function Yn(){f.view=f.view==="fp"?"tp":"fp",ft(f.view==="fp"?"\u7B2C\u4E00\u4EBA\u7A31":"\u7B2C\u4E09\u4EBA\u7A31")}function Si(){f.ride||(f.fly=!f.fly,f.v.y=0,ct.root.classList.toggle("flying",f.fly),ft(f.fly?"\u98DB\u884C\uFF1A\u958B\uFF08\u8DF3\uFF1D\u4E0A\u5347\u3001\u4E0B\uFF1D\u4E0B\u964D\uFF09":"\u98DB\u884C\uFF1A\u95DC"))}let ye=new Z;function Be(){let p=Math.cos(f.pitch);return{x:-Math.sin(f.yaw)*p,y:Math.sin(f.pitch),z:-Math.cos(f.yaw)*p}}let Rn=()=>({x:f.p.x,y:f.p.y+1.62+f.eyeOff+(f.ride?Am[f.ride.kind]:0),z:f.p.z}),Le=p=>p&&!a.flat.liquid[p],zn=p=>a.flat.boxes[p]||(a.flat.shape[p]===4?iM:null);function ln(p,E,P){if(p==="screen"){ye.set(E/innerWidth*2-1,-(P/innerHeight)*2+1,.5).unproject(J).sub(J.position).normalize();let mt=J.position,pt=f.view==="tp"?mt.distanceTo(new Z(f.p.x,f.p.y+1.62,f.p.z)):0,dt={x:mt.x,y:mt.y,z:mt.z},bt={x:ye.x,y:ye.y,z:ye.z};f.lastRay={o:dt,d:bt};let Wt=cr(dt,bt,oc+1+pt,Lt,Le,zn);return Wt&&(Wt.at={x:dt.x+bt.x*Wt.dist,y:dt.y+bt.y*Wt.dist,z:dt.z+bt.z*Wt.dist}),Wt}let O=Rn(),z=Be();f.lastRay={o:O,d:z};let et=cr(O,z,oc,Lt,Le,zn);return et&&(et.at={x:O.x+z.x*et.dist,y:O.y+z.y*et.dist,z:O.z+z.z*et.dist}),et}function kn(){f.mining.active=!1,f.mining.k="",f.mining.t=0,nt.visible=!1}function Em(p,E,P){_n("door");let O=a.get(j.get(p,E,P)),z=a.get(O.openAs||O.closeAs);if(!z)return;let et=pt=>{let dt=a.get(pt);return dt&&dt.interact==="door"},mt=E;for(;et(j.get(p,mt-1,P));)mt--;for(let pt=mt;et(j.get(p,pt,P));pt++)j.set(p,pt,P,z.n);f.dirtyMeta=!0}let Qu=()=>{let p=g.slots[f.sel];return p?a.toolOf(p.id):null};function Tm(p){let E=p.n,P=t.creative?{time:t.breakTime,harvest:!1,usesTool:!1,creative:!0}:nc(a.get(E),Qu());if(!j.set(p.x,p.y,p.z,0))return;let O=p.x+","+p.y+","+p.z,z=a.get(E);if(R[O]){if(t.drops){for(let dt of R[O].slots)if(dt)for(let bt=0;bt<dt.count;bt++)at(dt.id,p.x+.5,p.y+.4,p.z+.5)}delete R[O]}if(z&&z.crop){if(delete F[O],t.drops)for(let dt of vu(z.stage|0))for(let bt=0;bt<dt.n;bt++)at(dt.id,p.x+.5,p.y+.3,p.z+.5);f.stats.harvested=(f.stats.harvested||0)+(z.stage===3?1:0),z.stage===3&&ee("harvested"),f.dirtyMeta=!0;return}let et=P.harvest?a.dropOf(E):null;et?at(et,p.x+.5,p.y+.4,p.z+.5):!P.harvest&&!P.creative&&ft(`${a.name(E)}\u8981\u7528\u66F4\u597D\u7684\u5DE5\u5177\u6316\uFF0C\u624D\u6703\u6389\u6771\u897F`);let mt=j.get(p.x,p.y+1,p.z);if(a.flat.plant[mt]){delete F[p.x+","+(p.y+1)+","+p.z],j.set(p.x,p.y+1,p.z,0);let dt=t.drops&&a.dropOf(mt);dt&&at(dt,p.x+.5,p.y+1.3,p.z+.5)}if(a.get(E).interact==="door")for(let dt of[-1,1]){let bt=j.get(p.x,p.y+dt,p.z);a.get(bt)&&a.get(bt).interact==="door"&&j.set(p.x,p.y+dt,p.z,0)}let pt=p.x+","+p.y+","+p.z;if(f.bed&&f.bed.x===p.x&&f.bed.y===p.y&&f.bed.z===p.z&&(f.bed=null,ft("\u5E8A\u62C6\u6389\u4E86\uFF0C\u91CD\u751F\u9EDE\u6539\u56DE\u51FA\u751F\u9EDE")),v[pt]){let dt=Gu(v[pt]);for(let bt in dt)for(let Wt=0;Wt<dt[bt];Wt++)at(bt,p.x+.5,p.y+.4,p.z+.5);delete v[pt]}if(P.usesTool){let dt=_o(g,f.sel,a);dt.broke&&ft(`\u4F60\u7684${a.name(dt.id)}\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u628A\u5427\uFF01`),Ae()}f.dirtyMeta=!0,f.stats.mined++,_n("break",fr(z)),ee("mine:"+(z.pattern==="log"?"wood":z.id))}function gr(p){let E=g.slots[f.sel],P=E&&a.get(E.id);if(P&&P.food)return t.damage?(wu(A,P.food,20)?(_n("eat"),Li(g,f.sel,1),vi(),Ae(),f.dirtyMeta=!0,ft(`\u5403\u4E86${P.name_zh}\uFF0C\u597D\u98FD\uFF01`),f.stats.ate=(f.stats.ate||0)+1):ft("\u73FE\u5728\u4E0D\u9913"),!0):(ft("\u5275\u9020\u6A21\u5F0F\u4E0D\u6703\u9913"),!0);if(P&&P.id==="fishing_rod")return f.fish?Lm():Pm(),!0;if(P&&P.place==="boat"){if(f.ride)return ft("\u5148\u4E0B\u4F86\u518D\u653E"),!0;let Jt=f.lastRay,se=Jt&&cr(Jt.o,Jt.d,oc+1,Lt,De=>a.flat.liquid[De]||a.flat.solid[De]);return!se||!a.flat.liquid[se.n]||j.get(se.x,se.y+1,se.z)?(ft("\u8239\u8981\u653E\u5728\u6C34\u9762\u4E0A"),!1):(f.p={x:se.x+.5,y:se.y+1-.15,z:se.z+.5},hc("boat",{y:se.y+1}),!0)}if(P&&P.place==="minecart"){if(f.ride)return ft("\u5148\u4E0B\u4F86\u518D\u653E"),!0;let Jt=p&&a.get(p.n);if(!Jt||!Jt.rail)return ft("\u7926\u8ECA\u8981\u653E\u5728\u9435\u8ECC\u4E0A"),!1;let se=$h(Jt.rail,p.x,p.y,p.z,-Math.sin(f.yaw),-Math.cos(f.yaw),De=>!!gt(p.x+En[De][0],p.y,p.z+En[De][1]));return hc("minecart",{st:se}),!0}if(!p)return!1;let O=a.get(p.n);if(O&&O.interact==="chest")return _n("chest"),Mi=p.x+","+p.y+","+p.z,ne("chest"),!0;let z=P&&a.toolOf(E.id);if(z&&z.type==="hoe"&&yu(O.id,!j.get(p.x,p.y+1,p.z)||a.flat.plant[j.get(p.x,p.y+1,p.z)])){if(j.set(p.x,p.y+1,p.z,0),j.set(p.x,p.y,p.z,a.num("farmland")),t.consume){let Jt=_o(g,f.sel,a);Jt.broke&&ft(`\u4F60\u7684${a.name(Jt.id)}\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u628A\u5427\uFF01`)}return Ae(),f.dirtyMeta=!0,!0}if(P&&P.place==="crop")return O.id!=="farmland"||p.face[1]!==1||j.get(p.x,p.y+1,p.z)?(ft("\u7A2E\u5B50\u8981\u7A2E\u5728\u8015\u5730\u4E0A\uFF08\u5148\u7528\u92E4\u982D\u92E4\u5730\uFF09"),!1):(j.set(p.x,p.y+1,p.z,a.num("wheat_0")),F[p.x+","+(p.y+1)+","+p.z]={t:Date.now(),wet:Mu(Lt,Jt=>a.flat.liquid[Jt]===1,p.x,p.y,p.z)},t.consume&&Li(g,f.sel,1),Ae(),f.dirtyMeta=!0,f.stats.planted=(f.stats.planted||0)+1,!0);let et=a.get(p.n);if(et&&et.interact==="quiz")return t.coins?(ne("quiz"),!0):(ft("\u5275\u9020\u6A21\u5F0F\u4E0D\u80FD\u8CFA\u91D1\u5E63\uFF0C\u56DE\u751F\u5B58\u6A21\u5F0F\u518D\u4F86\u7B54\u984C\u5427"),!0);let mt=g.slots[f.sel]&&a.get(g.slots[f.sel].id).placeable;if(et&&et.interact==="door")return Em(p.x,p.y,p.z),!0;if(et&&et.interact==="portal"&&!mt&&!t.portals)return ft("\u5275\u9020\u6A21\u5F0F\u4E0D\u80FD\u9032\u50B3\u9001\u9580"),!0;if(et&&et.interact==="portal"&&!mt)return Ut=et.portal,ne("portal"),!0;if(et&&et.interact==="bed"&&!mt)return f.bed={x:p.x,y:p.y,z:p.z},f.dirtyMeta=!0,ee("bed"),ft("\u91CD\u751F\u9EDE\u8A2D\u597D\u4E86\uFF1A\u6688\u5012\u6703\u56DE\u5230\u9019\u5F35\u5E8A"),!0;if(et&&et.interact==="craft"&&!mt)return ne("inv"),!0;if(et&&et.interact==="furnace"&&!mt)return Dt=p.x+","+p.y+","+p.z,ne("furnace"),!0;let pt=g.slots[f.sel];if(!pt)return ft("\u5FEB\u6377\u5217\u9019\u683C\u662F\u7A7A\u7684"),!1;let dt=a.get(pt.id);if(!dt||!dt.placeable)return ft(`${a.name(pt.id)} \u4E0D\u80FD\u653E`),!1;if(dt.place==="slab"&&dt.fullAs&&p.n===dt.n&&p.face[1]===1&&j.set(p.x,p.y,p.z,a.num(dt.fullAs)))return t.consume&&Li(g,f.sel,1),Ae(),f.stats.placed++,f.dirtyMeta=!0,!0;let bt=a.flat.plant[p.n]&&!a.flat.plant[dt.n],Wt=bt?p.x:p.x+p.face[0],oe=bt?p.y:p.y+p.face[1],ie=bt?p.z:p.z+p.face[2];if(oe<0||oe>=64)return!1;let Oe=j.get(Wt,oe,ie);if(Oe&&!a.flat.liquid[Oe]&&!(bt&&a.flat.plant[Oe]))return!1;let Te=.6/2;if(dt.solid&&Wt+1>f.p.x-Te&&Wt<f.p.x+Te&&ie+1>f.p.z-Te&&ie<f.p.z+Te&&oe+1>f.p.y&&oe<f.p.y+1.8)return!1;if(a.flat.plant[dt.n]&&!a.flat.solid[j.get(Wt,oe-1,ie)])return ft(`${dt.name_zh}\u8981\u7A2E\u5728\u5730\u4E0A`),!1;let pe=dt.n;if(dt.place==="slab"){let Jt=p.at?p.at.y-Math.floor(p.at.y):0;(p.face[1]===-1||p.face[1]===0&&Jt>.5)&&a.get(dt.id+"_top")&&(pe=a.num(dt.id+"_top"))}else if(dt.place==="stairs"){let Jt=-Math.sin(f.yaw),se=-Math.cos(f.yaw),De=Math.abs(Jt)>Math.abs(se)?Jt>0?1:3:se>0?2:0,je=a.get(dt.id+["","_e","_s","_w"][De]);je&&(pe=je.n)}let fe=null;if(dt.place==="rail"){if(!a.flat.solid[j.get(Wt,oe-1,ie)])return ft("\u9435\u8ECC\u8981\u653E\u5728\u5730\u4E0A"),!1;let Jt=-Math.sin(f.yaw),se=-Math.cos(f.yaw),De=Yh((je,cn)=>gt(je,oe,cn),Wt,ie,!!dt.powered,Math.abs(Jt)>Math.abs(se)?"e":"n");pe=a.num(Hl(!!dt.powered,De.shape)),fe=De.updates}if(!j.set(Wt,oe,ie,pe))return!1;if(fe)for(let[Jt,se,De]of fe){let je=gt(Jt,oe,se);je&&j.set(Jt,oe,se,a.num(Hl(je.powered,De)))}return _n("place",fr(dt)),dt.interact==="door"&&!j.get(Wt,oe+1,ie)&&j.set(Wt,oe+1,ie,dt.n),t.consume&&Li(g,f.sel,1),f.dirtyMeta=!0,Ae(),f.stats.placed++,Tn(Wt,oe,ie,dt.id),!0}let xr={},Ro=p=>xr[p]||(xr[p]=(()=>{let E=new Gn({color:p});return E.userData.base=new ae(p),E})());function Cm(p){let E=new Dn,P=(O,z,et,mt,pt,dt,bt)=>{let Wt=new ke(new un(O,z,et),Ro(mt));Wt.position.set(pt,dt,bt),E.add(Wt)};if(p==="boat"){P(.9,.08,1.5,"#8C6640",0,.04,0);for(let O of[-1,1])P(.08,.3,1.5,"#A97E4E",O*.45,.19,0),P(.9,.3,.08,"#A97E4E",0,.19,O*.75);P(.9,.06,.25,"#C49A63",0,.25,.1)}else{P(.9,.08,1.1,"#5E6660",0,.12,0);for(let O of[-1,1])P(.08,.45,1.1,"#8C8A84",O*.45,.35,0),P(.9,.45,.08,"#8C8A84",0,.35,O*.55),P(.06,.18,.18,"#26302A",O*.47,.1,.35),P(.06,.18,.18,"#26302A",O*.47,.1,-.35)}return E}function tf(p){p.saddled=!0;let E=ht.get(p.id);if(!E)return;let P=new ke(new un(.62,.1,.6),Ro("#5C3A24"));P.position.set(0,1.4,.05),E.add(P)}function hc(p,E){let P=p==="horse"?null:Cm(p);P&&W.add(P),f.ride=Object.assign({kind:p,obj:P,yaw:f.yaw},E),f.fly=!1,ct.root.classList.remove("flying"),f.v={x:0,y:0,z:0},ct.bRide.hidden=!1,kn(),ee("ride:"+p),ft({boat:"\u4E0A\u8239\u4E86\uFF01\u7528\u8D70\u8DEF\u7684\u65B9\u5F0F\u5212\u8239\uFF0C\u6309\u300C\u4E0B\u4F86\u300D\u4E0A\u5CB8",minecart:"\u5750\u4E0A\u7926\u8ECA\uFF01\u5F80\u524D\u63A8\u5C31\u51FA\u767C\uFF0C\u91D1\u8272\u9435\u8ECC\u6703\u52A0\u901F",horse:"\u9A0E\u4E0A\u99AC\u4E86\uFF01\u8DD1\u5F97\u66F4\u5FEB\u3001\u8DF3\u5F97\u66F4\u9AD8"}[p])}function Io(p){let E=f.ride;if(E){if(f.ride=null,ct.bRide.hidden=!0,E.obj&&W.remove(E.obj),E.kind==="horse"&&(E.m.riding=!1),E.kind==="minecart")f.p.y+=.2;else for(let[P,O]of[[1,0],[-1,0],[0,1],[0,-1],[1.5,0],[-1.5,0],[0,1.5],[0,-1.5]]){let z={x:f.p.x+P,y:Math.floor(f.p.y+.5),z:f.p.z+O};if(lp(z,wt)&&a.flat.solid[j.get(z.x,z.y-1,z.z)]){f.p=z;break}}f.v={x:0,y:0,z:0},f.fallTop=f.p.y,p||ft("\u4E0B\u4F86\u4E86")}}function Rm(p){let E=g.slots[f.sel];if(!p.tame){E&&(E.id==="wheat"||E.id==="apple")?(t.consume&&Li(g,f.sel,1),Ae(),p.fed=(p.fed||0)+1,p.fed>=3?(p.tame=!0,f.horseMob=p,f.dirtyMeta=!0,ft("\u99AC\u5152\u8DDF\u4F60\u8B8A\u6210\u597D\u670B\u53CB\u4E86\uFF01\u88DD\u4E0A\u99AC\u978D\u5C31\u80FD\u9A0E")):ft(`\u99AC\u5152\u5403\u5F97\u597D\u958B\u5FC3\uFF08${p.fed}/3\uFF09`)):ft("\u99AC\u5152\u6709\u9EDE\u5BB3\u7F9E\uFF0C\u9935\u7260 3 \u500B\u5C0F\u9EA5\u8A66\u8A66\u770B");return}if(!p.saddled){E&&E.id==="saddle"?(t.consume&&Li(g,f.sel,1),Ae(),tf(p),f.horseMob=p,f.dirtyMeta=!0,ft("\u88DD\u597D\u99AC\u978D\u4E86\uFF01\u518D\u9EDE\u4E00\u4E0B\u99AC\u5152\u5C31\u80FD\u9A0E\u4E0A\u53BB")):ft("\u8981\u5148\u5E6B\u99AC\u5152\u88DD\u4E0A\u99AC\u978D\uFF08\u5546\u5E97\u6216\u6751\u838A\u7684\u5546\u4EBA\u6709\u8CE3\uFF09");return}f.ride||(p.riding=!0,f.p={x:p.p.x,y:p.p.y,z:p.p.z},hc("horse",{m:p}),f.stats.rodeHorse=(f.stats.rodeHorse||0)+1)}function Im(p,E,P,O,z,et,mt){let pt=f.ride;if(pt.kind==="boat"){let dt=(O*P+et*E)*7,bt=(z*P+mt*E)*7,Wt=1-Math.exp(-2.5*p);f.v.x+=(dt-f.v.x)*Wt,f.v.z+=(bt-f.v.z)*Wt,f.v.y=0;let oe=(Te,pe)=>a.flat.liquid[j.get(Te,pt.y-1,pe)]===1&&!a.flat.solid[j.get(Te,pt.y,pe)],ie=f.p.x+f.v.x*p,Oe=f.p.z+f.v.z*p;oe(ie+Math.sign(f.v.x)*.6,f.p.z)?f.p.x=ie:f.v.x=0,oe(f.p.x,Oe+Math.sign(f.v.z)*.6)?f.p.z=Oe:f.v.z=0,f.p.y=pt.y-.15,Math.hypot(f.v.x,f.v.z)>.3&&(pt.yaw=Math.atan2(-f.v.x,-f.v.z))}else{Zh(pt.st,p,P,(bt,Wt)=>gt(bt,pt.st.y,Wt));let dt=Jh(pt.st);f.p.x=dt.x,f.p.z=dt.z,f.p.y=pt.st.y+.05,pt.yaw=dt.yaw,f.v.x=f.v.z=f.v.y=0}f.fallTop=f.p.y}let uc=(()=>{let p=new Dn,E=new ke(new un(.16,.1,.16),Ro("#E0352B")),P=new ke(new un(.16,.08,.16),Ro("#EFEBDD"));return E.position.y=.05,P.position.y=-.04,p.add(E,P),p.visible=!1,W.add(p),p})();function Pm(){let p=f.lastRay,E=p&&cr(p.o,p.d,oc+3,Lt,P=>a.flat.liquid[P]||a.flat.solid[P]);return!E||!a.flat.liquid[E.n]||j.get(E.x,E.y+1,E.z)?(ft("\u8981\u628A\u9B5A\u7DDA\u7529\u5230\u6C34\u9762\u4E0A"),!1):(f.fish=jh(Math.random),f.fish.at={x:E.x+.5,y:E.y+1,z:E.z+.5},uc.visible=!0,ft("\u7529\u7AFF\uFF01\u7B49\u6D6E\u6A19\u5F80\u4E0B\u6C89\uFF0C\u518D\u9EDE\u4E00\u4E0B\u6536\u7DDA"),!0)}function ef(){f.fish=null,uc.visible=!1}function Lm(){let p=tu(f.fish);if(ef(),p!=="catch"){ft("\u592A\u65E9\u6536\u7DDA\u4E86\uFF0C\u9B5A\u9084\u6C92\u4E0A\u9264\uFF0C\u518D\u7529\u4E00\u6B21");return}let E=c.fishing.loot,P=eu(E,Math.random);if(P.coins&&!t.coins&&(P=E[0]),P.coins)Di(m,P.coins),qn(),ft(`\u91E3\u5230\u4E00\u500B\u5C0F\u9322\u888B\uFF01 +${P.coins} \u91D1\u5E63`);else{let O=xn(g,P.id,P.n,h);for(let z=0;z<O;z++)at(P.id,f.p.x,f.p.y+1,f.p.z);ft(P.treasure?`\u6488\u5230\u5BF6\u7269\uFF1A${a.name(P.id)} \xD7${P.n}\uFF01`:"\u91E3\u5230\u4E00\u689D\u9B5A\uFF01")}t.consume&&_o(g,f.sel,a).broke&&ft("\u91E3\u7AFF\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u652F\u5427\uFF01"),Ae(),f.dirtyMeta=!0,_n("pickup"),ee("fish"),P.treasure&&ee("treasure")}let Bi=2,Po=So("hw_minimap","on")!=="off";function Dm(p){Po=p,ac("hw_minimap",p?"on":"off"),ct.mini.hidden=!p}ct.mini.hidden=!Po;function Nm(){let p=ct.mini,E=p.getContext("2d");E.fillStyle="#D9D3C0",E.fillRect(0,0,p.width,p.height),w.draw(E,f.p.x,f.p.z,2,p.width,p.height),iu(E,p.width/2,p.height/2,f.yaw,7,"#E0352B")}function fc(){let p=ct.ov;p.innerHTML="",p.hidden=!1;let E=Math.max(240,Math.min(innerWidth-60,760)),P=Math.max(200,Math.min(innerHeight-200,540)),O=D("canvas",{class:"bigmap",width:E,height:P}),z=O.getContext("2d");z.fillStyle="#D9D3C0",z.fillRect(0,0,E,P);let{x0:et,z0:mt}=w.draw(z,f.p.x,f.p.z,Bi,E,P),pt=(ie,Oe)=>[(ie-et)*Bi,(Oe-mt)*Bi],dt=(ie,Oe,Te,pe,fe)=>{let[Jt,se]=pt(ie,Oe);Jt<-20||se<-20||Jt>E+20||se>P+20||(z.fillStyle=pe,z.strokeStyle=pe,z.lineWidth=3,fe==="roof"?(z.beginPath(),z.moveTo(Jt-8,se+1),z.lineTo(Jt,se-7),z.lineTo(Jt+8,se+1),z.fill(),z.fillRect(Jt-5,se+1,10,7)):fe==="ring"?(z.beginPath(),z.arc(Jt,se,6,0,7),z.stroke()):z.fillRect(Jt-5,se-5,10,10),z.font="bold 12px sans-serif",z.textAlign="center",z.strokeStyle="#EFEBDD",z.strokeText(Te,Jt,se-11),z.fillStyle="#26302A",z.fillText(Te,Jt,se-11))},bt=Math.max(E,P)/Bi;for(let ie of _.villages.around(f.p.x-bt,f.p.z-bt,f.p.x+bt,f.p.z+bt))w.explored(ie.x,ie.z)&&dt(ie.x,ie.z,"\u6751\u838A","#8C5A3A","roof");for(let ie of w.portals.values())dt(ie.x+.5,ie.z+.5,ie.name.replace("\u50B3\u9001\u9580\u30FB",""),"#5B3F8C","ring");dt(vt.x,vt.z,"\u51FA\u751F\u9EDE","#3E6B3A"),f.bed&&dt(f.bed.x+.5,f.bed.z+.5,"\u5E8A","#E0352B");let[Wt,oe]=pt(f.p.x,f.p.z);iu(z,Wt,oe,f.yaw,9,"#E0352B"),p.append(D("div",{class:"panel map"},D("div",{class:"p-head"},D("h2",{},"\u5730\u5716"),D("button",{class:"x","aria-label":"\u95DC\u9589",onclick:_e},"\xD7")),O,D("div",{class:"row"},D("button",{class:"btn small",onclick:()=>{Bi=Math.min(6,Bi+1),fc()}},"\u653E\u5927"),D("button",{class:"btn small",onclick:()=>{Bi=Math.max(1,Bi-1),fc()}},"\u7E2E\u5C0F"),D("label",{class:"set inline"},D("input",{type:"checkbox",checked:Po?!0:null,onchange:ie=>Dm(ie.target.checked)}),"\u89D2\u843D\u5C0F\u5730\u5716")),D("p",{class:"muted"},"\u53EA\u756B\u5F97\u51FA\u4F60\u53BB\u904E\u7684\u5730\u65B9\u3002\u7D05\u8272\u7BAD\u982D\u662F\u4F60\uFF1B\u5713\u5708\u662F\u50B3\u9001\u9580\u3002")))}function Um(){let p=ct.ov;p.innerHTML="",p.hidden=!1;let E=N.filter(O=>C.done[O.id]).length,P=D("div",{class:"ach-list"});N.forEach(O=>{let z=!!C.done[O.id];P.append(D("div",{class:"ach-item"+(z?" done":"")},D("i",{class:"badge"}),D("div",{},D("b",{},O.name_zh),D("small",{},O.desc_zh+(z?"\u3000\u2713":`\uFF08${vp(C,O)}/${O.need}\uFF09`)+(O.coins?`\u3000\u734E\u52F5 ${O.coins} \u91D1\u5E63`:"")))))}),p.append(D("div",{class:"panel"},D("div",{class:"p-head"},D("h2",{},`\u6210\u5C31\u3000${E} / ${N.length}`),D("button",{class:"x","aria-label":"\u95DC\u9589",onclick:_e},"\xD7")),D("p",{class:"muted"},t.coins?"\u6709\u4E9B\u6210\u5C31\u6703\u9001\u91D1\u5E63\u3002":"\u5275\u9020\u6A21\u5F0F\u7684\u6210\u5C31\u4E0D\u9001\u91D1\u5E63\u3002"),P))}addEventListener("keydown",p=>{if(p.target&&p.target.tagName==="INPUT")return;let E=p.key.toLowerCase();if(E==="e"){f.overlay==="inv"?_e():!f.overlay&&ne("inv"),p.preventDefault();return}if(f.overlay!=="dead"&&!(f.overlay==="ask"||f.overlay==="quest")){if(E==="escape"&&f.overlay){f.overlay==="quiz"?(ct.ov.hidden=!0,ct.ov.innerHTML="",f.overlay=null):_e();return}if(!f.overlay){if(E==="shift"&&f.ride){Io();return}f.keys[E]=!0,p.code==="Space"&&(f.keys[" "]=!0,p.preventDefault()),E>="1"&&E<="9"&&(f.sel=+E-1,Ae()),E==="f"&&Si(),E==="v"&&Yn(),E==="m"&&ne("map"),E==="k"&&ne("ach")}}}),addEventListener("keyup",p=>{f.keys[p.key.toLowerCase()]=!1,p.code==="Space"&&(f.keys[" "]=!1)}),addEventListener("blur",()=>{f.keys={},kn()}),L.addEventListener("mousedown",p=>{if(!(f.touch||f.overlay)){if(document.pointerLockElement!==L){L.requestPointerLock&&L.requestPointerLock();return}if(p.button===0){let E=It("center");if(E){Pt(E);return}f.mining.active=!0,f.mining.src="center"}p.button===2&&(gr(ln("center")),f.placeRepeat=.3,f.rightHeld=!0)}}),addEventListener("mouseup",p=>{p.button===0&&kn(),p.button===2&&(f.rightHeld=!1)}),L.addEventListener("contextmenu",p=>p.preventDefault()),addEventListener("mousemove",p=>{document.pointerLockElement===L&&(f.yaw-=p.movementX*.0024,f.pitch=Math.max(-1.55,Math.min(1.55,f.pitch-p.movementY*.0024)))}),addEventListener("wheel",p=>{f.overlay||f.touch||(f.sel=(f.sel+(p.deltaY>0?1:8))%9,Ae())},{passive:!0}),document.addEventListener("pointerlockchange",()=>{ct.root.classList.toggle("locked",document.pointerLockElement===L)});let _r=new Map;function Fm(p){f.touch!==p&&(f.touch=p,ct.root.classList.toggle("touch",p),document.body.classList.toggle("is-touch",p))}ct.root.classList.toggle("touch",f.touch),document.body.classList.toggle("is-touch",f.touch),L.addEventListener("pointerdown",p=>{if(p.pointerType!=="touch"||(Fm(!0),f.overlay))return;if(p.preventDefault(),p.clientX<innerWidth*.4&&p.clientY>innerHeight*.35&&!f.joy.active){f.joy={x:0,y:0,active:!0,id:p.pointerId,ox:p.clientX,oy:p.clientY},ct.joy.style.transform=`translate(${p.clientX-60}px, ${p.clientY-60}px)`,ct.joy.hidden=!1,ct.knob.style.transform="translate(0px,0px)",_r.set(p.pointerId,{kind:"joy"});return}let E={kind:"look",x:p.clientX,y:p.clientY,sx:p.clientX,sy:p.clientY,t0:performance.now(),drag:!1,hold:!1};E.timer=setTimeout(()=>{E.drag||(E.hold=!0,f.mining.active=!0,f.mining.src="screen",f.mining.sx=E.x,f.mining.sy=E.y)},280),_r.set(p.pointerId,E)},{passive:!1}),addEventListener("pointermove",p=>{let E=_r.get(p.pointerId);if(!E)return;if(E.kind==="joy"){let z=p.clientX-f.joy.ox,et=p.clientY-f.joy.oy,mt=Math.hypot(z,et),pt=55;mt>pt&&(z*=pt/mt,et*=pt/mt),f.joy.x=z/pt,f.joy.y=et/pt,ct.knob.style.transform=`translate(${z}px,${et}px)`;return}let P=p.clientX-E.x,O=p.clientY-E.y;E.x=p.clientX,E.y=p.clientY,!E.drag&&Math.hypot(E.x-E.sx,E.y-E.sy)>12&&(E.drag=!0,clearTimeout(E.timer),E.hold&&(kn(),E.hold=!1)),E.drag?(f.yaw-=P*.0055,f.pitch=Math.max(-1.55,Math.min(1.55,f.pitch-O*.0055))):E.hold&&(f.mining.sx=E.x,f.mining.sy=E.y)});let nf=p=>{let E=_r.get(p.pointerId);if(E){if(_r.delete(p.pointerId),E.kind==="joy"){f.joy={x:0,y:0,active:!1},ct.joy.hidden=!0;return}if(clearTimeout(E.timer),E.hold)kn();else if(!E.drag&&performance.now()-E.t0<280&&!f.overlay){let P=It("screen",E.x,E.y);P?Pt(P):gr(ln("screen",E.x,E.y))}}};addEventListener("pointerup",nf),addEventListener("pointercancel",nf);let sf=(p,E,P)=>{p.addEventListener("pointerdown",O=>{O.preventDefault(),O.stopPropagation(),E()}),p.addEventListener("pointerup",P),p.addEventListener("pointercancel",P),p.addEventListener("pointerleave",P)};sf(ct.bJump,()=>{f.jumpHeld=!0},()=>{f.jumpHeld=!1}),sf(ct.bDown,()=>{f.downHeld=!0},()=>{f.downHeld=!1}),ct.bFly.addEventListener("pointerdown",p=>{p.preventDefault(),p.stopPropagation(),Si()}),ct.bPlace.addEventListener("pointerdown",p=>{p.preventDefault(),p.stopPropagation(),gr(ln("center"))}),document.addEventListener("touchmove",p=>{p.target.closest(".scroll, .panel")||p.preventDefault()},{passive:!1}),["gesturestart","gesturechange","dblclick"].forEach(p=>document.addEventListener(p,E=>E.preventDefault(),{passive:!1})),ct.start.hidden=!1,ct.go.onclick=()=>{ct.start.hidden=!0,f.started=!0,f.paused=!1,ct.root.classList.add("started"),!f.touch&&L.requestPointerLock&&L.requestPointerLock()};async function In(p){if(f.resetting)return;let E={hw_meta:{v:1,seed:x,time:f.time,build:rc},hw_player:{x:f.p.x,y:f.p.y,z:f.p.z,yaw:f.yaw,pitch:f.pitch,fly:f.fly,sel:f.sel,hp:A.hp,bed:f.bed,armor:f.armor,armorDur:f.armorDur,horse:f.horseMob&&!f.horseMob.gone?{x:f.horseMob.p.x,y:f.horseMob.p.y,z:f.horseMob.p.z,saddled:!!f.horseMob.saddled}:f.horse},hw_inventory:fo(g),hw_coins:Cp(m),hw_furnaces:v,hw_chests:Object.fromEntries(Object.entries(R).map(([P,O])=>[P,fo(O)])),hw_crops:F,hw_quests:b,hw_portal_claimed:U.slice(-200),hw_ach:C};w.dirty&&(p||Date.now()-(f.mapSavedAt||0)>3e4)&&(E.hw_map=w.serialize(),f.mapSavedAt=Date.now());for(let P of f.dirty){let O=M.get(P);O&&(E["hw_chunk:"+P]=cu(O))}f.dirty.clear(),f.dirtyMeta=!1;try{await du(E),f.lastSave=Date.now()}catch(P){console.warn("save failed",P)}}setInterval(()=>{f.started&&In()},8e3),document.addEventListener("visibilitychange",()=>{document.hidden&&f.started&&In(!0)}),addEventListener("pagehide",()=>{f.started&&In(!0)}),f.stats={mined:0,placed:0};function rf(){let p=innerWidth,E=innerHeight;k.setSize(p,E,!1),J.aspect=p/E,J.updateProjectionMatrix()}addEventListener("resize",rf),rf(),qn(),Ae(),vi(),Ts(),t.creative&&(Fi("#coinpill").hidden=!0,Fi("#modebadge").hidden=!1,ct.btnShop.hidden=!0,ct.hearts.hidden=!0),Vt(),addEventListener("pageshow",p=>{p.persisted&&Vt()});let of=performance.now(),Lo=0,dc=0,Om=new ae("#EFEBDD"),Bm=new ae("#22302F"),zm=new ae("#E6B48C");function af(p){requestAnimationFrame(af);let E=(p-of)/1e3;of=p;let P=Math.min(.05,E);f.frames.push(E*1e3),f.frames.length>4e3&&f.frames.shift(),j.update(f.p.x,f.p.z);let O=j.ready(f.p.x,f.p.z);f.auto&&Hm(P),f.started&&!f.overlay&&O&&Vm(P),f.started&&!f.dead&&Yu(A,P)&&(vi(),f.dirtyMeta=!0),f.time=(f.time+P/nM)%1;let z=f.time*Math.PI*2,et=Math.sin(z),mt=Math.min(1,Math.max(0,(et+.12)/.42));$.copy(Bm).lerp(Om,mt);let pt=Math.max(0,1-Math.abs(et)/.3)*(mt>.05?1:.4);if($.lerp(zm,pt*.55),!(t.creative&&So("hw_weather","on")==="off")?Uu(f.weather,P):f.weather.level=0,f.ambT=(f.ambT||0)+P,f.ambT>1){f.ambT=0;let pe=Math.floor(f.p.x),fe=Math.floor(f.p.z),Jt=!1;for(let De=2;De<14&&!Jt;De++)a.flat.opaque[j.get(pe,Math.floor(f.p.y)+De,fe)]&&(Jt=!0);f.underground=Jt&&f.p.y<_.height(pe,fe)-4,f.biome=_.biomeOf(pe,fe);let se=Lu({day:mt,underground:f.underground});se!==f.musicScene&&(f.musicScene=se,Ru(Du[se]))}let bt=f.underground?null:Fu(f.biome,f.weather),Wt=bt?f.weather.level:0;Wt&&$.lerp(f.rainSky||(f.rainSky=new ae("#8E9590")),.45*Wt),Ce(P,J.position,bt),Iu(bt==="rain"?Wt:0),os(f.overlay==="quiz"||f.overlay==="ask"||f.overlay==="quest"),ot.uniforms.uDay.value=mt*(1-.3*Wt),ot.uniforms.uFog.value.set(...km($));let oe=Rn();f.eyeOff*=Math.pow(5e-4,P);let ie=Be();if(f.view==="tp"){let pe=cr(oe,{x:-ie.x,y:-ie.y,z:-ie.z},4,Lt,Jt=>a.flat.opaque[Jt]===1),fe=pe?Math.max(.4,pe.dist-.25):4;J.position.set(oe.x-ie.x*fe,oe.y-ie.y*fe,oe.z-ie.z*fe)}else J.position.set(oe.x,oe.y,oe.z);J.rotation.set(f.pitch,f.yaw,0);let Oe=J.far*.8;if(Ot.position.set(J.position.x+Math.cos(z)*Oe,J.position.y+Math.sin(z)*Oe,J.position.z+.25*Oe),Ot.scale.setScalar(Oe*.14),xt.position.set(J.position.x-Math.cos(z)*Oe,J.position.y-Math.sin(z)*Oe,J.position.z-.25*Oe),xt.scale.setScalar(Oe*.1),we.visible=f.view==="tp",we.visible){we.position.set(f.p.x,f.p.y+(f.ride?Am[f.ride.kind]:0),f.p.z),we.rotation.y=f.yaw;let pe=Math.hypot(f.v.x,f.v.z),fe=Math.sin(p/120)*Math.min(1,pe/4)*.7;We.rotation.x=fe,ve.rotation.x=-fe,I.rotation.x=-fe,y.rotation.x=fe;let Jt=.35+.65*mt;we.children.forEach(se=>se.material.color.copy(se.userData.base).multiplyScalar(Jt))}for(let pe in X)X[pe].color.setScalar(.4+.6*mt);for(let pe in xr)xr[pe].color.copy(xr[pe].userData.base).multiplyScalar(.35+.65*mt);f.ride&&f.ride.obj&&(f.ride.obj.position.set(f.p.x,f.p.y,f.p.z),f.ride.obj.rotation.y=f.ride.yaw);let Te=f.started&&!f.overlay?f.mining.active&&f.mining.src==="screen"?ln("screen",f.mining.sx,f.mining.sy):ln("center"):null;if(Te){_t.visible=!0;let pe=zn(Te.n);if(pe){let fe=1,Jt=1,se=1,De=0,je=0,cn=0;for(let bi of pe)fe=Math.min(fe,bi[0]),Jt=Math.min(Jt,bi[1]),se=Math.min(se,bi[2]),De=Math.max(De,bi[3]),je=Math.max(je,bi[4]),cn=Math.max(cn,bi[5]);_t.scale.set(De-fe,je-Jt,cn-se),_t.position.set(Te.x+(fe+De)/2,Te.y+(Jt+je)/2,Te.z+(se+cn)/2)}else _t.scale.set(1,1,1),_t.position.set(Te.x+.5,Te.y+.5,Te.z+.5)}else _t.visible=!1;if(f.mining.active&&Te){let pe=Te.x+","+Te.y+","+Te.z;pe!==f.mining.k&&(f.mining.k=pe,f.mining.t=0),f.mining.t+=P;let fe=t.creative?a.get(Te.n).hardness<0?1/0:t.breakTime:nc(a.get(Te.n),Qu()).time;if(fe===1/0)nt.visible=!1,f.mining.warned||(ft(a.name(Te.n)+"\u6316\u4E0D\u52D5"),f.mining.warned=!0);else{f.mining.tick=(f.mining.tick||0)+P,f.mining.tick>.25&&(f.mining.tick=0,_n("hit",fr(a.get(Te.n))));let Jt=f.mining.t/fe;nt.visible=!0,nt.position.copy(_t.position),nt.scale.copy(_t.scale),nt.material.map=q[Math.min(3,Math.floor(Jt*4))],Jt>=1&&(Tm(Te),f.mining.k="",f.mining.t=0,nt.visible=!1)}}else nt.visible=!1,f.mining.active||(f.mining.warned=!1);if(f.rightHeld&&!f.overlay&&(f.placeRepeat-=P,f.placeRepeat<=0&&(gr(ln("center")),f.placeRepeat=.25)),Gm(P),f.fish){let pe=Qh(f.fish,P),fe=g.slots[f.sel];!fe||fe.id!=="fishing_rod"||Math.hypot(f.p.x-f.fish.at.x,f.p.z-f.fish.at.z)>16?ef():(pe==="bite"?(ft("\u9B5A\u4E0A\u9264\u4E86\uFF01\u5FEB\u9EDE\u4E00\u4E0B\uFF01"),_n("pickup")):pe==="escape"&&ft("\u9B5A\u6E9C\u8D70\u4E86\uFF0C\u518D\u7B49\u7B49\u770B"),uc.position.set(f.fish.at.x,f.fish.at.y-.05+(f.fish.phase==="bite"?-.18:Math.sin(p/400)*.03),f.fish.at.z))}if(f.mapT=(f.mapT||0)+P,f.mapT>.3&&(f.mapT=0,w.scan(j,f.mapDirty),Po&&Nm()),f.cropT=(f.cropT||0)+P,f.cropT>2){f.cropT=0;let pe=Date.now();for(let fe in F){let[Jt,se,De]=fe.split(",").map(Number);if(!j.ready(Jt,De))continue;let je=a.get(j.get(Jt,se,De));if(!je||!je.crop){delete F[fe];continue}let cn=_u(F[fe].t,pe,F[fe].wet);cn>(je.stage|0)&&(j.set(Jt,se,De,a.num("wheat_"+cn)),f.dirtyMeta=!0)}}H(f.overlay?0:P,mt,p);for(let pe in v){let fe=v[pe];fe.jobs.length&&(ku(fe,P),f.dirtyMeta=!0,f.overlay==="furnace"&&pe===Dt&&(f.furnUi=(f.furnUi||0)+P)>.5&&(f.furnUi=0,zt()))}k.render(W,J),Lo+=E,dc++,Lo>.5&&(ct.dbg&&(ct.dbg.textContent=`${Math.round(dc/Lo)} fps \xB7 \u5340\u584A ${j.stats.loaded} \xB7 ${op[_.biomeOf(Math.floor(f.p.x),Math.floor(f.p.z))]} \xB7 ${f.p.x.toFixed(1)}, ${f.p.y.toFixed(1)}, ${f.p.z.toFixed(1)}`),Lo=0,dc=0),!O&&f.started?ct.loading.hidden=!1:ct.loading.hidden=!0}function km(p){let E=p.getHexString();return[parseInt(E.slice(0,2),16)/255,parseInt(E.slice(2,4),16)/255,parseInt(E.slice(4,6),16)/255]}function Vm(p){let E=f.keys,P=(E.d?1:0)-(E.a?1:0),O=(E.w?1:0)-(E.s?1:0);f.joy.active&&(P=f.joy.x,O=-f.joy.y);let z=Math.min(1,Math.hypot(P,O));if(z>0){let cn=Math.hypot(P,O);P=P/cn*z,O=O/cn*z}let et=-Math.sin(f.yaw),mt=-Math.cos(f.yaw),pt=Math.cos(f.yaw),dt=-Math.sin(f.yaw);if(f.ride&&f.ride.kind!=="horse"){Im(p,P,O,et,mt,pt,dt);return}let bt=E.control||!f.fly&&E.shift||f.joy.active&&z>.92,Wt=Lt(f.p.x,f.p.y+.1,f.p.z),oe=Lt(f.p.x,f.p.y+1,f.p.z),ie=a.flat.liquid[Wt]===1||a.flat.liquid[oe]===1,Oe=f.fly?10:f.ride?8.5:ie?2.6:bt?6.2:4.3,Te=(et*O+pt*P)*Oe,pe=(mt*O+dt*P)*Oe,fe=E[" "]||f.jumpHeld,Jt=f.fly&&E.shift||f.downHeld;if(f.fly)f.v.x=Te,f.v.z=pe,f.v.y=((fe?1:0)-(Jt?1:0))*8;else{let cn=f.onGround?14:5,bi=1-Math.exp(-cn*p);f.v.x+=(Te-f.v.x)*bi,f.v.z+=(pe-f.v.z)*bi,ie?(f.v.y-=9*p,f.v.y<-3&&(f.v.y=-3),fe&&(f.v.y=3.4)):a.flat.climb[Wt]||a.flat.climb[oe]?(f.v.y=fe||O>.1?3.2:Jt?-3:Math.max(f.v.y-28*p,-1.5),f.fallTop=f.p.y):(f.v.y-=28*p,f.v.y<-40&&(f.v.y=-40),fe&&f.onGround&&(f.v.y=f.ride?10.5:8.6,f.onGround=!1))}let se=f.onGround,De=Vl(f.p,f.v,p,wt,{canStep:!f.fly,grounded:f.onGround});if(f.onGround=De.onGround,De.stepped&&(f.eyeOff-=De.stepped),f.fallTop==null||f.fly||ie||f.onGround&&se?f.fallTop=f.p.y:f.onGround||(f.fallTop=Math.max(f.fallTop,f.p.y)),f.onGround&&!se){let cn=Xu(f.fallTop-f.p.y,{water:ie,flying:f.fly});cn&&(wo(cn),ft("\u54CE\u5440\uFF0C\u6454\u4E86\u4E00\u4E0B")),f.fallTop=f.p.y}let je=Math.hypot(f.v.x,f.v.z);f.onGround&&!f.fly&&je>1&&(f.stepT=(f.stepT||0)+p*je,f.stepT>1.8&&(f.stepT=0,_n("step",fr(a.get(Lt(f.p.x,f.p.y-.5,f.p.z)))))),f.p.y<-20&&(f.p={x:vt.x,y:vt.y+1,z:vt.z},f.v={x:0,y:0,z:0},f.fallTop=f.p.y)}function Gm(p){let E=f.p.x,P=f.p.y+.9,O=f.p.z;for(let z=f.drops.length-1;z>=0;z--){let et=f.drops[z];et.age+=p;let mt=E-et.p.x,pt=P-et.p.y,dt=O-et.p.z,bt=Math.hypot(mt,pt,dt);if(bt<1.5&&et.age>.25&&xn(g,et.id,1,h)===0){W.remove(et.s),f.drops.splice(z,1),f.dirtyMeta=!0,Ae(),_n("pickup");continue}if(bt<4.5&&et.age>.25?(et.v.x=mt/bt*6,et.v.y=pt/bt*6,et.v.z=dt/bt*6,et.p.x+=et.v.x*p,et.p.y+=et.v.y*p,et.p.z+=et.v.z*p):(et.v.y-=18*p,et.v.x*=.9,et.v.z*=.9,Vl(et.p,et.v,p,wt,{w:.25,h:.25})),et.age>300){W.remove(et.s),f.drops.splice(z,1);continue}et.s.position.set(et.p.x,et.p.y+.2+Math.sin(et.age*3)*.06,et.p.z)}}f.auto=ju.get("auto")==="walk";let lf=0;function Hm(p){f.started||ct.go.click(),lf+=p,f.keys.w=!0,f.keys[" "]=lf%1.6<.15,f.yaw+=p*.08}window.HW={build:rc,G:f,reg:a,inv:g,wallet:m,world:j,Inv:lu,Aud:Pu,Amb:Ou,chests:R,crops:F,Farm:Tu,clickSlot:Co,MODE:n,RULE:t,switchMode:Ze,questState:b,tradesJson:l,spawnVillagers:Qt,terr:_,claimPortalRewards:Vt,portals:T,claimedIds:U,mobS:lt,mobDefs:Et,spawnMob:Ct,hitMob:Pt,mobAt:It,surfaceY:Yt,health:A,hurt:wo,Health:Ju,furnaces:v,Smelt:Hu,smeltList:Y,recipes:d,craftCtx:As,breakInfo:nc,start(){ct.go.click()},state(){return{pos:{...f.p},coins:m.coins,inv:fo(g),loaded:j.stats.loaded,stats:{...f.stats},overlay:f.overlay,fly:f.fly}},lookAt(p,E,P){let O=Rn(),z=p-O.x,et=E-O.y,mt=P-O.z;f.yaw=Math.atan2(-z,-mt),f.pitch=Math.atan2(et,Math.hypot(z,mt))},target(){let p=ln("center");return p&&{x:p.x,y:p.y,z:p.z,n:p.n,face:p.face}},mine(p){p?(f.mining.active=!0,f.mining.src="center"):kn()},use(){return gr(ln("center"))},key(p,E){f.keys[p]=E},open:ne,close:_e,save:In,spawn:vt,dismount:Io,Rail:Kh,ach:C,mapv:w,Fish:nu,bump:ee,perf(){return{frames:f.frames.slice(),meshMs:j.stats.meshMs.slice(),genMs:j.stats.genMs.slice(),loaded:j.stats.loaded}},resetPerf(){f.frames.length=0,j.stats.meshMs.length=0,j.stats.genMs.length=0},ready:()=>j.ready(f.p.x,f.p.z)},requestAnimationFrame(af)}function aM(){let n=Fi("#ui"),t=e=>n.querySelector(e);return ju.get("debug")!==null&&(t("#dbg").hidden=!1),{root:n,coins:t("#coins"),armor:t("#armorhud"),hearts:t("#hearts"),flash:Fi("#hurt"),hotbar:t("#hotbar"),selName:t("#selname"),ov:Fi("#ov"),toasts:t("#toasts"),btnInv:t("#b-inv"),btnSnd:t("#b-snd"),btnShop:t("#b-shop"),btnSet:t("#b-set"),btnView:t("#b-view"),bRide:t("#b-ride"),bMap:t("#b-map"),bAch:t("#b-ach"),mini:t("#minimap"),joy:t("#joy"),knob:t("#knob"),bJump:t("#b-jump"),bFly:t("#b-fly"),bPlace:t("#b-place"),bDown:t("#b-down"),start:Fi("#start"),go:Fi("#go"),dbg:t("#dbg").hidden?null:t("#dbg"),loading:t("#loading")}}oM().catch(n=>{console.error(n);let t=document.getElementById("err");t&&(t.hidden=!1,t.textContent="\u8F09\u5165\u5931\u6557\uFF1A"+n.message)});})();
