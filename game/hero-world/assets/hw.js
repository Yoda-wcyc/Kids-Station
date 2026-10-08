(()=>{var Xu=Object.defineProperty;var Co=(i,t)=>{for(var e in t)Xu(i,e,{get:t[e],enumerable:!0})};var eh=0,rl=1,nh=2;var Ys=1,ih=2,cs=3,_i=0,nn=1,pn=2,Fn=0,hs=1,al=2,ol=3,ll=4,sh=5;var Ii=100,rh=101,ah=102,oh=103,lh=104,ch=200,hh=201,uh=202,dh=203,cl=204,hl=205,fh=206,ph=207,mh=208,gh=209,_h=210,xh=211,yh=212,vh=213,Mh=214,Or=0,Br=1,zr=2,ss=3,kr=4,Vr=5,Gr=6,Hr=7,ul=0,Sh=1,bh=2,Sn=0,dl=1,fl=2,pl=3,ml=4,gl=5,_l=6,xl=7;var yl=300,xi=301,Pi=302,ya=303,va=304,Zs=306,Wr=1e3,Pn=1001,Xr=1002,ke=1003,wh=1004;var $s=1005;var Le=1006,Ma=1007;var yi=1008;var un=1009,vl=1010,Ml=1011,us=1012,Sa=1013,bn=1014,wn=1015,En=1016,ba=1017,wa=1018,ds=1020,Sl=35902,bl=35899,wl=1021,El=1022,mn=1023,Ln=1026,vi=1027,Tl=1028,Ea=1029,Mi=1030,Ta=1031;var Aa=1033,Js=33776,Ks=33777,js=33778,Qs=33779,Ca=35840,Ra=35841,Ia=35842,Pa=35843,La=36196,Da=37492,Na=37496,Ua=37488,Fa=37489,tr=37490,Oa=37491,Ba=37808,za=37809,ka=37810,Va=37811,Ga=37812,Ha=37813,Wa=37814,Xa=37815,qa=37816,Ya=37817,Za=37818,$a=37819,Ja=37820,Ka=37821,ja=36492,Qa=36494,to=36495,eo=36283,no=36284,er=36285,io=36286;var Es=2300,qr=2301,Nr=2302,Qo=2303,tl=2400,el=2401,nl=2402;var Eh=3200;var Al=0,Th=1,Yn="",Ye="srgb",Ts="srgb-linear",As="linear",le="srgb";var Ur=7680;var Ah=519,Ch=512,Rh=513,Ih=514,so=515,Ph=516,Lh=517,ro=518,Dh=519,Cl=35044;var Rl="300 es",Mn=2e3,Cs=2001;function qu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Yu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Rs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Nh(){let i=Rs("canvas");return i.style.display="block",i}var Ic={},rs=null;function Is(...i){let t="THREE."+i.shift();rs?rs("log",t,...i):console.log(t,...i)}function Uh(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ot(...i){i=Uh(i);let t="THREE."+i.shift();if(rs)rs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Bt(...i){i=Uh(i);let t="THREE."+i.shift();if(rs)rs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ai(...i){let t=i.join(" ");t in Ic||(Ic[t]=!0,Ot(...i))}function Fh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Oh={[Or]:Br,[zr]:Gr,[kr]:Hr,[ss]:Vr,[Br]:Or,[Gr]:zr,[Hr]:kr,[Vr]:ss},Dn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Fr=Math.PI/180,Yr=180/Math.PI;function oi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xe[i&255]+Xe[i>>8&255]+Xe[i>>16&255]+Xe[i>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]).toLowerCase()}function ie(i,t,e){return Math.max(t,Math.min(e,i))}function Zu(i,t){return(i%t+t)%t}function Ro(i,t,e){return(1-e)*i+e*t}function Rn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function pe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Nl=class Nl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Nl.prototype.isVector2=!0;var $t=Nl,Nn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],h=r[a+0],m=r[a+1],_=r[a+2],M=r[a+3];if(d!==M||l!==h||c!==m||u!==_){let p=l*h+c*m+u*_+d*M;p<0&&(h=-h,m=-m,_=-_,M=-M,p=-p);let f=1-o;if(p<.9995){let E=Math.acos(p),A=Math.sin(E);f=Math.sin(f*E)/A,o=Math.sin(o*E)/A,l=l*f+h*o,c=c*f+m*o,u=u*f+_*o,d=d*f+M*o}else{l=l*f+h*o,c=c*f+m*o,u=u*f+_*o,d=d*f+M*o;let E=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=E,c*=E,u*=E,d*=E}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],h=r[a+1],m=r[a+2],_=r[a+3];return t[e]=o*_+u*d+l*m-c*h,t[e+1]=l*_+u*h+c*d-o*m,t[e+2]=c*_+u*m+o*h-l*d,t[e+3]=u*_-o*d-l*h-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),h=l(n/2),m=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*m*_,this._y=c*m*d-h*u*_,this._z=c*u*_+h*m*d,this._w=c*u*d-h*m*_;break;case"YXZ":this._x=h*u*d+c*m*_,this._y=c*m*d-h*u*_,this._z=c*u*_-h*m*d,this._w=c*u*d+h*m*_;break;case"ZXY":this._x=h*u*d-c*m*_,this._y=c*m*d+h*u*_,this._z=c*u*_+h*m*d,this._w=c*u*d-h*m*_;break;case"ZYX":this._x=h*u*d-c*m*_,this._y=c*m*d+h*u*_,this._z=c*u*_-h*m*d,this._w=c*u*d+h*m*_;break;case"YZX":this._x=h*u*d+c*m*_,this._y=c*m*d+h*u*_,this._z=c*u*_-h*m*d,this._w=c*u*d-h*m*_;break;case"XZY":this._x=h*u*d-c*m*_,this._y=c*m*d-h*u*_,this._z=c*u*_+h*m*d,this._w=c*u*d+h*m*_;break;default:Ot("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=n+o+d;if(h>0){let m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>d){let m=2*Math.sqrt(1+n-o-d);this._w=(u-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>d){let m=2*Math.sqrt(1+o-n-d);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+u)/m}else{let m=2*Math.sqrt(1+d-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ie(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Ul=class Ul{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Pc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Pc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Io.copy(this).projectOnVector(t),this.sub(Io)}reflect(t){return this.sub(Io.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ul.prototype.isVector3=!0;var z=Ul,Io=new z,Pc=new Nn,Fl=class Fl{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],m=n[5],_=n[8],M=s[0],p=s[3],f=s[6],E=s[1],A=s[4],v=s[7],b=s[2],w=s[5],I=s[8];return r[0]=a*M+o*E+l*b,r[3]=a*p+o*A+l*w,r[6]=a*f+o*v+l*I,r[1]=c*M+u*E+d*b,r[4]=c*p+u*A+d*w,r[7]=c*f+u*v+d*I,r[2]=h*M+m*E+_*b,r[5]=h*p+m*A+_*w,r[8]=h*f+m*v+_*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*a-o*c,h=o*l-u*r,m=c*r-a*l,_=e*d+n*h+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/_;return t[0]=d*M,t[1]=(s*c-u*n)*M,t[2]=(o*n-s*a)*M,t[3]=h*M,t[4]=(u*e-s*l)*M,t[5]=(s*r-o*e)*M,t[6]=m*M,t[7]=(n*l-c*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Ai("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Po.makeScale(t,e)),this}rotate(t){return Ai("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Po.makeRotation(-t)),this}translate(t,e){return Ai("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Po.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Fl.prototype.isMatrix3=!0;var Ht=Fl,Po=new Ht,Lc=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dc=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $u(){let i={enabled:!0,workingColorSpace:Ts,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===le&&(s.r=Xn(s.r),s.g=Xn(s.g),s.b=Xn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===le&&(s.r=is(s.r),s.g=is(s.g),s.b=is(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Yn?As:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ai("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ai("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ts]:{primaries:t,whitePoint:n,transfer:As,toXYZ:Lc,fromXYZ:Dc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ye},outputColorSpaceConfig:{drawingBufferColorSpace:Ye}},[Ye]:{primaries:t,whitePoint:n,transfer:le,toXYZ:Lc,fromXYZ:Dc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ye}}}),i}var ne=$u();function Xn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function is(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ki,Zr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ki===void 0&&(ki=Rs("canvas")),ki.width=t.width,ki.height=t.height;let s=ki.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ki}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Rs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Xn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Xn(e[n]/255)*255):e[n]=Xn(e[n]);return{data:e,width:t.width,height:t.height}}else return Ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ju=0,as=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=oi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Lo(s[a].image)):r.push(Lo(s[a]))}else r=Lo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Lo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Zr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ot("Texture: Unable to serialize Texture."),{})}var Ku=0,Do=new z,Ge=class i extends Dn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Pn,s=Pn,r=Le,a=yi,o=mn,l=un,c=i.DEFAULT_ANISOTROPY,u=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ku++}),this.uuid=oi(),this.name="",this.source=new as(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Do).x}get height(){return this.source.getSize(Do).y}get depth(){return this.source.getSize(Do).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ot(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ot(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wr:t.x=t.x-Math.floor(t.x);break;case Pn:t.x=t.x<0?0:1;break;case Xr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wr:t.y=t.y-Math.floor(t.y);break;case Pn:t.y=t.y<0?0:1;break;case Xr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=yl;Ge.DEFAULT_ANISOTROPY=1;var Ol=class Ol{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],m=l[5],_=l[9],M=l[2],p=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-M)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+M)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(c+1)/2,v=(m+1)/2,b=(f+1)/2,w=(u+h)/4,I=(d+M)/4,x=(_+p)/4;return A>v&&A>b?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=w/n,r=I/n):v>b?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=w/s,r=x/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=I/r,s=x/r),this.set(n,s,r,e),this}let E=Math.sqrt((p-_)*(p-_)+(d-M)*(d-M)+(h-u)*(h-u));return Math.abs(E)<.001&&(E=1),this.x=(p-_)/E,this.y=(d-M)/E,this.z=(h-u)/E,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this.w=ie(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this.w=ie(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ol.prototype.isVector4=!0;var Ee=Ol,$r=class extends Dn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Le,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Ge(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Le,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new as(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},sn=class extends $r{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ps=class extends Ge{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Jr=class extends Ge{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var xa=class xa{constructor(t,e,n,s,r,a,o,l,c,u,d,h,m,_,M,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,d,h,m,_,M,p)}set(t,e,n,s,r,a,o,l,c,u,d,h,m,_,M,p){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=m,f[7]=_,f[11]=M,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xa().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Vi.setFromMatrixColumn(t,0).length(),r=1/Vi.setFromMatrixColumn(t,1).length(),a=1/Vi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let h=a*u,m=a*d,_=o*u,M=o*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=m+_*c,e[5]=h-M*c,e[9]=-o*l,e[2]=M-h*c,e[6]=_+m*c,e[10]=a*l}else if(t.order==="YXZ"){let h=l*u,m=l*d,_=c*u,M=c*d;e[0]=h+M*o,e[4]=_*o-m,e[8]=a*c,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=m*o-_,e[6]=M+h*o,e[10]=a*l}else if(t.order==="ZXY"){let h=l*u,m=l*d,_=c*u,M=c*d;e[0]=h-M*o,e[4]=-a*d,e[8]=_+m*o,e[1]=m+_*o,e[5]=a*u,e[9]=M-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let h=a*u,m=a*d,_=o*u,M=o*d;e[0]=l*u,e[4]=_*c-m,e[8]=h*c+M,e[1]=l*d,e[5]=M*c+h,e[9]=m*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let h=a*l,m=a*c,_=o*l,M=o*c;e[0]=l*u,e[4]=M-h*d,e[8]=_*d+m,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=m*d+_,e[10]=h-M*d}else if(t.order==="XZY"){let h=a*l,m=a*c,_=o*l,M=o*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+M,e[5]=a*u,e[9]=m*d-_,e[2]=_*d-m,e[6]=o*u,e[10]=M*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ju,t,Qu)}lookAt(t,e,n){let s=this.elements;return ln.subVectors(t,e),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),ni.crossVectors(n,ln),ni.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),ni.crossVectors(n,ln)),ni.normalize(),or.crossVectors(ln,ni),s[0]=ni.x,s[4]=or.x,s[8]=ln.x,s[1]=ni.y,s[5]=or.y,s[9]=ln.y,s[2]=ni.z,s[6]=or.z,s[10]=ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],m=n[13],_=n[2],M=n[6],p=n[10],f=n[14],E=n[3],A=n[7],v=n[11],b=n[15],w=s[0],I=s[4],x=s[8],C=s[12],N=s[1],B=s[5],W=s[9],Y=s[13],U=s[2],X=s[6],Q=s[10],Z=s[14],ot=s[3],J=s[7],nt=s[11],rt=s[15];return r[0]=a*w+o*N+l*U+c*ot,r[4]=a*I+o*B+l*X+c*J,r[8]=a*x+o*W+l*Q+c*nt,r[12]=a*C+o*Y+l*Z+c*rt,r[1]=u*w+d*N+h*U+m*ot,r[5]=u*I+d*B+h*X+m*J,r[9]=u*x+d*W+h*Q+m*nt,r[13]=u*C+d*Y+h*Z+m*rt,r[2]=_*w+M*N+p*U+f*ot,r[6]=_*I+M*B+p*X+f*J,r[10]=_*x+M*W+p*Q+f*nt,r[14]=_*C+M*Y+p*Z+f*rt,r[3]=E*w+A*N+v*U+b*ot,r[7]=E*I+A*B+v*X+b*J,r[11]=E*x+A*W+v*Q+b*nt,r[15]=E*C+A*Y+v*Z+b*rt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],m=t[14],_=t[3],M=t[7],p=t[11],f=t[15],E=l*m-c*h,A=o*m-c*d,v=o*h-l*d,b=a*m-c*u,w=a*h-l*u,I=a*d-o*u;return e*(M*E-p*A+f*v)-n*(_*E-p*b+f*w)+s*(_*A-M*b+f*I)-r*(_*v-M*w+p*I)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],m=t[11],_=t[12],M=t[13],p=t[14],f=t[15],E=e*o-n*a,A=e*l-s*a,v=e*c-r*a,b=n*l-s*o,w=n*c-r*o,I=s*c-r*l,x=u*M-d*_,C=u*p-h*_,N=u*f-m*_,B=d*p-h*M,W=d*f-m*M,Y=h*f-m*p,U=E*Y-A*W+v*B+b*N-w*C+I*x;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let X=1/U;return t[0]=(o*Y-l*W+c*B)*X,t[1]=(s*W-n*Y-r*B)*X,t[2]=(M*I-p*w+f*b)*X,t[3]=(h*w-d*I-m*b)*X,t[4]=(l*N-a*Y-c*C)*X,t[5]=(e*Y-s*N+r*C)*X,t[6]=(p*v-_*I-f*A)*X,t[7]=(u*I-h*v+m*A)*X,t[8]=(a*W-o*N+c*x)*X,t[9]=(n*N-e*W-r*x)*X,t[10]=(_*w-M*v+f*E)*X,t[11]=(d*v-u*w-m*E)*X,t[12]=(o*C-a*B-l*x)*X,t[13]=(e*B-n*C+s*x)*X,t[14]=(M*A-_*b-p*E)*X,t[15]=(u*b-d*A+h*E)*X,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,d=o+o,h=r*c,m=r*u,_=r*d,M=a*u,p=a*d,f=o*d,E=l*c,A=l*u,v=l*d,b=n.x,w=n.y,I=n.z;return s[0]=(1-(M+f))*b,s[1]=(m+v)*b,s[2]=(_-A)*b,s[3]=0,s[4]=(m-v)*w,s[5]=(1-(h+f))*w,s[6]=(p+E)*w,s[7]=0,s[8]=(_+A)*I,s[9]=(p-E)*I,s[10]=(1-(h+M))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Vi.set(s[0],s[1],s[2]).length(),o=Vi.set(s[4],s[5],s[6]).length(),l=Vi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),_n.copy(this);let c=1/a,u=1/o,d=1/l;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=u,_n.elements[5]*=u,_n.elements[6]*=u,_n.elements[8]*=d,_n.elements[9]*=d,_n.elements[10]*=d,e.setFromRotationMatrix(_n),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Mn,l=!1){let c=this.elements,u=2*r/(e-t),d=2*r/(n-s),h=(e+t)/(e-t),m=(n+s)/(n-s),_,M;if(l)_=r/(a-r),M=a*r/(a-r);else if(o===Mn)_=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===Cs)_=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Mn,l=!1){let c=this.elements,u=2/(e-t),d=2/(n-s),h=-(e+t)/(e-t),m=-(n+s)/(n-s),_,M;if(l)_=1/(a-r),M=a/(a-r);else if(o===Mn)_=-2/(a-r),M=-(a+r)/(a-r);else if(o===Cs)_=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};xa.prototype.isMatrix4=!0;var we=xa,Vi=new z,_n=new we,ju=new z(0,0,0),Qu=new z(1,1,1),ni=new z,or=new z,ln=new z,Nc=new we,Uc=new Nn,li=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ie(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ie(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:Ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Nc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Uc.setFromEuler(this),this.setFromQuaternion(Uc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};li.DEFAULT_ORDER="XYZ";var Ls=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},td=0,Fc=new z,Gi=new Nn,zn=new we,lr=new z,_s=new z,ed=new z,nd=new Nn,Oc=new z(1,0,0),Bc=new z(0,1,0),zc=new z(0,0,1),kc={type:"added"},id={type:"removed"},Hi={type:"childadded",child:null},No={type:"childremoved",child:null},rn=class i extends Dn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new z,e=new li,n=new Nn,s=new z(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new we},normalMatrix:{value:new Ht}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ls,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.multiply(Gi),this}rotateOnWorldAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.premultiply(Gi),this}rotateX(t){return this.rotateOnAxis(Oc,t)}rotateY(t){return this.rotateOnAxis(Bc,t)}rotateZ(t){return this.rotateOnAxis(zc,t)}translateOnAxis(t,e){return Fc.copy(t).applyQuaternion(this.quaternion),this.position.add(Fc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Oc,t)}translateY(t){return this.translateOnAxis(Bc,t)}translateZ(t){return this.translateOnAxis(zc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?lr.copy(t):lr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),_s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(_s,lr,this.up):zn.lookAt(lr,_s,this.up),this.quaternion.setFromRotationMatrix(zn),s&&(zn.extractRotation(s.matrixWorld),Gi.setFromRotationMatrix(zn),this.quaternion.premultiply(Gi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Bt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(kc),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null):Bt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(id),No.child=t,this.dispatchEvent(No),No.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(kc),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,t,ed),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,nd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),d=a(t.shapes),h=a(t.skeletons),m=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};rn.DEFAULT_UP=new z(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Wn=class extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}},sd={type:"move"},os=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let M of t.hand.values()){let p=e.getJointPose(M,n),f=this._getHandJoint(c,M);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),m=.02,_=.005;c.inputState.pinching&&h>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(sd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Wn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Bh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},cr={h:0,s:0,l:0};function Uo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Xt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ne.workingColorSpace){if(t=Zu(t,1),e=ie(e,0,1),n=ie(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Uo(a,r,t+1/3),this.g=Uo(a,r,t),this.b=Uo(a,r,t-1/3)}return ne.colorSpaceToWorking(this,s),this}setStyle(t,e=Ye){function n(r){r!==void 0&&parseFloat(r)<1&&Ot("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ot("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ot("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ye){let n=Bh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ot("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xn(t.r),this.g=Xn(t.g),this.b=Xn(t.b),this}copyLinearToSRGB(t){return this.r=is(t.r),this.g=is(t.g),this.b=is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ye){return ne.workingToColorSpace(qe.copy(this),t),Math.round(ie(qe.r*255,0,255))*65536+Math.round(ie(qe.g*255,0,255))*256+Math.round(ie(qe.b*255,0,255))}getHexString(t=Ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.workingToColorSpace(qe.copy(this),e);let n=qe.r,s=qe.g,r=qe.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ne.workingColorSpace){return ne.workingToColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=Ye){ne.workingToColorSpace(qe.copy(this),t);let e=qe.r,n=qe.g,s=qe.b;return t!==Ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ii),this.setHSL(ii.h+t,ii.s+e,ii.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ii),t.getHSL(cr);let n=Ro(ii.h,cr.h,e),s=Ro(ii.s,cr.s,e),r=Ro(ii.l,cr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qe=new Xt;Xt.NAMES=Bh;var Ds=class extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new li,this.environmentIntensity=1,this.environmentRotation=new li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},xn=new z,kn=new z,Fo=new z,Vn=new z,Wi=new z,Xi=new z,Vc=new z,Oo=new z,Bo=new z,zo=new z,ko=new Ee,Vo=new Ee,Go=new Ee,In=class i{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),xn.subVectors(t,e),s.cross(xn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){xn.subVectors(s,e),kn.subVectors(n,e),Fo.subVectors(t,e);let a=xn.dot(xn),o=xn.dot(kn),l=xn.dot(Fo),c=kn.dot(kn),u=kn.dot(Fo),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let h=1/d,m=(c*l-o*u)*h,_=(a*u-o*l)*h;return r.set(1-m-_,_,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Vn.x),l.addScaledVector(a,Vn.y),l.addScaledVector(o,Vn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return ko.setScalar(0),Vo.setScalar(0),Go.setScalar(0),ko.fromBufferAttribute(t,e),Vo.fromBufferAttribute(t,n),Go.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ko,r.x),a.addScaledVector(Vo,r.y),a.addScaledVector(Go,r.z),a}static isFrontFacing(t,e,n,s){return xn.subVectors(n,e),kn.subVectors(t,e),xn.cross(kn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),xn.cross(kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Wi.subVectors(s,n),Xi.subVectors(r,n),Oo.subVectors(t,n);let l=Wi.dot(Oo),c=Xi.dot(Oo);if(l<=0&&c<=0)return e.copy(n);Bo.subVectors(t,s);let u=Wi.dot(Bo),d=Xi.dot(Bo);if(u>=0&&d<=u)return e.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Wi,a);zo.subVectors(t,r);let m=Wi.dot(zo),_=Xi.dot(zo);if(_>=0&&m<=_)return e.copy(r);let M=m*c-l*_;if(M<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(Xi,o);let p=u*_-m*d;if(p<=0&&d-u>=0&&m-_>=0)return Vc.subVectors(r,s),o=(d-u)/(d-u+(m-_)),e.copy(s).addScaledVector(Vc,o);let f=1/(p+M+h);return a=M*f,o=h*f,e.copy(n).addScaledVector(Wi,a).addScaledVector(Xi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ci=class{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,yn):yn.fromBufferAttribute(r,a),yn.applyMatrix4(t.matrixWorld),this.expandByPoint(yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),hr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),hr.copy(n.boundingBox)),hr.applyMatrix4(t.matrixWorld),this.union(hr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yn),yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xs),ur.subVectors(this.max,xs),qi.subVectors(t.a,xs),Yi.subVectors(t.b,xs),Zi.subVectors(t.c,xs),si.subVectors(Yi,qi),ri.subVectors(Zi,Yi),bi.subVectors(qi,Zi);let e=[0,-si.z,si.y,0,-ri.z,ri.y,0,-bi.z,bi.y,si.z,0,-si.x,ri.z,0,-ri.x,bi.z,0,-bi.x,-si.y,si.x,0,-ri.y,ri.x,0,-bi.y,bi.x,0];return!Ho(e,qi,Yi,Zi,ur)||(e=[1,0,0,0,1,0,0,0,1],!Ho(e,qi,Yi,Zi,ur))?!1:(dr.crossVectors(si,ri),e=[dr.x,dr.y,dr.z],Ho(e,qi,Yi,Zi,ur))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Gn=[new z,new z,new z,new z,new z,new z,new z,new z],yn=new z,hr=new ci,qi=new z,Yi=new z,Zi=new z,si=new z,ri=new z,bi=new z,xs=new z,ur=new z,dr=new z,wi=new z;function Ho(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){wi.fromArray(i,r);let o=s.x*Math.abs(wi.x)+s.y*Math.abs(wi.y)+s.z*Math.abs(wi.z),l=t.dot(wi),c=e.dot(wi),u=n.dot(wi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Pe=new z,fr=new $t,rd=0,Ue=class extends Dn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Cl,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)fr.fromBufferAttribute(this,e),fr.applyMatrix3(t),this.setXY(e,fr.x,fr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Rn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=pe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Rn(e,this.array)),e}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Rn(e,this.array)),e}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Rn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Rn(e,this.array)),e}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array),r=pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Ns=class extends Ue{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Us=class extends Ue{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var tn=class extends Ue{constructor(t,e,n){super(new Float32Array(t),e,n)}},ad=new ci,ys=new z,Wo=new z,Ci=class{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):ad.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ys.subVectors(t,this.center);let e=ys.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ys,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ys.copy(t.center).add(Wo)),this.expandByPoint(ys.copy(t.center).sub(Wo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},od=0,fn=new we,Xo=new rn,$i=new z,cn=new ci,vs=new ci,ze=new z,en=class i extends Dn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qu(t)?Us:Ns)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ht().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return fn.makeRotationFromQuaternion(t),this.applyMatrix4(fn),this}rotateX(t){return fn.makeRotationX(t),this.applyMatrix4(fn),this}rotateY(t){return fn.makeRotationY(t),this.applyMatrix4(fn),this}rotateZ(t){return fn.makeRotationZ(t),this.applyMatrix4(fn),this}translate(t,e,n){return fn.makeTranslation(t,e,n),this.applyMatrix4(fn),this}scale(t,e,n){return fn.makeScale(t,e,n),this.applyMatrix4(fn),this}lookAt(t){return Xo.lookAt(t),Xo.updateMatrix(),this.applyMatrix4(Xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new tn(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ci);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ci);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){let n=this.boundingSphere.center;if(cn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];vs.setFromBufferAttribute(o),this.morphTargetsRelative?(ze.addVectors(cn.min,vs.min),cn.expandByPoint(ze),ze.addVectors(cn.max,vs.max),cn.expandByPoint(ze)):(cn.expandByPoint(vs.min),cn.expandByPoint(vs.max))}cn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ze.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ze));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ze.fromBufferAttribute(o,c),l&&($i.fromBufferAttribute(t,c),ze.add($i)),s=Math.max(s,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ue(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new z,l[x]=new z;let c=new z,u=new z,d=new z,h=new $t,m=new $t,_=new $t,M=new z,p=new z;function f(x,C,N){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,C),d.fromBufferAttribute(n,N),h.fromBufferAttribute(r,x),m.fromBufferAttribute(r,C),_.fromBufferAttribute(r,N),u.sub(c),d.sub(c),m.sub(h),_.sub(h);let B=1/(m.x*_.y-_.x*m.y);isFinite(B)&&(M.copy(u).multiplyScalar(_.y).addScaledVector(d,-m.y).multiplyScalar(B),p.copy(d).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(B),o[x].add(M),o[C].add(M),o[N].add(M),l[x].add(p),l[C].add(p),l[N].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let x=0,C=E.length;x<C;++x){let N=E[x],B=N.start,W=N.count;for(let Y=B,U=B+W;Y<U;Y+=3)f(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}let A=new z,v=new z,b=new z,w=new z;function I(x){b.fromBufferAttribute(s,x),w.copy(b);let C=o[x];A.copy(C),A.sub(b.multiplyScalar(b.dot(C))).normalize(),v.crossVectors(w,C);let B=v.dot(l[x])<0?-1:1;a.setXYZW(x,A.x,A.y,A.z,B)}for(let x=0,C=E.length;x<C;++x){let N=E[x],B=N.start,W=N.count;for(let Y=B,U=B+W;Y<U;Y+=3)I(t.getX(Y+0)),I(t.getX(Y+1)),I(t.getX(Y+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ue(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);let s=new z,r=new z,a=new z,o=new z,l=new z,c=new z,u=new z,d=new z;if(t)for(let h=0,m=t.count;h<m;h+=3){let _=t.getX(h+0),M=t.getX(h+1),p=t.getX(h+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,p),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=e.count;h<m;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u),m=0,_=0;for(let M=0,p=l.length;M<p;M++){o.isInterleavedBufferAttribute?m=l[M]*o.data.stride+o.offset:m=l[M]*u;for(let f=0;f<u;f++)h[_++]=c[m++]}return new Ue(h,u,d)}if(this.index===null)return Ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let h=c[u],m=t(h,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let m=c[d];u.push(m.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Cl,this.updateRanges=[],this.version=0,this.uuid=oi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Qe=new z,Fs=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix4(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyNormalMatrix(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.transformDirection(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Rn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=pe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Rn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Rn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Rn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Rn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array),r=pe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Is("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ue(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Is("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},qo=new z,ld=new z,cd=new Ht,vn=class{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=qo.subVectors(n,e).cross(ld.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(qo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||cd.getNormalMatrix(t),s=this.coplanarPoint(qo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},hd=0,qn=class extends Dn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=oi(),this.name="",this.type="Material",this.blending=hs,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cl,this.blendDst=hl,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ah,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ur,this.stencilZFail=Ur,this.stencilZPass=Ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Ot(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ot(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Xt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new vn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new $t().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new $t().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},hi=class extends qn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Xt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ji,Ms=new z,Ki=new z,ji=new z,Qi=new $t,Ss=new $t,zh=new we,pr=new z,bs=new z,mr=new z,Gc=new $t,Yo=new $t,Hc=new $t,Ri=class extends rn{constructor(t=new hi){if(super(),this.isSprite=!0,this.type="Sprite",Ji===void 0){Ji=new en;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Kr(e,5);Ji.setIndex([0,1,2,0,2,3]),Ji.setAttribute("position",new Fs(n,3,0,!1)),Ji.setAttribute("uv",new Fs(n,2,3,!1))}this.geometry=Ji,this.material=t,this.center=new $t(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Bt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ki.setFromMatrixScale(this.matrixWorld),zh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ji.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ki.multiplyScalar(-ji.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;gr(pr.set(-.5,-.5,0),ji,a,Ki,s,r),gr(bs.set(.5,-.5,0),ji,a,Ki,s,r),gr(mr.set(.5,.5,0),ji,a,Ki,s,r),Gc.set(0,0),Yo.set(1,0),Hc.set(1,1);let o=t.ray.intersectTriangle(pr,bs,mr,!1,Ms);if(o===null&&(gr(bs.set(-.5,.5,0),ji,a,Ki,s,r),Yo.set(0,1),o=t.ray.intersectTriangle(pr,mr,bs,!1,Ms),o===null))return;let l=t.ray.origin.distanceTo(Ms);l<t.near||l>t.far||e.push({distance:l,point:Ms.clone(),uv:In.getInterpolation(Ms,pr,bs,mr,Gc,Yo,Hc,new $t),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function gr(i,t,e,n,s,r){Qi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ss.x=r*Qi.x-s*Qi.y,Ss.y=s*Qi.x+r*Qi.y):Ss.copy(Qi),i.copy(t),i.x+=Ss.x,i.y+=Ss.y,i.applyMatrix4(zh)}var Hn=new z,Zo=new z,_r=new z,xr=new z,Os=class{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Hn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Hn.copy(this.origin).addScaledVector(this.direction,e),Hn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Zo.copy(t).add(e).multiplyScalar(.5),_r.copy(e).sub(t).normalize(),xr.copy(this.origin).sub(Zo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(_r),o=xr.dot(this.direction),l=-xr.dot(_r),c=xr.lengthSq(),u=Math.abs(1-a*a),d,h,m,_;if(u>0)if(d=a*l-o,h=a*o-l,_=r*u,d>=0)if(h>=-_)if(h<=_){let M=1/u;d*=M,h*=M,m=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-r,-l),r),m=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Zo).addScaledVector(_r,h),m}intersectSphere(t,e){if(t.radius<0)return null;Hn.subVectors(t.center,this.origin);let n=Hn.dot(this.direction),s=Hn.dot(Hn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Hn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=t.x-a.x,h=t.y-a.y,m=t.z-a.z,_=e.x-a.x,M=e.y-a.y,p=e.z-a.z,f=n.x-a.x,E=n.y-a.y,A=n.z-a.z,v=Math.abs(l),b=Math.abs(c),w=Math.abs(u),I,x,C,N,B,W,Y,U,X,Q,Z,ot;if(v>=b&&v>=w?(C=l,W=d,X=_,ot=f,l>=0?(I=c,x=u,N=h,B=m,Y=M,U=p,Q=E,Z=A):(I=u,x=c,N=m,B=h,Y=p,U=M,Q=A,Z=E)):b>=w?(C=c,W=h,X=M,ot=E,c>=0?(I=u,x=l,N=m,B=d,Y=p,U=_,Q=A,Z=f):(I=l,x=u,N=d,B=m,Y=_,U=p,Q=f,Z=A)):(C=u,W=m,X=p,ot=A,u>=0?(I=l,x=c,N=d,B=h,Y=_,U=M,Q=f,Z=E):(I=c,x=l,N=h,B=d,Y=M,U=_,Q=E,Z=f)),C===0)return null;let J=I/C,nt=x/C,rt=1/C,Nt=N-J*W,Ut=B-nt*W,ce=Y-J*X,jt=U-nt*X,Qt=Q-J*ot,O=Z-nt*ot,K=Qt*jt-O*ce,St=Nt*O-Ut*Qt,kt=ce*Ut-jt*Nt;if(s){if(K<0||St<0||kt<0)return null}else if((K<0||St<0||kt<0)&&(K>0||St>0||kt>0))return null;let vt=K+St+kt;if(vt===0)return null;let Wt=rt*(K*W+St*X+kt*ot);return(vt>0?Wt<0:Wt>0)?null:this.at(Wt/vt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ui=class extends qn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=ul,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Wc=new we,Ei=new Os,yr=new Ci,Xc=new z,vr=new z,Mr=new z,Sr=new z,$o=new z,br=new z,qc=new z,wr=new z,Ve=class extends rn{constructor(t=new en,e=new ui){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){br.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],d=r[l];u!==0&&($o.fromBufferAttribute(d,t),a?br.addScaledVector($o,u):br.addScaledVector($o.sub(e),u))}e.add(br)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere),yr.applyMatrix4(r),Ei.copy(t.ray).recast(t.near),!(yr.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(yr,Xc)===null||Ei.origin.distanceToSquared(Xc)>(t.far-t.near)**2))&&(Wc.copy(r).invert(),Ei.copy(t.ray).applyMatrix4(Wc),!(n.boundingBox!==null&&Ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ei)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,M=h.length;_<M;_++){let p=h[_],f=a[p.materialIndex],E=Math.max(p.start,m.start),A=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let v=E,b=A;v<b;v+=3){let w=o.getX(v),I=o.getX(v+1),x=o.getX(v+2);s=Er(this,f,t,n,c,u,d,w,I,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let _=Math.max(0,m.start),M=Math.min(o.count,m.start+m.count);for(let p=_,f=M;p<f;p+=3){let E=o.getX(p),A=o.getX(p+1),v=o.getX(p+2);s=Er(this,a,t,n,c,u,d,E,A,v),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,M=h.length;_<M;_++){let p=h[_],f=a[p.materialIndex],E=Math.max(p.start,m.start),A=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let v=E,b=A;v<b;v+=3){let w=v,I=v+1,x=v+2;s=Er(this,f,t,n,c,u,d,w,I,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let _=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let p=_,f=M;p<f;p+=3){let E=p,A=p+1,v=p+2;s=Er(this,a,t,n,c,u,d,E,A,v),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function ud(i,t,e,n,s,r,a,o){let l;if(t.side===nn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===_i,o),l===null)return null;wr.copy(o),wr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(wr);return c<e.near||c>e.far?null:{distance:c,point:wr.clone(),object:i}}function Er(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,vr),i.getVertexPosition(l,Mr),i.getVertexPosition(c,Sr);let u=ud(i,t,e,n,vr,Mr,Sr,qc);if(u){let d=new z;In.getBarycoord(qc,vr,Mr,Sr,d),s&&(u.uv=In.getInterpolatedAttribute(s,o,l,c,d,new $t)),r&&(u.uv1=In.getInterpolatedAttribute(r,o,l,c,d,new $t)),a&&(u.normal=In.getInterpolatedAttribute(a,o,l,c,d,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new z,materialIndex:0};In.getNormal(vr,Mr,Sr,h.normal),u.face=h,u.barycoord=d}return u}var jr=class extends Ge{constructor(t=null,e=1,n=1,s,r,a,o,l,c=ke,u=ke,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ti=new Ci,dd=new $t(.5,.5),Tr=new z,Bs=class{constructor(t=new vn,e=new vn,n=new vn,s=new vn,r=new vn,a=new vn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Mn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],m=r[7],_=r[8],M=r[9],p=r[10],f=r[11],E=r[12],A=r[13],v=r[14],b=r[15];if(s[0].setComponents(c-a,m-u,f-_,b-E).normalize(),s[1].setComponents(c+a,m+u,f+_,b+E).normalize(),s[2].setComponents(c+o,m+d,f+M,b+A).normalize(),s[3].setComponents(c-o,m-d,f-M,b-A).normalize(),n)s[4].setComponents(l,h,p,v).normalize(),s[5].setComponents(c-l,m-h,f-p,b-v).normalize();else if(s[4].setComponents(c-l,m-h,f-p,b-v).normalize(),e===Mn)s[5].setComponents(c+l,m+h,f+p,b+v).normalize();else if(e===Cs)s[5].setComponents(l,h,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(t){Ti.center.set(0,0,0);let e=dd.distanceTo(t.center);return Ti.radius=.7071067811865476+e,Ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Tr.x=s.normal.x>0?t.max.x:t.min.x,Tr.y=s.normal.y>0?t.max.y:t.min.y,Tr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Tr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ls=class extends qn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Qr=new z,ta=new z,Yc=new we,ws=new Os,Ar=new Ci,Jo=new z,Zc=new z,ea=class extends rn{constructor(t=new en,e=new ls){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Qr.fromBufferAttribute(e,s-1),ta.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Qr.distanceTo(ta);t.setAttribute("lineDistance",new tn(n,1))}else Ot("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ar.copy(n.boundingSphere),Ar.applyMatrix4(s),Ar.radius+=r,t.ray.intersectsSphere(Ar)===!1)return;Yc.copy(s).invert(),ws.copy(t.ray).applyMatrix4(Yc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let m=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let M=m,p=_-1;M<p;M+=c){let f=u.getX(M),E=u.getX(M+1),A=Cr(this,t,ws,l,f,E,M);A&&e.push(A)}if(this.isLineLoop){let M=u.getX(_-1),p=u.getX(m),f=Cr(this,t,ws,l,M,p,_-1);f&&e.push(f)}}else{let m=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let M=m,p=_-1;M<p;M+=c){let f=Cr(this,t,ws,l,M,M+1,M);f&&e.push(f)}if(this.isLineLoop){let M=Cr(this,t,ws,l,_-1,m,_-1);M&&e.push(M)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Cr(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(Qr.fromBufferAttribute(o,s),ta.fromBufferAttribute(o,r),e.distanceSqToSegment(Qr,ta,Jo,Zc)>n)return;Jo.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Jo);if(!(c<t.near||c>t.far))return{distance:c,point:Zc.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var $c=new z,Jc=new z,zs=class extends ea{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)$c.fromBufferAttribute(e,s),Jc.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+$c.distanceTo(Jc);t.setAttribute("lineDistance",new tn(n,1))}else Ot("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ks=class extends Ge{constructor(t=[],e=xi,n,s,r,a,o,l,c,u){super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},di=class extends Ge{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var fi=class extends Ge{constructor(t,e,n=bn,s,r,a,o=ke,l=ke,c,u=Ln,d=1){if(u!==Ln&&u!==vi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:d};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new as(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},na=class extends fi{constructor(t,e=bn,n=xi,s,r,a=ke,o=ke,l,c=Ln){let u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Vs=class extends Ge{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Un=class i extends en{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],d=[],h=0,m=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new tn(c,3)),this.setAttribute("normal",new tn(u,3)),this.setAttribute("uv",new tn(d,2));function _(M,p,f,E,A,v,b,w,I,x,C){let N=v/I,B=b/x,W=v/2,Y=b/2,U=w/2,X=I+1,Q=x+1,Z=0,ot=0,J=new z;for(let nt=0;nt<Q;nt++){let rt=nt*B-Y;for(let Nt=0;Nt<X;Nt++){let Ut=Nt*N-W;J[M]=Ut*E,J[p]=rt*A,J[f]=U,c.push(J.x,J.y,J.z),J[M]=0,J[p]=0,J[f]=w>0?1:-1,u.push(J.x,J.y,J.z),d.push(Nt/I),d.push(1-nt/x),Z+=1}}for(let nt=0;nt<x;nt++)for(let rt=0;rt<I;rt++){let Nt=h+rt+X*nt,Ut=h+rt+X*(nt+1),ce=h+(rt+1)+X*(nt+1),jt=h+(rt+1)+X*nt;l.push(Nt,Ut,jt),l.push(Ut,ce,jt),ot+=6}o.addGroup(m,ot,C),m+=ot,h+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Rr=new z,Ir=new z,Ko=new z,Pr=new In,Gs=class extends en{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(Fr*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),h={},m=[];for(let _=0;_<l;_+=3){a?(c[0]=a.getX(_),c[1]=a.getX(_+1),c[2]=a.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);let{a:M,b:p,c:f}=Pr;if(M.fromBufferAttribute(o,c[0]),p.fromBufferAttribute(o,c[1]),f.fromBufferAttribute(o,c[2]),Pr.getNormal(Ko),d[0]=`${Math.round(M.x*s)},${Math.round(M.y*s)},${Math.round(M.z*s)}`,d[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,d[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let E=0;E<3;E++){let A=(E+1)%3,v=d[E],b=d[A],w=Pr[u[E]],I=Pr[u[A]],x=`${v}_${b}`,C=`${b}_${v}`;C in h&&h[C]?(Ko.dot(h[C].normal)<=r&&(m.push(w.x,w.y,w.z),m.push(I.x,I.y,I.z)),h[C]=null):x in h||(h[x]={index0:c[E],index1:c[A],normal:Ko.clone()})}}for(let _ in h)if(h[_]){let{index0:M,index1:p}=h[_];Rr.fromBufferAttribute(o,M),Ir.fromBufferAttribute(o,p),m.push(Rr.x,Rr.y,Rr.z),m.push(Ir.x,Ir.y,Ir.z)}this.setAttribute("position",new tn(m,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var Hs=class i extends en{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=t/o,h=e/l,m=[],_=[],M=[],p=[];for(let f=0;f<u;f++){let E=f*h-a;for(let A=0;A<c;A++){let v=A*d-r;_.push(v,-E,0),M.push(0,0,1),p.push(A/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<o;E++){let A=E+c*f,v=E+c*(f+1),b=E+1+c*(f+1),w=E+1+c*f;m.push(A,v,w),m.push(v,b,w)}this.setIndex(m),this.setAttribute("position",new tn(_,3)),this.setAttribute("normal",new tn(M,3)),this.setAttribute("uv",new tn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};function Li(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Kc(s))s.isRenderTargetTexture?(Ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Kc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Je(i){let t={};for(let e=0;e<i.length;e++){let n=Li(i[e]);for(let s in n)t[s]=n[s]}return t}function Kc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function fd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Il(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}var kh={clone:Li,merge:Je},pd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,md=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$e=class extends qn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pd,this.fragmentShader=md,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Li(t.uniforms),this.uniformsGroups=fd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Xt().setHex(s.value);break;case"v2":this.uniforms[n].value=new $t().fromArray(s.value);break;case"v3":this.uniforms[n].value=new z().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ee().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ht().fromArray(s.value);break;case"m4":this.uniforms[n].value=new we().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ia=class extends $e{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var sa=class extends qn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Eh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ra=class extends qn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ts(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function jo(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var pi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},aa=class extends pi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:tl,endingEnd:tl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case el:r=t,o=2*e-n;break;case nl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case el:a=t,l=2*n-e;break;case nl:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,m=this._weightNext,_=(n-e)/(s-e),M=_*_,p=M*_,f=-h*p+2*h*M-h*_,E=(1+h)*p+(-1.5-2*h)*M+(-.5+h)*_+1,A=(-1-m)*p+(1.5+m)*M+.5*_,v=m*p-m*M;for(let b=0;b!==o;++b)r[b]=f*a[u+b]+E*a[c+b]+A*a[l+b]+v*a[d+b];return r}},oa=class extends pi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(s-e),d=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*d+a[l+h]*u;return r}},la=class extends pi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ca=class extends pi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let _=(n-e)/(s-e),M=1-_;for(let p=0;p!==o;++p)r[p]=a[c+p]*M+a[l+p]*_;return r}let h=o*2,m=t-1;for(let _=0;_!==o;++_){let M=a[c+_],p=a[l+_],f=m*h+_*2,E=d[f],A=d[f+1],v=t*h+_*2,b=u[v],w=u[v+1],I=_d(n,e,E,b,s);r[_]=Vh(I,M,A,w,p)}return r}};function Vh(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function gd(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function _d(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Vh(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=gd(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var hn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ts(e,this.TimeBufferType),this.values=ts(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ts(t.times,Array),values:ts(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),jo(t.settings)&&(n.settings={inTangents:ts(t.settings.inTangents,Array),outTangents:ts(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new la(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new oa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new aa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ca(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Es:e=this.InterpolantFactoryMethodDiscrete;break;case qr:e=this.InterpolantFactoryMethodLinear;break;case Nr:e=this.InterpolantFactoryMethodSmooth;break;case Qo:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ot("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Es;case this.InterpolantFactoryMethodLinear:return qr;case this.InterpolantFactoryMethodSmooth:return Nr;case this.InterpolantFactoryMethodBezier:return Qo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;jo(this.settings)&&(jc(this.settings.inTangents,t),jc(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Bt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Bt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Bt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Bt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Yu(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Bt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Nr,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,h=d-n,m=d+n;for(let _=0;_!==n;++_){let M=e[d+_];if(M!==e[h+_]||M!==e[m+_]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,h=a*n;for(let m=0;m!==n;++m)e[h+m]=e[d+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,jo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function jc(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}hn.prototype.ValueTypeName="";hn.prototype.TimeBufferType=Float32Array;hn.prototype.ValueBufferType=Float32Array;hn.prototype.DefaultInterpolation=qr;var mi=class extends hn{constructor(t,e,n){super(t,e,n)}};mi.prototype.ValueTypeName="bool";mi.prototype.ValueBufferType=Array;mi.prototype.DefaultInterpolation=Es;mi.prototype.InterpolantFactoryMethodLinear=void 0;mi.prototype.InterpolantFactoryMethodSmooth=void 0;var ha=class extends hn{constructor(t,e,n,s){super(t,e,n,s)}};ha.prototype.ValueTypeName="color";var ua=class extends hn{constructor(t,e,n,s){super(t,e,n,s)}};ua.prototype.ValueTypeName="number";var da=class extends pi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)Nn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ws=class extends hn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new da(this.times,this.values,this.getValueSize(),t)}};Ws.prototype.ValueTypeName="quaternion";Ws.prototype.InterpolantFactoryMethodSmooth=void 0;var gi=class extends hn{constructor(t,e,n){super(t,e,n)}};gi.prototype.ValueTypeName="string";gi.prototype.ValueBufferType=Array;gi.prototype.DefaultInterpolation=Es;gi.prototype.InterpolantFactoryMethodLinear=void 0;gi.prototype.InterpolantFactoryMethodSmooth=void 0;var fa=class extends hn{constructor(t,e,n,s){super(t,e,n,s)}};fa.prototype.ValueTypeName="vector";var pa=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let m=c[d],_=c[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Gh=new pa,ma=class{constructor(t){this.manager=t!==void 0?t:Gh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ma.DEFAULT_MATERIAL_NAME="__DEFAULT";var Lr=new z,Dr=new Nn,Cn=new z,Xs=class extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=Mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Lr,Dr,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lr,Dr,Cn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Lr,Dr,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lr,Dr,Cn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ai=new z,Qc=new $t,th=new $t,Ze=class extends Xs{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Yr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Fr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Yr*2*Math.atan(Math.tan(Fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ai.x,ai.y).multiplyScalar(-t/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ai.x,ai.y).multiplyScalar(-t/ai.z)}getViewSize(t,e){return this.getViewBounds(t,Qc,th),e.subVectors(th,Qc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Fr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var qs=class extends Xs{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var es=-90,ns=1,ga=class extends rn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ze(es,ns,t,e);s.layers=this.layers,this.add(s);let r=new Ze(es,ns,t,e);r.layers=this.layers,this.add(r);let a=new Ze(es,ns,t,e);a.layers=this.layers,this.add(a);let o=new Ze(es,ns,t,e);o.layers=this.layers,this.add(o);let l=new Ze(es,ns,t,e);l.layers=this.layers,this.add(l);let c=new Ze(es,ns,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Cs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,m),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},_a=class extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Pl="\\[\\]\\.:\\/",xd=new RegExp("["+Pl+"]","g"),Ll="[^"+Pl+"]",yd="[^"+Pl.replace("\\.","")+"]",vd=/((?:WC+[\/:])*)/.source.replace("WC",Ll),Md=/(WCOD+)?/.source.replace("WCOD",yd),Sd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ll),bd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ll),wd=new RegExp("^"+vd+Md+Sd+bd+"$"),Ed=["material","materials","bones","map"],il=class{constructor(t,e,n){let s=n||ve.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ve=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(xd,"")}static parseTrackName(t){let e=wd.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Ed.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ot("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Bt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Bt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Bt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Bt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Bt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Bt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ve.Composite=il;ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ve.prototype.GetterByBindingType=[ve.prototype._getValue_direct,ve.prototype._getValue_array,ve.prototype._getValue_arrayElement,ve.prototype._getValue_toArray];ve.prototype.SetterByBindingTypeAndVersioning=[[ve.prototype._setValue_direct,ve.prototype._setValue_direct_setNeedsUpdate,ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_array,ve.prototype._setValue_array_setNeedsUpdate,ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_arrayElement,ve.prototype._setValue_arrayElement_setNeedsUpdate,ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_fromArray,ve.prototype._setValue_fromArray_setNeedsUpdate,ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Y0=new Float32Array(1);var Bl=class Bl{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Bl.prototype.isMatrix2=!0;var sl=Bl;function Dl(i,t,e,n){let s=Td(n);switch(e){case wl:return i*t;case Tl:return i*t/s.components*s.byteLength;case Ea:return i*t/s.components*s.byteLength;case Mi:return i*t*2/s.components*s.byteLength;case Ta:return i*t*2/s.components*s.byteLength;case El:return i*t*3/s.components*s.byteLength;case mn:return i*t*4/s.components*s.byteLength;case Aa:return i*t*4/s.components*s.byteLength;case Js:case Ks:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case js:case Qs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ra:case Pa:return Math.max(i,16)*Math.max(t,8)/4;case Ca:case Ia:return Math.max(i,8)*Math.max(t,8)/2;case La:case Da:case Ua:case Fa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Na:case tr:case Oa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case za:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ka:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Va:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ga:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ha:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Wa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Xa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case qa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Za:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case $a:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ja:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ka:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ja:case Qa:case to:return Math.ceil(i/4)*Math.ceil(t/4)*16;case eo:case no:return Math.ceil(i/4)*Math.ceil(t/4)*8;case er:case io:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Td(i){switch(i){case un:case vl:return{byteLength:1,components:1};case us:case Ml:case En:return{byteLength:2,components:1};case ba:case wa:return{byteLength:2,components:4};case bn:case Sa:case wn:return{byteLength:4,components:1};case Sl:case bl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function hu(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Cd(i){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((m,_)=>m.start-_.start);let h=0;for(let m=1;m<d.length;m++){let _=d[h],M=d[m];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++h,d[h]=M)}d.length=h+1;for(let m=0,_=d.length;m<_;m++){let M=d[m];i.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Rd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Id=`#ifdef USE_ALPHAHASH
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
#endif`,Pd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ld=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ud=`#ifdef USE_AOMAP
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
#endif`,Fd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Od=`#ifdef USE_BATCHING
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
#endif`,Bd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gd=`#ifdef USE_IRIDESCENCE
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
#endif`,Hd=`#ifdef USE_BUMPMAP
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
#endif`,Wd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,$d=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Jd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Kd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,jd=`#define PI 3.141592653589793
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
} // validated`,Qd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tf=`vec3 transformedNormal = objectNormal;
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
#endif`,ef=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,af="gl_FragColor = linearToOutputTexel( gl_FragColor );",of=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lf=`#ifdef USE_ENVMAP
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
#endif`,cf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,hf=`#ifdef USE_ENVMAP
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
#endif`,uf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,df=`#ifdef USE_ENVMAP
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
#endif`,ff=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_f=`#ifdef USE_GRADIENTMAP
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
}`,xf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mf=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Sf=`#ifdef USE_ENVMAP
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
#endif`,bf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ef=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Af=`PhysicalMaterial material;
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
#endif`,Cf=`uniform sampler2D dfgLUT;
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
}`,Rf=`
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
#endif`,If=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lf=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Df=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ff=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Of=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kf=`#if defined( USE_POINTS_UV )
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
#endif`,Vf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qf=`#ifdef USE_MORPHTARGETS
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
#endif`,Yf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$f=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Qf=`#ifdef USE_NORMALMAP
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
#endif`,tp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ep=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,np=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ip=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ap=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,op=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,up=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mp=`float getShadowMask() {
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
}`,gp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_p=`#ifdef USE_SKINNING
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
#endif`,xp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yp=`#ifdef USE_SKINNING
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
#endif`,vp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wp=`#ifdef USE_TRANSMISSION
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
#endif`,Ep=`#ifdef USE_TRANSMISSION
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
#endif`,Tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ip=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pp=`uniform sampler2D t2D;
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
}`,Lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Up=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fp=`#include <common>
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
}`,Op=`#if DEPTH_PACKING == 3200
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
}`,Bp=`#define DISTANCE
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
}`,zp=`#define DISTANCE
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
}`,kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gp=`uniform float scale;
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
}`,Hp=`uniform vec3 diffuse;
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
}`,Wp=`#include <common>
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
}`,Xp=`uniform vec3 diffuse;
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
}`,qp=`#define LAMBERT
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
}`,Yp=`#define LAMBERT
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
}`,Zp=`#define MATCAP
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
}`,$p=`#define MATCAP
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
}`,Jp=`#define NORMAL
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
}`,Kp=`#define NORMAL
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
}`,jp=`#define PHONG
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
}`,Qp=`#define PHONG
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
}`,tm=`#define STANDARD
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
}`,em=`#define STANDARD
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
}`,nm=`#define TOON
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
}`,im=`#define TOON
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
}`,sm=`uniform float size;
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
}`,rm=`uniform vec3 diffuse;
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
}`,am=`#include <common>
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
}`,om=`uniform vec3 color;
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
}`,lm=`uniform float rotation;
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
}`,cm=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:Rd,alphahash_pars_fragment:Id,alphamap_fragment:Pd,alphamap_pars_fragment:Ld,alphatest_fragment:Dd,alphatest_pars_fragment:Nd,aomap_fragment:Ud,aomap_pars_fragment:Fd,batching_pars_vertex:Od,batching_vertex:Bd,begin_vertex:zd,beginnormal_vertex:kd,bsdfs:Vd,iridescence_fragment:Gd,bumpmap_pars_fragment:Hd,clipping_planes_fragment:Wd,clipping_planes_pars_fragment:Xd,clipping_planes_pars_vertex:qd,clipping_planes_vertex:Yd,color_fragment:Zd,color_pars_fragment:$d,color_pars_vertex:Jd,color_vertex:Kd,common:jd,cube_uv_reflection_fragment:Qd,defaultnormal_vertex:tf,displacementmap_pars_vertex:ef,displacementmap_vertex:nf,emissivemap_fragment:sf,emissivemap_pars_fragment:rf,colorspace_fragment:af,colorspace_pars_fragment:of,envmap_fragment:lf,envmap_common_pars_fragment:cf,envmap_pars_fragment:hf,envmap_pars_vertex:uf,envmap_physical_pars_fragment:Sf,envmap_vertex:df,fog_vertex:ff,fog_pars_vertex:pf,fog_fragment:mf,fog_pars_fragment:gf,gradientmap_pars_fragment:_f,lightmap_pars_fragment:xf,lights_lambert_fragment:yf,lights_lambert_pars_fragment:vf,lights_pars_begin:Mf,lights_toon_fragment:bf,lights_toon_pars_fragment:wf,lights_phong_fragment:Ef,lights_phong_pars_fragment:Tf,lights_physical_fragment:Af,lights_physical_pars_fragment:Cf,lights_fragment_begin:Rf,lights_fragment_maps:If,lights_fragment_end:Pf,lightprobes_pars_fragment:Lf,logdepthbuf_fragment:Df,logdepthbuf_pars_fragment:Nf,logdepthbuf_pars_vertex:Uf,logdepthbuf_vertex:Ff,map_fragment:Of,map_pars_fragment:Bf,map_particle_fragment:zf,map_particle_pars_fragment:kf,metalnessmap_fragment:Vf,metalnessmap_pars_fragment:Gf,morphinstance_vertex:Hf,morphcolor_vertex:Wf,morphnormal_vertex:Xf,morphtarget_pars_vertex:qf,morphtarget_vertex:Yf,normal_fragment_begin:Zf,normal_fragment_maps:$f,normal_pars_fragment:Jf,normal_pars_vertex:Kf,normal_vertex:jf,normalmap_pars_fragment:Qf,clearcoat_normal_fragment_begin:tp,clearcoat_normal_fragment_maps:ep,clearcoat_pars_fragment:np,iridescence_pars_fragment:ip,opaque_fragment:sp,packing:rp,premultiplied_alpha_fragment:ap,project_vertex:op,dithering_fragment:lp,dithering_pars_fragment:cp,roughnessmap_fragment:hp,roughnessmap_pars_fragment:up,shadowmap_pars_fragment:dp,shadowmap_pars_vertex:fp,shadowmap_vertex:pp,shadowmask_pars_fragment:mp,skinbase_vertex:gp,skinning_pars_vertex:_p,skinning_vertex:xp,skinnormal_vertex:yp,specularmap_fragment:vp,specularmap_pars_fragment:Mp,tonemapping_fragment:Sp,tonemapping_pars_fragment:bp,transmission_fragment:wp,transmission_pars_fragment:Ep,uv_pars_fragment:Tp,uv_pars_vertex:Ap,uv_vertex:Cp,worldpos_vertex:Rp,background_vert:Ip,background_frag:Pp,backgroundCube_vert:Lp,backgroundCube_frag:Dp,cube_vert:Np,cube_frag:Up,depth_vert:Fp,depth_frag:Op,distance_vert:Bp,distance_frag:zp,equirect_vert:kp,equirect_frag:Vp,linedashed_vert:Gp,linedashed_frag:Hp,meshbasic_vert:Wp,meshbasic_frag:Xp,meshlambert_vert:qp,meshlambert_frag:Yp,meshmatcap_vert:Zp,meshmatcap_frag:$p,meshnormal_vert:Jp,meshnormal_frag:Kp,meshphong_vert:jp,meshphong_frag:Qp,meshphysical_vert:tm,meshphysical_frag:em,meshtoon_vert:nm,meshtoon_frag:im,points_vert:sm,points_frag:rm,shadow_vert:am,shadow_frag:om,sprite_vert:lm,sprite_frag:cm},_t={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},Bn={basic:{uniforms:Je([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Je([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Xt(0)},envMapIntensity:{value:1}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Je([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Je([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Je([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Je([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Je([_t.points,_t.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Je([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Je([_t.common,_t.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Je([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Je([_t.sprite,_t.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distance:{uniforms:Je([_t.common,_t.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distance_vert,fragmentShader:Yt.distance_frag},shadow:{uniforms:Je([_t.lights,_t.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};Bn.physical={uniforms:Je([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};var ao={r:0,b:0,g:0},hm=new we,uu=new Ht;uu.set(-1,0,0,0,1,0,0,0,1);function um(i,t,e,n,s,r){let a=new Xt(0),o=s===!0?0:1,l,c,u=null,d=0,h=null;function m(E){let A=E.isScene===!0?E.background:null;if(A&&A.isTexture){let v=E.backgroundBlurriness>0;A=t.get(A,v)}return A}function _(E){let A=!1,v=m(E);v===null?p(a,o):v&&v.isColor&&(p(v,1),A=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(E,A){let v=m(A);v&&(v.isCubeTexture||v.mapping===Zs)?(c===void 0&&(c=new Ve(new Un(1,1,1),new $e({name:"BackgroundCubeMaterial",uniforms:Li(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,w,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(hm.makeRotationFromEuler(A.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(uu),c.material.toneMapped=ne.getTransfer(v.colorSpace)!==le,(u!==v||d!==v.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,h=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ve(new Hs(2,2),new $e({name:"BackgroundMaterial",uniforms:Li(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=ne.getTransfer(v.colorSpace)!==le,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,h=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function p(E,A){E.getRGB(ao,Il(i)),e.buffers.color.setClear(ao.r,ao.g,ao.b,A,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,A=1){a.set(E),o=A,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,p(a,o)},render:_,addToRenderList:M,dispose:f}}function dm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(B,W,Y,U,X){let Q=!1,Z=d(B,U,Y,W);r!==Z&&(r=Z,c(r.object)),Q=m(B,U,Y,X),Q&&_(B,U,Y,X),X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,v(B,W,Y,U),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return i.createVertexArray()}function c(B){return i.bindVertexArray(B)}function u(B){return i.deleteVertexArray(B)}function d(B,W,Y,U){let X=U.wireframe===!0,Q=n[W.id];Q===void 0&&(Q={},n[W.id]=Q);let Z=B.isInstancedMesh===!0?B.id:0,ot=Q[Z];ot===void 0&&(ot={},Q[Z]=ot);let J=ot[Y.id];J===void 0&&(J={},ot[Y.id]=J);let nt=J[X];return nt===void 0&&(nt=h(l()),J[X]=nt),nt}function h(B){let W=[],Y=[],U=[];for(let X=0;X<e;X++)W[X]=0,Y[X]=0,U[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:Y,attributeDivisors:U,object:B,attributes:{},index:null}}function m(B,W,Y,U){let X=r.attributes,Q=W.attributes,Z=0,ot=Y.getAttributes();for(let J in ot)if(ot[J].location>=0){let rt=X[J],Nt=Q[J];if(Nt===void 0&&(J==="instanceMatrix"&&B.instanceMatrix&&(Nt=B.instanceMatrix),J==="instanceColor"&&B.instanceColor&&(Nt=B.instanceColor)),rt===void 0||rt.attribute!==Nt||Nt&&rt.data!==Nt.data)return!0;Z++}return r.attributesNum!==Z||r.index!==U}function _(B,W,Y,U){let X={},Q=W.attributes,Z=0,ot=Y.getAttributes();for(let J in ot)if(ot[J].location>=0){let rt=Q[J];rt===void 0&&(J==="instanceMatrix"&&B.instanceMatrix&&(rt=B.instanceMatrix),J==="instanceColor"&&B.instanceColor&&(rt=B.instanceColor));let Nt={};Nt.attribute=rt,rt&&rt.data&&(Nt.data=rt.data),X[J]=Nt,Z++}r.attributes=X,r.attributesNum=Z,r.index=U}function M(){let B=r.newAttributes;for(let W=0,Y=B.length;W<Y;W++)B[W]=0}function p(B){f(B,0)}function f(B,W){let Y=r.newAttributes,U=r.enabledAttributes,X=r.attributeDivisors;Y[B]=1,U[B]===0&&(i.enableVertexAttribArray(B),U[B]=1),X[B]!==W&&(i.vertexAttribDivisor(B,W),X[B]=W)}function E(){let B=r.newAttributes,W=r.enabledAttributes;for(let Y=0,U=W.length;Y<U;Y++)W[Y]!==B[Y]&&(i.disableVertexAttribArray(Y),W[Y]=0)}function A(B,W,Y,U,X,Q,Z){Z===!0?i.vertexAttribIPointer(B,W,Y,X,Q):i.vertexAttribPointer(B,W,Y,U,X,Q)}function v(B,W,Y,U){M();let X=U.attributes,Q=Y.getAttributes(),Z=W.defaultAttributeValues;for(let ot in Q){let J=Q[ot];if(J.location>=0){let nt=X[ot];if(nt===void 0&&(ot==="instanceMatrix"&&B.instanceMatrix&&(nt=B.instanceMatrix),ot==="instanceColor"&&B.instanceColor&&(nt=B.instanceColor)),nt!==void 0){let rt=nt.normalized,Nt=nt.itemSize,Ut=t.get(nt);if(Ut===void 0)continue;let ce=Ut.buffer,jt=Ut.type,Qt=Ut.bytesPerElement,O=jt===i.INT||jt===i.UNSIGNED_INT||nt.gpuType===Sa;if(nt.isInterleavedBufferAttribute){let K=nt.data,St=K.stride,kt=nt.offset;if(K.isInstancedInterleavedBuffer){for(let vt=0;vt<J.locationSize;vt++)f(J.location+vt,K.meshPerAttribute);B.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let vt=0;vt<J.locationSize;vt++)p(J.location+vt);i.bindBuffer(i.ARRAY_BUFFER,ce);for(let vt=0;vt<J.locationSize;vt++)A(J.location+vt,Nt/J.locationSize,jt,rt,St*Qt,(kt+Nt/J.locationSize*vt)*Qt,O)}else{if(nt.isInstancedBufferAttribute){for(let K=0;K<J.locationSize;K++)f(J.location+K,nt.meshPerAttribute);B.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let K=0;K<J.locationSize;K++)p(J.location+K);i.bindBuffer(i.ARRAY_BUFFER,ce);for(let K=0;K<J.locationSize;K++)A(J.location+K,Nt/J.locationSize,jt,rt,Nt*Qt,Nt/J.locationSize*K*Qt,O)}}else if(Z!==void 0){let rt=Z[ot];if(rt!==void 0)switch(rt.length){case 2:i.vertexAttrib2fv(J.location,rt);break;case 3:i.vertexAttrib3fv(J.location,rt);break;case 4:i.vertexAttrib4fv(J.location,rt);break;default:i.vertexAttrib1fv(J.location,rt)}}}}E()}function b(){C();for(let B in n){let W=n[B];for(let Y in W){let U=W[Y];for(let X in U){let Q=U[X];for(let Z in Q)u(Q[Z].object),delete Q[Z];delete U[X]}}delete n[B]}}function w(B){if(n[B.id]===void 0)return;let W=n[B.id];for(let Y in W){let U=W[Y];for(let X in U){let Q=U[X];for(let Z in Q)u(Q[Z].object),delete Q[Z];delete U[X]}}delete n[B.id]}function I(B){for(let W in n){let Y=n[W];for(let U in Y){let X=Y[U];if(X[B.id]===void 0)continue;let Q=X[B.id];for(let Z in Q)u(Q[Z].object),delete Q[Z];delete X[B.id]}}}function x(B){for(let W in n){let Y=n[W],U=B.isInstancedMesh===!0?B.id:0,X=Y[U];if(X!==void 0){for(let Q in X){let Z=X[Q];for(let ot in Z)u(Z[ot].object),delete Z[ot];delete X[Q]}delete Y[U],Object.keys(Y).length===0&&delete n[W]}}}function C(){N(),a=!0,r!==s&&(r=s,c(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:N,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:I,initAttributes:M,enableAttribute:p,disableUnusedAttributes:E}}function fm(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let m=0;m<u;m++)h+=c[m];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function pm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(I){return!(I!==mn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){let x=I===En&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==un&&I!==wn&&!x&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(Ot("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:m,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:E,maxVaryings:A,maxFragmentUniforms:v,maxSamples:b,samples:w}}function mm(i){let t=this,e=null,n=0,s=!1,r=!1,a=new vn,o=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let m=d.length!==0||h||n!==0||s;return s=h,n=d.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,m){let _=d.clippingPlanes,M=d.clipIntersection,p=d.clipShadows,f=i.get(d);if(!s||_===null||_.length===0||r&&!p)r?u(null):c();else{let E=r?0:n,A=E*4,v=f.clippingState||null;l.value=v,v=u(_,h,A,m);for(let b=0;b!==A;++b)v[b]=e[b];f.clippingState=v,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,m,_){let M=d!==null?d.length:0,p=null;if(M!==0){if(p=l.value,_!==!0||p===null){let f=m+M*4,E=h.matrixWorldInverse;o.getNormalMatrix(E),(p===null||p.length<f)&&(p=new Float32Array(f));for(let A=0,v=m;A!==M;++A,v+=4)a.copy(d[A]).applyMatrix4(E,o),a.normal.toArray(p,v),p[v+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,p}}var ps=4,gm=6,_m=20,xm=256,nr=new qs,Hh=new Xt,zl=null,kl=0,Vl=0,Gl=!1,ym=new z,Di=new z,lo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=ym}=r;zl=this._renderer.getRenderTarget(),kl=this._renderer.getActiveCubeFace(),Vl=this._renderer.getActiveMipmapLevel(),Gl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(zl,kl,Vl),this._renderer.xr.enabled=Gl,t.scissorTest=!1,fs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===xi||t.mapping===Pi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),zl=this._renderer.getRenderTarget(),kl=this._renderer.getActiveCubeFace(),Vl=this._renderer.getActiveMipmapLevel(),Gl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Le,minFilter:Le,generateMipmaps:!1,type:En,format:mn,colorSpace:Ts,depthBuffer:!1},s=Wh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wh(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=vm(r)),this._blurMaterial=Sm(r,t,e),this._ggxMaterial=Mm(r,t,e)}return s}_compileMaterial(t){let e=new Ve(new en,t);this._renderer.compile(e,nr)}_sceneToCubeUV(t,e,n,s,r){let l=new Ze(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,m=d.toneMapping;d.getClearColor(Hh),d.toneMapping=Sn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ve(new Un,new ui({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,p=M.material,f=!1,E=t.background;E?E.isColor&&(p.color.copy(E),t.background=null,f=!0):(p.color.copy(Hh),f=!0);for(let A=0;A<6;A++){let v=A%3;v===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[A],r.y,r.z)):v===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[A]));let b=this._cubeSize;fs(s,v*b,A>2?b:0,b,b),d.setRenderTarget(s),f&&d.render(M,l),d.render(t,l)}d.toneMapping=m,d.autoClear=h,t.background=E}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===xi||t.mapping===Pi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;fs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,nr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=c*1.25,m=d*h,{_lodMax:_}=this,M=this._sizeLods[n],p=3*M*(n>_-ps?n-_+ps:0),f=4*(this._cubeSize-M);l.envMap.value=t.texture,l.roughness.value=m,l.mipInt.value=_-e,fs(r,p,f,3*M,2*M),s.setRenderTarget(r),s.render(o,nr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-n,fs(t,p,f,3*M,2*M),s.setRenderTarget(t),s.render(o,nr)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],d=3*u*(s>this._lodMax-ps?s-this._lodMax+ps:0),h=4*(this._cubeSize-u);fs(e,d,h,3*u,2*u),a.setRenderTarget(e),a.render(l,nr)}};function vm(i){let t=[],e=[],n=i,s=i-ps+1+gm;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,m=3,_=new Float32Array(m*h*d),M=new Float32Array(m*h*d);for(let f=0;f<d;f++){let E=f%3*2/3-1,A=f>2?0:-1,v=[E,A,0,E+2/3,A,0,E+2/3,A+1,0,E,A,0,E+2/3,A+1,0,E,A+1,0];_.set(v,m*h*f);for(let b=0;b<h;b++){let w=u[b*2]*2-1,I=u[b*2+1]*2-1;f===0?Di.set(1,I,w):f===1?Di.set(-w,1,-I):f===2?Di.set(-w,I,1):f===3?Di.set(-1,I,-w):f===4?Di.set(-w,-1,I):Di.set(w,I,-1),Di.toArray(M,(f*h+b)*m)}}let p=new en;p.setAttribute("position",new Ue(_,m)),p.setAttribute("outputDirection",new Ue(M,m)),e.push(new Ve(p,null)),n>ps&&n--}return{lodMeshes:e,sizeLods:t}}function Wh(i,t,e){let n=new sn(i,t,e);return n.texture.mapping=Zs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Mm(i,t,e){return new $e({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:xm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:uo(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Sm(i,t,e){return new $e({name:"SphericalGaussianBlur",defines:{SAMPLES:_m,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:uo(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Xh(){return new $e({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uo(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function qh(){return new $e({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function uo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var co=class extends sn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ks(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Un(5,5,5),r=new $e({name:"CubemapFromEquirect",uniforms:Li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:Fn});r.uniforms.tEquirect.value=e;let a=new Ve(s,r),o=e.minFilter;return e.minFilter===yi&&(e.minFilter=Le),new ga(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function bm(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,m=!1){return h==null?null:m?a(h):r(h)}function r(h){if(h&&h.isTexture){let m=h.mapping;if(m===ya||m===va)if(t.has(h)){let _=t.get(h).texture;return o(_,h.mapping)}else{let _=h.image;if(_&&_.height>0){let M=new co(_.height);return M.fromEquirectangularTexture(i,h),t.set(h,M),h.addEventListener("dispose",c),o(M.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let m=h.mapping,_=m===ya||m===va,M=m===xi||m===Pi;if(_||M){let p=e.get(h),f=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return n===null&&(n=new lo(i)),p=_?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),p.texture;if(p!==void 0)return p.texture;{let E=h.image;return _&&E&&E.height>0||M&&E&&l(E)?(n===null&&(n=new lo(i)),p=_?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function o(h,m){return m===ya?h.mapping=xi:m===va&&(h.mapping=Pi),h}function l(h){let m=0,_=6;for(let M=0;M<_;M++)h[M]!==void 0&&m++;return m===_}function c(h){let m=h.target;m.removeEventListener("dispose",c);let _=t.get(m);_!==void 0&&(t.delete(m),_.dispose())}function u(h){let m=h.target;m.removeEventListener("dispose",u);let _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function wm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ai("WebGLRenderer: "+n+" extension not supported."),s}}}function Em(i,t,e,n){let s={},r=new WeakMap;function a(d){let h=d.target;h.index!==null&&t.remove(h.index);for(let _ in h.attributes)t.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete s[h.id];let m=r.get(h);m&&(t.remove(m),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function l(d){let h=d.attributes;for(let m in h)t.update(h[m],i.ARRAY_BUFFER)}function c(d){let h=[],m=d.index,_=d.attributes.position,M=0;if(_===void 0)return;if(m!==null){let E=m.array;M=m.version;for(let A=0,v=E.length;A<v;A+=3){let b=E[A+0],w=E[A+1],I=E[A+2];h.push(b,w,w,I,I,b)}}else{let E=_.array;M=_.version;for(let A=0,v=E.length/3-1;A<v;A+=3){let b=A+0,w=A+1,I=A+2;h.push(b,w,w,I,I,b)}}let p=new(_.count>=65535?Us:Ns)(h,1);p.version=M;let f=r.get(d);f&&t.remove(f),r.set(d,p)}function u(d){let h=r.get(d);if(h){let m=d.index;m!==null&&h.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function Tm(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){i.drawElements(n,h,r,d*a),e.update(h,n,1)}function c(d,h,m){m!==0&&(i.drawElementsInstanced(n,h,r,d*a,m),e.update(h,n,m))}function u(d,h,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,m);let M=0;for(let p=0;p<m;p++)M+=h[p];e.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Am(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Bt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Cm(i,t,e){let n=new WeakMap,s=new Ee;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==d){let C=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",C)};h!==void 0&&h.texture.dispose();let m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],A=0;m===!0&&(A=1),_===!0&&(A=2),M===!0&&(A=3);let v=o.attributes.position.count*A,b=1;v>t.maxTextureSize&&(b=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let w=new Float32Array(v*b*4*d),I=new Ps(w,v,b,d);I.type=wn,I.needsUpdate=!0;let x=A*4;for(let N=0;N<d;N++){let B=p[N],W=f[N],Y=E[N],U=v*b*4*N;for(let X=0;X<B.count;X++){let Q=X*x;m===!0&&(s.fromBufferAttribute(B,X),w[U+Q+0]=s.x,w[U+Q+1]=s.y,w[U+Q+2]=s.z,w[U+Q+3]=0),_===!0&&(s.fromBufferAttribute(W,X),w[U+Q+4]=s.x,w[U+Q+5]=s.y,w[U+Q+6]=s.z,w[U+Q+7]=0),M===!0&&(s.fromBufferAttribute(Y,X),w[U+Q+8]=s.x,w[U+Q+9]=s.y,w[U+Q+10]=s.z,w[U+Q+11]=Y.itemSize===4?s.w:1)}}h={count:d,texture:I,size:new $t(v,b)},n.set(o,h),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let M=0;M<c.length;M++)m+=c[M];let _=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Rm(i,t,e,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,d=c.geometry,h=t.get(c,d);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let m=c.skeleton;r.get(m)!==u&&(m.update(),r.set(m,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var Im={[dl]:"LINEAR_TONE_MAPPING",[fl]:"REINHARD_TONE_MAPPING",[pl]:"CINEON_TONE_MAPPING",[ml]:"ACES_FILMIC_TONE_MAPPING",[_l]:"AGX_TONE_MAPPING",[xl]:"NEUTRAL_TONE_MAPPING",[gl]:"CUSTOM_TONE_MAPPING"};function Pm(i,t,e,n,s,r){let a=new sn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new en;c.setAttribute("position",new tn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new tn([0,2,0,0,2,0],2));let u=new ia({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Ve(c,u),h=new qs(-1,1,1,-1,0,1),m=null,_=null,M=!1,p,f=null,E=[],A=!1;this.setSize=function(v,b){a.setSize(v,b),o!==null&&o.setSize(v,b),l!==null&&l.setSize(v,b);for(let w=0;w<E.length;w++){let I=E[w];I.setSize&&I.setSize(v,b)}},this.setEffects=function(v){E=v,A=E.length>0&&E[0].isRenderPass===!0;let b=a.width,w=a.height;E.length>0&&o===null&&(o=new sn(b,w,{type:En,depthBuffer:!1,stencilBuffer:!1}),l=new sn(b,w,{type:En,depthBuffer:!1,stencilBuffer:!1}));for(let I=0;I<E.length;I++){let x=E[I];x.setSize&&x.setSize(b,w)}},this.begin=function(v,b){if(M||v.toneMapping===Sn&&E.length===0)return!1;if(f=b,b!==null){let w=b.width,I=b.height;(a.width!==w||a.height!==I)&&this.setSize(w,I)}return A===!1&&v.setRenderTarget(a),p=v.toneMapping,v.toneMapping=Sn,!0},this.hasRenderPass=function(){return A},this.end=function(v,b){v.toneMapping=p,M=!0;let w=a,I=o;for(let x=0;x<E.length;x++){let C=E[x];C.enabled!==!1&&(C.render(v,I,w,b),C.needsSwap!==!1&&(w=I,I=I===o?l:o))}if(m!==v.outputColorSpace||_!==v.toneMapping){m=v.outputColorSpace,_=v.toneMapping,u.defines={},ne.getTransfer(m)===le&&(u.defines.SRGB_TRANSFER="");let x=Im[_];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=w.texture,v.setRenderTarget(f),v.render(d,h),f=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var du=new Ge,Xl=new fi(1,1),fu=new Ps,pu=new Jr,mu=new ks,Yh=[],Zh=[],$h=new Float32Array(16),Jh=new Float32Array(9),Kh=new Float32Array(4);function gs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Yh[s];if(r===void 0&&(r=new Float32Array(s),Yh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Oe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function fo(i,t){let e=Zh[t];e===void 0&&(e=new Int32Array(t),Zh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Lm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Dm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2fv(this.addr,t),Oe(e,t)}}function Nm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;i.uniform3fv(this.addr,t),Oe(e,t)}}function Um(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4fv(this.addr,t),Oe(e,t)}}function Fm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;Kh.set(n),i.uniformMatrix2fv(this.addr,!1,Kh),Oe(e,n)}}function Om(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;Jh.set(n),i.uniformMatrix3fv(this.addr,!1,Jh),Oe(e,n)}}function Bm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;$h.set(n),i.uniformMatrix4fv(this.addr,!1,$h),Oe(e,n)}}function zm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function km(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2iv(this.addr,t),Oe(e,t)}}function Vm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3iv(this.addr,t),Oe(e,t)}}function Gm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4iv(this.addr,t),Oe(e,t)}}function Hm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Wm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2uiv(this.addr,t),Oe(e,t)}}function Xm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3uiv(this.addr,t),Oe(e,t)}}function qm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4uiv(this.addr,t),Oe(e,t)}}function Ym(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Xl.compareFunction=e.isReversedDepthBuffer()?ro:so,r=Xl):r=du,e.setTexture2D(t||r,s)}function Zm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||pu,s)}function $m(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||mu,s)}function Jm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||fu,s)}function Km(i){switch(i){case 5126:return Lm;case 35664:return Dm;case 35665:return Nm;case 35666:return Um;case 35674:return Fm;case 35675:return Om;case 35676:return Bm;case 5124:case 35670:return zm;case 35667:case 35671:return km;case 35668:case 35672:return Vm;case 35669:case 35673:return Gm;case 5125:return Hm;case 36294:return Wm;case 36295:return Xm;case 36296:return qm;case 35678:case 36198:case 36298:case 36306:case 35682:return Ym;case 35679:case 36299:case 36307:return Zm;case 35680:case 36300:case 36308:case 36293:return $m;case 36289:case 36303:case 36311:case 36292:return Jm}}function jm(i,t){i.uniform1fv(this.addr,t)}function Qm(i,t){let e=gs(t,this.size,2);i.uniform2fv(this.addr,e)}function tg(i,t){let e=gs(t,this.size,3);i.uniform3fv(this.addr,e)}function eg(i,t){let e=gs(t,this.size,4);i.uniform4fv(this.addr,e)}function ng(i,t){let e=gs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function ig(i,t){let e=gs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function sg(i,t){let e=gs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function rg(i,t){i.uniform1iv(this.addr,t)}function ag(i,t){i.uniform2iv(this.addr,t)}function og(i,t){i.uniform3iv(this.addr,t)}function lg(i,t){i.uniform4iv(this.addr,t)}function cg(i,t){i.uniform1uiv(this.addr,t)}function hg(i,t){i.uniform2uiv(this.addr,t)}function ug(i,t){i.uniform3uiv(this.addr,t)}function dg(i,t){i.uniform4uiv(this.addr,t)}function fg(i,t,e){let n=this.cache,s=t.length,r=fo(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Xl:a=du;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function pg(i,t,e){let n=this.cache,s=t.length,r=fo(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||pu,r[a])}function mg(i,t,e){let n=this.cache,s=t.length,r=fo(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||mu,r[a])}function gg(i,t,e){let n=this.cache,s=t.length,r=fo(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||fu,r[a])}function _g(i){switch(i){case 5126:return jm;case 35664:return Qm;case 35665:return tg;case 35666:return eg;case 35674:return ng;case 35675:return ig;case 35676:return sg;case 5124:case 35670:return rg;case 35667:case 35671:return ag;case 35668:case 35672:return og;case 35669:case 35673:return lg;case 5125:return cg;case 36294:return hg;case 36295:return ug;case 36296:return dg;case 35678:case 36198:case 36298:case 36306:case 35682:return fg;case 35679:case 36299:case 36307:return pg;case 35680:case 36300:case 36308:case 36293:return mg;case 36289:case 36303:case 36311:case 36292:return gg}}var ql=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Km(e.type)}},Yl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=_g(e.type)}},Zl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Hl=/(\w+)(\])?(\[|\.)?/g;function jh(i,t){i.seq.push(t),i.map[t.id]=t}function xg(i,t,e){let n=i.name,s=n.length;for(Hl.lastIndex=0;;){let r=Hl.exec(n),a=Hl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){jh(e,c===void 0?new ql(o,i,t):new Yl(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Zl(o),jh(e,d)),e=d}}}var ms=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);xg(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Qh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var yg=37297,vg=0;function Mg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var tu=new Ht;function Sg(i){ne._getMatrix(tu,ne.workingColorSpace,i);let t=`mat3( ${tu.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(i)){case As:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return Ot("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function eu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Mg(i.getShaderSource(t),o)}else return r}function bg(i,t){let e=Sg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var wg={[dl]:"Linear",[fl]:"Reinhard",[pl]:"Cineon",[ml]:"ACESFilmic",[_l]:"AgX",[xl]:"Neutral",[gl]:"Custom"};function Eg(i,t){let e=wg[t];return e===void 0?(Ot("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var oo=new z;function Tg(){ne.getLuminanceCoefficients(oo);let i=oo.x.toFixed(4),t=oo.y.toFixed(4),e=oo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ag(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sr).join(`
`)}function Cg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Rg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function sr(i){return i!==""}function nu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function iu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ig=/^[ \t]*#include +<([\w\d./]+)>/gm;function $l(i){return i.replace(Ig,Lg)}var Pg=new Map;function Lg(i,t){let e=Yt[t];if(e===void 0){let n=Pg.get(t);if(n!==void 0)e=Yt[n],Ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return $l(e)}var Dg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function su(i){return i.replace(Dg,Ng)}function Ng(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ru(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Ug={[Ys]:"SHADOWMAP_TYPE_PCF",[cs]:"SHADOWMAP_TYPE_VSM"};function Fg(i){return Ug[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Og={[xi]:"ENVMAP_TYPE_CUBE",[Pi]:"ENVMAP_TYPE_CUBE",[Zs]:"ENVMAP_TYPE_CUBE_UV"};function Bg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Og[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var zg={[Pi]:"ENVMAP_MODE_REFRACTION"};function kg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":zg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Vg={[ul]:"ENVMAP_BLENDING_MULTIPLY",[Sh]:"ENVMAP_BLENDING_MIX",[bh]:"ENVMAP_BLENDING_ADD"};function Gg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Vg[i.combine]||"ENVMAP_BLENDING_NONE"}function Hg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Wg(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Fg(e),c=Bg(e),u=kg(e),d=Gg(e),h=Hg(e),m=Ag(e),_=Cg(r),M=s.createProgram(),p,f,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(sr).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(sr).join(`
`),f.length>0&&(f+=`
`)):(p=[ru(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sr).join(`
`),f=[ru(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Sn?"#define TONE_MAPPING":"",e.toneMapping!==Sn?Yt.tonemapping_pars_fragment:"",e.toneMapping!==Sn?Eg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,bg("linearToOutputTexel",e.outputColorSpace),Tg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(sr).join(`
`)),a=$l(a),a=nu(a,e),a=iu(a,e),o=$l(o),o=nu(o,e),o=iu(o,e),a=su(a),o=su(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===Rl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Rl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let A=E+p+a,v=E+f+o,b=Qh(s,s.VERTEX_SHADER,A),w=Qh(s,s.FRAGMENT_SHADER,v);s.attachShader(M,b),s.attachShader(M,w),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function I(B){if(i.debug.checkShaderErrors){let W=s.getProgramInfoLog(M)||"",Y=s.getShaderInfoLog(b)||"",U=s.getShaderInfoLog(w)||"",X=W.trim(),Q=Y.trim(),Z=U.trim(),ot=!0,J=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(ot=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,b,w);else{let nt=eu(s,b,"vertex"),rt=eu(s,w,"fragment");Bt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+X+`
`+nt+`
`+rt)}else X!==""?Ot("WebGLProgram: Program Info Log:",X):(Q===""||Z==="")&&(J=!1);J&&(B.diagnostics={runnable:ot,programLog:X,vertexShader:{log:Q,prefix:p},fragmentShader:{log:Z,prefix:f}})}s.deleteShader(b),s.deleteShader(w),x=new ms(s,M),C=Rg(s,M)}let x;this.getUniforms=function(){return x===void 0&&I(this),x};let C;this.getAttributes=function(){return C===void 0&&I(this),C};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(M,yg)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=vg++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=b,this.fragmentShader=w,this}var Xg=0,Jl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Kl(t),e.set(t,n)),n}},Kl=class{constructor(t){this.id=Xg++,this.code=t,this.usedTimes=0}};function qg(i){return i===Mi||i===tr||i===er}function Yg(i,t,e,n,s,r){let a=new Ls,o=new Jl,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer,h=n.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function M(x,C,N,B,W,Y){let U=B.fog,X=W.geometry,Q=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?B.environment:null,Z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,ot=t.get(x.envMap||Q,Z),J=ot&&ot.mapping===Zs?ot.image.height:null,nt=m[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Ot("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let rt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Nt=rt!==void 0?rt.length:0,Ut=0;X.morphAttributes.position!==void 0&&(Ut=1),X.morphAttributes.normal!==void 0&&(Ut=2),X.morphAttributes.color!==void 0&&(Ut=3);let ce,jt,Qt,O;if(nt){let de=Bn[nt];ce=de.vertexShader,jt=de.fragmentShader}else{ce=x.vertexShader,jt=x.fragmentShader;let de=o.getVertexShaderStage(x),ae=o.getFragmentShaderStage(x);o.update(x,de,ae),Qt=de.id,O=ae.id}let K=i.getRenderTarget(),St=i.state.buffers.depth.getReversed(),kt=W.isInstancedMesh===!0,vt=W.isBatchedMesh===!0,Wt=!!x.map,Ae=!!x.matcap,Zt=!!ot,Gt=!!x.aoMap,he=!!x.lightMap,Jt=!!x.bumpMap&&x.wireframe===!1,ue=!!x.normalMap,_e=!!x.displacementMap,Be=!!x.emissiveMap,xe=!!x.metalnessMap,be=!!x.roughnessMap,D=x.anisotropy>0,Ce=x.clearcoat>0,se=x.dispersion>0,T=x.retroreflectivity>0,g=x.iridescence>0,F=x.sheen>0,G=x.transmission>0,$=D&&!!x.anisotropyMap,lt=Ce&&!!x.clearcoatMap,ht=Ce&&!!x.clearcoatNormalMap,j=Ce&&!!x.clearcoatRoughnessMap,et=g&&!!x.iridescenceMap,dt=g&&!!x.iridescenceThicknessMap,wt=F&&!!x.sheenColorMap,ut=F&&!!x.sheenRoughnessMap,ft=!!x.specularMap,Lt=!!x.specularColorMap,Ft=!!x.specularIntensityMap,zt=G&&!!x.transmissionMap,L=G&&!!x.thicknessMap,pt=!!x.gradientMap,tt=!!x.alphaMap,ct=x.alphaTest>0,xt=!!x.alphaHash,st=!!x.extensions,It=Sn;x.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(It=i.toneMapping);let Tt={shaderID:nt,shaderType:x.type,shaderName:x.name,vertexShader:ce,fragmentShader:jt,defines:x.defines,customVertexShaderID:Qt,customFragmentShaderID:O,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:vt,batchingColor:vt&&W._colorsTexture!==null,instancing:kt,instancingColor:kt&&W.instanceColor!==null,instancingMorph:kt&&W.morphTexture!==null,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:ne.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Wt,matcap:Ae,envMap:Zt,envMapMode:Zt&&ot.mapping,envMapCubeUVHeight:J,aoMap:Gt,lightMap:he,bumpMap:Jt,normalMap:ue,displacementMap:_e,emissiveMap:Be,normalMapObjectSpace:ue&&x.normalMapType===Th,normalMapTangentSpace:ue&&x.normalMapType===Al,packedNormalMap:ue&&x.normalMapType===Al&&qg(x.normalMap.format),metalnessMap:xe,roughnessMap:be,anisotropy:D,anisotropyMap:$,clearcoat:Ce,clearcoatMap:lt,clearcoatNormalMap:ht,clearcoatRoughnessMap:j,dispersion:se,retroreflection:T,iridescence:g,iridescenceMap:et,iridescenceThicknessMap:dt,sheen:F,sheenColorMap:wt,sheenRoughnessMap:ut,specularMap:ft,specularColorMap:Lt,specularIntensityMap:Ft,transmission:G,transmissionMap:zt,thicknessMap:L,gradientMap:pt,opaque:x.transparent===!1&&x.blending===hs&&x.alphaToCoverage===!1,alphaMap:tt,alphaTest:ct,alphaHash:xt,combine:x.combine,mapUv:Wt&&_(x.map.channel),aoMapUv:Gt&&_(x.aoMap.channel),lightMapUv:he&&_(x.lightMap.channel),bumpMapUv:Jt&&_(x.bumpMap.channel),normalMapUv:ue&&_(x.normalMap.channel),displacementMapUv:_e&&_(x.displacementMap.channel),emissiveMapUv:Be&&_(x.emissiveMap.channel),metalnessMapUv:xe&&_(x.metalnessMap.channel),roughnessMapUv:be&&_(x.roughnessMap.channel),anisotropyMapUv:$&&_(x.anisotropyMap.channel),clearcoatMapUv:lt&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:ht&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:ut&&_(x.sheenRoughnessMap.channel),specularMapUv:ft&&_(x.specularMap.channel),specularColorMapUv:Lt&&_(x.specularColorMap.channel),specularIntensityMapUv:Ft&&_(x.specularIntensityMap.channel),transmissionMapUv:zt&&_(x.transmissionMap.channel),thicknessMapUv:L&&_(x.thicknessMap.channel),alphaMapUv:tt&&_(x.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(ue||D),vertexNormals:!!X.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!X.attributes.uv&&(Wt||tt),fog:!!U,useFog:x.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||X.attributes.normal===void 0&&ue===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:St,skinning:W.isSkinnedMesh===!0,hasPositionAttribute:X.attributes.position!==void 0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Nt,morphTextureStride:Ut,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:Y.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:It,decodeVideoTexture:Wt&&x.map.isVideoTexture===!0&&ne.getTransfer(x.map.colorSpace)===le,decodeVideoTextureEmissive:Be&&x.emissiveMap.isVideoTexture===!0&&ne.getTransfer(x.emissiveMap.colorSpace)===le,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===pn,flipSided:x.side===nn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:st&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&x.extensions.multiDraw===!0||vt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Tt.vertexUv1s=l.has(1),Tt.vertexUv2s=l.has(2),Tt.vertexUv3s=l.has(3),l.clear(),Tt}function p(x){let C=[];if(x.shaderID?C.push(x.shaderID):(C.push(x.customVertexShaderID),C.push(x.customFragmentShaderID)),x.defines!==void 0)for(let N in x.defines)C.push(N),C.push(x.defines[N]);return x.isRawShaderMaterial===!1&&(f(C,x),E(C,x),C.push(i.outputColorSpace)),C.push(x.customProgramCacheKey),C.join()}function f(x,C){x.push(C.precision),x.push(C.outputColorSpace),x.push(C.envMapMode),x.push(C.envMapCubeUVHeight),x.push(C.mapUv),x.push(C.alphaMapUv),x.push(C.lightMapUv),x.push(C.aoMapUv),x.push(C.bumpMapUv),x.push(C.normalMapUv),x.push(C.displacementMapUv),x.push(C.emissiveMapUv),x.push(C.metalnessMapUv),x.push(C.roughnessMapUv),x.push(C.anisotropyMapUv),x.push(C.clearcoatMapUv),x.push(C.clearcoatNormalMapUv),x.push(C.clearcoatRoughnessMapUv),x.push(C.iridescenceMapUv),x.push(C.iridescenceThicknessMapUv),x.push(C.sheenColorMapUv),x.push(C.sheenRoughnessMapUv),x.push(C.specularMapUv),x.push(C.specularColorMapUv),x.push(C.specularIntensityMapUv),x.push(C.transmissionMapUv),x.push(C.thicknessMapUv),x.push(C.combine),x.push(C.fogExp2),x.push(C.sizeAttenuation),x.push(C.morphTargetsCount),x.push(C.morphAttributeCount),x.push(C.numSunLights),x.push(C.numDirLights),x.push(C.numPointLights),x.push(C.numSpotLights),x.push(C.numSpotLightMaps),x.push(C.numHemiLights),x.push(C.numRectAreaLights),x.push(C.numSunLightShadows),x.push(C.numDirLightShadows),x.push(C.numPointLightShadows),x.push(C.numSpotLightShadows),x.push(C.numSpotLightShadowsWithMaps),x.push(C.numLightProbes),x.push(C.shadowMapType),x.push(C.toneMapping),x.push(C.numClippingPlanes),x.push(C.numClipIntersection),x.push(C.depthPacking)}function E(x,C){a.disableAll(),C.instancing&&a.enable(0),C.instancingColor&&a.enable(1),C.instancingMorph&&a.enable(2),C.matcap&&a.enable(3),C.envMap&&a.enable(4),C.normalMapObjectSpace&&a.enable(5),C.normalMapTangentSpace&&a.enable(6),C.clearcoat&&a.enable(7),C.iridescence&&a.enable(8),C.alphaTest&&a.enable(9),C.vertexColors&&a.enable(10),C.vertexAlphas&&a.enable(11),C.vertexUv1s&&a.enable(12),C.vertexUv2s&&a.enable(13),C.vertexUv3s&&a.enable(14),C.vertexTangents&&a.enable(15),C.anisotropy&&a.enable(16),C.alphaHash&&a.enable(17),C.batching&&a.enable(18),C.dispersion&&a.enable(19),C.retroreflection&&a.enable(24),C.batchingColor&&a.enable(20),C.gradientMap&&a.enable(21),C.packedNormalMap&&a.enable(22),C.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.reversedDepthBuffer&&a.enable(4),C.skinning&&a.enable(5),C.morphTargets&&a.enable(6),C.morphNormals&&a.enable(7),C.morphColors&&a.enable(8),C.premultipliedAlpha&&a.enable(9),C.shadowMapEnabled&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.decodeVideoTextureEmissive&&a.enable(20),C.alphaToCoverage&&a.enable(21),C.numLightProbeGrids>0&&a.enable(22),C.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function A(x){let C=m[x.type],N;if(C){let B=Bn[C];N=kh.clone(B.uniforms)}else N=x.uniforms;return N}function v(x,C){let N=u.get(C);return N!==void 0?++N.usedTimes:(N=new Wg(i,C,x,s),c.push(N),u.set(C,N)),N}function b(x){if(--x.usedTimes===0){let C=c.indexOf(x);c[C]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function I(){o.dispose()}return{getParameters:M,getProgramCacheKey:p,getUniforms:A,acquireProgram:v,releaseProgram:b,releaseShaderCache:w,programs:c,dispose:I}}function Zg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function $g(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function au(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ou(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h){let m=0;return h.isInstancedMesh&&(m+=2),h.isSkinnedMesh&&(m+=1),m}function o(h,m,_,M,p,f){let E=i[t];return E===void 0?(E={id:h.id,object:h,geometry:m,material:_,materialVariant:a(h),groupOrder:M,renderOrder:h.renderOrder,z:p,group:f},i[t]=E):(E.id=h.id,E.object=h,E.geometry=m,E.material=_,E.materialVariant=a(h),E.groupOrder=M,E.renderOrder=h.renderOrder,E.z=p,E.group=f),t++,E}function l(h,m,_,M,p,f,E){E.reversedDepth===!0&&(p=-p);let A=o(h,m,_,M,p,f);_.transmission>0?n.push(A):_.transparent===!0?s.push(A):e.push(A)}function c(h,m,_,M,p,f){let E=o(h,m,_,M,p,f);_.transmission>0?n.unshift(E):_.transparent===!0?s.unshift(E):e.unshift(E)}function u(h,m){e.length>1&&e.sort(h||$g),n.length>1&&n.sort(m||au),s.length>1&&s.sort(m||au)}function d(){for(let h=t,m=i.length;h<m;h++){let _=i[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function Jg(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new ou,i.set(n,[a])):s>=r.length?(a=new ou,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Kg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new z,color:new Xt};break;case"SpotLight":e={position:new z,direction:new z,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new z,halfWidth:new z,halfHeight:new z};break}return i[t.id]=e,e}}}function jg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Qg=0;function t0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function e0(i){let t=new Kg,e=jg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);let s=new z,r=new we,a=new we;function o(c){let u=0,d=0,h=0;for(let W=0;W<9;W++)n.probe[W].set(0,0,0);let m=0,_=0,M=0,p=0,f=0,E=0,A=0,v=0,b=0,w=0,I=0,x=0,C=0,N=0;c.sort(t0);for(let W=0,Y=c.length;W<Y;W++){let U=c[W],X=U.color,Q=U.intensity,Z=U.distance,ot=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Mi?ot=U.shadow.map.texture:ot=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)u+=X.r*Q,d+=X.g*Q,h+=X.b*Q;else if(U.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(U.sh.coefficients[J],Q);N++}else if(U.isSunLight){let J=t.get(U);if(J.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let nt=U.shadow,rt=e.get(U);rt.shadowIntensity=nt.intensity,rt.shadowBias=nt.bias,rt.shadowNormalBias=nt.normalBias,rt.shadowRadius=nt.radius,rt.shadowMapSize.copy(nt.mapSize).multiply(nt.getFrameExtents()),n.sunShadow[_]=rt,n.sunShadowMap[_]=ot;let Nt=nt.getViewportCount();for(let Ut=0;Ut<Nt;Ut++)n.sunShadowMatrix[M+Ut]=nt.getMatrix(Ut),n.sunShadowCascade[M+Ut]=nt._cascadeData[Ut];M+=Nt,_++}n.sun[m]=J,m++}else if(U.isDirectionalLight){let J=t.get(U);if(J.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let nt=U.shadow,rt=e.get(U);rt.shadowIntensity=nt.intensity,rt.shadowBias=nt.bias,rt.shadowNormalBias=nt.normalBias,rt.shadowRadius=nt.radius,rt.shadowMapSize=nt.mapSize,n.directionalShadow[p]=rt,n.directionalShadowMap[p]=ot,n.directionalShadowMatrix[p]=U.shadow.matrix,b++}n.directional[p]=J,p++}else if(U.isSpotLight){let J=t.get(U);J.position.setFromMatrixPosition(U.matrixWorld),J.color.copy(X).multiplyScalar(Q),J.distance=Z,J.coneCos=Math.cos(U.angle),J.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),J.decay=U.decay,n.spot[E]=J;let nt=U.shadow;if(U.map&&(n.spotLightMap[x]=U.map,x++,nt.updateMatrices(U),U.castShadow&&C++),n.spotLightMatrix[E]=nt.matrix,U.castShadow){let rt=e.get(U);rt.shadowIntensity=nt.intensity,rt.shadowBias=nt.bias,rt.shadowNormalBias=nt.normalBias,rt.shadowRadius=nt.radius,rt.shadowMapSize=nt.mapSize,n.spotShadow[E]=rt,n.spotShadowMap[E]=ot,I++}E++}else if(U.isRectAreaLight){let J=t.get(U);J.color.copy(X).multiplyScalar(Q),J.halfWidth.set(U.width*.5,0,0),J.halfHeight.set(0,U.height*.5,0),n.rectArea[A]=J,A++}else if(U.isPointLight){let J=t.get(U);if(J.color.copy(U.color).multiplyScalar(U.intensity),J.distance=U.distance,J.decay=U.decay,U.castShadow){let nt=U.shadow,rt=e.get(U);rt.shadowIntensity=nt.intensity,rt.shadowBias=nt.bias,rt.shadowNormalBias=nt.normalBias,rt.shadowRadius=nt.radius,rt.shadowMapSize=nt.mapSize,rt.shadowCameraNear=nt.camera.near,rt.shadowCameraFar=nt.camera.far,n.pointShadow[f]=rt,n.pointShadowMap[f]=ot,n.pointShadowMatrix[f]=U.shadow.matrix,w++}n.point[f]=J,f++}else if(U.isHemisphereLight){let J=t.get(U);J.skyColor.copy(U.color).multiplyScalar(Q),J.groundColor.copy(U.groundColor).multiplyScalar(Q),n.hemi[v]=J,v++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;let B=n.hash;(B.sunLength!==m||B.directionalLength!==p||B.pointLength!==f||B.spotLength!==E||B.rectAreaLength!==A||B.hemiLength!==v||B.numSunShadows!==_||B.numDirectionalShadows!==b||B.numPointShadows!==w||B.numSpotShadows!==I||B.numSpotMaps!==x||B.numLightProbes!==N)&&(n.sun.length=m,n.directional.length=p,n.spot.length=E,n.rectArea.length=A,n.point.length=f,n.hemi.length=v,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=I,n.spotShadowMap.length=I,n.spotLightMatrix.length=I+x-C,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=N,B.sunLength=m,B.directionalLength=p,B.pointLength=f,B.spotLength=E,B.rectAreaLength=A,B.hemiLength=v,B.numSunShadows=_,B.numDirectionalShadows=b,B.numPointShadows=w,B.numSpotShadows=I,B.numSpotMaps=x,B.numLightProbes=N,n.version=Qg++)}function l(c,u){let d=0,h=0,m=0,_=0,M=0,p=0,f=u.matrixWorldInverse;for(let E=0,A=c.length;E<A;E++){let v=c[E];if(v.isSunLight){let b=n.sun[d];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(f),d++}else if(v.isDirectionalLight){let b=n.directional[h];b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),h++}else if(v.isSpotLight){let b=n.spot[_];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),_++}else if(v.isRectAreaLight){let b=n.rectArea[M];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(f),a.identity(),r.copy(v.matrixWorld),r.premultiply(f),a.extractRotation(r),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),M++}else if(v.isPointLight){let b=n.point[m];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(f),m++}else if(v.isHemisphereLight){let b=n.hemi[p];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(f),p++}}}return{setup:o,setupView:l,state:n}}function lu(i){let t=new e0(i),e=[],n=[],s=[];function r(h){d.camera=h,e.length=0,n.length=0,s.length=0}function a(h){e.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function n0(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new lu(i),t.set(s,[o])):r>=a.length?(o=new lu(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var i0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,s0=`uniform sampler2D shadow_pass;
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
}`,r0=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],a0=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],cu=new we,ir=new z,Wl=new z;function o0(i,t,e){let n=new Bs,s=new $t,r=new $t,a=new Ee,o=new sa,l=new ra,c={},u=e.maxTextureSize,d={[_i]:nn,[nn]:_i,[pn]:pn},h=new $e({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:i0,fragmentShader:s0}),m=h.clone();m.defines.HORIZONTAL_PASS=1;let _=new en;_.setAttribute("position",new Ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Ve(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ys;let f=this.type;this.render=function(w,I,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===ih&&(Ot("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ys);let C=i.getRenderTarget(),N=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),W=i.state;W.setBlending(Fn),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let Y=f!==this.type;Y&&I.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(X=>X.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,X=w.length;U<X;U++){let Q=w[U],Z=Q.shadow;if(Z===void 0){Ot("WebGLShadowMap:",Q,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let ot=Z.getFrameExtents();s.multiply(ot),r.copy(Z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ot.x),s.x=r.x*ot.x,Z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ot.y),s.y=r.y*ot.y,Z.mapSize.y=r.y));let J=i.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=J,Z.map===null||Y===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===cs){if(Q.isPointLight){Ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new sn(s.x,s.y,{format:Mi,type:En,minFilter:Le,magFilter:Le,generateMipmaps:!1}),Z.map.texture.name=Q.name+".shadowMap",Z.map.depthTexture=new fi(s.x,s.y,wn),Z.map.depthTexture.name=Q.name+".shadowMapDepth",Z.map.depthTexture.format=Ln,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=ke,Z.map.depthTexture.magFilter=ke}else Q.isPointLight?(Z.map=new co(s.x),Z.map.depthTexture=new na(s.x,bn)):(Z.map=new sn(s.x,s.y),Z.map.depthTexture=new fi(s.x,s.y,bn)),Z.map.depthTexture.name=Q.name+".shadowMap",Z.map.depthTexture.format=Ln,this.type===Ys?(Z.map.depthTexture.compareFunction=J?ro:so,Z.map.depthTexture.minFilter=Le,Z.map.depthTexture.magFilter=Le):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=ke,Z.map.depthTexture.magFilter=ke);Z.camera.updateProjectionMatrix()}Z.map.isWebGLCubeRenderTarget!==!0&&(Z.map.width!==s.x||Z.map.height!==s.y)&&Z.map.setSize(s.x,s.y);let nt=Z.map.isWebGLCubeRenderTarget?6:Z.getViewportCount();Q.isPointLight!==!0&&Z.updateMatrices(Q,x);for(let rt=0;rt<nt;rt++){let Nt=Z.getCamera(rt);if(Q.isPointLight){let Ut=Z.camera,ce=Z.matrix,jt=Q.distance||Ut.far;jt!==Ut.far&&(Ut.far=jt,Ut.updateProjectionMatrix()),ir.setFromMatrixPosition(Q.matrixWorld),Ut.position.copy(ir),Wl.copy(Ut.position),Wl.add(r0[rt]),Ut.up.copy(a0[rt]),Ut.lookAt(Wl),Ut.updateMatrixWorld(),ce.makeTranslation(-ir.x,-ir.y,-ir.z),cu.multiplyMatrices(Ut.projectionMatrix,Ut.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(cu,Ut.coordinateSystem,Ut.reversedDepth)}if(Z.map.isWebGLCubeRenderTarget)i.setRenderTarget(Z.map,rt),i.clear();else{rt===0&&(i.setRenderTarget(Z.map),i.clear());let Ut=Z.getViewport(rt);a.set(r.x*Ut.x,r.y*Ut.y,r.x*Ut.z,r.y*Ut.w),W.viewport(a)}n=Z.getFrustum(rt),v(I,x,Nt,Q,this.type)}Z.isPointLightShadow!==!0&&this.type===cs&&E(Z,x),Z.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(C,N,B)};function E(w,I){let x=t.update(M);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null?w.mapPass=new sn(s.x,s.y,{format:Mi,type:En}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(I,null,x,h,M,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value.set(w.map.width,w.map.height),m.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(I,null,x,m,M,null)}function A(w,I,x,C){let N=null,B=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(B!==void 0)N=B;else if(N=x.isPointLight===!0?l:o,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let W=N.uuid,Y=I.uuid,U=c[W];U===void 0&&(U={},c[W]=U);let X=U[Y];X===void 0&&(X=N.clone(),U[Y]=X,I.addEventListener("dispose",b)),N=X}if(N.visible=I.visible,N.wireframe=I.wireframe,C===cs?N.side=I.shadowSide!==null?I.shadowSide:I.side:N.side=I.shadowSide!==null?I.shadowSide:d[I.side],N.alphaMap=I.alphaMap,N.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,N.map=I.map,N.clipShadows=I.clipShadows,N.clippingPlanes=I.clippingPlanes,N.clipIntersection=I.clipIntersection,N.displacementMap=I.displacementMap,N.displacementScale=I.displacementScale,N.displacementBias=I.displacementBias,N.wireframeLinewidth=I.wireframeLinewidth,N.linewidth=I.linewidth,x.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let W=i.properties.get(N);W.light=x}return N}function v(w,I,x,C,N){if(w.visible===!1)return;if(w.layers.test(I.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&N===cs)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);let Y=t.update(w),U=w.material;if(Array.isArray(U)){let X=Y.groups;for(let Q=0,Z=X.length;Q<Z;Q++){let ot=X[Q],J=U[ot.materialIndex];if(J&&J.visible){let nt=A(w,J,C,N);w.onBeforeShadow(i,w,I,x,Y,nt,ot),i.renderBufferDirect(x,null,Y,nt,w,ot),w.onAfterShadow(i,w,I,x,Y,nt,ot)}}}else if(U.visible){let X=A(w,U,C,N);w.onBeforeShadow(i,w,I,x,Y,X,null),i.renderBufferDirect(x,null,Y,X,w,null),w.onAfterShadow(i,w,I,x,Y,X,null)}}let W=w.children;for(let Y=0,U=W.length;Y<U;Y++)v(W[Y],I,x,C,N)}function b(w){w.target.removeEventListener("dispose",b);for(let x in c){let C=c[x],N=w.target.uuid;N in C&&(C[N].dispose(),delete C[N])}}}function l0(i,t){function e(){let L=!1,pt=new Ee,tt=null,ct=new Ee(0,0,0,0);return{setMask:function(xt){tt!==xt&&!L&&(i.colorMask(xt,xt,xt,xt),tt=xt)},setLocked:function(xt){L=xt},setClear:function(xt,st,It,Tt,de){de===!0&&(xt*=Tt,st*=Tt,It*=Tt),pt.set(xt,st,It,Tt),ct.equals(pt)===!1&&(i.clearColor(xt,st,It,Tt),ct.copy(pt))},reset:function(){L=!1,tt=null,ct.set(-1,0,0,0)}}}function n(){let L=!1,pt=!1,tt=null,ct=null,xt=null;return{setReversed:function(st){if(pt!==st){let It=t.get("EXT_clip_control");st?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),pt=st;let Tt=xt;xt=null,this.setClear(Tt)}},getReversed:function(){return pt},setTest:function(st){st?K(i.DEPTH_TEST):St(i.DEPTH_TEST)},setMask:function(st){tt!==st&&!L&&(i.depthMask(st),tt=st)},setFunc:function(st){if(pt&&(st=Oh[st]),ct!==st){switch(st){case Or:i.depthFunc(i.NEVER);break;case Br:i.depthFunc(i.ALWAYS);break;case zr:i.depthFunc(i.LESS);break;case ss:i.depthFunc(i.LEQUAL);break;case kr:i.depthFunc(i.EQUAL);break;case Vr:i.depthFunc(i.GEQUAL);break;case Gr:i.depthFunc(i.GREATER);break;case Hr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ct=st}},setLocked:function(st){L=st},setClear:function(st){xt!==st&&(xt=st,pt&&(st=1-st),i.clearDepth(st))},reset:function(){L=!1,tt=null,ct=null,xt=null,pt=!1}}}function s(){let L=!1,pt=null,tt=null,ct=null,xt=null,st=null,It=null,Tt=null,de=null;return{setTest:function(ae){L||(ae?K(i.STENCIL_TEST):St(i.STENCIL_TEST))},setMask:function(ae){pt!==ae&&!L&&(i.stencilMask(ae),pt=ae)},setFunc:function(ae,an,on){(tt!==ae||ct!==an||xt!==on)&&(i.stencilFunc(ae,an,on),tt=ae,ct=an,xt=on)},setOp:function(ae,an,on){(st!==ae||It!==an||Tt!==on)&&(i.stencilOp(ae,an,on),st=ae,It=an,Tt=on)},setLocked:function(ae){L=ae},setClear:function(ae){de!==ae&&(i.clearStencil(ae),de=ae)},reset:function(){L=!1,pt=null,tt=null,ct=null,xt=null,st=null,It=null,Tt=null,de=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},d={},h={},m=new WeakMap,_=[],M=null,p=!1,f=null,E=null,A=null,v=null,b=null,w=null,I=null,x=new Xt(0,0,0),C=0,N=!1,B=null,W=null,Y=null,U=null,X=null,Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,ot=0,J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(J)[1]),Z=ot>=1):J.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),Z=ot>=2);let nt=null,rt={},Nt=i.getParameter(i.SCISSOR_BOX),Ut=i.getParameter(i.VIEWPORT),ce=new Ee().fromArray(Nt),jt=new Ee().fromArray(Ut);function Qt(L,pt,tt,ct){let xt=new Uint8Array(4),st=i.createTexture();i.bindTexture(L,st),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let It=0;It<tt;It++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(pt,0,i.RGBA,1,1,ct,0,i.RGBA,i.UNSIGNED_BYTE,xt):i.texImage2D(pt+It,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xt);return st}let O={};O[i.TEXTURE_2D]=Qt(i.TEXTURE_2D,i.TEXTURE_2D,1),O[i.TEXTURE_CUBE_MAP]=Qt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),O[i.TEXTURE_2D_ARRAY]=Qt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),O[i.TEXTURE_3D]=Qt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(i.DEPTH_TEST),a.setFunc(ss),Jt(!1),ue(rl),K(i.CULL_FACE),Gt(Fn);function K(L){u[L]!==!0&&(i.enable(L),u[L]=!0)}function St(L){u[L]!==!1&&(i.disable(L),u[L]=!1)}function kt(L,pt){return h[L]!==pt?(i.bindFramebuffer(L,pt),h[L]=pt,L===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=pt),L===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=pt),!0):!1}function vt(L,pt){let tt=_,ct=!1;if(L){tt=m.get(pt),tt===void 0&&(tt=[],m.set(pt,tt));let xt=L.textures;if(tt.length!==xt.length||tt[0]!==i.COLOR_ATTACHMENT0){for(let st=0,It=xt.length;st<It;st++)tt[st]=i.COLOR_ATTACHMENT0+st;tt.length=xt.length,ct=!0}}else tt[0]!==i.BACK&&(tt[0]=i.BACK,ct=!0);ct&&i.drawBuffers(tt)}function Wt(L){return M!==L?(i.useProgram(L),M=L,!0):!1}let Ae={[Ii]:i.FUNC_ADD,[rh]:i.FUNC_SUBTRACT,[ah]:i.FUNC_REVERSE_SUBTRACT};Ae[oh]=i.MIN,Ae[lh]=i.MAX;let Zt={[ch]:i.ZERO,[hh]:i.ONE,[uh]:i.SRC_COLOR,[cl]:i.SRC_ALPHA,[_h]:i.SRC_ALPHA_SATURATE,[mh]:i.DST_COLOR,[fh]:i.DST_ALPHA,[dh]:i.ONE_MINUS_SRC_COLOR,[hl]:i.ONE_MINUS_SRC_ALPHA,[gh]:i.ONE_MINUS_DST_COLOR,[ph]:i.ONE_MINUS_DST_ALPHA,[xh]:i.CONSTANT_COLOR,[yh]:i.ONE_MINUS_CONSTANT_COLOR,[vh]:i.CONSTANT_ALPHA,[Mh]:i.ONE_MINUS_CONSTANT_ALPHA};function Gt(L,pt,tt,ct,xt,st,It,Tt,de,ae){if(L===Fn){p===!0&&(St(i.BLEND),p=!1);return}if(p===!1&&(K(i.BLEND),p=!0),L!==sh){if(L!==f||ae!==N){if((E!==Ii||b!==Ii)&&(i.blendEquation(i.FUNC_ADD),E=Ii,b=Ii),ae)switch(L){case hs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case al:i.blendFunc(i.ONE,i.ONE);break;case ol:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ll:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Bt("WebGLState: Invalid blending: ",L);break}else switch(L){case hs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case al:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ol:Bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ll:Bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Bt("WebGLState: Invalid blending: ",L);break}A=null,v=null,w=null,I=null,x.set(0,0,0),C=0,f=L,N=ae}return}xt=xt||pt,st=st||tt,It=It||ct,(pt!==E||xt!==b)&&(i.blendEquationSeparate(Ae[pt],Ae[xt]),E=pt,b=xt),(tt!==A||ct!==v||st!==w||It!==I)&&(i.blendFuncSeparate(Zt[tt],Zt[ct],Zt[st],Zt[It]),A=tt,v=ct,w=st,I=It),(Tt.equals(x)===!1||de!==C)&&(i.blendColor(Tt.r,Tt.g,Tt.b,de),x.copy(Tt),C=de),f=L,N=!1}function he(L,pt){L.side===pn?St(i.CULL_FACE):K(i.CULL_FACE);let tt=L.side===nn;pt&&(tt=!tt),Jt(tt),L.blending===hs&&L.transparent===!1?Gt(Fn):Gt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let ct=L.stencilWrite;o.setTest(ct),ct&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Be(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):St(i.SAMPLE_ALPHA_TO_COVERAGE)}function Jt(L){B!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),B=L)}function ue(L){L!==eh?(K(i.CULL_FACE),L!==W&&(L===rl?i.cullFace(i.BACK):L===nh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):St(i.CULL_FACE),W=L}function _e(L){L!==Y&&(Z&&i.lineWidth(L),Y=L)}function Be(L,pt,tt){L?(K(i.POLYGON_OFFSET_FILL),(U!==pt||X!==tt)&&(U=pt,X=tt,a.getReversed()&&(pt=-pt),i.polygonOffset(pt,tt))):St(i.POLYGON_OFFSET_FILL)}function xe(L){L?K(i.SCISSOR_TEST):St(i.SCISSOR_TEST)}function be(L){L===void 0&&(L=i.TEXTURE0+Q-1),nt!==L&&(i.activeTexture(L),nt=L)}function D(L,pt,tt){tt===void 0&&(nt===null?tt=i.TEXTURE0+Q-1:tt=nt);let ct=rt[tt];ct===void 0&&(ct={type:void 0,texture:void 0},rt[tt]=ct),(ct.type!==L||ct.texture!==pt)&&(nt!==tt&&(i.activeTexture(tt),nt=tt),i.bindTexture(L,pt||O[L]),ct.type=L,ct.texture=pt)}function Ce(){let L=rt[nt];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function se(){try{i.compressedTexImage2D(...arguments)}catch(L){Bt("WebGLState:",L)}}function T(){try{i.compressedTexImage3D(...arguments)}catch(L){Bt("WebGLState:",L)}}function g(){try{i.texSubImage2D(...arguments)}catch(L){Bt("WebGLState:",L)}}function F(){try{i.texSubImage3D(...arguments)}catch(L){Bt("WebGLState:",L)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(L){Bt("WebGLState:",L)}}function $(){try{i.compressedTexSubImage3D(...arguments)}catch(L){Bt("WebGLState:",L)}}function lt(){try{i.texStorage2D(...arguments)}catch(L){Bt("WebGLState:",L)}}function ht(){try{i.texStorage3D(...arguments)}catch(L){Bt("WebGLState:",L)}}function j(){try{i.texImage2D(...arguments)}catch(L){Bt("WebGLState:",L)}}function et(){try{i.texImage3D(...arguments)}catch(L){Bt("WebGLState:",L)}}function dt(L){return d[L]!==void 0?d[L]:i.getParameter(L)}function wt(L,pt){d[L]!==pt&&(i.pixelStorei(L,pt),d[L]=pt)}function ut(L){ce.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),ce.copy(L))}function ft(L){jt.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),jt.copy(L))}function Lt(L,pt){let tt=c.get(pt);tt===void 0&&(tt=new WeakMap,c.set(pt,tt));let ct=tt.get(L);ct===void 0&&(ct=i.getUniformBlockIndex(pt,L.name),tt.set(L,ct))}function Ft(L,pt){let ct=c.get(pt).get(L);l.get(pt)!==ct&&(i.uniformBlockBinding(pt,ct,L.__bindingPointIndex),l.set(pt,ct))}function zt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},nt=null,rt={},h={},m=new WeakMap,_=[],M=null,p=!1,f=null,E=null,A=null,v=null,b=null,w=null,I=null,x=new Xt(0,0,0),C=0,N=!1,B=null,W=null,Y=null,U=null,X=null,ce.set(0,0,i.canvas.width,i.canvas.height),jt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:K,disable:St,bindFramebuffer:kt,drawBuffers:vt,useProgram:Wt,setBlending:Gt,setMaterial:he,setFlipSided:Jt,setCullFace:ue,setLineWidth:_e,setPolygonOffset:Be,setScissorTest:xe,activeTexture:be,bindTexture:D,unbindTexture:Ce,compressedTexImage2D:se,compressedTexImage3D:T,texImage2D:j,texImage3D:et,pixelStorei:wt,getParameter:dt,updateUBOMapping:Lt,uniformBlockBinding:Ft,texStorage2D:lt,texStorage3D:ht,texSubImage2D:g,texSubImage3D:F,compressedTexSubImage2D:G,compressedTexSubImage3D:$,scissor:ut,viewport:ft,reset:zt}}function c0(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $t,u=new WeakMap,d=new Set,h,m=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(T,g){return _?new OffscreenCanvas(T,g):Rs("canvas")}function p(T,g,F){let G=1,$=se(T);if(($.width>F||$.height>F)&&(G=F/Math.max($.width,$.height)),G<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let lt=Math.floor(G*$.width),ht=Math.floor(G*$.height);h===void 0&&(h=M(lt,ht));let j=g?M(lt,ht):h;return j.width=lt,j.height=ht,j.getContext("2d").drawImage(T,0,0,lt,ht),Ot("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+lt+"x"+ht+")."),j}else return"data"in T&&Ot("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),T;return T}function f(T){return T.generateMipmaps}function E(T){i.generateMipmap(T)}function A(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(T,g,F,G,$,lt=!1){if(T!==null){if(i[T]!==void 0)return i[T];Ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ht;G&&(ht=t.get("EXT_texture_norm16"),ht||Ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=g;if(g===i.RED&&(F===i.FLOAT&&(j=i.R32F),F===i.HALF_FLOAT&&(j=i.R16F),F===i.UNSIGNED_BYTE&&(j=i.R8),F===i.UNSIGNED_SHORT&&ht&&(j=ht.R16_EXT),F===i.SHORT&&ht&&(j=ht.R16_SNORM_EXT)),g===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(j=i.R8UI),F===i.UNSIGNED_SHORT&&(j=i.R16UI),F===i.UNSIGNED_INT&&(j=i.R32UI),F===i.BYTE&&(j=i.R8I),F===i.SHORT&&(j=i.R16I),F===i.INT&&(j=i.R32I)),g===i.RG&&(F===i.FLOAT&&(j=i.RG32F),F===i.HALF_FLOAT&&(j=i.RG16F),F===i.UNSIGNED_BYTE&&(j=i.RG8),F===i.UNSIGNED_SHORT&&ht&&(j=ht.RG16_EXT),F===i.SHORT&&ht&&(j=ht.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(j=i.RG8UI),F===i.UNSIGNED_SHORT&&(j=i.RG16UI),F===i.UNSIGNED_INT&&(j=i.RG32UI),F===i.BYTE&&(j=i.RG8I),F===i.SHORT&&(j=i.RG16I),F===i.INT&&(j=i.RG32I)),g===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(j=i.RGB8UI),F===i.UNSIGNED_SHORT&&(j=i.RGB16UI),F===i.UNSIGNED_INT&&(j=i.RGB32UI),F===i.BYTE&&(j=i.RGB8I),F===i.SHORT&&(j=i.RGB16I),F===i.INT&&(j=i.RGB32I)),g===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),F===i.UNSIGNED_INT&&(j=i.RGBA32UI),F===i.BYTE&&(j=i.RGBA8I),F===i.SHORT&&(j=i.RGBA16I),F===i.INT&&(j=i.RGBA32I)),g===i.RGB&&(F===i.UNSIGNED_SHORT&&ht&&(j=ht.RGB16_EXT),F===i.SHORT&&ht&&(j=ht.RGB16_SNORM_EXT),F===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),g===i.RGBA){let et=lt?As:ne.getTransfer($);F===i.FLOAT&&(j=i.RGBA32F),F===i.HALF_FLOAT&&(j=i.RGBA16F),F===i.UNSIGNED_BYTE&&(j=et===le?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT&&ht&&(j=ht.RGBA16_EXT),F===i.SHORT&&ht&&(j=ht.RGBA16_SNORM_EXT),F===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function b(T,g){let F;return T?g===null||g===bn||g===ds?F=i.DEPTH24_STENCIL8:g===wn?F=i.DEPTH32F_STENCIL8:g===us&&(F=i.DEPTH24_STENCIL8,Ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===bn||g===ds?F=i.DEPTH_COMPONENT24:g===wn?F=i.DEPTH_COMPONENT32F:g===us&&(F=i.DEPTH_COMPONENT16),F}function w(T,g){return f(T)===!0||T.isFramebufferTexture&&T.minFilter!==ke&&T.minFilter!==Le?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function I(T){let g=T.target;g.removeEventListener("dispose",I),C(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&d.delete(g)}function x(T){let g=T.target;g.removeEventListener("dispose",x),B(g)}function C(T){let g=n.get(T);if(g.__webglInit===void 0)return;let F=T.source,G=m.get(F);if(G){let $=G[g.__cacheKey];$.usedTimes--,$.usedTimes===0&&N(T),Object.keys(G).length===0&&m.delete(F)}n.remove(T)}function N(T){let g=n.get(T);i.deleteTexture(g.__webglTexture);let F=T.source,G=m.get(F);delete G[g.__cacheKey],a.memory.textures--}function B(T){let g=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(g.__webglFramebuffer[G]))for(let $=0;$<g.__webglFramebuffer[G].length;$++)i.deleteFramebuffer(g.__webglFramebuffer[G][$]);else i.deleteFramebuffer(g.__webglFramebuffer[G]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[G])}else{if(Array.isArray(g.__webglFramebuffer))for(let G=0;G<g.__webglFramebuffer.length;G++)i.deleteFramebuffer(g.__webglFramebuffer[G]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let G=0;G<g.__webglColorRenderbuffer.length;G++)g.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[G]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let F=T.textures;for(let G=0,$=F.length;G<$;G++){let lt=n.get(F[G]);lt.__webglTexture&&(i.deleteTexture(lt.__webglTexture),a.memory.textures--),n.remove(F[G])}n.remove(T)}let W=0;function Y(){W=0}function U(){return W}function X(T){W=T}function Q(){let T=W;return T>=s.maxTextures&&Ot("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),W+=1,T}function Z(T){let g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function ot(T,g){let F=n.get(T);if(T.isVideoTexture&&D(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&F.__version!==T.version){let G=T.image;if(G===null)Ot("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Ot("WebGLRenderer: Texture marked for update but image is incomplete");else{St(F,T,g);return}}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+g)}function J(T,g){let F=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){St(F,T,g);return}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+g)}function nt(T,g){let F=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){St(F,T,g);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+g)}function rt(T,g){let F=n.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&F.__version!==T.version){kt(F,T,g);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+g)}let Nt={[Wr]:i.REPEAT,[Pn]:i.CLAMP_TO_EDGE,[Xr]:i.MIRRORED_REPEAT},Ut={[ke]:i.NEAREST,[wh]:i.NEAREST_MIPMAP_NEAREST,[$s]:i.NEAREST_MIPMAP_LINEAR,[Le]:i.LINEAR,[Ma]:i.LINEAR_MIPMAP_NEAREST,[yi]:i.LINEAR_MIPMAP_LINEAR},ce={[Ch]:i.NEVER,[Dh]:i.ALWAYS,[Rh]:i.LESS,[so]:i.LEQUAL,[Ih]:i.EQUAL,[ro]:i.GEQUAL,[Ph]:i.GREATER,[Lh]:i.NOTEQUAL};function jt(T,g){if(g.type===wn&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===Le||g.magFilter===Ma||g.magFilter===$s||g.magFilter===yi||g.minFilter===Le||g.minFilter===Ma||g.minFilter===$s||g.minFilter===yi)&&Ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,Nt[g.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Nt[g.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Nt[g.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,Ut[g.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,Ut[g.minFilter]),g.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,ce[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===ke||g.minFilter!==$s&&g.minFilter!==yi||g.type===wn&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Qt(T,g){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",I));let G=g.source,$=m.get(G);$===void 0&&($={},m.set(G,$));let lt=Z(g);if(lt!==T.__cacheKey){$[lt]===void 0&&($[lt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),$[lt].usedTimes++;let ht=$[T.__cacheKey];ht!==void 0&&($[T.__cacheKey].usedTimes--,ht.usedTimes===0&&N(g)),T.__cacheKey=lt,T.__webglTexture=$[lt].texture}return F}function O(T,g,F){return Math.floor(Math.floor(T/F)/g)}function K(T,g,F,G){let lt=T.updateRanges;if(lt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,F,G,g.data);else{lt.sort((wt,ut)=>wt.start-ut.start);let ht=0;for(let wt=1;wt<lt.length;wt++){let ut=lt[ht],ft=lt[wt],Lt=ut.start+ut.count,Ft=O(ft.start,g.width,4),zt=O(ut.start,g.width,4);ft.start<=Lt+1&&Ft===zt&&O(ft.start+ft.count-1,g.width,4)===Ft?ut.count=Math.max(ut.count,ft.start+ft.count-ut.start):(++ht,lt[ht]=ft)}lt.length=ht+1;let j=e.getParameter(i.UNPACK_ROW_LENGTH),et=e.getParameter(i.UNPACK_SKIP_PIXELS),dt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let wt=0,ut=lt.length;wt<ut;wt++){let ft=lt[wt],Lt=Math.floor(ft.start/4),Ft=Math.ceil(ft.count/4),zt=Lt%g.width,L=Math.floor(Lt/g.width),pt=Ft,tt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,zt),e.pixelStorei(i.UNPACK_SKIP_ROWS,L),e.texSubImage2D(i.TEXTURE_2D,0,zt,L,pt,tt,F,G,g.data)}T.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,j),e.pixelStorei(i.UNPACK_SKIP_PIXELS,et),e.pixelStorei(i.UNPACK_SKIP_ROWS,dt)}}function St(T,g,F){let G=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(G=i.TEXTURE_3D);let $=Qt(T,g),lt=g.source;e.bindTexture(G,T.__webglTexture,i.TEXTURE0+F);let ht=n.get(lt);if(lt.version!==ht.__version||$===!0){if(e.activeTexture(i.TEXTURE0+F),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let tt=ne.getPrimaries(ne.workingColorSpace),ct=g.colorSpace===Yn?null:ne.getPrimaries(g.colorSpace),xt=g.colorSpace===Yn||tt===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt)}e.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let et=p(g.image,!1,s.maxTextureSize);et=Ce(g,et);let dt=r.convert(g.format,g.colorSpace),wt=r.convert(g.type),ut=v(g.internalFormat,dt,wt,g.normalized,g.colorSpace,g.isVideoTexture);jt(G,g);let ft,Lt=g.mipmaps,Ft=g.isVideoTexture!==!0,zt=ht.__version===void 0||$===!0,L=lt.dataReady,pt=w(g,et);if(g.isDepthTexture)ut=b(g.format===vi,g.type),zt&&(Ft?e.texStorage2D(i.TEXTURE_2D,1,ut,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,ut,et.width,et.height,0,dt,wt,null));else if(g.isDataTexture)if(Lt.length>0){Ft&&zt&&e.texStorage2D(i.TEXTURE_2D,pt,ut,Lt[0].width,Lt[0].height);for(let tt=0,ct=Lt.length;tt<ct;tt++)ft=Lt[tt],Ft?L&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,ft.width,ft.height,dt,wt,ft.data):e.texImage2D(i.TEXTURE_2D,tt,ut,ft.width,ft.height,0,dt,wt,ft.data);g.generateMipmaps=!1}else Ft?(zt&&e.texStorage2D(i.TEXTURE_2D,pt,ut,et.width,et.height),L&&K(g,et,dt,wt)):e.texImage2D(i.TEXTURE_2D,0,ut,et.width,et.height,0,dt,wt,et.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ft&&zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,ut,Lt[0].width,Lt[0].height,et.depth);for(let tt=0,ct=Lt.length;tt<ct;tt++)if(ft=Lt[tt],g.format!==mn)if(dt!==null)if(Ft){if(L)if(g.layerUpdates.size>0){let xt=Dl(ft.width,ft.height,g.format,g.type);for(let st of g.layerUpdates){let It=ft.data.subarray(st*xt/ft.data.BYTES_PER_ELEMENT,(st+1)*xt/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,st,ft.width,ft.height,1,dt,It)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,ft.width,ft.height,et.depth,dt,ft.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,tt,ut,ft.width,ft.height,et.depth,0,ft.data,0,0);else Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,ft.width,ft.height,et.depth,dt,wt,ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,tt,ut,ft.width,ft.height,et.depth,0,dt,wt,ft.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{Ft&&zt&&e.texStorage2D(i.TEXTURE_2D,pt,ut,Lt[0].width,Lt[0].height);for(let tt=0,ct=Lt.length;tt<ct;tt++)ft=Lt[tt],g.format!==mn?dt!==null?Ft?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,tt,0,0,ft.width,ft.height,dt,ft.data):e.compressedTexImage2D(i.TEXTURE_2D,tt,ut,ft.width,ft.height,0,ft.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?L&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,ft.width,ft.height,dt,wt,ft.data):e.texImage2D(i.TEXTURE_2D,tt,ut,ft.width,ft.height,0,dt,wt,ft.data)}else if(g.isDataArrayTexture)if(Ft){if(zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,ut,et.width,et.height,et.depth),L)if(g.layerUpdates.size>0){let tt=Dl(et.width,et.height,g.format,g.type);for(let ct of g.layerUpdates){let xt=et.data.subarray(ct*tt/et.data.BYTES_PER_ELEMENT,(ct+1)*tt/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ct,et.width,et.height,1,dt,wt,xt)}g.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,dt,wt,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ut,et.width,et.height,et.depth,0,dt,wt,et.data);else if(g.isData3DTexture)Ft?(zt&&e.texStorage3D(i.TEXTURE_3D,pt,ut,et.width,et.height,et.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,dt,wt,et.data)):e.texImage3D(i.TEXTURE_3D,0,ut,et.width,et.height,et.depth,0,dt,wt,et.data);else if(g.isFramebufferTexture){if(zt)if(Ft)e.texStorage2D(i.TEXTURE_2D,pt,ut,et.width,et.height);else{let tt=et.width,ct=et.height;for(let xt=0;xt<pt;xt++)e.texImage2D(i.TEXTURE_2D,xt,ut,tt,ct,0,dt,wt,null),tt>>=1,ct>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){let tt=i.canvas;if(tt.hasAttribute("layoutsubtree")||tt.setAttribute("layoutsubtree","true"),et.parentNode!==tt){tt.appendChild(et),d.add(g),tt.onpaint=ct=>{let xt=ct.changedElements;for(let st of d)xt.includes(st.image)&&(st.needsUpdate=!0)},tt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,et);else{let xt=i.RGBA,st=i.RGBA,It=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,xt,st,It,et)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Lt.length>0){if(Ft&&zt){let tt=se(Lt[0]);e.texStorage2D(i.TEXTURE_2D,pt,ut,tt.width,tt.height)}for(let tt=0,ct=Lt.length;tt<ct;tt++)ft=Lt[tt],Ft?L&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,dt,wt,ft):e.texImage2D(i.TEXTURE_2D,tt,ut,dt,wt,ft);g.generateMipmaps=!1}else if(Ft){if(zt){let tt=se(et);e.texStorage2D(i.TEXTURE_2D,pt,ut,tt.width,tt.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,wt,et)}else e.texImage2D(i.TEXTURE_2D,0,ut,dt,wt,et);f(g)&&E(G),ht.__version=lt.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function kt(T,g,F){if(g.image.length!==6)return;let G=Qt(T,g),$=g.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+F);let lt=n.get($);if($.version!==lt.__version||G===!0){e.activeTexture(i.TEXTURE0+F);let ht=ne.getPrimaries(ne.workingColorSpace),j=g.colorSpace===Yn?null:ne.getPrimaries(g.colorSpace),et=g.colorSpace===Yn||ht===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let dt=g.isCompressedTexture||g.image[0].isCompressedTexture,wt=g.image[0]&&g.image[0].isDataTexture,ut=[];for(let st=0;st<6;st++)!dt&&!wt?ut[st]=p(g.image[st],!0,s.maxCubemapSize):ut[st]=wt?g.image[st].image:g.image[st],ut[st]=Ce(g,ut[st]);let ft=ut[0],Lt=r.convert(g.format,g.colorSpace),Ft=r.convert(g.type),zt=v(g.internalFormat,Lt,Ft,g.normalized,g.colorSpace),L=g.isVideoTexture!==!0,pt=lt.__version===void 0||G===!0,tt=$.dataReady,ct=w(g,ft);jt(i.TEXTURE_CUBE_MAP,g);let xt;if(dt){L&&pt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,zt,ft.width,ft.height);for(let st=0;st<6;st++){xt=ut[st].mipmaps;for(let It=0;It<xt.length;It++){let Tt=xt[It];g.format!==mn?Lt!==null?L?tt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,It,0,0,Tt.width,Tt.height,Lt,Tt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,It,zt,Tt.width,Tt.height,0,Tt.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,It,0,0,Tt.width,Tt.height,Lt,Ft,Tt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,It,zt,Tt.width,Tt.height,0,Lt,Ft,Tt.data)}}}else{if(xt=g.mipmaps,L&&pt){xt.length>0&&ct++;let st=se(ut[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,zt,st.width,st.height)}for(let st=0;st<6;st++)if(wt){L?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,ut[st].width,ut[st].height,Lt,Ft,ut[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,zt,ut[st].width,ut[st].height,0,Lt,Ft,ut[st].data);for(let It=0;It<xt.length;It++){let de=xt[It].image[st].image;L?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,It+1,0,0,de.width,de.height,Lt,Ft,de.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,It+1,zt,de.width,de.height,0,Lt,Ft,de.data)}}else{L?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Lt,Ft,ut[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,zt,Lt,Ft,ut[st]);for(let It=0;It<xt.length;It++){let Tt=xt[It];L?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,It+1,0,0,Lt,Ft,Tt.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,It+1,zt,Lt,Ft,Tt.image[st])}}}f(g)&&E(i.TEXTURE_CUBE_MAP),lt.__version=$.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function vt(T,g,F,G,$,lt){let ht=r.convert(F.format,F.colorSpace),j=r.convert(F.type),et=v(F.internalFormat,ht,j,F.normalized,F.colorSpace),dt=n.get(g),wt=n.get(F);if(wt.__renderTarget=g,!dt.__hasExternalTextures){let ut=Math.max(1,g.width>>lt),ft=Math.max(1,g.height>>lt);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?e.texImage3D($,lt,et,ut,ft,g.depth,0,ht,j,null):e.texImage2D($,lt,et,ut,ft,0,ht,j,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),be(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,$,wt.__webglTexture,0,xe(g)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,$,wt.__webglTexture,lt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Wt(T,g,F){if(i.bindRenderbuffer(i.RENDERBUFFER,T),g.depthBuffer){let G=g.depthTexture,$=G&&G.isDepthTexture?G.type:null,lt=b(g.stencilBuffer,$),ht=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;be(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe(g),lt,g.width,g.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe(g),lt,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,lt,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,T)}else{let G=g.textures;for(let $=0;$<G.length;$++){let lt=G[$],ht=r.convert(lt.format,lt.colorSpace),j=r.convert(lt.type),et=v(lt.internalFormat,ht,j,lt.normalized,lt.colorSpace);be(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe(g),et,g.width,g.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe(g),et,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,et,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ae(T,g,F){let G=g.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=n.get(g.depthTexture);if($.__renderTarget=g,(!$.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),G){if($.__webglInit===void 0&&($.__webglInit=!0,g.depthTexture.addEventListener("dispose",I)),$.__webglTexture===void 0){$.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),jt(i.TEXTURE_CUBE_MAP,g.depthTexture);let dt=r.convert(g.depthTexture.format),wt=r.convert(g.depthTexture.type),ut;g.depthTexture.format===Ln?ut=i.DEPTH_COMPONENT24:g.depthTexture.format===vi&&(ut=i.DEPTH24_STENCIL8);for(let ft=0;ft<6;ft++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,ut,g.width,g.height,0,dt,wt,null)}}else ot(g.depthTexture,0);let lt=$.__webglTexture,ht=xe(g),j=G?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,et=g.depthTexture.format===vi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===Ln)be(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,j,lt,0,ht):i.framebufferTexture2D(i.FRAMEBUFFER,et,j,lt,0);else if(g.depthTexture.format===vi)be(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,j,lt,0,ht):i.framebufferTexture2D(i.FRAMEBUFFER,et,j,lt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Zt(T){let g=n.get(T),F=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){let G=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),G){let $=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,G.removeEventListener("dispose",$)};G.addEventListener("dispose",$),g.__depthDisposeCallback=$}g.__boundDepthTexture=G}if(T.depthTexture&&!g.__autoAllocateDepthBuffer)if(F)for(let G=0;G<6;G++)Ae(g.__webglFramebuffer[G],T,G);else{let G=T.texture.mipmaps;G&&G.length>0?Ae(g.__webglFramebuffer[0],T,0):Ae(g.__webglFramebuffer,T,0)}else if(F){g.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[G]),g.__webglDepthbuffer[G]===void 0)g.__webglDepthbuffer[G]=i.createRenderbuffer(),Wt(g.__webglDepthbuffer[G],T,!1);else{let $=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=g.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,lt)}}else{let G=T.texture.mipmaps;if(G&&G.length>0?e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Wt(g.__webglDepthbuffer,T,!1);else{let $=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,lt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Gt(T,g,F){let G=n.get(T);g!==void 0&&vt(G.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Zt(T)}function he(T){let g=T.texture,F=n.get(T),G=n.get(g);T.addEventListener("dispose",x);let $=T.textures,lt=T.isWebGLCubeRenderTarget===!0,ht=$.length>1;if(ht||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=g.version,a.memory.textures++),lt){F.__webglFramebuffer=[];for(let j=0;j<6;j++)if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer[j]=[];for(let et=0;et<g.mipmaps.length;et++)F.__webglFramebuffer[j][et]=i.createFramebuffer()}else F.__webglFramebuffer[j]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer=[];for(let j=0;j<g.mipmaps.length;j++)F.__webglFramebuffer[j]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(ht)for(let j=0,et=$.length;j<et;j++){let dt=n.get($[j]);dt.__webglTexture===void 0&&(dt.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&be(T)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let j=0;j<$.length;j++){let et=$[j];F.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[j]);let dt=r.convert(et.format,et.colorSpace),wt=r.convert(et.type),ut=v(et.internalFormat,dt,wt,et.normalized,et.colorSpace,T.isXRRenderTarget===!0),ft=xe(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,ut,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,F.__webglColorRenderbuffer[j])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Wt(F.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(lt){e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),jt(i.TEXTURE_CUBE_MAP,g);for(let j=0;j<6;j++)if(g.mipmaps&&g.mipmaps.length>0)for(let et=0;et<g.mipmaps.length;et++)vt(F.__webglFramebuffer[j][et],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,et);else vt(F.__webglFramebuffer[j],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);f(g)&&E(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ht){for(let j=0,et=$.length;j<et;j++){let dt=$[j],wt=n.get(dt),ut=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ut=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,wt.__webglTexture),jt(ut,dt),vt(F.__webglFramebuffer,T,dt,i.COLOR_ATTACHMENT0+j,ut,0),f(dt)&&E(ut)}e.unbindTexture()}else{let j=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(j=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(j,G.__webglTexture),jt(j,g),g.mipmaps&&g.mipmaps.length>0)for(let et=0;et<g.mipmaps.length;et++)vt(F.__webglFramebuffer[et],T,g,i.COLOR_ATTACHMENT0,j,et);else vt(F.__webglFramebuffer,T,g,i.COLOR_ATTACHMENT0,j,0);f(g)&&E(j),e.unbindTexture()}T.depthBuffer&&Zt(T)}function Jt(T){let g=T.textures;for(let F=0,G=g.length;F<G;F++){let $=g[F];if(f($)){let lt=A(T),ht=n.get($).__webglTexture;e.bindTexture(lt,ht),E(lt),e.unbindTexture()}}}let ue=[],_e=[];function Be(T){if(T.samples>0){if(be(T)===!1){let g=T.textures,F=T.width,G=T.height,$=i.COLOR_BUFFER_BIT,lt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=n.get(T),j=g.length>1;if(j)for(let dt=0;dt<g.length;dt++)e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer);let et=T.texture.mipmaps;et&&et.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let dt=0;dt<g.length;dt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),j){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ht.__webglColorRenderbuffer[dt]);let wt=n.get(g[dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,wt,0)}i.blitFramebuffer(0,0,F,G,0,0,F,G,$,i.NEAREST),l===!0&&(ue.length=0,_e.length=0,ue.push(i.COLOR_ATTACHMENT0+dt),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&(ue.push(lt),_e.push(lt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,_e)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ue))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),j)for(let dt=0;dt<g.length;dt++){e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,ht.__webglColorRenderbuffer[dt]);let wt=n.get(g[dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,wt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){let g=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function xe(T){return Math.min(s.maxSamples,T.samples)}function be(T){let g=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function D(T){let g=a.render.frame;u.get(T)!==g&&(u.set(T,g),T.update())}function Ce(T,g){let F=T.colorSpace,G=T.format,$=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==Ts&&F!==Yn&&(ne.getTransfer(F)===le?(G!==mn||$!==un)&&Ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Bt("WebGLTextures: Unsupported texture color space:",F)),g}function se(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=Q,this.resetTextureUnits=Y,this.getTextureUnits=U,this.setTextureUnits=X,this.setTexture2D=ot,this.setTexture2DArray=J,this.setTexture3D=nt,this.setTextureCube=rt,this.rebindTextures=Gt,this.setupRenderTarget=he,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=Zt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=be,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function h0(i,t){function e(n,s=Yn){let r,a=ne.getTransfer(s);if(n===un)return i.UNSIGNED_BYTE;if(n===ba)return i.UNSIGNED_SHORT_4_4_4_4;if(n===wa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Sl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===bl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===vl)return i.BYTE;if(n===Ml)return i.SHORT;if(n===us)return i.UNSIGNED_SHORT;if(n===Sa)return i.INT;if(n===bn)return i.UNSIGNED_INT;if(n===wn)return i.FLOAT;if(n===En)return i.HALF_FLOAT;if(n===wl)return i.ALPHA;if(n===El)return i.RGB;if(n===mn)return i.RGBA;if(n===Ln)return i.DEPTH_COMPONENT;if(n===vi)return i.DEPTH_STENCIL;if(n===Tl)return i.RED;if(n===Ea)return i.RED_INTEGER;if(n===Mi)return i.RG;if(n===Ta)return i.RG_INTEGER;if(n===Aa)return i.RGBA_INTEGER;if(n===Js||n===Ks||n===js||n===Qs)if(a===le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Js)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Js)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ks)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===js)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ca||n===Ra||n===Ia||n===Pa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ca)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ra)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ia)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Pa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===La||n===Da||n===Na||n===Ua||n===Fa||n===tr||n===Oa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===La||n===Da)return a===le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Na)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ua)return r.COMPRESSED_R11_EAC;if(n===Fa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===tr)return r.COMPRESSED_RG11_EAC;if(n===Oa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ba||n===za||n===ka||n===Va||n===Ga||n===Ha||n===Wa||n===Xa||n===qa||n===Ya||n===Za||n===$a||n===Ja||n===Ka)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ba)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===za)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ka)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Va)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ga)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ha)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wa)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xa)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qa)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ya)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Za)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$a)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ja)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ka)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ja||n===Qa||n===to)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ja)return a===le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===to)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===eo||n===no||n===er||n===io)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===eo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===no)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===er)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===io)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ds?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var u0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,d0=`
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

}`,jl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Vs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new $e({vertexShader:u0,fragmentShader:d0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ve(new Hs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ql=class extends Dn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,m=null,_=null,M=typeof XRWebGLBinding<"u",p=new jl,f={},E=e.getContextAttributes(),A=null,v=null,b=[],w=[],I=new $t,x=null,C=null,N=new Ze;N.viewport=new Ee;let B=new Ze;B.viewport=new Ee;let W=[N,B],Y=new _a,U=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let K=b[O];return K===void 0&&(K=new os,b[O]=K),K.getTargetRaySpace()},this.getControllerGrip=function(O){let K=b[O];return K===void 0&&(K=new os,b[O]=K),K.getGripSpace()},this.getHand=function(O){let K=b[O];return K===void 0&&(K=new os,b[O]=K),K.getHandSpace()};function Q(O){let K=w.indexOf(O.inputSource);if(K===-1)return;let St=b[K];St!==void 0&&(St.update(O.inputSource,O.frame,c||a),St.dispatchEvent({type:O.type,data:O.inputSource}))}function Z(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",ot);for(let O=0;O<b.length;O++){let K=w[O];K!==null&&(w[O]=null,b[O].disconnect(K))}U=null,X=null,p.reset();for(let O in f)delete f[O];if(t.setRenderTarget(A),m=null,h=null,d=null,s=null,v=null,Qt.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(I.width,I.height,!1),C!==null){let O=C.camera;O.fov=C.fov,O.zoom=C.zoom,O.updateProjectionMatrix(),C=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){r=O,n.isPresenting===!0&&Ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){o=O,n.isPresenting===!0&&Ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(O){if(s=O,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",ot),E.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(I),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,kt=null,vt=null;E.depth&&(vt=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,St=E.stencil?vi:Ln,kt=E.stencil?ds:bn);let Wt={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Wt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),v=new sn(h.textureWidth,h.textureHeight,{format:mn,type:un,depthTexture:new fi(h.textureWidth,h.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let St={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,St),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new sn(m.framebufferWidth,m.framebufferHeight,{format:mn,type:un,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Qt.setContext(s),Qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ot(O){for(let K=0;K<O.removed.length;K++){let St=O.removed[K],kt=w.indexOf(St);kt>=0&&(w[kt]=null,b[kt].disconnect(St))}for(let K=0;K<O.added.length;K++){let St=O.added[K],kt=w.indexOf(St);if(kt===-1){for(let Wt=0;Wt<b.length;Wt++)if(Wt>=w.length){w.push(St),kt=Wt;break}else if(w[Wt]===null){w[Wt]=St,kt=Wt;break}if(kt===-1)break}let vt=b[kt];vt&&vt.connect(St)}}let J=new z,nt=new z;function rt(O,K,St){J.setFromMatrixPosition(K.matrixWorld),nt.setFromMatrixPosition(St.matrixWorld);let kt=J.distanceTo(nt),vt=K.projectionMatrix.elements,Wt=St.projectionMatrix.elements,Ae=vt[14]/(vt[10]-1),Zt=vt[14]/(vt[10]+1),Gt=(vt[9]+1)/vt[5],he=(vt[9]-1)/vt[5],Jt=(vt[8]-1)/vt[0],ue=(Wt[8]+1)/Wt[0],_e=Ae*Jt,Be=Ae*ue,xe=kt/(-Jt+ue),be=xe*-Jt;if(K.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(be),O.translateZ(xe),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert(),vt[10]===-1)O.projectionMatrix.copy(K.projectionMatrix),O.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let D=Ae+xe,Ce=Zt+xe,se=_e-be,T=Be+(kt-be),g=Gt*Zt/Ce*D,F=he*Zt/Ce*D;O.projectionMatrix.makePerspective(se,T,g,F,D,Ce),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}}function Nt(O,K){K===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(K.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(s===null)return;let K=O.near,St=O.far;p.texture!==null&&(p.depthNear>0&&(K=p.depthNear),p.depthFar>0&&(St=p.depthFar)),Y.near=B.near=N.near=K,Y.far=B.far=N.far=St,(U!==Y.near||X!==Y.far)&&(s.updateRenderState({depthNear:Y.near,depthFar:Y.far}),U=Y.near,X=Y.far),Y.layers.mask=O.layers.mask|6,N.layers.mask=Y.layers.mask&-5,B.layers.mask=Y.layers.mask&-3;let kt=O.parent,vt=Y.cameras;Nt(Y,kt);for(let Wt=0;Wt<vt.length;Wt++)Nt(vt[Wt],kt);vt.length===2?rt(Y,N,B):Y.projectionMatrix.copy(N.projectionMatrix),C===null&&O.isPerspectiveCamera&&(C={camera:O,fov:O.fov,zoom:O.zoom}),Ut(O,Y,kt)};function Ut(O,K,St){St===null?O.matrix.copy(K.matrixWorld):(O.matrix.copy(St.matrixWorld),O.matrix.invert(),O.matrix.multiply(K.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(K.projectionMatrix),O.projectionMatrixInverse.copy(K.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=Yr*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(O){l=O,h!==null&&(h.fixedFoveation=O),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=O)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(Y)},this.getCameraTexture=function(O){return f[O]};let ce=null;function jt(O,K){if(u=K.getViewerPose(c||a),_=K,u!==null){let St=u.views;m!==null&&(t.setRenderTargetFramebuffer(v,m.framebuffer),t.setRenderTarget(v));let kt=!1;St.length!==Y.cameras.length&&(Y.cameras.length=0,kt=!0);for(let Zt=0;Zt<St.length;Zt++){let Gt=St[Zt],he=null;if(m!==null)he=m.getViewport(Gt);else{let ue=d.getViewSubImage(h,Gt);he=ue.viewport,Zt===0&&(t.setRenderTargetTextures(v,ue.colorTexture,ue.depthStencilTexture),t.setRenderTarget(v))}let Jt=W[Zt];Jt===void 0&&(Jt=new Ze,Jt.layers.enable(Zt),Jt.viewport=new Ee,W[Zt]=Jt),Jt.matrix.fromArray(Gt.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(Gt.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(he.x,he.y,he.width,he.height),Zt===0&&(Y.matrix.copy(Jt.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),kt===!0&&Y.cameras.push(Jt)}let vt=s.enabledFeatures;if(vt&&vt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){d=n.getBinding();let Zt=d.getDepthInformation(St[0]);Zt&&Zt.isValid&&Zt.texture&&p.init(Zt,s.renderState)}if(vt&&vt.includes("camera-access")&&M){t.state.unbindTexture(),d=n.getBinding();for(let Zt=0;Zt<St.length;Zt++){let Gt=St[Zt].camera;if(Gt){let he=f[Gt];he||(he=new Vs,f[Gt]=he);let Jt=d.getCameraImage(Gt);he.sourceTexture=Jt}}}}for(let St=0;St<b.length;St++){let kt=w[St],vt=b[St];kt!==null&&vt!==void 0&&vt.update(kt,K,c||a)}ce&&ce(O,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),_=null}let Qt=new hu;Qt.setAnimationLoop(jt),this.setAnimationLoop=function(O){ce=O},this.dispose=function(){}}},f0=new we,gu=new Ht;gu.set(-1,0,0,0,1,0,0,0,1);function p0(i,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Il(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,E,A,v){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(p,f):f.isMeshLambertMaterial?(r(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(p,f),d(p,f)):f.isMeshPhongMaterial?(r(p,f),u(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(p,f),h(p,f),f.isMeshPhysicalMaterial&&m(p,f,v)):f.isMeshMatcapMaterial?(r(p,f),_(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),M(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,E,A):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===nn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===nn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let E=t.get(f),A=E.envMap,v=E.envMapRotation;A&&(p.envMap.value=A,p.envMapRotation.value.setFromMatrix4(f0.makeRotationFromEuler(v)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(gu),p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,E,A){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*E,p.scale.value=A*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,E){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===nn&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.retroreflectivity>0&&(p.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,f){f.matcap&&(p.matcap.value=f.matcap)}function M(p,f){let E=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function m0(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,b){let w=b.program;n.uniformBlockBinding(v,w)}function c(v,b){let w=s[v.id];w===void 0&&(p(v),w=u(v),s[v.id]=w,v.addEventListener("dispose",E));let I=b.program;n.updateUBOMapping(v,I);let x=t.render.frame;r[v.id]!==x&&(h(v),r[v.id]=x)}function u(v){let b=d();v.__bindingPointIndex=b;let w=i.createBuffer(),I=v.__size,x=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,I,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,w),w}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Bt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){let b=s[v.id],w=v.uniforms,I=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let x=0,C=w.length;x<C;x++){let N=w[x];if(Array.isArray(N))for(let B=0,W=N.length;B<W;B++)m(N[B],x,B,I);else m(N,x,0,I)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(v,b,w,I){if(M(v,b,w,I)===!0){let x=v.__offset,C=v.value;if(Array.isArray(C)){let N=0;for(let B=0;B<C.length;B++){let W=C[B],Y=f(W);_(W,v.__data,N),typeof W!="number"&&typeof W!="boolean"&&!W.isMatrix3&&!ArrayBuffer.isView(W)&&(N+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(C,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,v.__data)}}function _(v,b,w){typeof v=="number"||typeof v=="boolean"?b[0]=v:v.isMatrix3?(b[0]=v.elements[0],b[1]=v.elements[1],b[2]=v.elements[2],b[3]=0,b[4]=v.elements[3],b[5]=v.elements[4],b[6]=v.elements[5],b[7]=0,b[8]=v.elements[6],b[9]=v.elements[7],b[10]=v.elements[8],b[11]=0):ArrayBuffer.isView(v)?b.set(new v.constructor(v.buffer,v.byteOffset,b.length)):v.toArray(b,w)}function M(v,b,w,I){let x=v.value,C=b+"_"+w;if(I[C]===void 0)return typeof x=="number"||typeof x=="boolean"?I[C]=x:ArrayBuffer.isView(x)?I[C]=x.slice():I[C]=x.clone(),!0;{let N=I[C];if(typeof x=="number"||typeof x=="boolean"){if(N!==x)return I[C]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(N.equals(x)===!1)return N.copy(x),!0}}return!1}function p(v){let b=v.uniforms,w=0,I=16;for(let C=0,N=b.length;C<N;C++){let B=Array.isArray(b[C])?b[C]:[b[C]];for(let W=0,Y=B.length;W<Y;W++){let U=B[W],X=Array.isArray(U.value)?U.value:[U.value];for(let Q=0,Z=X.length;Q<Z;Q++){let ot=X[Q],J=f(ot),nt=w%I,rt=nt%J.boundary,Nt=nt+rt;w+=rt,Nt!==0&&I-Nt<J.storage&&(w+=I-Nt),U.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=w,w+=J.storage}}}let x=w%I;return x>0&&(w+=I-x),v.__size=w,v.__cache={},this}function f(v){let b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?Ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):Ot("WebGLRenderer: Unsupported uniform value type.",v),b}function E(v){let b=v.target;b.removeEventListener("dispose",E);let w=a.indexOf(b.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function A(){for(let v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:A}}var g0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),On=null;function _0(){return On===null&&(On=new jr(g0,16,16,Mi,En),On.name="DFG_LUT",On.minFilter=Le,On.magFilter=Le,On.wrapS=Pn,On.wrapT=Pn,On.generateMipmaps=!1,On.needsUpdate=!0),On}var ho=class{constructor(t={}){let{canvas:e=Nh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:m=un}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;let M=m,p=new Set([Aa,Ta,Ea]),f=new Set([un,bn,us,ds,ba,wa]),E=new Uint32Array(4),A=new Int32Array(4),v=new z,b=null,w=null,I=[],x=[],C=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Sn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,B=!1,W=null,Y=null,U=null,X=null;this._outputColorSpace=Ye;let Q=0,Z=0,ot=null,J=-1,nt=null,rt=new Ee,Nt=new Ee,Ut=null,ce=new Xt(0),jt=0,Qt=e.width,O=e.height,K=1,St=null,kt=null,vt=new Ee(0,0,Qt,O),Wt=new Ee(0,0,Qt,O),Ae=!1,Zt=new Bs,Gt=!1,he=!1,Jt=new we,ue=new z,_e=new Ee,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},xe=!1;function be(){return ot===null?K:1}let D=n;function Ce(y,P){return e.getContext(y,P)}let se,T,g,F,G,$,lt,ht,j,et,dt,wt,ut,ft,Lt,Ft,zt,L,pt,tt,ct,xt,st;try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",de,!1),e.addEventListener("webglcontextrestored",ae,!1),e.addEventListener("webglcontextcreationerror",an,!1),D===null){let P="webgl2";if(D=Ce(P,y),D===null)throw Ce(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}It()}catch(y){throw e.removeEventListener("webglcontextlost",de,!1),e.removeEventListener("webglcontextrestored",ae,!1),e.removeEventListener("webglcontextcreationerror",an,!1),Bt("WebGLRenderer: "+y.message),y}function It(){se=new wm(D),se.init(),ct=new h0(D,se),T=new pm(D,se,t,ct),g=new l0(D,se),T.reversedDepthBuffer&&h&&g.buffers.depth.setReversed(!0),Y=D.createFramebuffer(),U=D.createFramebuffer(),X=D.createFramebuffer(),F=new Am(D),G=new Zg,$=new c0(D,se,g,G,T,ct,F),lt=new bm(N),ht=new Cd(D),xt=new dm(D,ht),j=new Em(D,ht,F,xt),et=new Rm(D,j,ht,xt,F),L=new Cm(D,T,$),Lt=new mm(G),dt=new Yg(N,lt,se,T,xt,Lt),wt=new p0(N,G),ut=new Jg,ft=new n0(se),zt=new um(N,lt,g,et,_,l),Ft=new o0(N,et,T),st=new m0(D,F,T,g),pt=new fm(D,se,F),tt=new Tm(D,se,F),F.programs=dt.programs,N.capabilities=T,N.extensions=se,N.properties=G,N.renderLists=ut,N.shadowMap=Ft,N.state=g,N.info=F}M!==un&&(C=new Pm(M,e.width,e.height,o,s,r));let Tt=new Ql(N,D);this.xr=Tt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let y=se.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=se.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(y){y!==void 0&&(K=y,this.setSize(Qt,O,!1))},this.getSize=function(y){return y.set(Qt,O)},this.setSize=function(y,P,q=!0){if(Tt.isPresenting){Ot("WebGLRenderer: Can't change size while VR device is presenting.");return}Qt=y,O=P,e.width=Math.floor(y*K),e.height=Math.floor(P*K),q===!0&&(e.style.width=y+"px",e.style.height=P+"px"),C!==null&&C.setSize(e.width,e.height),this.setViewport(0,0,y,P)},this.getDrawingBufferSize=function(y){return y.set(Qt*K,O*K).floor()},this.setDrawingBufferSize=function(y,P,q){Qt=y,O=P,K=q,e.width=Math.floor(y*q),e.height=Math.floor(P*q),this.setViewport(0,0,y,P)},this.setEffects=function(y){if(M===un){Bt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let P=0;P<y.length;P++)if(y[P].isOutputPass===!0){Ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(rt)},this.getViewport=function(y){return y.copy(vt)},this.setViewport=function(y,P,q,H){y.isVector4?vt.set(y.x,y.y,y.z,y.w):vt.set(y,P,q,H),g.viewport(rt.copy(vt).multiplyScalar(K).round())},this.getScissor=function(y){return y.copy(Wt)},this.setScissor=function(y,P,q,H){y.isVector4?Wt.set(y.x,y.y,y.z,y.w):Wt.set(y,P,q,H),g.scissor(Nt.copy(Wt).multiplyScalar(K).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(y){g.setScissorTest(Ae=y)},this.setOpaqueSort=function(y){St=y},this.setTransparentSort=function(y){kt=y},this.getClearColor=function(y){return y.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor(...arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha(...arguments)},this.clear=function(y=!0,P=!0,q=!0){let H=0;if(y){let k=!1;if(ot!==null){let mt=ot.texture.format;k=p.has(mt)}if(k){let mt=ot.texture.type,Et=f.has(mt),yt=zt.getClearColor(),Ct=zt.getClearAlpha(),Dt=yt.r,qt=yt.g,ee=yt.b;Et?(E[0]=Dt,E[1]=qt,E[2]=ee,E[3]=Ct,D.clearBufferuiv(D.COLOR,0,E)):(A[0]=Dt,A[1]=qt,A[2]=ee,A[3]=Ct,D.clearBufferiv(D.COLOR,0,A))}else H|=D.COLOR_BUFFER_BIT}P&&(H|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(H|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&D.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),W=y},this.dispose=function(){e.removeEventListener("webglcontextlost",de,!1),e.removeEventListener("webglcontextrestored",ae,!1),e.removeEventListener("webglcontextcreationerror",an,!1),zt.dispose(),ut.dispose(),ft.dispose(),G.dispose(),lt.dispose(),et.dispose(),xt.dispose(),st.dispose(),dt.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",R),Tt.removeEventListener("sessionend",V),it.stop()};function de(y){y.preventDefault(),Is("WebGLRenderer: Context Lost."),B=!0}function ae(){Is("WebGLRenderer: Context Restored."),B=!1;let y=F.autoReset,P=Ft.enabled,q=Ft.autoUpdate,H=Ft.needsUpdate,k=Ft.type;It(),F.autoReset=y,Ft.enabled=P,Ft.autoUpdate=q,Ft.needsUpdate=H,Ft.type=k}function an(y){Bt("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function on(y){let P=y.target;P.removeEventListener("dispose",on),Eo(P)}function Eo(y){To(y),G.remove(y)}function To(y){let P=G.get(y).programs;P!==void 0&&(P.forEach(function(q){dt.releaseProgram(q)}),y.isShaderMaterial&&dt.releaseShaderCache(y))}this.renderBufferDirect=function(y,P,q,H,k,mt){P===null&&(P=Be);let Et=k.isMesh&&k.matrixWorld.determinantAffine()<0,yt=De(y,P,q,H,k);g.setMaterial(H,Et);let Ct=q.index,Dt=1;if(H.wireframe===!0){if(Ct=j.getWireframeAttribute(q),Ct===void 0)return;Dt=2}let qt=q.drawRange,ee=q.attributes.position,Rt=qt.start*Dt,oe=(qt.start+qt.count)*Dt;mt!==null&&(Rt=Math.max(Rt,mt.start*Dt),oe=Math.min(oe,(mt.start+mt.count)*Dt)),Ct!==null?(Rt=Math.max(Rt,0),oe=Math.min(oe,Ct.count)):ee!=null&&(Rt=Math.max(Rt,0),oe=Math.min(oe,ee.count));let Ie=oe-Rt;if(Ie<0||Ie===1/0)return;xt.setup(k,H,yt,q,Ct);let ye,me=pt;if(Ct!==null&&(ye=ht.get(Ct),me=tt,me.setIndex(ye)),k.isMesh)H.wireframe===!0?(g.setLineWidth(H.wireframeLinewidth*be()),me.setMode(D.LINES)):me.setMode(D.TRIANGLES);else if(k.isLine){let We=H.linewidth;We===void 0&&(We=1),g.setLineWidth(We*be()),k.isLineSegments?me.setMode(D.LINES):k.isLineLoop?me.setMode(D.LINE_LOOP):me.setMode(D.LINE_STRIP)}else k.isPoints?me.setMode(D.POINTS):k.isSprite&&me.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(se.get("WEBGL_multi_draw"))me.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let We=k._multiDrawStarts,bt=k._multiDrawCounts,je=k._multiDrawCount,re=Ct?ht.get(Ct).bytesPerElement:1,dn=G.get(H).currentProgram.getUniforms();for(let An=0;An<je;An++)dn.setValue(D,"_gl_DrawID",An),me.render(We[An]/re,bt[An])}else if(k.isInstancedMesh)me.renderInstances(Rt,Ie,k.count);else if(q.isInstancedBufferGeometry){let We=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,bt=Math.min(q.instanceCount,We);me.renderInstances(Rt,Ie,bt)}else me.render(Rt,Ie)};function ar(y,P,q,H){W!==null&&y.isNodeMaterial&&W.setObject(H,y),Gt===!0&&Lt.setState(y,q,!1),y.transparent===!0&&y.side===pn&&y.forceSinglePass===!1?(y.side=nn,y.needsUpdate=!0,te(y,P,H),y.side=_i,y.needsUpdate=!0,te(y,P,H),y.side=pn):te(y,P,H)}this.compile=function(y,P,q=null){q===null&&(q=y),W!==null&&W.renderStart(y,P,q),w=ft.get(q),w.init(P),x.push(w),q.traverseVisible(function(k){k.isLight&&k.layers.test(P.layers)&&(w.pushLight(k),k.castShadow&&w.pushShadow(k))}),y!==q&&y.traverseVisible(function(k){k.isLight&&k.layers.test(P.layers)&&(w.pushLight(k),k.castShadow&&w.pushShadow(k))}),w.setupLights(),W!==null&&W.updateLights(w.state.lightsArray),he=this.localClippingEnabled,Gt=Lt.init(this.clippingPlanes,he),Gt===!0&&Lt.setGlobalState(this.clippingPlanes,P),W!==null&&Ft.render(w.state.shadowsArray,q,P);let H=new Set;return y.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let mt=k.material;if(mt)if(Array.isArray(mt))for(let Et=0;Et<mt.length;Et++){let yt=mt[Et];ar(yt,q,P,k),H.add(yt)}else ar(mt,q,P,k),H.add(mt)}),w=x.pop(),W!==null&&W.renderEnd(),H},this.compileAsync=function(y,P,q=null){let H=this.compile(y,P,q);return new Promise(k=>{function mt(){if(H.forEach(function(Et){let Ct=G.get(Et).currentProgram;(Ct===void 0||Ct.isReady())&&H.delete(Et)}),H.size===0){k(y);return}setTimeout(mt,10)}se.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let Oi=null;function Ao(y){Oi&&Oi(y)}function R(){it.stop()}function V(){it.start()}let it=new hu;it.setAnimationLoop(Ao),typeof self<"u"&&it.setContext(self),this.setAnimationLoop=function(y){Oi=y,Tt.setAnimationLoop(y),y===null?it.stop():it.start()},Tt.addEventListener("sessionstart",R),Tt.addEventListener("sessionend",V),this.render=function(y,P){if(P!==void 0&&P.isCamera!==!0){Bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;W!==null&&W.renderStart(y,P);let q=Tt.enabled===!0&&Tt.isPresenting===!0,H=C!==null&&(ot===null||q)&&C.begin(N,ot);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(P),P=Tt.getCamera()),y.isScene===!0&&y.onBeforeRender(N,y,P,ot),w=ft.get(y,x.length),w.init(P),w.state.textureUnits=$.getTextureUnits(),x.push(w),Jt.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),Zt.setFromProjectionMatrix(Jt,Mn,P.reversedDepth),he=this.localClippingEnabled,Gt=Lt.init(this.clippingPlanes,he),b=ut.get(y,I.length),b.init(),I.push(b),Tt.enabled===!0&&Tt.isPresenting===!0){let Et=N.xr.getDepthSensingMesh();Et!==null&&Mt(Et,P,-1/0,N.sortObjects)}Mt(y,P,0,N.sortObjects),b.finish(),W!==null&&W.updateLights(w.state.lightsArray),N.sortObjects===!0&&b.sort(St,kt),xe=Tt.enabled===!1||Tt.isPresenting===!1||Tt.hasDepthSensing()===!1,xe&&zt.addToRenderList(b,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Gt===!0&&Lt.beginShadows();let k=w.state.shadowsArray;if(Ft.render(k,y,P),Gt===!0&&Lt.endShadows(),(H&&C.hasRenderPass())===!1){let Et=b.opaque,yt=b.transmissive;if(w.setupLights(),P.isArrayCamera){let Ct=P.cameras;if(yt.length>0)for(let Dt=0,qt=Ct.length;Dt<qt;Dt++){let ee=Ct[Dt];gt(Et,yt,y,ee)}xe&&zt.render(y);for(let Dt=0,qt=Ct.length;Dt<qt;Dt++){let ee=Ct[Dt];Pt(b,y,ee,ee.viewport)}}else yt.length>0&&gt(Et,yt,y,P),xe&&zt.render(y),Pt(b,y,P)}ot!==null&&Z===0&&($.updateMultisampleRenderTarget(ot),$.updateRenderTargetMipmap(ot)),H&&C.end(N),y.isScene===!0&&y.onAfterRender(N,y,P),xt.resetDefaultState(),J=-1,nt=null,x.pop(),x.length>0?(w=x[x.length-1],$.setTextureUnits(w.state.textureUnits),Gt===!0&&Lt.setGlobalState(N.clippingPlanes,w.state.camera)):w=null,I.pop(),I.length>0?b=I[I.length-1]:b=null,W!==null&&W.renderEnd()};function Mt(y,P,q,H){if(y.visible===!1)return;if(y.layers.test(P.layers)){if(y.isGroup)q=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(P);else if(y.isLightProbeGrid)w.pushLightProbeGrid(y);else if(y.isLight)w.pushLight(y),y.castShadow&&w.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(Zt)){H&&_e.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Jt);let Et=et.update(y),yt=y.material;yt.visible&&b.push(y,Et,yt,q,_e.z,null,P)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||y.intersectsFrustum(Zt))){let Et=et.update(y),yt=y.material;if(H&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),_e.copy(y.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),_e.copy(Et.boundingSphere.center)),_e.applyMatrix4(y.matrixWorld).applyMatrix4(Jt)),Array.isArray(yt)){let Ct=Et.groups;for(let Dt=0,qt=Ct.length;Dt<qt;Dt++){let ee=Ct[Dt],Rt=yt[ee.materialIndex];Rt&&Rt.visible&&b.push(y,Et,Rt,q,_e.z,ee,P)}}else yt.visible&&b.push(y,Et,yt,q,_e.z,null,P)}}let mt=y.children;for(let Et=0,yt=mt.length;Et<yt;Et++)Mt(mt[Et],P,q,H)}function Pt(y,P,q,H){let{opaque:k,transmissive:mt,transparent:Et}=y;w.setupLightsView(q),Gt===!0&&Lt.setGlobalState(N.clippingPlanes,q),H&&g.viewport(rt.copy(H)),k.length>0&&Vt(k,P,q),mt.length>0&&Vt(mt,P,q),Et.length>0&&Vt(Et,P,q),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function gt(y,P,q,H){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[H.id]===void 0){let Rt=se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[H.id]=new sn(1,1,{generateMipmaps:!0,type:Rt?En:un,minFilter:yi,samples:Math.max(4,T.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ne.workingColorSpace})}let mt=w.state.transmissionRenderTarget[H.id],Et=H.viewport||rt;mt.setSize(Et.z*N.transmissionResolutionScale,Et.w*N.transmissionResolutionScale);let yt=N.getRenderTarget(),Ct=N.getActiveCubeFace(),Dt=N.getActiveMipmapLevel();N.setRenderTarget(mt),N.getClearColor(ce),jt=N.getClearAlpha(),jt<1&&N.setClearColor(16777215,.5),N.clear(),xe&&zt.render(q);let qt=N.toneMapping;N.toneMapping=Sn;let ee=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),w.setupLightsView(H),Gt===!0&&Lt.setGlobalState(N.clippingPlanes,H),Vt(y,q,H),$.updateMultisampleRenderTarget(mt),$.updateRenderTargetMipmap(mt),se.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let oe=0,Ie=P.length;oe<Ie;oe++){let ye=P[oe],{object:me,geometry:We,material:bt,group:je}=ye;if(bt.side===pn&&me.layers.test(H.layers)){let re=bt.side;bt.side=nn,bt.needsUpdate=!0,At(me,q,H,We,bt,je),bt.side=re,bt.needsUpdate=!0,Rt=!0}}Rt===!0&&($.updateMultisampleRenderTarget(mt),$.updateRenderTargetMipmap(mt))}N.setRenderTarget(yt,Ct,Dt),N.setClearColor(ce,jt),ee!==void 0&&(H.viewport=ee),N.toneMapping=qt}function Vt(y,P,q){let H=P.isScene===!0?P.overrideMaterial:null;for(let k=0,mt=y.length;k<mt;k++){let Et=y[k],{object:yt,geometry:Ct,group:Dt}=Et,qt=Et.material;qt.allowOverride===!0&&H!==null&&(qt=H),yt.layers.test(q.layers)&&At(yt,P,q,Ct,qt,Dt)}}function At(y,P,q,H,k,mt){W!==null&&k.isNodeMaterial&&W.setObject(y,k),y.onBeforeRender(N,P,q,H,k,mt),y.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),k.onBeforeRender(N,P,q,H,y,mt),k.transparent===!0&&k.side===pn&&k.forceSinglePass===!1?(k.side=nn,k.needsUpdate=!0,N.renderBufferDirect(q,P,H,k,y,mt),k.side=_i,k.needsUpdate=!0,N.renderBufferDirect(q,P,H,k,y,mt),k.side=pn):N.renderBufferDirect(q,P,H,k,y,mt),y.onAfterRender(N,P,q,H,k,mt)}function te(y,P,q){P.isScene!==!0&&(P=Be);let H=G.get(y),k=w.state.lights,mt=w.state.shadowsArray,Et=k.state.version,yt=dt.getParameters(y,k.state,mt,P,q,w.state.lightProbeGridArray),Ct=dt.getProgramCacheKey(yt),Dt=H.programs;H.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,H.fog=P.fog;let qt=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;H.envMap=lt.get(y.envMap||H.environment,qt),H.envMapRotation=H.environment!==null&&y.envMap===null?P.environmentRotation:y.envMapRotation,Dt===void 0&&(y.addEventListener("dispose",on),Dt=new Map,H.programs=Dt);let ee=Dt.get(Ct);if(ee!==void 0){if(H.currentProgram===ee&&H.lightsStateVersion===Et)return Se(y,yt),ee}else yt.uniforms=dt.getUniforms(y),W!==null&&y.isNodeMaterial&&W.build(y,q,yt),y.onBeforeCompile(yt,N),ee=dt.acquireProgram(yt,Ct),Dt.set(Ct,ee),H.uniforms=yt.uniforms;let Rt=H.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Rt.clippingPlanes=Lt.uniform),Se(y,yt),H.needsLights=gn(y),H.lightsStateVersion=Et,H.needsLights&&(Rt.ambientLightColor.value=k.state.ambient,Rt.lightProbe.value=k.state.probe,Rt.sunLights.value=k.state.sun,Rt.sunLightShadows.value=k.state.sunShadow,Rt.directionalLights.value=k.state.directional,Rt.directionalLightShadows.value=k.state.directionalShadow,Rt.spotLights.value=k.state.spot,Rt.spotLightShadows.value=k.state.spotShadow,Rt.rectAreaLights.value=k.state.rectArea,Rt.ltc_1.value=k.state.rectAreaLTC1,Rt.ltc_2.value=k.state.rectAreaLTC2,Rt.pointLights.value=k.state.point,Rt.pointLightShadows.value=k.state.pointShadow,Rt.hemisphereLights.value=k.state.hemi,Rt.sunShadowMatrix.value=k.state.sunShadowMatrix,Rt.sunShadowCascade.value=k.state.sunShadowCascade,Rt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Rt.spotLightMatrix.value=k.state.spotLightMatrix,Rt.spotLightMap.value=k.state.spotLightMap,Rt.pointShadowMatrix.value=k.state.pointShadowMatrix),H.lightProbeGrid=w.state.lightProbeGridArray.length>0,H.currentProgram=ee,H.uniformsList=null,ee}function Me(y){if(y.uniformsList===null){let P=y.currentProgram.getUniforms();y.uniformsList=ms.seqWithValue(P.seq,y.uniforms)}return y.uniformsList}function Se(y,P){let q=G.get(y);q.outputColorSpace=P.outputColorSpace,q.batching=P.batching,q.batchingColor=P.batchingColor,q.instancing=P.instancing,q.instancingColor=P.instancingColor,q.instancingMorph=P.instancingMorph,q.skinning=P.skinning,q.morphTargets=P.morphTargets,q.morphNormals=P.morphNormals,q.morphColors=P.morphColors,q.morphTargetsCount=P.morphTargetsCount,q.numClippingPlanes=P.numClippingPlanes,q.numIntersection=P.numClipIntersection,q.vertexAlphas=P.vertexAlphas,q.vertexTangents=P.vertexTangents,q.toneMapping=P.toneMapping}function Ke(y,P){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;v.setFromMatrixPosition(P.matrixWorld);for(let q=0,H=y.length;q<H;q++){let k=y[q];if(k.texture!==null&&k.boundingBox.containsPoint(v))return k}return null}function De(y,P,q,H,k){P.isScene!==!0&&(P=Be),$.resetTextureUnits();let mt=P.fog,Et=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?P.environment:null,yt=ot===null?N.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:ne.workingColorSpace,Ct=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Dt=lt.get(H.envMap||Et,Ct),qt=H.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ee=!!q.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Rt=!!q.morphAttributes.position,oe=!!q.morphAttributes.normal,Ie=!!q.morphAttributes.color,ye=Sn;H.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(ye=N.toneMapping);let me=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,We=me!==void 0?me.length:0,bt=G.get(H),je=w.state.lights;if(Gt===!0&&(he===!0||y!==nt)){let ge=y===nt&&H.id===J;Lt.setState(H,y,ge)}let re=!1;H.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==je.state.version||bt.outputColorSpace!==yt||k.isBatchedMesh&&bt.batching===!1||!k.isBatchedMesh&&bt.batching===!0||k.isBatchedMesh&&bt.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&bt.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&bt.instancing===!1||!k.isInstancedMesh&&bt.instancing===!0||k.isSkinnedMesh&&bt.skinning===!1||!k.isSkinnedMesh&&bt.skinning===!0||k.isInstancedMesh&&bt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&bt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&bt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&bt.instancingMorph===!1&&k.morphTexture!==null||bt.envMap!==Dt||H.fog===!0&&bt.fog!==mt||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==Lt.numPlanes||bt.numIntersection!==Lt.numIntersection)||bt.vertexAlphas!==qt||bt.vertexTangents!==ee||bt.morphTargets!==Rt||bt.morphNormals!==oe||bt.morphColors!==Ie||bt.toneMapping!==ye||bt.morphTargetsCount!==We||!!bt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(re=!0):(re=!0,bt.__version=H.version);let dn=bt.currentProgram;re===!0&&(dn=te(H,P,k),W&&H.isNodeMaterial&&W.onUpdateProgram(H,dn,bt));let An=!1,Qn=!1,Bi=!1,fe=dn.getUniforms(),Re=bt.uniforms;if(g.useProgram(dn.program)&&(An=!0,Qn=!0,Bi=!0),H.id!==J&&(J=H.id,Qn=!0),bt.needsLights){let ge=Ke(w.state.lightProbeGridArray,k);bt.lightProbeGrid!==ge&&(bt.lightProbeGrid=ge,Qn=!0)}if(An||nt!==y){g.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),fe.setValue(D,"projectionMatrix",y.projectionMatrix),fe.setValue(D,"viewMatrix",y.matrixWorldInverse);let ei=fe.map.cameraPosition;ei!==void 0&&ei.setValue(D,ue.setFromMatrixPosition(y.matrixWorld)),T.logarithmicDepthBuffer&&fe.setValue(D,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&fe.setValue(D,"isOrthographic",y.isOrthographicCamera===!0),nt!==y&&(nt=y,Qn=!0,Bi=!0)}if(bt.needsLights&&(je.state.sunShadowMap.length>0&&fe.setValue(D,"sunShadowMap",je.state.sunShadowMap,$),je.state.directionalShadowMap.length>0&&fe.setValue(D,"directionalShadowMap",je.state.directionalShadowMap,$),je.state.spotShadowMap.length>0&&fe.setValue(D,"spotShadowMap",je.state.spotShadowMap,$),je.state.pointShadowMap.length>0&&fe.setValue(D,"pointShadowMap",je.state.pointShadowMap,$)),k.isSkinnedMesh){fe.setOptional(D,k,"bindMatrix"),fe.setOptional(D,k,"bindMatrixInverse");let ge=k.skeleton;ge&&(ge.boneTexture===null&&ge.computeBoneTexture(),fe.setValue(D,"boneTexture",ge.boneTexture,$))}k.isBatchedMesh&&(fe.setOptional(D,k,"batchingTexture"),fe.setValue(D,"batchingTexture",k._matricesTexture,$),fe.setOptional(D,k,"batchingIdTexture"),fe.setValue(D,"batchingIdTexture",k._indirectTexture,$),fe.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&fe.setValue(D,"batchingColorTexture",k._colorsTexture,$));let ti=q.morphAttributes;if((ti.position!==void 0||ti.normal!==void 0||ti.color!==void 0)&&L.update(k,q,dn),(Qn||bt.receiveShadow!==k.receiveShadow)&&(bt.receiveShadow=k.receiveShadow,fe.setValue(D,"receiveShadow",k.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&P.environment!==null&&(Re.envMapIntensity.value=P.environmentIntensity),Re.dfgLUT!==void 0&&(Re.dfgLUT.value=_0()),Qn){if(fe.setValue(D,"toneMappingExposure",N.toneMappingExposure),bt.needsLights&&Ne(Re,Bi),mt&&H.fog===!0&&wt.refreshFogUniforms(Re,mt),wt.refreshMaterialUniforms(Re,H,K,O,w.state.transmissionRenderTarget[y.id]),bt.needsLights&&bt.lightProbeGrid){let ge=bt.lightProbeGrid;Re.probesSH.value=ge.texture,Re.probesMin.value.copy(ge.boundingBox.min),Re.probesMax.value.copy(ge.boundingBox.max),Re.probesResolution.value.copy(ge.resolution)}ms.upload(D,Me(bt),Re,$)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ms.upload(D,Me(bt),Re,$),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&fe.setValue(D,"center",k.center),fe.setValue(D,"modelViewMatrix",k.modelViewMatrix),fe.setValue(D,"normalMatrix",k.normalMatrix),fe.setValue(D,"modelMatrix",k.matrixWorld),H.uniformsGroups!==void 0){let ge=H.uniformsGroups;for(let ei=0,zi=ge.length;ei<zi;ei++){let Rc=ge[ei];st.update(Rc,dn),st.bind(Rc,dn)}}return dn}function Ne(y,P){y.ambientLightColor.needsUpdate=P,y.lightProbe.needsUpdate=P,y.sunLights.needsUpdate=P,y.sunLightShadows.needsUpdate=P,y.directionalLights.needsUpdate=P,y.directionalLightShadows.needsUpdate=P,y.pointLights.needsUpdate=P,y.pointLightShadows.needsUpdate=P,y.spotLights.needsUpdate=P,y.spotLightShadows.needsUpdate=P,y.rectAreaLights.needsUpdate=P,y.hemisphereLights.needsUpdate=P}function gn(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return ot},this.setRenderTargetTextures=function(y,P,q){let H=G.get(y);H.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),G.get(y.texture).__webglTexture=P,G.get(y.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:q,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,P){let q=G.get(y);q.__webglFramebuffer=P,q.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(y,P=0,q=0){ot=y,Q=P,Z=q;let H=null,k=!1,mt=!1;if(y){let yt=G.get(y);if(yt.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(D.FRAMEBUFFER,yt.__webglFramebuffer),rt.copy(y.viewport),Nt.copy(y.scissor),Ut=y.scissorTest,g.viewport(rt),g.scissor(Nt),g.setScissorTest(Ut),J=-1;return}else if(yt.__webglFramebuffer===void 0)$.setupRenderTarget(y);else if(yt.__hasExternalTextures)$.rebindTextures(y,G.get(y.texture).__webglTexture,G.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let qt=y.depthTexture;if(yt.__boundDepthTexture!==qt){if(qt!==null&&G.has(qt)&&(y.width!==qt.image.width||y.height!==qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(y)}}let Ct=y.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(mt=!0);let Dt=G.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Dt[P])?H=Dt[P][q]:H=Dt[P],k=!0):y.samples>0&&$.useMultisampledRTT(y)===!1?H=G.get(y).__webglMultisampledFramebuffer:Array.isArray(Dt)?H=Dt[q]:H=Dt,rt.copy(y.viewport),Nt.copy(y.scissor),Ut=y.scissorTest}else rt.copy(vt).multiplyScalar(K).floor(),Nt.copy(Wt).multiplyScalar(K).floor(),Ut=Ae;if(q!==0&&(H=Y),g.bindFramebuffer(D.FRAMEBUFFER,H)&&g.drawBuffers(y,H),g.viewport(rt),g.scissor(Nt),g.setScissorTest(Ut),k){let yt=G.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+P,yt.__webglTexture,q)}else if(mt){let yt=P;for(let Ct=0;Ct<y.textures.length;Ct++){let Dt=G.get(y.textures[Ct]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ct,Dt.__webglTexture,q,yt)}}else if(y!==null&&q!==0){let yt=G.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,yt.__webglTexture,q)}J=-1};function jn(y){let P=G.get(y);return(P.__readFormat!==y.format||P.__readType!==y.type)&&(P.__readFormat=y.format,P.__readType=y.type,P.__formatReadable=T.textureFormatReadable(y.format),P.__typeReadable=T.textureTypeReadable(y.type)),P}this.readRenderTargetPixels=function(y,P,q,H,k,mt,Et,yt=0){if(!(y&&y.isWebGLRenderTarget)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=G.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Et!==void 0&&(Ct=Ct[Et]),Ct){g.bindFramebuffer(D.FRAMEBUFFER,Ct);try{let Dt=y.textures[yt],qt=Dt.format,ee=Dt.type;y.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+yt);let Rt=jn(Dt);if(Rt.__formatReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Rt.__typeReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=y.width-H&&q>=0&&q<=y.height-k&&D.readPixels(P,q,H,k,ct.convert(qt),ct.convert(ee),mt)}finally{let Dt=ot!==null?G.get(ot).__webglFramebuffer:null;g.bindFramebuffer(D.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(y,P,q,H,k,mt,Et,yt=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=G.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Et!==void 0&&(Ct=Ct[Et]),Ct)if(P>=0&&P<=y.width-H&&q>=0&&q<=y.height-k){g.bindFramebuffer(D.FRAMEBUFFER,Ct);let Dt=y.textures[yt],qt=Dt.format,ee=Dt.type;y.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+yt);let Rt=jn(Dt);if(Rt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Rt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let oe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,oe),D.bufferData(D.PIXEL_PACK_BUFFER,mt.byteLength,D.STREAM_READ),D.readPixels(P,q,H,k,ct.convert(qt),ct.convert(ee),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let Ie=ot!==null?G.get(ot).__webglFramebuffer:null;g.bindFramebuffer(D.FRAMEBUFFER,Ie);let ye=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Fh(D,ye,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,oe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,mt),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(oe),D.deleteSync(ye),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,P=null,q=0){let H=Math.pow(2,-q),k=Math.floor(y.image.width*H),mt=Math.floor(y.image.height*H),Et=P!==null?P.x:0,yt=P!==null?P.y:0;$.setTexture2D(y,0),D.copyTexSubImage2D(D.TEXTURE_2D,q,0,0,Et,yt,k,mt),g.unbindTexture()},this.copyTextureToTexture=function(y,P,q=null,H=null,k=0,mt=0){let Et,yt,Ct,Dt,qt,ee,Rt,oe,Ie,ye=y.isCompressedTexture?y.mipmaps[mt]:y.image;if(q!==null)Et=q.max.x-q.min.x,yt=q.max.y-q.min.y,Ct=q.isBox3?q.max.z-q.min.z:1,Dt=q.min.x,qt=q.min.y,ee=q.isBox3?q.min.z:0;else{let Re=Math.pow(2,-k);Et=Math.floor(ye.width*Re),yt=Math.floor(ye.height*Re),y.isDataArrayTexture?Ct=ye.depth:y.isData3DTexture?Ct=Math.floor(ye.depth*Re):Ct=1,Dt=0,qt=0,ee=0}H!==null?(Rt=H.x,oe=H.y,Ie=H.z):(Rt=0,oe=0,Ie=0);let me=ct.convert(P.format),We=ct.convert(P.type),bt;P.isData3DTexture?($.setTexture3D(P,0),bt=D.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?($.setTexture2DArray(P,0),bt=D.TEXTURE_2D_ARRAY):($.setTexture2D(P,0),bt=D.TEXTURE_2D),g.activeTexture(D.TEXTURE0),g.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,P.flipY),g.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),g.pixelStorei(D.UNPACK_ALIGNMENT,P.unpackAlignment);let je=g.getParameter(D.UNPACK_ROW_LENGTH),re=g.getParameter(D.UNPACK_IMAGE_HEIGHT),dn=g.getParameter(D.UNPACK_SKIP_PIXELS),An=g.getParameter(D.UNPACK_SKIP_ROWS),Qn=g.getParameter(D.UNPACK_SKIP_IMAGES);g.pixelStorei(D.UNPACK_ROW_LENGTH,ye.width),g.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ye.height),g.pixelStorei(D.UNPACK_SKIP_PIXELS,Dt),g.pixelStorei(D.UNPACK_SKIP_ROWS,qt),g.pixelStorei(D.UNPACK_SKIP_IMAGES,ee);let Bi=y.isDataArrayTexture||y.isData3DTexture,fe=P.isDataArrayTexture||P.isData3DTexture;if(y.isDepthTexture){let Re=G.get(y),ti=G.get(P),ge=G.get(Re.__renderTarget),ei=G.get(ti.__renderTarget);g.bindFramebuffer(D.READ_FRAMEBUFFER,ge.__webglFramebuffer),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,ei.__webglFramebuffer);for(let zi=0;zi<Ct;zi++)Bi&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,G.get(y).__webglTexture,k,ee+zi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,G.get(P).__webglTexture,mt,Ie+zi)),D.blitFramebuffer(Dt,qt,Et,yt,Rt,oe,Et,yt,D.DEPTH_BUFFER_BIT,D.NEAREST);g.bindFramebuffer(D.READ_FRAMEBUFFER,null),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(k!==0||y.isRenderTargetTexture||G.has(y)){let Re=G.get(y),ti=G.get(P);g.bindFramebuffer(D.READ_FRAMEBUFFER,U),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,X);for(let ge=0;ge<Ct;ge++)Bi?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Re.__webglTexture,k,ee+ge):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Re.__webglTexture,k),fe?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ti.__webglTexture,mt,Ie+ge):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ti.__webglTexture,mt),k!==0?D.blitFramebuffer(Dt,qt,Et,yt,Rt,oe,Et,yt,D.COLOR_BUFFER_BIT,D.NEAREST):fe?D.copyTexSubImage3D(bt,mt,Rt,oe,Ie+ge,Dt,qt,Et,yt):D.copyTexSubImage2D(bt,mt,Rt,oe,Dt,qt,Et,yt);g.bindFramebuffer(D.READ_FRAMEBUFFER,null),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else fe?y.isDataTexture||y.isData3DTexture?D.texSubImage3D(bt,mt,Rt,oe,Ie,Et,yt,Ct,me,We,ye.data):P.isCompressedArrayTexture?D.compressedTexSubImage3D(bt,mt,Rt,oe,Ie,Et,yt,Ct,me,ye.data):D.texSubImage3D(bt,mt,Rt,oe,Ie,Et,yt,Ct,me,We,ye):y.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,mt,Rt,oe,Et,yt,me,We,ye.data):y.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,mt,Rt,oe,ye.width,ye.height,me,ye.data):D.texSubImage2D(D.TEXTURE_2D,mt,Rt,oe,Et,yt,me,We,ye);g.pixelStorei(D.UNPACK_ROW_LENGTH,je),g.pixelStorei(D.UNPACK_IMAGE_HEIGHT,re),g.pixelStorei(D.UNPACK_SKIP_PIXELS,dn),g.pixelStorei(D.UNPACK_SKIP_ROWS,An),g.pixelStorei(D.UNPACK_SKIP_IMAGES,Qn),mt===0&&P.generateMipmaps&&D.generateMipmap(bt),g.unbindTexture()},this.initRenderTarget=function(y){G.get(y).__webglFramebuffer===void 0&&$.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?$.setTextureCube(y,0):y.isData3DTexture?$.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?$.setTexture2DArray(y,0):$.setTexture2D(y,0),g.unbindTexture()},this.resetState=function(){Q=0,Z=0,ot=null,g.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}};var x0=["top","side","bottom"];function _u(i){let t=i&&i.blocks||[],e=i&&i.items||[],n=new Array(256).fill(null),s=Object.create(null),r=[];for(let A of t){if(!A||typeof A.id!="string")throw new Error("block without id");if(!Number.isInteger(A.n)||A.n<0||A.n>255)throw new Error("bad n for "+A.id);if(n[A.n])throw new Error("duplicate n "+A.n+" ("+A.id+")");if(s[A.id])throw new Error("duplicate id "+A.id);let v=A.colors||{},b=Object.assign({solid:!0,transparent:!1,liquid:!1,emissive:!1,hardness:1,drops:"self",buy:null,maxStack:64,pattern:"plain",kind:"block"},A);if(b.placeable=b.n!==0&&!b.liquid,b.colors={top:v.top||"#888888",side:v.side||v.top||"#888888",bottom:v.bottom||v.top||"#888888"},b.opaque=b.solid&&!b.transparent,b.tile={},b.n!==0){let w={};for(let I of x0){let x=b.colors[I]+"|"+(b.pattern==="grass"||b.pattern==="log"||b.pattern==="lamp"||b.pattern==="table"||b.pattern==="stele"||b.pattern==="torch"||b.pattern==="bed"?I:"");w[x]===void 0&&(w[x]=r.length,r.push({block:b.id,face:I,color:b.colors[I],pattern:b.pattern,accent:b.accent||null,top:b.colors.top})),b.tile[I]=w[x]}}n[b.n]=b,s[b.id]=b}if(!s.air)throw new Error("registry needs air");for(let A of e){if(s[A.id])throw new Error("duplicate id "+A.id);s[A.id]=Object.assign({kind:"item",placeable:!1,maxStack:64,buy:null},A)}for(let A in s){let v=s[A].drops;if(v&&v!=="self"&&!s[v])throw new Error(A+" drops unknown "+v)}let a=A=>(typeof A=="number"?n[A]:s[A])||null,o=new Uint8Array(256),l=new Uint8Array(256),c=new Uint8Array(256),u=new Uint8Array(256),d=new Uint8Array(256),h=new Uint8Array(256),m=new Uint8Array(256),_=new Uint8Array(256),M=new Int16Array(256).fill(-1),p=new Int16Array(256).fill(-1),f=new Int16Array(256).fill(-1);n.forEach((A,v)=>{A&&(u[v]=A.solid?1:0,d[v]=A.opaque?1:0,h[v]=A.transparent?1:0,m[v]=A.emissive?1:0,_[v]=A.liquid?1:0,o[v]=A.light!=null?A.light:A.emissive?15:0,l[v]=A.liquid?2:0,c[v]=A.shape==="torch"?1:0,v&&(M[v]=A.tile.top,p[v]=A.tile.side,f[v]=A.tile.bottom))});let E=(i&&i.blueprints||[]).map(A=>Object.assign({kind:"blueprint"},A));return{blocks:n.filter(Boolean),items:e.map(A=>s[A.id]),blueprints:E,tiles:r,get:a,toolOf:A=>{let v=A&&s[A];return v&&v.kind==="item"&&v.tool&&typeof v.tool=="object"?v.tool:null},num:A=>{let v=s[A];if(!v||v.kind!=="block")throw new Error("no block "+A);return v.n},name:A=>{let v=a(A);return v?v.name_zh:String(A)},maxStack:A=>{let v=s[A];return v?v.maxStack:64},dropOf:A=>{let v=n[A];return!v||!v.drops?null:v.drops==="self"?v.id:v.drops},breakTime:A=>{let v=n[A];return!v||v.hardness<0?1/0:.25+v.hardness*.55},flat:{solid:u,opaque:d,trans:h,emit:m,liquid:_,tileTop:M,tileSide:p,tileBottom:f,lightEmit:o,attn:l,shape:c}}}var Zn=i=>Math.floor(i/16);var y0=(i,t,e)=>(t*16+e)*16+i;var Ni=(i,t)=>i+","+t;function tc(i,t,e){if(i=Math.floor(i),t=Math.floor(t),e=Math.floor(e),t<0||t>=64)return null;let n=Zn(i),s=Zn(e);return{cx:n,cz:s,i:y0(i-n*16,t,e-s*16)}}function xu(i,t,e){let n=[];for(let s=-e;s<=e;s++)for(let r=-e;r<=e;r++){let a=r*r+s*s;a<=e*e+e&&n.push({cx:i+r,cz:t+s,d2:a})}return n.sort((s,r)=>s.d2-r.d2)}function Si(i,t,e,n,s,r){let a=n/2,o=Math.floor(i-a),l=Math.floor(i+a-1e-6),c=Math.floor(t),u=Math.floor(t+s-1e-6),d=Math.floor(e-a),h=Math.floor(e+a-1e-6);for(let m=c;m<=u;m++)for(let _=d;_<=h;_++)for(let M=o;M<=l;M++)if(r(M,m,_))return!0;return!1}function ec(i,t,e,n,s={}){let r=s.w||.6,a=s.h||1.8,o=!!s.canStep,l=!1,c=0,u=Math.max(Math.abs(t.x),Math.abs(t.y),Math.abs(t.z))*e,d=Math.max(1,Math.ceil(u/.35)),h=e/d;for(let m=0;m<d;m++){let _=i.y+t.y*h;Si(i.x,_,i.z,r,a,n)&&(t.y<0?(_=Math.floor(_)+1,l=!0,Si(i.x,_,i.z,r,a,n)&&(_=i.y)):(_=Math.min(i.y,Math.ceil(_+a)-1-a),Si(i.x,_,i.z,r,a,n)&&(_=i.y)),t.y=0),i.y=_;for(let M of["x","z"]){let p=t[M]*h;if(!p)continue;let f={x:i.x,y:i.y,z:i.z};if(f[M]+=p,!Si(f.x,f.y,f.z,r,a,n)){i[M]=f[M];continue}if(o&&(l||s.grounded)){let A=Math.floor(i.y+.01)+1;if(A-i.y<=1.01&&!Si(f.x,A,f.z,r,a,n)&&!Si(i.x,A,i.z,r,a,n)){c+=A-i.y,i.y=A,i[M]=f[M];continue}}let E=r/2;i[M]=p>0?Math.floor(f[M]+E)-E-1e-4:Math.floor(f[M]-E)+1+E+1e-4,Si(i.x,i.y,i.z,r,a,n)&&(i[M]=f[M]-p),t[M]=0}}return!l&&t.y<=0&&Si(i.x,i.y-.02,i.z,r,a,n)&&(l=!0),{onGround:l,stepped:c}}function po(i,t,e,n,s){let r=Math.floor(i.x),a=Math.floor(i.y),o=Math.floor(i.z),l=Math.sign(t.x),c=Math.sign(t.y),u=Math.sign(t.z),d=l?Math.abs(1/t.x):1/0,h=c?Math.abs(1/t.y):1/0,m=u?Math.abs(1/t.z):1/0,_=l?(l>0?r+1-i.x:i.x-r)*d:1/0,M=c?(c>0?a+1-i.y:i.y-a)*h:1/0,p=u?(u>0?o+1-i.z:i.z-o)*m:1/0,f=[0,0,0],E=0;for(;E<=e;){let A=n(r,a,o);if(A&&s(A))return{x:r,y:a,z:o,n:A,face:f,dist:E};_<M&&_<p?(r+=l,E=_,_+=d,f=[-l,0,0]):M<p?(a+=c,E=M,M+=h,f=[0,-c,0]):(o+=u,E=p,p+=m,f=[0,0,-u])}return null}var cc={};Co(cc,{HOTBAR:()=>ic,SIZE:()=>nc,add:()=>$n,canAdd:()=>ac,count:()=>Tn,craft:()=>lc,craftable:()=>_o,createInventory:()=>mo,deserialize:()=>oc,moveSlot:()=>rc,remove:()=>rr,serialize:()=>go,takeFromSlot:()=>sc});var nc=36,ic=9;function mo(i=36){return{slots:new Array(i).fill(null)}}function $n(i,t,e,n=()=>64){let s=n(t);for(let r=0;r<i.slots.length&&e>0;r++){let a=i.slots[r];if(a&&a.id===t&&a.count<s){let o=Math.min(e,s-a.count);a.count+=o,e-=o}}for(let r=0;r<i.slots.length&&e>0;r++)if(!i.slots[r]){let a=Math.min(e,s);i.slots[r]={id:t,count:a},e-=a}return e}function Tn(i,t){return i.slots.reduce((e,n)=>e+(n&&n.id===t?n.count:0),0)}function rr(i,t,e){if(Tn(i,t)<e)return!1;for(let n=i.slots.length-1;n>=0&&e>0;n--){let s=i.slots[n];if(s&&s.id===t){let r=Math.min(e,s.count);s.count-=r,e-=r,s.count||(i.slots[n]=null)}}return!0}function sc(i,t,e=1){let n=i.slots[t];if(!n||n.count<e)return null;n.count-=e;let s=n.id;return n.count||(i.slots[t]=null),s}function rc(i,t,e,n=()=>64){if(t===e)return;let s=i.slots[t],r=i.slots[e];if(s&&r&&s.id===r.id){let a=Math.min(s.count,n(s.id)-r.count);r.count+=a,s.count-=a,s.count||(i.slots[t]=null);return}i.slots[t]=r,i.slots[e]=s}function ac(i,t,e,n=()=>64){let s={slots:i.slots.map(r=>r&&{...r})};return $n(s,t,e,n)===0}var go=i=>i.slots.map(t=>t?Number.isFinite(t.dur)?[t.id,t.count,t.dur]:[t.id,t.count]:0);function oc(i,t=36){let e=mo(t);return(i||[]).slice(0,t).forEach((n,s)=>{Array.isArray(n)&&typeof n[0]=="string"&&n[1]>0&&(e.slots[s]={id:n[0],count:n[1]|0},Number.isFinite(n[2])&&(e.slots[s].dur=n[2]))}),e}function _o(i,t,e={}){if(t.blueprint&&!(e.owned&&e.owned.has(t.blueprint)))return{ok:!1,reason:"blueprint"};if(t.needs&&!(e.near&&e.near.has(t.needs)))return{ok:!1,reason:"needs"};for(let n in t.in)if(Tn(i,n)<t.in[n])return{ok:!1,reason:"materials"};return{ok:!0}}function lc(i,t,e=()=>64,n){let s=_o(i,t,n||{near:new Set([t.needs]),owned:new Set([t.blueprint])});if(!s.ok)return s;let r=i.slots.map(a=>a&&{...a});for(let a in t.in)rr(i,a,t.in[a]);return $n(i,t.out.id,t.out.count,e)>0?(i.slots=r,{ok:!1,reason:"full"}):{ok:!0}}function v0(i=0){return{coins:i|0,earned:0,spent:0,owned:[]}}var hc=(i,t)=>i.owned.includes(t),vu=(i,t)=>i?t?2:1:0;function Mu(i,t){return t=Math.max(0,t|0),i.coins+=t,i.earned+=t,i.coins}function yu(i,t){return t=Math.max(0,t|0),i.coins<t?!1:(i.coins-=t,i.spent+=t,!0)}function Su(i){return i.blocks.concat(i.items).filter(t=>t&&t.buy).map(t=>({id:t.id,name_zh:t.name_zh,qty:t.buy.qty||1,price:t.buy.price|0,locked:t.buy.locked||null})).concat((i.blueprints||[]).map(t=>({id:t.id,name_zh:t.name_zh,qty:1,price:t.price|0,locked:t.locked||null,blueprint:!0,desc:t.desc||""})))}function bu(i,t,e,n=()=>64){return e?e.locked?{ok:!1,reason:"locked"}:e.blueprint&&hc(i,e.id)?{ok:!1,reason:"owned"}:i.coins<e.price?{ok:!1,reason:"coins"}:e.blueprint?(yu(i,e.price),i.owned.push(e.id),{ok:!0}):ac(t,e.id,e.qty,n)?(yu(i,e.price),$n(t,e.id,e.qty,n),{ok:!0}):{ok:!1,reason:"full"}:{ok:!1,reason:"missing"}}var wu=i=>({coins:i.coins,earned:i.earned,spent:i.spent,owned:i.owned.slice()});function Eu(i){let t=v0(i&&i.coins);return i&&(t.earned=i.earned|0,t.spent=i.spent|0,t.owned=Array.isArray(i.owned)?i.owned.slice():[]),t}function S0(){return new Map}function Tu(i,t,e,n){let s=i.get(t);s||(s=new Map,i.set(t,s)),s.set(e,n)}function uc(i){let t=new Array(i.size*2),e=0;for(let[n,s]of i)t[e++]=n,t[e++]=s;return t}function b0(i){let t=new Map;for(let e=0;e+1<(i||[]).length;e+=2)t.set(i[e]|0,i[e+1]|0);return t}function Au(i){let t=S0();for(let e in i||{})t.set(e,b0(i[e]));return t}var xo=16;var Fv=18;var Kn=32;function Ru(i){let t=i>>>0||7;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var Jn=i=>[parseInt(i.slice(1,3),16),parseInt(i.slice(3,5),16),parseInt(i.slice(5,7),16)],Kt=(i,t=1,e=1)=>`rgba(${Math.round(Math.min(255,i[0]*t))},${Math.round(Math.min(255,i[1]*t))},${Math.round(Math.min(255,i[2]*t))},${e})`;function w0(i){let t=2166136261;for(let e=0;e<i.length;e++)t=Math.imul(t^i.charCodeAt(e),16777619);return t>>>0}function Te(i,t){i.beginPath(),i.moveTo(t[0][0],t[0][1]);for(let e=1;e<t.length;e++)i.lineTo(t[e][0],t[e][1]);i.closePath(),i.fill()}function Ui(i,t,e,n,s){let r=3+Math.floor(t()*2),a=[];for(let o=0;o<r;o++){let l=o/r*Math.PI*2+t()*.8;a.push([e+Math.cos(l)*s*(.6+t()*.5),n+Math.sin(l)*s*(.6+t()*.5)])}Te(i,a)}function E0(i,t){let e=Jn(t.color),n=Ru(w0(t.block+t.face)),s=Kn,r=1;t.pattern==="glass"?r=.22:t.pattern==="water"&&(r=.72),i.fillStyle=Kt(e,1,r),i.fillRect(0,0,s,s);let a=t.pattern,o=t.accent?Jn(t.accent):null;if(a==="grass"&&t.face==="top"){i.fillStyle=Kt(e,1.12);for(let d=0;d<4;d++)Ui(i,n,n()*s,n()*s,5+n()*4)}if(a==="grass"&&t.face==="side"){let d=Jn(t.top);i.fillStyle=Kt(d);let h=[[0,0],[s,0]];for(let m=s;m>=0;m-=4)h.push([m,8+Math.round(n()*5)]);Te(i,h)}if(a==="stone"||a==="bedrock")for(let d=0;d<5;d++)i.fillStyle=Kt(e,n()<.5?.9:1.08),Ui(i,n,n()*s,n()*s,4+n()*6);if(a==="ore"){for(let d=0;d<4;d++)i.fillStyle=Kt(e,.92),Ui(i,n,n()*s,n()*s,5);i.fillStyle=Kt(o);for(let d=0;d<5;d++)Ui(i,n,5+n()*(s-10),5+n()*(s-10),2.5+n()*2.5)}if(a==="sand")for(let d=0;d<26;d++)i.fillStyle=Kt(e,n()<.5?.92:1.05),i.fillRect(Math.floor(n()*s),Math.floor(n()*s),2,2);if(a==="log"&&t.face==="side")for(let d=3;d<s;d+=7)i.fillStyle=Kt(e,.82),i.fillRect(d,0,2,s);if(a==="log"&&t.face!=="side"&&(i.fillStyle=Kt(e,.85),i.fillRect(6,6,s-12,s-12),i.fillStyle=Kt(e,1.05),i.fillRect(11,11,s-22,s-22)),a==="leaves")for(let d=0;d<9;d++)i.fillStyle=Kt(e,n()<.5?.78:1.15),Ui(i,n,n()*s,n()*s,3+n()*4);if(a==="planks"||a==="table"&&t.face==="bottom"){for(let d=7;d<s;d+=8)i.fillStyle=Kt(e,.78),i.fillRect(0,d,s,1);i.fillStyle=Kt(e,.85),i.fillRect(12,0,1,7),i.fillRect(22,8,1,7),i.fillRect(6,16,1,7),i.fillRect(18,24,1,8)}if(a==="table"&&t.face==="top"&&(i.fillStyle=Kt(e,.8),i.fillRect(s/2-1,3,2,s-6),i.fillRect(3,s/2-1,s-6,2)),a==="table"&&t.face==="side"&&(i.fillStyle=Kt(e,.7),i.fillRect(6,10,7,14),i.fillStyle=Kt([185,182,174]),Te(i,[[18,10],[27,12],[25,15],[19,14]]),i.fillStyle=Kt(e,.6),i.fillRect(21,14,2,10)),a==="glass"&&(i.fillStyle="rgba(255,255,255,0.45)",Te(i,[[6,24],[9,24],[24,9],[24,6]])),a==="water"){i.fillStyle=Kt(e,1.18,.72);for(let d=6;d<s;d+=10)i.fillRect(4+Math.floor(n()*10),d,10,2)}if(a==="gold"&&(i.fillStyle=Kt(e,1.15),Te(i,[[0,0],[s,0],[0,s]]),i.fillStyle=Kt(e,.9),Te(i,[[s,s],[s,8],[8,s]])),a==="lamp"&&(t.face==="side"?(i.fillStyle=Kt(Jn("#F3E3B5")),i.fillRect(7,6,s-14,s-12),i.fillStyle=Kt(e,.85),i.fillRect(0,0,s,3),i.fillRect(0,s-3,s,3)):t.face==="top"&&(i.fillStyle=Kt(e,1.05),i.fillRect(8,8,s-16,s-16))),a==="torch"&&(i.clearRect(0,0,s,s),t.face==="side"?(i.fillStyle=Kt(Jn("#8C6640")),i.fillRect(13,0,6,s),i.fillStyle=Kt(Jn("#F2C46B")),i.fillRect(13,0,6,8),i.fillStyle=Kt(o),i.fillRect(14,0,4,4)):(i.fillStyle=Kt(Jn(t.face==="top"?"#F2C46B":"#8C6640")),i.fillRect(12,12,8,8))),a==="bed"&&(t.face==="top"?(i.fillStyle=Kt(o),i.fillRect(0,0,s,10),i.fillStyle=Kt(e,.85),i.fillRect(0,10,s,3)):t.face==="side"&&(i.fillStyle=Kt(Jn("#E0352B")),i.fillRect(0,0,s,14),i.fillStyle=Kt(o),i.fillRect(0,0,9,14))),a==="wool")for(let d=0;d<7;d++)i.fillStyle=Kt(e,n()<.5?.94:1.04),Ui(i,n,n()*s,n()*s,4+n()*4);if(a==="furnace"){for(let d=0;d<4;d++)i.fillStyle=Kt(e,n()<.5?.9:1.08),Ui(i,n,n()*s,n()*s,4+n()*5);t.face==="side"?(i.fillStyle=Kt(o),i.fillRect(8,15,s-16,11),i.fillStyle=Kt(Jn("#E0352B"),1,.85),Te(i,[[11,26],[s/2,18],[s-11,26]])):(i.fillStyle=Kt(e,.8),i.fillRect(9,9,s-18,s-18))}a==="stele"&&t.face==="side"&&(i.fillStyle=Kt(e,1.12),i.fillRect(5,4,s-10,s-8),i.fillStyle=Kt(o),Te(i,[[s/2,8],[s/2+6,s/2],[s/2,s-8],[s/2-6,s/2]]));let l=i.getImageData(0,0,s,s),c=l.data;for(let d=0;d<c.length;d+=4){let h=1+(n()-.5)*.09;c[d]=Math.min(255,c[d]*h),c[d+1]=Math.min(255,c[d+1]*h),c[d+2]=Math.min(255,c[d+2]*h)}i.putImageData(l,0,0);let u=a==="glass"?"rgba(207,227,223,0.75)":"rgba(20,24,20,0.13)";i.fillStyle=u,i.fillRect(0,0,s,2),i.fillRect(0,s-2,s,2),i.fillRect(0,2,2,s-4),i.fillRect(s-2,2,2,s-4),a!=="glass"&&a!=="water"&&(i.fillStyle="rgba(20,24,20,0.06)",i.fillRect(2,2,s-4,2),i.fillRect(2,s-4,s-4,2))}function Iu(i){let t=document.createElement("canvas");t.width=t.height=Kn*xo;let e=t.getContext("2d",{willReadFrequently:!0}),n=[];return i.tiles.forEach((s,r)=>{let a=document.createElement("canvas");a.width=a.height=Kn;let o=a.getContext("2d",{willReadFrequently:!0});E0(o,s),e.drawImage(a,r%xo*Kn,Math.floor(r/xo)*Kn),n[r]=a}),{canvas:t,tileCanvas:n}}function Pu(i,t){let e={};for(let n of i.blocks){if(!n.n)continue;let s=document.createElement("canvas");s.width=s.height=48;let r=s.getContext("2d");if(n.shape==="torch"){r.fillStyle="#8C6640",r.fillRect(21,16,6,28),r.fillStyle="#F2C46B",Te(r,[[18,18],[24,4],[30,18],[24,22]]),r.fillStyle="#E0352B",Te(r,[[21,16],[24,9],[27,16]]),e[n.id]=s.toDataURL();continue}let a=t.tileCanvas,o=1/Kn,l=(c,u,d,h,m,_,M,p)=>{r.setTransform(u*o,d*o,h*o,m*o,_,M),r.drawImage(a[c],0,0),p&&(r.fillStyle=`rgba(20,24,20,${p})`,r.fillRect(0,0,Kn,Kn))};l(n.tile.top,20,10,-20,10,24,4,0),l(n.tile.side,20,10,0,22,4,14,.12),l(n.tile.side,20,-10,0,22,24,24,.26),e[n.id]=s.toDataURL()}for(let n of i.items){let s=document.createElement("canvas");s.width=s.height=48;let r=s.getContext("2d"),a=n.icon,o=n.color,l="#8C6640";r.save(),r.translate(24,24),a==="lump"?(r.fillStyle=o,Te(r,[[-14,4],[-8,-12],[6,-14],[15,-2],[10,12],[-6,14]]),r.fillStyle="rgba(255,255,255,.18)",Te(r,[[-8,-12],[6,-14],[2,-4]])):a==="ingot"?(r.fillStyle=o,Te(r,[[-18,8],[-10,-6],[12,-6],[18,8]]),r.fillStyle="rgba(255,255,255,.3)",Te(r,[[-10,-6],[12,-6],[9,-1],[-8,-1]]),r.fillStyle="rgba(0,0,0,.12)",r.fillRect(-18,8,36,4)):a==="gem"?(r.fillStyle=o,Te(r,[[0,-16],[14,-4],[0,16],[-14,-4]]),r.fillStyle="rgba(255,255,255,.35)",Te(r,[[0,-16],[14,-4],[0,-2]])):(r.rotate(-Math.PI/4),r.fillStyle=a==="stick"?o:l,r.fillRect(-3,-14,6,32),r.fillStyle=o,a==="pickaxe"&&(r.beginPath(),r.moveTo(-16,-14),r.quadraticCurveTo(0,-24,16,-14),r.lineTo(14,-9),r.quadraticCurveTo(0,-17,-14,-9),r.closePath(),r.fill()),a==="axe"&&Te(r,[[2,-18],[15,-14],[15,-2],[2,-6]]),a==="shovel"&&Te(r,[[-7,-22],[7,-22],[8,-10],[0,-5],[-8,-10]]),a==="sword"&&(r.fillRect(-4,-24,8,30),Te(r,[[-4,-24],[0,-30],[4,-24]]),r.fillStyle=l,r.fillRect(-9,6,18,4))),r.restore(),e[n.id]=s.toDataURL()}for(let n of i.blueprints||[]){let s=document.createElement("canvas");s.width=s.height=48;let r=s.getContext("2d");r.fillStyle="#26302A",Te(r,[[6,10],[40,6],[42,38],[8,42]]),r.fillStyle="rgba(239,235,221,.55)";for(let a=0;a<4;a++)r.fillRect(12,14+a*7,24,2);r.fillStyle=n.id==="bp_diamond"?"#6FC7C0":"#D8D4CA",Te(r,[[28,26],[36,30],[30,38],[24,32]]),e[n.id]=s.toDataURL()}return e}function Lu(){let i=Ru(99),t=[],e=[];for(let n=0;n<4;n++){let s=document.createElement("canvas");s.width=s.height=Kn;let r=s.getContext("2d");n&&r.drawImage(e[n-1],0,0),r.fillStyle="rgba(21,23,20,0.55)";for(let a=0;a<3+n*2;a++){let o=6+i()*20,l=6+i()*20,c=i()*Math.PI;Te(r,[[o,l],[o+Math.cos(c)*9,l+Math.sin(c)*9],[o+Math.cos(c+.3)*6,l+Math.sin(c+.3)*6]])}e.push(s),t.push(s)}return t}var Du=`attribute float light; attribute vec2 lt; varying vec2 vUv; varying float vL; varying vec2 vLt; varying float vD;
void main(){ vUv=uv; vL=light; vLt=lt; vec4 mv=modelViewMatrix*vec4(position,1.0); vD=-mv.z; gl_Position=projectionMatrix*mv; }`,Nu=`uniform sampler2D uAtlas; uniform float uDay; uniform vec3 uFog; uniform float uNear; uniform float uFar;
varying vec2 vUv; varying float vL; varying vec2 vLt; varying float vD;
void main(){ vec4 t=texture2D(uAtlas,vUv); if(t.a<0.04) discard;
 vec3 tint=vec3(1.0); float l;
 if(vL>1.5){ l=1.12; } else {
  float sky=vLt.x*mix(0.35,1.0,uDay), bl=vLt.y;
  l=vL*mix(0.16,1.0,max(sky,bl)); l=floor(l*5.0+0.5)/5.0; l=max(l,0.08);
  tint=mix(vec3(1.0),vec3(1.12,0.97,0.8),step(sky,bl)*bl);
 }
 float f=smoothstep(uNear,uFar,vD); gl_FragColor=vec4(mix(t.rgb*l*tint,uFog,f), t.a); }`;function T0(i,t){let e=Zn(i),n=Zn(t),s=[[e,n]];for(let r=-1;r<=1;r++)for(let a=-1;a<=1;a++){if(!a&&!r)continue;let o=(e+a)*16,l=(n+r)*16,c=i<o?o-i:i>=o+16?i-(o+16-1):0,u=t<l?l-t:t>=l+16?t-(l+16-1):0;Math.max(c,u)<=14&&s.push([e+a,n+r])}return s}function Fu(i){let t=new di(i);t.magFilter=Le,t.minFilter=Le,t.generateMipmaps=!1;let e={uAtlas:{value:t},uDay:{value:1},uFog:{value:new z(.94,.92,.87)},uNear:{value:30},uFar:{value:60}},n=new $e({uniforms:e,vertexShader:Du,fragmentShader:Nu}),s=new $e({uniforms:e,vertexShader:Du,fragmentShader:Nu,transparent:!0,depthWrite:!1,side:pn});return{opaque:n,trans:s,uniforms:e,tex:t}}function Uu(i){let t=new en;return t.setAttribute("position",new Ue(i.pos,3)),t.setAttribute("uv",new Ue(i.uv,2)),t.setAttribute("light",new Ue(i.light,1)),t.setAttribute("lt",new Ue(i.lt,2,!0)),t.setIndex(new Ue(i.index,1)),t.computeBoundingSphere(),t}var yo=class{constructor({scene:t,mats:e,reg:n,worker:s,diffs:r,onDirty:a}){Object.assign(this,{scene:t,mats:e,reg:n,worker:s,diffs:r,onDirty:a}),this.chunks=new Map,this.inflight=0,this.maxInflight=3,this.rd=4,this.rev=0,this.stats={meshMs:[],genMs:[],loaded:0},s.addEventListener("message",o=>this.onMsg(o.data))}onMsg(t){if(t.type!=="chunk"&&t.type!=="mesh")return;let e=Ni(t.cx,t.cz),n=this.chunks.get(e);t.type==="chunk"&&this.inflight--,n&&(t.type==="chunk"&&(n.vox=t.vox,n.state="ready",this.stats.genMs.push(t.genMs)),!(t.rev<n.meshRev)&&(this.stats.meshMs.push(t.ms),this.stats.meshMs.length>400&&this.stats.meshMs.shift(),this.setMesh(n,t.mesh)))}setMesh(t,e){for(let n of["o","t"])t[n]&&(this.scene.remove(t[n]),t[n].geometry.dispose(),t[n]=null);e.opaque.index.length&&(t.o=new Ve(Uu(e.opaque),this.mats.opaque),t.o.position.set(t.cx*16,0,t.cz*16),t.o.matrixAutoUpdate=!1,t.o.updateMatrix(),this.scene.add(t.o)),e.trans.index.length&&(t.t=new Ve(Uu(e.trans),this.mats.trans),t.t.position.set(t.cx*16,0,t.cz*16),t.t.matrixAutoUpdate=!1,t.t.updateMatrix(),t.t.renderOrder=1,this.scene.add(t.t))}update(t,e){let n=Zn(t),s=Zn(e),r=xu(n,s,this.rd);for(let l of r){if(this.inflight>=this.maxInflight)break;let c=Ni(l.cx,l.cz);if(this.chunks.has(c))continue;let u={cx:l.cx,cz:l.cz,vox:null,state:"loading",meshRev:++this.rev,o:null,t:null};this.chunks.set(c,u),this.inflight++,this.worker.postMessage({type:"load",cx:l.cx,cz:l.cz,rev:u.meshRev})}let a=this.rd+1.5,o=[];for(let[l,c]of this.chunks){let u=c.cx-n,d=c.cz-s;if(u*u+d*d>a*a){for(let h of["o","t"])c[h]&&(this.scene.remove(c[h]),c[h].geometry.dispose());this.chunks.delete(l),o.push(l)}}o.length&&this.worker.postMessage({type:"drop",keys:o.filter(l=>{let[c,u]=l.split(",").map(Number);return Math.abs(c-n)>this.rd+3||Math.abs(u-s)>this.rd+3})}),this.stats.loaded=[...this.chunks.values()].filter(l=>l.state==="ready").length}ready(t,e){let n=this.chunks.get(Ni(Zn(t),Zn(e)));return!!(n&&n.state==="ready")}get(t,e,n){let s=tc(t,e,n);if(!s)return e<0?13:0;let r=this.chunks.get(Ni(s.cx,s.cz));return r&&r.vox?r.vox[s.i]:0}set(t,e,n,s){let r=tc(t,e,n);if(!r)return!1;let a=Ni(r.cx,r.cz),o=this.chunks.get(a);if(!o||!o.vox)return!1;o.vox[r.i]=s,Tu(this.diffs,a,r.i,s),this.worker.postMessage({type:"set",x:t,y:e,z:n,n:s});let l=Math.floor(t),c=Math.floor(n);for(let[u,d]of T0(l,c)){let h=this.chunks.get(Ni(u,d));h&&h.state==="ready"&&(h.meshRev=++this.rev,this.worker.postMessage({type:"mesh",cx:u,cz:d,rev:h.meshRev}))}return this.onDirty&&this.onDirty(a),!0}setRenderDistance(t){this.rd=t;let e=this.mats.uniforms;e.uFar.value=t*16-2,e.uNear.value=Math.max(8,t*16*.45)}clear(){for(let t of this.chunks.values())for(let e of["o","t"])t[e]&&(this.scene.remove(t[e]),t[e].geometry.dispose());this.chunks.clear()}};var A0="hw_world";var vo=null;function Ou(){return vo||(vo=new Promise((i,t)=>{if(!("indexedDB"in self))return t(new Error("no indexedDB"));let e=indexedDB.open(A0,1);e.onupgradeneeded=()=>e.result.createObjectStore("kv"),e.onsuccess=()=>i(e.result),e.onerror=()=>t(e.error)}),vo)}function dc(i,t){return Ou().then(e=>new Promise((n,s)=>{let r=e.transaction("kv",i),a=r.objectStore("kv"),o=t(a);r.oncomplete=()=>n(o instanceof IDBRequest?o.result:void 0),r.onerror=()=>s(r.error)}))}var fc=i=>dc("readonly",t=>t.get(i)),pc=i=>dc("readwrite",t=>{for(let e in i)t.put(i[e],e)});async function Bu(i){let t=await Ou();return new Promise((e,n)=>{let s={},r=t.transaction("kv","readonly"),a=r.objectStore("kv").openCursor(IDBKeyRange.bound(i,i+"\uFFFF"));a.onsuccess=()=>{let o=a.result;o&&(s[o.key]=o.value,o.continue())},r.oncomplete=()=>e(s),r.onerror=()=>n(r.error)})}async function zu(i){let t={};for(let e of i){let n=await fc(e);n!==void 0&&(t[e]=n)}await dc("readwrite",e=>e.clear()),await pc(t)}function at(i,t,...e){let n=document.createElement(i);for(let s in t||{}){let r=t[s];r==null||r===!1||(s.startsWith("on")?n.addEventListener(s.slice(2),r):s==="html"?n.innerHTML=r:n.setAttribute(s,r===!0?"":r))}for(let s of e.flat())s!=null&&s!==!1&&n.append(s.nodeType?s:document.createTextNode(String(s)));return n}var Fi=i=>document.querySelector(i);var R0="../../",I0=["data/words.js","data/words-2.js","data/words-3.js","data/words-4.js","data/phrases.js","data/roots.js","data/grammar.js","data/patterns.js","engine.js"],P0=["zh2en","en2zh","zh2en-type","phrase-fill","grammar-fill","pattern-choose"],Mo=null;function L0(i){return new Promise((t,e)=>{let n=document.createElement("script");n.src=i,n.onload=t,n.onerror=()=>e(new Error("load "+i)),document.head.appendChild(n)})}function D0(){return Mo||(Mo=(async()=>{for(let t of I0)await L0(R0+t);let i=window;return new i.KE.Engine({words:i.DATA_WORDS||[],phrases:i.DATA_PHRASES||[],roots:i.DATA_ROOTS||[],grammar:i.DATA_GRAMMAR||[],patterns:i.DATA_PATTERNS||[]})})().catch(i=>{throw Mo=null,i})),Mo}async function ku(i,{onReward:t,onClose:e,count:n=5}){i.innerHTML="",i.hidden=!1;let s=at("div",{class:"panel quiz"});i.append(s),s.append(at("div",{class:"p-head"},at("h2",{},"\u7DF4\u7FD2\u77F3\u7891"),at("button",{class:"x","aria-label":"\u95DC\u9589",onclick:d},"\xD7")),at("p",{class:"muted"},"\u984C\u5EAB\u8F09\u5165\u4E2D\u2026"));let r;try{r=await D0()}catch{s.lastChild.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557\uFF0C\u8ACB\u6AA2\u67E5\u7DB2\u8DEF\u5F8C\u518D\u8A66\u4E00\u6B21\u3002";return}let a=window.KE,o=[],l=0,c=0,u=0;function d(){i.hidden=!0,i.innerHTML="",e&&e()}function h(){o=r.buildQuiz({modules:["words","phrases","grammar","patterns"],types:P0,lv:1,count:n}),o.length||(o=r.buildQuiz({modules:["words"],types:["zh2en","en2zh"],count:n})),l=0,c=0,u=0,m()}function m(){s.innerHTML="";let p=o[l],f=a.isTyped(p);i._q=p;let E=at("div",{class:"fb"}),A=at("div",{class:"q-body"});s.append(at("div",{class:"p-head"},at("h2",{},"\u7DF4\u7FD2\u77F3\u7891 ",at("small",{},`\u7B2C ${l+1} / ${o.length} \u984C`)),at("button",{class:"x","aria-label":"\u95DC\u9589",onclick:d},"\xD7")),at("div",{class:"q-type"},(a.TYPES[p.type]||"\u984C\u76EE")+(f?"\u3000\u6253\u5B57\u984C \xB7 \u7B54\u5C0D 2 \u91D1\u5E63":"\u3000\u7B54\u5C0D 1 \u91D1\u5E63")),at("div",{class:"q-prompt"+(p.en?" en":"")},p.prompt),p.sub?at("div",{class:"q-sub"},p.sub):null,A,E);let v=!1,b=w=>{if(v)return;v=!0;let I=vu(w,f);w&&(u++,c+=I,t&&t(I)),E.className="fb "+(w?"ok":"bad"),E.append(at("div",{},w?`\u7B54\u5C0D\u4E86\uFF01 +${I} \u91D1\u5E63`:"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",w?null:at("b",{class:"en"},p.answer)),!w&&p.why?at("div",{class:"why"},p.why):null,at("button",{class:"btn",onclick:_},l+1<o.length?"\u4E0B\u4E00\u984C":"\u770B\u7D50\u679C"))};if(p.input==="type"){let w=at("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),I=()=>{v||!w.value.trim()||b(r.check(p,w.value).ok)};w.addEventListener("keydown",x=>{x.stopPropagation(),x.key==="Enter"&&I()}),A.append(at("div",{class:"typerow"},w,at("button",{class:"btn",onclick:I},"\u9001\u51FA"))),setTimeout(()=>w.focus(),50)}else{let w=at("div",{class:"opts"});(p.options||[]).forEach(I=>w.append(at("button",{class:"opt"+(/[a-z]/i.test(I)?" en":""),onclick:x=>{if(v)return;let C=r.check(p,I).ok;x.currentTarget.classList.add(C?"ok":"bad"),b(C)}},I))),A.append(w)}}function _(){l++,l<o.length?m():M()}function M(){s.innerHTML="",s.append(at("div",{class:"p-head"},at("h2",{},"\u9019\u4E00\u56DE\u7D50\u675F"),at("button",{class:"x","aria-label":"\u95DC\u9589",onclick:d},"\xD7")),at("p",{class:"big"},`\u7B54\u5C0D ${u} / ${o.length} \u984C\uFF0C\u62FF\u5230 ${c} \u91D1\u5E63`),at("div",{class:"row"},at("button",{class:"btn",onclick:h},"\u518D\u4F86\u4E00\u56DE"),at("button",{class:"btn ghost",onclick:d},"\u56DE\u53BB\u84CB\u623F\u5B50")))}h()}var N0=[1,2,4,6,8];function So(i,t){if(!i||i.hardness<0)return{time:1/0,harvest:!1,usesTool:!1};let e=.25+i.hardness*.55,n=i.tier|0,r=!!(t&&i.tool&&t.type===i.tool)?t.tier:0;return n>0&&r<n?{time:e*3,harvest:!1,usesTool:!!t&&t.type!=="sword"}:{time:Math.max(.1,e/N0[r]),harvest:!0,usesTool:!!t&&t.type!=="sword"}}function Vu(i,t,e,n=1){let s=i.slots[t];if(!s)return{broke:!1};let r=e.toolOf(s.id);if(!r)return{broke:!1};let a=r.durability;return s.dur=(s.dur==null?a:s.dur)-n,s.dur<=0?(i.slots[t]=null,{broke:!0,id:s.id}):{broke:!1,left:s.dur,max:a}}function Gu(i,t){let e=i&&t.toolOf(i.id);if(!e)return null;let n=e.durability,s=i.dur==null?n:i.dur;return{left:s,max:n,frac:s/n}}var vc={};Co(vc,{collect:()=>xc,createFurnace:()=>mc,dismantle:()=>yc,start:()=>gc,tick:()=>_c});function mc(){return{fuel:0,jobs:[],done:{}}}function gc(i,t,e,n=4){if(Tn(t,e.in)<1)return{ok:!1,reason:"materials"};let s=i.jobs.length;if(i.fuel-s<1){if(Tn(t,"coal")<1)return{ok:!1,reason:"fuel"};rr(t,"coal",1),i.fuel+=n}return rr(t,e.in,1),i.jobs.push({in:e.in,out:e.out,left:e.time}),{ok:!0}}function _c(i,t){for(;t>0&&i.jobs.length;){let e=i.jobs[0],n=Math.min(t,e.left);e.left-=n,t-=n,e.left<=1e-9&&(i.jobs.shift(),i.fuel-=1,i.done[e.out]=(i.done[e.out]||0)+1)}return i}function xc(i,t,e=()=>64){let n=0;for(let s of Object.keys(i.done)){let r=$n(t,s,i.done[s],e);n+=i.done[s]-r,r?i.done[s]=r:delete i.done[s]}return n}function yc(i){let t=Object.assign({},i.done);for(let e of i.jobs)t[e.in]=(t[e.in]||0)+1;return t}var Ac={};Co(Ac,{MAX_HP:()=>bo,REGEN_EVERY:()=>F0,SAFE_FALL:()=>U0,createHealth:()=>Mc,damage:()=>bc,fallDamage:()=>Sc,hearts:()=>Tc,regen:()=>wc,respawnPoint:()=>Ec});var bo=20,U0=4,F0=4;function Mc(i=20){return{hp:Math.max(0,Math.min(20,i)),regenT:0}}function Sc(i,{water:t=!1,flying:e=!1}={}){return t||e||i<=4?0:Math.floor((i-4)/2)+1}function bc(i,t){return t>0&&(i.hp=Math.max(0,i.hp-t),i.regenT=0),i.hp<=0}function wc(i,t){return i.hp<=0||i.hp>=20?(i.regenT=0,!1):(i.regenT+=t,i.regenT>=4?(i.regenT-=4,i.hp=Math.min(20,i.hp+1),!0):!1)}function Ec(i,t,e){return i&&e?{x:i.x+.5,y:i.y+1,z:i.z+.5}:{x:t.x,y:t.y,z:t.z}}function Tc(i){let t=[];for(let e=0;e<20/2;e++){let n=i-e*2;t.push(n>=2?"full":n===1?"half":"empty")}return t}var wo="d4d8f03775",Cc=new URLSearchParams(location.search),z0=720,Wu=5,k0=20261008,V0=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,S={touch:V0,started:!1,paused:!0,overlay:null,p:{x:.5,y:40,z:.5},v:{x:0,y:0,z:0},yaw:0,pitch:-.2,fly:!1,onGround:!1,eyeOff:0,view:"fp",sel:0,time:.08,keys:{},joy:{x:0,y:0,active:!1},jumpHeld:!1,downHeld:!1,mining:{active:!1,src:"center",sx:0,sy:0,k:"",t:0},placeRepeat:0,dirty:new Set,dirtyMeta:!1,frames:[],drops:[]};function G0(i,t){try{let e=localStorage.getItem(i);return e??t}catch{return t}}function H0(i,t){try{localStorage.setItem(i,t)}catch{}}async function W0(){let[i,t]=await Promise.all(["data/blocks.json","data/recipes.json"].map(R=>fetch(R,{cache:"no-cache"}).then(V=>V.json()))),e=_u(i),n=t.recipes||[],s=R=>e.maxStack(R),r={};try{let[R,V,it,Mt,Pt]=await Promise.all(["hw_meta","hw_player","hw_inventory","hw_coins","hw_furnaces"].map(fc));r={meta:R,player:V,inv:it,coins:Mt,furnaces:Pt,chunks:await Bu("hw_chunk:")}}catch(R){console.warn("save unavailable",R)}let a=r.meta&&r.meta.seed||k0,o=Au(Object.fromEntries(Object.entries(r.chunks||{}).map(([R,V])=>[R.slice(9),V]))),l=r.inv?oc(r.inv):mo(),c=Eu(r.coins),u=Mc(r.player&&r.player.hp!=null?r.player.hp:20);S.bed=r.player&&r.player.bed||null;let d=r.furnaces||{},h=t.smelt||[],m=t.fuelPerCoal||4;r.meta&&typeof r.meta.time=="number"&&(S.time=r.meta.time);let _=Fi("#c"),M=new ho({canvas:_,antialias:!1,powerPreference:"high-performance"});M.setPixelRatio(Math.min(window.devicePixelRatio||1,S.touch?1.5:1.25));let p=new Ds,f=new Xt("#EFEBDD");p.background=f;let E=new Ze(72,1,.08,200);E.rotation.order="YXZ";let A=Iu(e),v=Pu(e,A),b=Fu(A.canvas),w=new Worker("assets/hw-worker.js?v="+wo),I=new yo({scene:p,mats:b,reg:e,worker:w,diffs:o,onDirty:R=>S.dirty.add(R)}),x=Math.max(2,Math.min(6,parseInt(Cc.get("rd")||G0("hw_rd",S.touch?"3":"4"),10)||4));I.setRenderDistance(x),E.far=x*16+40,E.updateProjectionMatrix();let C=await new Promise(R=>{let V=it=>{it.data.type==="ready"&&(w.removeEventListener("message",V),R(it.data.spawn))};w.addEventListener("message",V),w.postMessage({type:"init",seed:a,blocks:i,diffs:Object.fromEntries([...o].map(([it,Mt])=>[it,uc(Mt)]))})});r.player?Object.assign(S,{p:{x:r.player.x,y:r.player.y,z:r.player.z},yaw:r.player.yaw||0,pitch:r.player.pitch||0,fly:!!r.player.fly,sel:r.player.sel|0}):(S.p={x:C.x,y:C.y,z:C.z},S.yaw=Math.atan2(-(C.stele.x+.5-C.x),-(C.stele.z+.5-C.z)),S.pitch=-.15);let N=new zs(new Gs(new Un(1.004,1.004,1.004)),new ls({color:1382164,transparent:!0,opacity:.45}));N.visible=!1,p.add(N);let B=Lu().map(R=>new di(R)),W=new Ve(new Un(1.01,1.01,1.01),new ui({map:B[0],transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}));W.visible=!1,p.add(W);let Y=(R,V)=>{let it=document.createElement("canvas");it.width=it.height=64;let Mt=it.getContext("2d");Mt.fillStyle=R,Mt.beginPath(),Mt.arc(32,32,28,0,7),Mt.fill(),V&&(Mt.globalCompositeOperation="destination-out",Mt.beginPath(),Mt.arc(44,26,24,0,7),Mt.fill());let Pt=new di(it);return Pt.colorSpace=Ye,Pt},U=new Ri(new hi({map:Y("#F2C46B"),depthWrite:!1,fog:!1})),X=new Ri(new hi({map:Y("#EDE6D0",!0),depthWrite:!1,fog:!1}));p.add(U,X);let Q=new Wn,Z=(R,V,it,Mt,Pt,gt,Vt)=>{let At=new Ve(new Un(R,V,it),new ui({color:Mt}));return At.position.set(Pt,gt,Vt),At.userData.base=new Xt(Mt),Q.add(At),At},ot=Z(.24,.75,.26,"#26302A",-.14,.375,0),J=Z(.24,.75,.26,"#26302A",.14,.375,0);Z(.56,.7,.3,"#2F5A34",0,1.1,0);let nt=Z(.18,.66,.2,"#E7CDA6",-.38,1.12,0),rt=Z(.18,.66,.2,"#E7CDA6",.38,1.12,0);Z(.46,.42,.42,"#E7CDA6",0,1.66,0),Z(.5,.14,.46,"#151714",0,1.9,.02),Z(.12,.12,.05,"#E0352B",.16,1.92,-.24),[ot,J,nt,rt].forEach(R=>{R.geometry.translate(0,-R.geometry.parameters.height/2+.05,0),R.position.y+=R.geometry.parameters.height/2-.05}),Q.visible=!1,p.add(Q);let Nt={},Ut=R=>Nt[R]||(Nt[R]=(()=>{let V=new Image;V.src=v[R];let it=new Ge(V);return it.colorSpace=Ye,V.onload=()=>{it.needsUpdate=!0},new hi({map:it,depthWrite:!0,alphaTest:.3})})());function ce(R,V,it,Mt){let Pt=new Ri(Ut(R));Pt.scale.set(.42,.42,1),p.add(Pt),S.drops.push({id:R,s:Pt,p:{x:V,y:it,z:Mt},v:{x:(Math.random()-.5)*2,y:3,z:(Math.random()-.5)*2},age:0})}let jt=(R,V,it)=>e.flat.solid[I.get(R,V,it)]===1,Qt=(R,V,it)=>I.get(R,V,it),O=X0();function K(R){let V=at("div",{class:"toast"},R);O.toasts.append(V),setTimeout(()=>V.remove(),2200)}function St(){O.coins.textContent=c.coins}let kt="";function vt(){let R=Tc(u.hp),V=R.join();V!==kt&&(kt=V,O.hearts.innerHTML="",R.forEach(it=>O.hearts.append(at("i",{class:"ht "+it}))))}function Wt(R){if(S.dead||R<=0)return;let V=bc(u,R);vt(),S.dirtyMeta=!0,O.flash.classList.remove("on"),O.flash.offsetWidth,O.flash.classList.add("on"),V&&Ae()}function Ae(){S.dead=!0,ut(),document.pointerLockElement&&document.exitPointerLock(),S.overlay="dead";let R=O.ov;R.innerHTML="",R.hidden=!1,R.append(at("div",{class:"panel start"},at("h2",{},"\u4F60\u6688\u5012\u4E86\uFF01"),at("p",{},"\u5225\u64D4\u5FC3\uFF0C\u80CC\u5305\u88E1\u7684\u6771\u897F\u90FD\u9084\u5728\u3002"),at("button",{class:"btn big",onclick:Zt},S.bed?"\u56DE\u5230\u5E8A\u908A":"\u56DE\u5230\u51FA\u751F\u9EDE")))}function Zt(){let R=Ec(S.bed,C,!!S.bed);S.p={x:R.x,y:R.y,z:R.z},S.v={x:0,y:0,z:0},S.fallTop=R.y,u.hp=20,S.dead=!1,vt(),G(),S.dirtyMeta=!0,K(S.bed?"\u5728\u5E8A\u908A\u9192\u4F86\u4E86":"\u56DE\u5230\u51FA\u751F\u9EDE\u4E86")}function Gt(){O.hotbar.innerHTML="";for(let V=0;V<9;V++){let it=l.slots[V];O.hotbar.append(at("button",{class:"slot"+(V===S.sel?" on":""),"aria-label":it?e.name(it.id):"\u7A7A\u683C",onpointerdown:Mt=>{Mt.stopPropagation(),S.sel=V,Gt()}},it?at("img",{src:v[it.id],alt:""}):null,it&&it.count>1?at("span",{class:"cnt"},it.count):null,he(it),at("span",{class:"key"},V+1)))}let R=l.slots[S.sel];O.selName.textContent=R?e.name(R.id):""}function he(R){let V=Gu(R,e);return!V||V.left>=V.max?null:at("span",{class:"dur"+(V.frac<.25?" low":"")},at("i",{style:"width:"+Math.round(V.frac*100)+"%"}))}function Jt(R=4){let V=new Set,it=Math.floor(S.p.x),Mt=Math.floor(S.p.y),Pt=Math.floor(S.p.z);for(let gt=-R;gt<=R;gt++)for(let Vt=-R;Vt<=R;Vt++)for(let At=-R;At<=R;At++){let te=I.get(it+At,Mt+gt,Pt+Vt);te&&V.add(e.get(te).id)}return V}let ue=()=>({near:Jt(),owned:new Set(c.owned)}),_e=-1;function Be(){let R=O.ov;R.innerHTML="",R.hidden=!1;let V=at("div",{class:"inv-grid"}),it=At=>{let te=l.slots[At];return at("button",{class:"slot"+(At===_e?" pick":"")+(At<9?" hb":""),title:te?e.name(te.id):"",onclick:()=>{_e<0?l.slots[At]&&(_e=At):(rc(l,_e,At,s),_e=-1,S.dirtyMeta=!0),Be(),Gt()}},te?at("img",{src:v[te.id],alt:""}):null,te&&te.count>1?at("span",{class:"cnt"},te.count):null,he(te))};for(let At=9;At<36;At++)V.append(it(At));let Mt=at("div",{class:"inv-grid hbrow"});for(let At=0;At<9;At++)Mt.append(it(At));let Pt=at("div",{class:"craft"},at("h3",{},"\u5408\u6210")),gt=ue(),Vt={needs:"\u8981\u7AD9\u5728\u5DE5\u4F5C\u53F0\u65C1\u908A",blueprint:"\u8981\u5148\u5728\u5546\u5E97\u8CB7\u85CD\u5716"};n.forEach(At=>{let te=_o(l,At,gt),Me=te.ok;At.blueprint&&te.reason==="blueprint"&&!Object.keys(At.in).some(Se=>Se!=="stick"&&Tn(l,Se)>0)||Pt.append(at("div",{class:"rcp"+(Me?"":" no")},at("img",{src:v[At.out.id],alt:""}),at("div",{class:"rcp-t"},at("b",{},`${At.name_zh} \xD7${At.out.count}`),at("small",{},Object.keys(At.in).map(Se=>`${e.name(Se)} ${Tn(l,Se)}/${At.in[Se]}`).join("\u3001")+(Vt[te.reason]?"\u3000\xB7 "+Vt[te.reason]:""))),at("button",{class:"btn small",onclick:()=>{let Se=lc(l,At,s,ue());Se.ok?(K(`\u505A\u597D\u4E86\uFF1A${At.name_zh} \xD7${At.out.count}`),S.dirtyMeta=!0):K({full:"\u80CC\u5305\u6EFF\u4E86",needs:"\u8981\u7AD9\u5728\u5DE5\u4F5C\u53F0\u65C1\u908A",blueprint:"\u8981\u5148\u5728\u5546\u5E97\u8CB7\u85CD\u5716"}[Se.reason]||"\u6750\u6599\u4E0D\u5920"),Be(),Gt()}},"\u88FD\u4F5C")))}),R.append(at("div",{class:"panel inv"},at("div",{class:"p-head"},at("h2",{},"\u80CC\u5305"),at("button",{class:"x","aria-label":"\u95DC\u9589",onclick:G},"\xD7")),at("div",{class:"inv-wrap"},at("div",{},at("p",{class:"muted"},"\u9EDE\u4E00\u683C\u3001\u518D\u9EDE\u53E6\u4E00\u683C\u5C31\u80FD\u4EA4\u63DB\u3002\u6700\u4E0B\u9762\u4E00\u6392\uFF1D\u5FEB\u6377\u5217\u3002"),V,Mt),Pt)))}let xe=Su(e);function be(){let R=O.ov;R.innerHTML="",R.hidden=!1;let V=at("div",{class:"shop"});xe.forEach(it=>V.append(at("div",{class:"offer"+(it.locked?" locked":"")},at("img",{src:v[it.id],alt:""}),at("div",{class:"of-t"},at("b",{},`${it.name_zh}${it.qty>1?" \xD7"+it.qty:""}`),at("small",{},it.locked?`\uFF08${it.locked}\uFF09`:`${it.price} \u91D1\u5E63${it.desc?"\u3000"+it.desc:""}`)),hc(c,it.id)?at("span",{class:"owned"},"\u5DF2\u64C1\u6709"):at("button",{class:"btn small",disabled:it.locked?!0:null,onclick:()=>D(it)},it.locked?"\u672A\u958B\u653E":"\u8CFC\u8CB7")))),R.append(at("div",{class:"panel"},at("div",{class:"p-head"},at("h2",{},"\u5546\u5E97\u3000",at("span",{class:"coin"}),` ${c.coins}`),at("button",{class:"x","aria-label":"\u95DC\u9589",onclick:G},"\xD7")),at("p",{class:"muted"},"\u91D1\u5E63\u600E\u9EBC\u4F86\uFF1F\u53BB\u300C\u7DF4\u7FD2\u77F3\u7891\u300D\u7B54\u82F1\u6587\u984C\uFF1A\u7B54\u5C0D 1 \u679A\u3001\u6253\u5B57\u984C 2 \u679A\u3002"),V))}function D(R){let V=bu(c,l,R,s);V.ok?(K(R.blueprint?`\u62FF\u5230 ${R.name_zh}\uFF01\u53BB\u5DE5\u4F5C\u53F0\u505A\u505A\u770B`:`\u8CB7\u5230 ${R.name_zh} \xD7${R.qty}`),S.dirtyMeta=!0,St(),Gt(),ct()):K({coins:"\u91D1\u5E63\u4E0D\u5920\uFF0C\u53BB\u77F3\u7891\u7B54\u984C\u5427\uFF01",full:"\u80CC\u5305\u6EFF\u4E86",locked:"\u9084\u6C92\u958B\u653E",owned:"\u5DF2\u7D93\u6709\u4E86"}[V.reason]||"\u8CB7\u4E0D\u4E86"),be()}let Ce=null;function se(){let R=O.ov,V=d[Ce]||(d[Ce]=mc());R.innerHTML="",R.hidden=!1;let it=V.jobs[0],Mt=at("div",{class:"shop"});h.forEach(gt=>{let Vt=Tn(l,gt.in);Mt.append(at("div",{class:"offer"+(Vt?"":" locked")},at("img",{src:v[gt.in],alt:""}),at("div",{class:"of-t"},at("b",{},`${e.name(gt.in)} \u2192 ${e.name(gt.out)}`),at("small",{},`\u6709 ${Vt} \u500B \xB7 \u6BCF\u500B ${gt.time} \u79D2`)),at("button",{class:"btn small",onclick:()=>{let At=gc(V,l,gt,m);At.ok||K(At.reason==="fuel"?"\u8981\u653E\u7164\u70AD\u7576\u71C3\u6599":"\u6C92\u6709\u6750\u6599"),S.dirtyMeta=!0,Gt(),se()}},"\u653E\u9032\u53BB")))});let Pt=Object.values(V.done).reduce((gt,Vt)=>gt+Vt,0);R.append(at("div",{class:"panel"},at("div",{class:"p-head"},at("h2",{},"\u7194\u7210"),at("button",{class:"x","aria-label":"\u95DC\u9589",onclick:G},"\xD7")),at("p",{class:"muted"},`\u71C3\u6599\u9084\u80FD\u71D2 ${Math.max(0,V.fuel-V.jobs.length)} \u500B\uFF08\u80CC\u5305\u7164\u70AD ${Tn(l,"coal")}\uFF1B1 \u500B\u7164\u70AD\u71D2 ${m} \u500B\uFF09`),at("div",{class:"furnace-st"},it?`\u6B63\u5728\u71D2\uFF1A${e.name(it.in)}\uFF08\u9084\u8981 ${Math.ceil(it.left)} \u79D2\uFF0C\u6392\u968A ${V.jobs.length} \u500B\uFF09`:"\u7210\u5B50\u7A7A\u8457"),at("div",{class:"row"},at("button",{class:"btn",disabled:Pt?null:!0,onclick:()=>{let gt=xc(V,l,s);gt&&K(`\u62FF\u51FA ${gt} \u500B`),S.dirtyMeta=!0,Gt(),se()}},`\u62FF\u51FA\u4F86\uFF08${Pt}\uFF09`)),Mt))}function T(){let R=O.ov;R.innerHTML="",R.hidden=!1;let V=at("b",{},I.rd),it=at("input",{type:"range",min:2,max:6,step:1,value:I.rd,oninput:Mt=>{V.textContent=Mt.target.value},onchange:Mt=>{let Pt=+Mt.target.value;I.setRenderDistance(Pt),E.far=Pt*16+40,E.updateProjectionMatrix(),H0("hw_rd",Pt)}});R.append(at("div",{class:"panel"},at("div",{class:"p-head"},at("h2",{},"\u8A2D\u5B9A"),at("button",{class:"x","aria-label":"\u95DC\u9589",onclick:G},"\xD7")),at("label",{class:"set"},"\u8996\u91CE\u8DDD\u96E2\uFF08\u5340\u584A\uFF09",V,it),at("p",{class:"muted"},"iPad \u5EFA\u8B70 3\uFF1B\u5361\u5361\u7684\u5C31\u8ABF\u5C0F\u3002"),at("div",{class:"row"},at("button",{class:"btn ghost",onclick:g},"\u91CD\u7F6E\u4E16\u754C")),at("p",{class:"muted"},"\u91CD\u7F6E\u4E16\u754C\u6703\u6E05\u6389\u84CB\u597D\u7684\u65B9\u584A\u3001\u80CC\u5305\u548C\u4F4D\u7F6E\uFF1B\u91D1\u5E63\uFF08\u7B54\u984C\u8CFA\u7684\uFF09\u6703\u4FDD\u7559\u3002"),at("p",{class:"muted small"},"\u7248\u672C "+wo)))}async function g(){if(confirm("\u78BA\u5B9A\u8981\u91CD\u7F6E\u4E16\u754C\u55CE\uFF1F\u84CB\u597D\u7684\u6771\u897F\u6703\u5168\u90E8\u6D88\u5931\uFF08\u91D1\u5E63\u4FDD\u7559\uFF09\u3002")){S.resetting=!0;try{await zu(["hw_coins"])}catch(R){console.warn(R)}location.reload()}}function F(R){document.pointerLockElement&&document.exitPointerLock(),S.overlay=R,ut(),R==="inv"?(_e=-1,Be()):R==="shop"?be():R==="set"?T():R==="furnace"?se():R==="quiz"&&ku(O.ov,{onReward:V=>{Mu(c,V),St(),S.dirtyMeta=!0,ct()},onClose:()=>{S.overlay=null}})}function G(){O.ov.hidden=!0,O.ov.innerHTML="",S.overlay=null}O.btnInv.onclick=()=>S.overlay==="inv"?G():F("inv"),O.btnShop.onclick=()=>S.overlay==="shop"?G():F("shop"),O.btnSet.onclick=()=>S.overlay==="set"?G():F("set"),O.btnView.onclick=()=>$();function $(){S.view=S.view==="fp"?"tp":"fp",K(S.view==="fp"?"\u7B2C\u4E00\u4EBA\u7A31":"\u7B2C\u4E09\u4EBA\u7A31")}function lt(){S.fly=!S.fly,S.v.y=0,O.root.classList.toggle("flying",S.fly),K(S.fly?"\u98DB\u884C\uFF1A\u958B\uFF08\u8DF3\uFF1D\u4E0A\u5347\u3001\u4E0B\uFF1D\u4E0B\u964D\uFF09":"\u98DB\u884C\uFF1A\u95DC")}let ht=new z;function j(){let R=Math.cos(S.pitch);return{x:-Math.sin(S.yaw)*R,y:Math.sin(S.pitch),z:-Math.cos(S.yaw)*R}}let et=()=>({x:S.p.x,y:S.p.y+1.62+S.eyeOff,z:S.p.z}),dt=R=>R&&!e.flat.liquid[R];function wt(R,V,it){if(R==="screen"){ht.set(V/innerWidth*2-1,-(it/innerHeight)*2+1,.5).unproject(E).sub(E.position).normalize();let Mt=E.position,Pt=S.view==="tp"?Mt.distanceTo(new z(S.p.x,S.p.y+1.62,S.p.z)):0;return po({x:Mt.x,y:Mt.y,z:Mt.z},{x:ht.x,y:ht.y,z:ht.z},Wu+1+Pt,Qt,dt)}return po(et(),j(),Wu,Qt,dt)}function ut(){S.mining.active=!1,S.mining.k="",S.mining.t=0,W.visible=!1}let ft=()=>{let R=l.slots[S.sel];return R?e.toolOf(R.id):null};function Lt(R){let V=R.n,it=So(e.get(V),ft());if(!I.set(R.x,R.y,R.z,0))return;let Mt=it.harvest?e.dropOf(V):null;Mt?ce(Mt,R.x+.5,R.y+.4,R.z+.5):it.harvest||K(`${e.name(V)}\u8981\u7528\u66F4\u597D\u7684\u5DE5\u5177\u6316\uFF0C\u624D\u6703\u6389\u6771\u897F`);let Pt=R.x+","+R.y+","+R.z;if(S.bed&&S.bed.x===R.x&&S.bed.y===R.y&&S.bed.z===R.z&&(S.bed=null,K("\u5E8A\u62C6\u6389\u4E86\uFF0C\u91CD\u751F\u9EDE\u6539\u56DE\u51FA\u751F\u9EDE")),d[Pt]){let gt=yc(d[Pt]);for(let Vt in gt)for(let At=0;At<gt[Vt];At++)ce(Vt,R.x+.5,R.y+.4,R.z+.5);delete d[Pt]}if(it.usesTool){let gt=Vu(l,S.sel,e);gt.broke&&K(`\u4F60\u7684${e.name(gt.id)}\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u628A\u5427\uFF01`),Gt()}S.dirtyMeta=!0,S.stats.mined++}function Ft(R){if(!R)return!1;let V=e.get(R.n);if(V&&V.interact==="quiz")return F("quiz"),!0;let it=l.slots[S.sel]&&e.get(l.slots[S.sel].id).placeable;if(V&&V.interact==="bed"&&!it)return S.bed={x:R.x,y:R.y,z:R.z},S.dirtyMeta=!0,K("\u91CD\u751F\u9EDE\u8A2D\u597D\u4E86\uFF1A\u6688\u5012\u6703\u56DE\u5230\u9019\u5F35\u5E8A"),!0;if(V&&V.interact==="craft"&&!it)return F("inv"),!0;if(V&&V.interact==="furnace"&&!it)return Ce=R.x+","+R.y+","+R.z,F("furnace"),!0;let Mt=l.slots[S.sel];if(!Mt)return K("\u5FEB\u6377\u5217\u9019\u683C\u662F\u7A7A\u7684"),!1;let Pt=e.get(Mt.id);if(!Pt||!Pt.placeable)return K(`${e.name(Mt.id)} \u4E0D\u80FD\u653E`),!1;let gt=R.x+R.face[0],Vt=R.y+R.face[1],At=R.z+R.face[2];if(Vt<0||Vt>=64)return!1;let te=I.get(gt,Vt,At);if(te&&!e.flat.liquid[te])return!1;let Me=.6/2;return Pt.solid&&gt+1>S.p.x-Me&&gt<S.p.x+Me&&At+1>S.p.z-Me&&At<S.p.z+Me&&Vt+1>S.p.y&&Vt<S.p.y+1.8||!I.set(gt,Vt,At,Pt.n)?!1:(sc(l,S.sel,1),S.dirtyMeta=!0,Gt(),S.stats.placed++,!0)}addEventListener("keydown",R=>{if(R.target&&R.target.tagName==="INPUT")return;let V=R.key.toLowerCase();if(V==="e"){S.overlay==="inv"?G():!S.overlay&&F("inv"),R.preventDefault();return}if(S.overlay!=="dead"){if(V==="escape"&&S.overlay){S.overlay==="quiz"?(O.ov.hidden=!0,O.ov.innerHTML="",S.overlay=null):G();return}S.overlay||(S.keys[V]=!0,R.code==="Space"&&(S.keys[" "]=!0,R.preventDefault()),V>="1"&&V<="9"&&(S.sel=+V-1,Gt()),V==="f"&&lt(),V==="v"&&$())}}),addEventListener("keyup",R=>{S.keys[R.key.toLowerCase()]=!1,R.code==="Space"&&(S.keys[" "]=!1)}),addEventListener("blur",()=>{S.keys={},ut()}),_.addEventListener("mousedown",R=>{if(!(S.touch||S.overlay)){if(document.pointerLockElement!==_){_.requestPointerLock&&_.requestPointerLock();return}R.button===0&&(S.mining.active=!0,S.mining.src="center"),R.button===2&&(Ft(wt("center")),S.placeRepeat=.3,S.rightHeld=!0)}}),addEventListener("mouseup",R=>{R.button===0&&ut(),R.button===2&&(S.rightHeld=!1)}),_.addEventListener("contextmenu",R=>R.preventDefault()),addEventListener("mousemove",R=>{document.pointerLockElement===_&&(S.yaw-=R.movementX*.0024,S.pitch=Math.max(-1.55,Math.min(1.55,S.pitch-R.movementY*.0024)))}),addEventListener("wheel",R=>{S.overlay||S.touch||(S.sel=(S.sel+(R.deltaY>0?1:8))%9,Gt())},{passive:!0}),document.addEventListener("pointerlockchange",()=>{O.root.classList.toggle("locked",document.pointerLockElement===_)});let zt=new Map;function L(R){S.touch!==R&&(S.touch=R,O.root.classList.toggle("touch",R),document.body.classList.toggle("is-touch",R))}O.root.classList.toggle("touch",S.touch),document.body.classList.toggle("is-touch",S.touch),_.addEventListener("pointerdown",R=>{if(R.pointerType!=="touch"||(L(!0),S.overlay))return;if(R.preventDefault(),R.clientX<innerWidth*.4&&R.clientY>innerHeight*.35&&!S.joy.active){S.joy={x:0,y:0,active:!0,id:R.pointerId,ox:R.clientX,oy:R.clientY},O.joy.style.transform=`translate(${R.clientX-60}px, ${R.clientY-60}px)`,O.joy.hidden=!1,O.knob.style.transform="translate(0px,0px)",zt.set(R.pointerId,{kind:"joy"});return}let V={kind:"look",x:R.clientX,y:R.clientY,sx:R.clientX,sy:R.clientY,t0:performance.now(),drag:!1,hold:!1};V.timer=setTimeout(()=>{V.drag||(V.hold=!0,S.mining.active=!0,S.mining.src="screen",S.mining.sx=V.x,S.mining.sy=V.y)},280),zt.set(R.pointerId,V)},{passive:!1}),addEventListener("pointermove",R=>{let V=zt.get(R.pointerId);if(!V)return;if(V.kind==="joy"){let Pt=R.clientX-S.joy.ox,gt=R.clientY-S.joy.oy,Vt=Math.hypot(Pt,gt),At=55;Vt>At&&(Pt*=At/Vt,gt*=At/Vt),S.joy.x=Pt/At,S.joy.y=gt/At,O.knob.style.transform=`translate(${Pt}px,${gt}px)`;return}let it=R.clientX-V.x,Mt=R.clientY-V.y;V.x=R.clientX,V.y=R.clientY,!V.drag&&Math.hypot(V.x-V.sx,V.y-V.sy)>12&&(V.drag=!0,clearTimeout(V.timer),V.hold&&(ut(),V.hold=!1)),V.drag?(S.yaw-=it*.0055,S.pitch=Math.max(-1.55,Math.min(1.55,S.pitch-Mt*.0055))):V.hold&&(S.mining.sx=V.x,S.mining.sy=V.y)});let pt=R=>{let V=zt.get(R.pointerId);if(V){if(zt.delete(R.pointerId),V.kind==="joy"){S.joy={x:0,y:0,active:!1},O.joy.hidden=!0;return}clearTimeout(V.timer),V.hold?ut():!V.drag&&performance.now()-V.t0<280&&!S.overlay&&Ft(wt("screen",V.x,V.y))}};addEventListener("pointerup",pt),addEventListener("pointercancel",pt);let tt=(R,V,it)=>{R.addEventListener("pointerdown",Mt=>{Mt.preventDefault(),Mt.stopPropagation(),V()}),R.addEventListener("pointerup",it),R.addEventListener("pointercancel",it),R.addEventListener("pointerleave",it)};tt(O.bJump,()=>{S.jumpHeld=!0},()=>{S.jumpHeld=!1}),tt(O.bDown,()=>{S.downHeld=!0},()=>{S.downHeld=!1}),O.bFly.addEventListener("pointerdown",R=>{R.preventDefault(),R.stopPropagation(),lt()}),O.bPlace.addEventListener("pointerdown",R=>{R.preventDefault(),R.stopPropagation(),Ft(wt("center"))}),document.addEventListener("touchmove",R=>{R.target.closest(".scroll, .panel")||R.preventDefault()},{passive:!1}),["gesturestart","gesturechange","dblclick"].forEach(R=>document.addEventListener(R,V=>V.preventDefault(),{passive:!1})),O.start.hidden=!1,O.go.onclick=()=>{O.start.hidden=!0,S.started=!0,S.paused=!1,O.root.classList.add("started"),!S.touch&&_.requestPointerLock&&_.requestPointerLock()};async function ct(){if(S.resetting)return;let R={hw_meta:{v:1,seed:a,time:S.time,build:wo},hw_player:{x:S.p.x,y:S.p.y,z:S.p.z,yaw:S.yaw,pitch:S.pitch,fly:S.fly,sel:S.sel,hp:u.hp,bed:S.bed},hw_inventory:go(l),hw_coins:wu(c),hw_furnaces:d};for(let V of S.dirty){let it=o.get(V);it&&(R["hw_chunk:"+V]=uc(it))}S.dirty.clear(),S.dirtyMeta=!1;try{await pc(R),S.lastSave=Date.now()}catch(V){console.warn("save failed",V)}}setInterval(()=>{S.started&&ct()},8e3),document.addEventListener("visibilitychange",()=>{document.hidden&&S.started&&ct()}),addEventListener("pagehide",()=>{S.started&&ct()}),S.stats={mined:0,placed:0};function xt(){let R=innerWidth,V=innerHeight;M.setSize(R,V,!1),E.aspect=R/V,E.updateProjectionMatrix()}addEventListener("resize",xt),xt(),St(),Gt(),vt();let st=performance.now(),It=0,Tt=0,de=new Xt("#EFEBDD"),ae=new Xt("#22302F"),an=new Xt("#E6B48C");function on(R){requestAnimationFrame(on);let V=(R-st)/1e3;st=R;let it=Math.min(.05,V);S.frames.push(V*1e3),S.frames.length>4e3&&S.frames.shift(),I.update(S.p.x,S.p.z);let Mt=I.ready(S.p.x,S.p.z);S.auto&&Ao(it),S.started&&!S.overlay&&Mt&&To(it),S.started&&!S.dead&&wc(u,it)&&(vt(),S.dirtyMeta=!0),S.time=(S.time+it/z0)%1;let Pt=S.time*Math.PI*2,gt=Math.sin(Pt),Vt=Math.min(1,Math.max(0,(gt+.12)/.42));f.copy(ae).lerp(de,Vt);let At=Math.max(0,1-Math.abs(gt)/.3)*(Vt>.05?1:.4);f.lerp(an,At*.55),b.uniforms.uDay.value=Vt,b.uniforms.uFog.value.set(...Eo(f));let te=et();S.eyeOff*=Math.pow(5e-4,it);let Me=j();if(S.view==="tp"){let De=po(te,{x:-Me.x,y:-Me.y,z:-Me.z},4,Qt,gn=>e.flat.opaque[gn]===1),Ne=De?Math.max(.4,De.dist-.25):4;E.position.set(te.x-Me.x*Ne,te.y-Me.y*Ne,te.z-Me.z*Ne)}else E.position.set(te.x,te.y,te.z);E.rotation.set(S.pitch,S.yaw,0);let Se=E.far*.8;if(U.position.set(E.position.x+Math.cos(Pt)*Se,E.position.y+Math.sin(Pt)*Se,E.position.z+.25*Se),U.scale.setScalar(Se*.14),X.position.set(E.position.x-Math.cos(Pt)*Se,E.position.y-Math.sin(Pt)*Se,E.position.z-.25*Se),X.scale.setScalar(Se*.1),Q.visible=S.view==="tp",Q.visible){Q.position.set(S.p.x,S.p.y,S.p.z),Q.rotation.y=S.yaw;let De=Math.hypot(S.v.x,S.v.z),Ne=Math.sin(R/120)*Math.min(1,De/4)*.7;ot.rotation.x=Ne,J.rotation.x=-Ne,nt.rotation.x=-Ne,rt.rotation.x=Ne;let gn=.35+.65*Vt;Q.children.forEach(jn=>jn.material.color.copy(jn.userData.base).multiplyScalar(gn))}for(let De in Nt)Nt[De].color.setScalar(.4+.6*Vt);let Ke=S.started&&!S.overlay?S.mining.active&&S.mining.src==="screen"?wt("screen",S.mining.sx,S.mining.sy):wt("center"):null;if(Ke?(N.visible=!0,N.position.set(Ke.x+.5,Ke.y+.5,Ke.z+.5)):N.visible=!1,S.mining.active&&Ke){let De=Ke.x+","+Ke.y+","+Ke.z;De!==S.mining.k&&(S.mining.k=De,S.mining.t=0),S.mining.t+=it;let Ne=So(e.get(Ke.n),ft()).time;if(Ne===1/0)W.visible=!1,S.mining.warned||(K(e.name(Ke.n)+"\u6316\u4E0D\u52D5"),S.mining.warned=!0);else{let gn=S.mining.t/Ne;W.visible=!0,W.position.copy(N.position),W.material.map=B[Math.min(3,Math.floor(gn*4))],gn>=1&&(Lt(Ke),S.mining.k="",S.mining.t=0,W.visible=!1)}}else W.visible=!1,S.mining.active||(S.mining.warned=!1);S.rightHeld&&!S.overlay&&(S.placeRepeat-=it,S.placeRepeat<=0&&(Ft(wt("center")),S.placeRepeat=.25)),ar(it);for(let De in d){let Ne=d[De];Ne.jobs.length&&(_c(Ne,it),S.dirtyMeta=!0,S.overlay==="furnace"&&De===Ce&&(S.furnUi=(S.furnUi||0)+it)>.5&&(S.furnUi=0,se()))}M.render(p,E),It+=V,Tt++,It>.5&&(O.dbg&&(O.dbg.textContent=`${Math.round(Tt/It)} fps \xB7 \u5340\u584A ${I.stats.loaded} \xB7 ${S.p.x.toFixed(1)}, ${S.p.y.toFixed(1)}, ${S.p.z.toFixed(1)}`),It=0,Tt=0),!Mt&&S.started?O.loading.hidden=!1:O.loading.hidden=!0}function Eo(R){let V=R.getHexString();return[parseInt(V.slice(0,2),16)/255,parseInt(V.slice(2,4),16)/255,parseInt(V.slice(4,6),16)/255]}function To(R){let V=S.keys,it=(V.d?1:0)-(V.a?1:0),Mt=(V.w?1:0)-(V.s?1:0);S.joy.active&&(it=S.joy.x,Mt=-S.joy.y);let Pt=Math.min(1,Math.hypot(it,Mt));if(Pt>0){let k=Math.hypot(it,Mt);it=it/k*Pt,Mt=Mt/k*Pt}let gt=-Math.sin(S.yaw),Vt=-Math.cos(S.yaw),At=Math.cos(S.yaw),te=-Math.sin(S.yaw),Me=V.control||!S.fly&&V.shift||S.joy.active&&Pt>.92,Se=Qt(S.p.x,S.p.y+.1,S.p.z),Ke=Qt(S.p.x,S.p.y+1,S.p.z),De=e.flat.liquid[Se]===1||e.flat.liquid[Ke]===1,Ne=S.fly?10:De?2.6:Me?6.2:4.3,gn=(gt*Mt+At*it)*Ne,jn=(Vt*Mt+te*it)*Ne,y=V[" "]||S.jumpHeld,P=S.fly&&V.shift||S.downHeld;if(S.fly)S.v.x=gn,S.v.z=jn,S.v.y=((y?1:0)-(P?1:0))*8;else{let k=S.onGround?14:5,mt=1-Math.exp(-k*R);S.v.x+=(gn-S.v.x)*mt,S.v.z+=(jn-S.v.z)*mt,De?(S.v.y-=9*R,S.v.y<-3&&(S.v.y=-3),y&&(S.v.y=3.4)):(S.v.y-=28*R,S.v.y<-40&&(S.v.y=-40),y&&S.onGround&&(S.v.y=8.6,S.onGround=!1))}let q=S.onGround,H=ec(S.p,S.v,R,jt,{canStep:!S.fly,grounded:S.onGround});if(S.onGround=H.onGround,H.stepped&&(S.eyeOff-=H.stepped),S.fallTop==null||S.fly||De||S.onGround&&q?S.fallTop=S.p.y:S.onGround||(S.fallTop=Math.max(S.fallTop,S.p.y)),S.onGround&&!q){let k=Sc(S.fallTop-S.p.y,{water:De,flying:S.fly});k&&(Wt(k),K("\u54CE\u5440\uFF0C\u6454\u4E86\u4E00\u4E0B")),S.fallTop=S.p.y}S.p.y<-20&&(S.p={x:C.x,y:C.y+1,z:C.z},S.v={x:0,y:0,z:0},S.fallTop=S.p.y)}function ar(R){let V=S.p.x,it=S.p.y+.9,Mt=S.p.z;for(let Pt=S.drops.length-1;Pt>=0;Pt--){let gt=S.drops[Pt];gt.age+=R;let Vt=V-gt.p.x,At=it-gt.p.y,te=Mt-gt.p.z,Me=Math.hypot(Vt,At,te);if(Me<1.5&&gt.age>.25&&$n(l,gt.id,1,s)===0){p.remove(gt.s),S.drops.splice(Pt,1),S.dirtyMeta=!0,Gt();continue}if(Me<4.5&&gt.age>.25?(gt.v.x=Vt/Me*6,gt.v.y=At/Me*6,gt.v.z=te/Me*6,gt.p.x+=gt.v.x*R,gt.p.y+=gt.v.y*R,gt.p.z+=gt.v.z*R):(gt.v.y-=18*R,gt.v.x*=.9,gt.v.z*=.9,ec(gt.p,gt.v,R,jt,{w:.25,h:.25})),gt.age>300){p.remove(gt.s),S.drops.splice(Pt,1);continue}gt.s.position.set(gt.p.x,gt.p.y+.2+Math.sin(gt.age*3)*.06,gt.p.z)}}S.auto=Cc.get("auto")==="walk";let Oi=0;function Ao(R){S.started||O.go.click(),Oi+=R,S.keys.w=!0,S.keys[" "]=Oi%1.6<.15,S.yaw+=R*.08}window.HW={build:wo,G:S,reg:e,inv:l,wallet:c,world:I,Inv:cc,health:u,hurt:Wt,Health:Ac,furnaces:d,Smelt:vc,smeltList:h,recipes:n,craftCtx:ue,breakInfo:So,start(){O.go.click()},state(){return{pos:{...S.p},coins:c.coins,inv:go(l),loaded:I.stats.loaded,stats:{...S.stats},overlay:S.overlay,fly:S.fly}},lookAt(R,V,it){let Mt=et(),Pt=R-Mt.x,gt=V-Mt.y,Vt=it-Mt.z;S.yaw=Math.atan2(-Pt,-Vt),S.pitch=Math.atan2(gt,Math.hypot(Pt,Vt))},target(){let R=wt("center");return R&&{x:R.x,y:R.y,z:R.z,n:R.n,face:R.face}},mine(R){R?(S.mining.active=!0,S.mining.src="center"):ut()},use(){return Ft(wt("center"))},key(R,V){S.keys[R]=V},open:F,close:G,save:ct,spawn:C,perf(){return{frames:S.frames.slice(),meshMs:I.stats.meshMs.slice(),genMs:I.stats.genMs.slice(),loaded:I.stats.loaded}},resetPerf(){S.frames.length=0,I.stats.meshMs.length=0,I.stats.genMs.length=0},ready:()=>I.ready(S.p.x,S.p.z)},requestAnimationFrame(on)}function X0(){let i=Fi("#ui"),t=e=>i.querySelector(e);return Cc.get("debug")!==null&&(t("#dbg").hidden=!1),{root:i,coins:t("#coins"),hearts:t("#hearts"),flash:Fi("#hurt"),hotbar:t("#hotbar"),selName:t("#selname"),ov:Fi("#ov"),toasts:t("#toasts"),btnInv:t("#b-inv"),btnShop:t("#b-shop"),btnSet:t("#b-set"),btnView:t("#b-view"),joy:t("#joy"),knob:t("#knob"),bJump:t("#b-jump"),bFly:t("#b-fly"),bPlace:t("#b-place"),bDown:t("#b-down"),start:Fi("#start"),go:Fi("#go"),dbg:t("#dbg").hidden?null:t("#dbg"),loading:t("#loading")}}W0().catch(i=>{console.error(i);let t=document.getElementById("err");t&&(t.hidden=!1,t.textContent="\u8F09\u5165\u5931\u6557\uFF1A"+i.message)});})();
