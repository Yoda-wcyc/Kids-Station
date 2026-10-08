(()=>{var ud=Object.defineProperty;var No=(i,t)=>{for(var e in t)ud(i,e,{get:t[e],enumerable:!0})};var uh=0,ul=1,dh=2;var qs=1,fh=2,is=3,oi=0,qe=1,rn=2,Cn=0,ss=1,dl=2,fl=3,pl=4,ph=5;var Si=100,mh=101,gh=102,_h=103,xh=104,yh=200,vh=201,Mh=202,Sh=203,ml=204,gl=205,bh=206,wh=207,Eh=208,Th=209,Ah=210,Ch=211,Rh=212,Ih=213,Ph=214,Vr=0,Gr=1,Hr=2,ji=3,Wr=4,Xr=5,qr=6,Yr=7,_l=0,Lh=1,Dh=2,pn=0,xl=1,yl=2,vl=3,Ml=4,Sl=5,bl=6,wl=7;var El=300,li=301,bi=302,ba=303,wa=304,Ys=306,Zr=1e3,bn=1001,$r=1002,De=1003,Nh=1004;var Zs=1005;var Ae=1006,Ea=1007;var ci=1008;var tn=1009,Tl=1010,Al=1011,rs=1012,Ta=1013,mn=1014,gn=1015,_n=1016,Aa=1017,Ca=1018,as=1020,Cl=35902,Rl=35899,Il=1021,Pl=1022,an=1023,wn=1026,hi=1027,Ll=1028,Ra=1029,ui=1030,Ia=1031;var Pa=1033,$s=33776,Js=33777,Ks=33778,js=33779,La=35840,Da=35841,Na=35842,Ua=35843,Fa=36196,Oa=37492,Ba=37496,za=37488,ka=37489,Qs=37490,Va=37491,Ga=37808,Ha=37809,Wa=37810,Xa=37811,qa=37812,Ya=37813,Za=37814,$a=37815,Ja=37816,Ka=37817,ja=37818,Qa=37819,to=37820,eo=37821,no=36492,io=36494,so=36495,ro=36283,ao=36284,tr=36285,oo=36286;var ws=2300,Jr=2301,Br=2302,rl=2303,al=2400,ol=2401,ll=2402;var Uh=3200;var Dl=0,Fh=1,kn="",Le="srgb",Es="srgb-linear",Ts="linear",oe="srgb";var zr=7680;var Oh=519,Bh=512,zh=513,kh=514,lo=515,Vh=516,Gh=517,co=518,Hh=519,Nl=35044;var Ul="300 es",un=2e3,As=2001;function dd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function fd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Cs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Wh(){let i=Cs("canvas");return i.style.display="block",i}var kc={},Qi=null;function Rs(...i){let t="THREE."+i.shift();Qi?Qi("log",t,...i):console.log(t,...i)}function Xh(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ft(...i){i=Xh(i);let t="THREE."+i.shift();if(Qi)Qi("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Ot(...i){i=Xh(i);let t="THREE."+i.shift();if(Qi)Qi("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function yi(...i){let t=i.join(" ");t in kc||(kc[t]=!0,Ft(...i))}function qh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Yh={[Vr]:Gr,[Hr]:qr,[Wr]:Yr,[ji]:Xr,[Gr]:Vr,[qr]:Hr,[Yr]:Wr,[Xr]:ji},En=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var kr=Math.PI/180,Kr=180/Math.PI;function Qn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Oe[i&255]+Oe[i>>8&255]+Oe[i>>16&255]+Oe[i>>24&255]+"-"+Oe[t&255]+Oe[t>>8&255]+"-"+Oe[t>>16&15|64]+Oe[t>>24&255]+"-"+Oe[e&63|128]+Oe[e>>8&255]+"-"+Oe[e>>16&255]+Oe[e>>24&255]+Oe[n&255]+Oe[n>>8&255]+Oe[n>>16&255]+Oe[n>>24&255]).toLowerCase()}function Qt(i,t,e){return Math.max(t,Math.min(e,i))}function pd(i,t){return(i%t+t)%t}function Uo(i,t,e){return(1-e)*i+e*t}function Mn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function de(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var kl=class kl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};kl.prototype.isVector2=!0;var qt=kl,Tn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],d=n[s+2],u=n[s+3],h=r[a+0],p=r[a+1],x=r[a+2],M=r[a+3];if(u!==M||c!==h||l!==p||d!==x){let m=c*h+l*p+d*x+u*M;m<0&&(h=-h,p=-p,x=-x,M=-M,m=-m);let f=1-o;if(m<.9995){let R=Math.acos(m),T=Math.sin(R);f=Math.sin(f*R)/T,o=Math.sin(o*R)/T,c=c*f+h*o,l=l*f+p*o,d=d*f+x*o,u=u*f+M*o}else{c=c*f+h*o,l=l*f+p*o,d=d*f+x*o,u=u*f+M*o;let R=1/Math.sqrt(c*c+l*l+d*d+u*u);c*=R,l*=R,d*=R,u*=R}}t[e]=c,t[e+1]=l,t[e+2]=d,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],d=n[s+3],u=r[a],h=r[a+1],p=r[a+2],x=r[a+3];return t[e]=o*x+d*u+c*p-l*h,t[e+1]=c*x+d*h+l*u-o*p,t[e+2]=l*x+d*p+o*h-c*u,t[e+3]=d*x-o*u-c*h-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),d=o(s/2),u=o(r/2),h=c(n/2),p=c(s/2),x=c(r/2);switch(a){case"XYZ":this._x=h*d*u+l*p*x,this._y=l*p*u-h*d*x,this._z=l*d*x+h*p*u,this._w=l*d*u-h*p*x;break;case"YXZ":this._x=h*d*u+l*p*x,this._y=l*p*u-h*d*x,this._z=l*d*x-h*p*u,this._w=l*d*u+h*p*x;break;case"ZXY":this._x=h*d*u-l*p*x,this._y=l*p*u+h*d*x,this._z=l*d*x+h*p*u,this._w=l*d*u-h*p*x;break;case"ZYX":this._x=h*d*u-l*p*x,this._y=l*p*u+h*d*x,this._z=l*d*x-h*p*u,this._w=l*d*u+h*p*x;break;case"YZX":this._x=h*d*u+l*p*x,this._y=l*p*u+h*d*x,this._z=l*d*x-h*p*u,this._w=l*d*u-h*p*x;break;case"XZY":this._x=h*d*u-l*p*x,this._y=l*p*u-h*d*x,this._z=l*d*x+h*p*u,this._w=l*d*u+h*p*x;break;default:Ft("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],d=e[6],u=e[10],h=n+o+u;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(d-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(d-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+d)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,d=e._w;return this._x=n*d+a*o+s*l-r*c,this._y=s*d+a*c+r*o-n*l,this._z=r*d+a*l+n*c-s*o,this._w=a*d-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),d=Math.sin(l);c=Math.sin(c*l)/d,e=Math.sin(e*l)/d,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Vl=class Vl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),d=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*d,this.y=n+c*d+o*l-r*u,this.z=s+c*u+r*d-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Fo.copy(this).projectOnVector(t),this.sub(Fo)}reflect(t){return this.sub(Fo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Vl.prototype.isVector3=!0;var G=Vl,Fo=new G,Vc=new Tn,Gl=class Gl{constructor(t,e,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let d=this.elements;return d[0]=t,d[1]=s,d[2]=o,d[3]=e,d[4]=r,d[5]=c,d[6]=n,d[7]=a,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],d=n[4],u=n[7],h=n[2],p=n[5],x=n[8],M=s[0],m=s[3],f=s[6],R=s[1],T=s[4],v=s[7],E=s[2],A=s[5],D=s[8];return r[0]=a*M+o*R+c*E,r[3]=a*m+o*T+c*A,r[6]=a*f+o*v+c*D,r[1]=l*M+d*R+u*E,r[4]=l*m+d*T+u*A,r[7]=l*f+d*v+u*D,r[2]=h*M+p*R+x*E,r[5]=h*m+p*T+x*A,r[8]=h*f+p*v+x*D,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],d=t[8];return e*a*d-e*o*l-n*r*d+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],d=t[8],u=d*a-o*l,h=o*c-d*r,p=l*r-a*c,x=e*u+n*h+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/x;return t[0]=u*M,t[1]=(s*l-d*n)*M,t[2]=(o*n-s*a)*M,t[3]=h*M,t[4]=(d*e-s*c)*M,t[5]=(s*r-o*e)*M,t[6]=p*M,t[7]=(n*c-l*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return yi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Oo.makeScale(t,e)),this}rotate(t){return yi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Oo.makeRotation(-t)),this}translate(t,e){return yi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Oo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Gl.prototype.isMatrix3=!0;var kt=Gl,Oo=new kt,Gc=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hc=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function md(){let i={enabled:!0,workingColorSpace:Es,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===oe&&(s.r=Bn(s.r),s.g=Bn(s.g),s.b=Bn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===oe&&(s.r=Ki(s.r),s.g=Ki(s.g),s.b=Ki(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===kn?Ts:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return yi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return yi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Es]:{primaries:t,whitePoint:n,transfer:Ts,toXYZ:Gc,fromXYZ:Hc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Le},outputColorSpaceConfig:{drawingBufferColorSpace:Le}},[Le]:{primaries:t,whitePoint:n,transfer:oe,toXYZ:Gc,fromXYZ:Hc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Le}}}),i}var Jt=md();function Bn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ki(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ni,jr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ni===void 0&&(Ni=Cs("canvas")),Ni.width=t.width,Ni.height=t.height;let s=Ni.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ni}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Cs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Bn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Bn(e[n]/255)*255):e[n]=Bn(e[n]);return{data:e,width:t.width,height:t.height}}else return Ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},gd=0,ts=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=Qn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Bo(s[a].image)):r.push(Bo(s[a]))}else r=Bo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Bo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?jr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ft("Texture: Unable to serialize Texture."),{})}var _d=0,zo=new G,Ne=class i extends En{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=bn,s=bn,r=Ae,a=ci,o=an,c=tn,l=i.DEFAULT_ANISOTROPY,d=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=Qn(),this.name="",this.source=new ts(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new qt(0,0),this.repeat=new qt(1,1),this.center=new qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(zo).x}get height(){return this.source.getSize(zo).y}get depth(){return this.source.getSize(zo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ft(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ft(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==El)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zr:t.x=t.x-Math.floor(t.x);break;case bn:t.x=t.x<0?0:1;break;case $r:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zr:t.y=t.y-Math.floor(t.y);break;case bn:t.y=t.y<0?0:1;break;case $r:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ne.DEFAULT_IMAGE=null;Ne.DEFAULT_MAPPING=El;Ne.DEFAULT_ANISOTROPY=1;var Hl=class Hl{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],d=c[4],u=c[8],h=c[1],p=c[5],x=c[9],M=c[2],m=c[6],f=c[10];if(Math.abs(d-h)<.01&&Math.abs(u-M)<.01&&Math.abs(x-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+M)<.1&&Math.abs(x+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(l+1)/2,v=(p+1)/2,E=(f+1)/2,A=(d+h)/4,D=(u+M)/4,y=(x+m)/4;return T>v&&T>E?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=A/n,r=D/n):v>E?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=A/s,r=y/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=D/r,s=y/r),this.set(n,s,r,e),this}let R=Math.sqrt((m-x)*(m-x)+(u-M)*(u-M)+(h-d)*(h-d));return Math.abs(R)<.001&&(R=1),this.x=(m-x)/R,this.y=(u-M)/R,this.z=(h-d)/R,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this.w=Qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this.w=Qt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Hl.prototype.isVector4=!0;var Me=Hl,Qr=class extends En{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ae,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Ne(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ae,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ts(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ye=class extends Qr{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Is=class extends Ne{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=De,this.minFilter=De,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ta=class extends Ne{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=De,this.minFilter=De,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Sa=class Sa{constructor(t,e,n,s,r,a,o,c,l,d,u,h,p,x,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,d,u,h,p,x,M,m)}set(t,e,n,s,r,a,o,c,l,d,u,h,p,x,M,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=d,f[10]=u,f[14]=h,f[3]=p,f[7]=x,f[11]=M,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Sa().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ui.setFromMatrixColumn(t,0).length(),r=1/Ui.setFromMatrixColumn(t,1).length(),a=1/Ui.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),d=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let h=a*d,p=a*u,x=o*d,M=o*u;e[0]=c*d,e[4]=-c*u,e[8]=l,e[1]=p+x*l,e[5]=h-M*l,e[9]=-o*c,e[2]=M-h*l,e[6]=x+p*l,e[10]=a*c}else if(t.order==="YXZ"){let h=c*d,p=c*u,x=l*d,M=l*u;e[0]=h+M*o,e[4]=x*o-p,e[8]=a*l,e[1]=a*u,e[5]=a*d,e[9]=-o,e[2]=p*o-x,e[6]=M+h*o,e[10]=a*c}else if(t.order==="ZXY"){let h=c*d,p=c*u,x=l*d,M=l*u;e[0]=h-M*o,e[4]=-a*u,e[8]=x+p*o,e[1]=p+x*o,e[5]=a*d,e[9]=M-h*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let h=a*d,p=a*u,x=o*d,M=o*u;e[0]=c*d,e[4]=x*l-p,e[8]=h*l+M,e[1]=c*u,e[5]=M*l+h,e[9]=p*l-x,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let h=a*c,p=a*l,x=o*c,M=o*l;e[0]=c*d,e[4]=M-h*u,e[8]=x*u+p,e[1]=u,e[5]=a*d,e[9]=-o*d,e[2]=-l*d,e[6]=p*u+x,e[10]=h-M*u}else if(t.order==="XZY"){let h=a*c,p=a*l,x=o*c,M=o*l;e[0]=c*d,e[4]=-u,e[8]=l*d,e[1]=h*u+M,e[5]=a*d,e[9]=p*u-x,e[2]=x*u-p,e[6]=o*d,e[10]=M*u+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xd,t,yd)}lookAt(t,e,n){let s=this.elements;return Je.subVectors(t,e),Je.lengthSq()===0&&(Je.z=1),Je.normalize(),Zn.crossVectors(n,Je),Zn.lengthSq()===0&&(Math.abs(n.z)===1?Je.x+=1e-4:Je.z+=1e-4,Je.normalize(),Zn.crossVectors(n,Je)),Zn.normalize(),ur.crossVectors(Je,Zn),s[0]=Zn.x,s[4]=ur.x,s[8]=Je.x,s[1]=Zn.y,s[5]=ur.y,s[9]=Je.y,s[2]=Zn.z,s[6]=ur.z,s[10]=Je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],d=n[1],u=n[5],h=n[9],p=n[13],x=n[2],M=n[6],m=n[10],f=n[14],R=n[3],T=n[7],v=n[11],E=n[15],A=s[0],D=s[4],y=s[8],I=s[12],F=s[1],V=s[5],W=s[9],X=s[13],k=s[2],q=s[6],Q=s[10],Z=s[14],ot=s[3],K=s[7],st=s[11],lt=s[15];return r[0]=a*A+o*F+c*k+l*ot,r[4]=a*D+o*V+c*q+l*K,r[8]=a*y+o*W+c*Q+l*st,r[12]=a*I+o*X+c*Z+l*lt,r[1]=d*A+u*F+h*k+p*ot,r[5]=d*D+u*V+h*q+p*K,r[9]=d*y+u*W+h*Q+p*st,r[13]=d*I+u*X+h*Z+p*lt,r[2]=x*A+M*F+m*k+f*ot,r[6]=x*D+M*V+m*q+f*K,r[10]=x*y+M*W+m*Q+f*st,r[14]=x*I+M*X+m*Z+f*lt,r[3]=R*A+T*F+v*k+E*ot,r[7]=R*D+T*V+v*q+E*K,r[11]=R*y+T*W+v*Q+E*st,r[15]=R*I+T*X+v*Z+E*lt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],d=t[2],u=t[6],h=t[10],p=t[14],x=t[3],M=t[7],m=t[11],f=t[15],R=c*p-l*h,T=o*p-l*u,v=o*h-c*u,E=a*p-l*d,A=a*h-c*d,D=a*u-o*d;return e*(M*R-m*T+f*v)-n*(x*R-m*E+f*A)+s*(x*T-M*E+f*D)-r*(x*v-M*A+m*D)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],d=t[10];return e*(a*d-o*l)-n*(r*d-o*c)+s*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],d=t[8],u=t[9],h=t[10],p=t[11],x=t[12],M=t[13],m=t[14],f=t[15],R=e*o-n*a,T=e*c-s*a,v=e*l-r*a,E=n*c-s*o,A=n*l-r*o,D=s*l-r*c,y=d*M-u*x,I=d*m-h*x,F=d*f-p*x,V=u*m-h*M,W=u*f-p*M,X=h*f-p*m,k=R*X-T*W+v*V+E*F-A*I+D*y;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let q=1/k;return t[0]=(o*X-c*W+l*V)*q,t[1]=(s*W-n*X-r*V)*q,t[2]=(M*D-m*A+f*E)*q,t[3]=(h*A-u*D-p*E)*q,t[4]=(c*F-a*X-l*I)*q,t[5]=(e*X-s*F+r*I)*q,t[6]=(m*v-x*D-f*T)*q,t[7]=(d*D-h*v+p*T)*q,t[8]=(a*W-o*F+l*y)*q,t[9]=(n*F-e*W-r*y)*q,t[10]=(x*A-M*v+f*R)*q,t[11]=(u*v-d*A-p*R)*q,t[12]=(o*I-a*V-c*y)*q,t[13]=(e*V-n*I+s*y)*q,t[14]=(M*T-x*E-m*R)*q,t[15]=(d*E-u*T+h*R)*q,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,d=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,d*o+n,d*c-s*a,0,l*c-s*o,d*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,d=a+a,u=o+o,h=r*l,p=r*d,x=r*u,M=a*d,m=a*u,f=o*u,R=c*l,T=c*d,v=c*u,E=n.x,A=n.y,D=n.z;return s[0]=(1-(M+f))*E,s[1]=(p+v)*E,s[2]=(x-T)*E,s[3]=0,s[4]=(p-v)*A,s[5]=(1-(h+f))*A,s[6]=(m+R)*A,s[7]=0,s[8]=(x+T)*D,s[9]=(m-R)*D,s[10]=(1-(h+M))*D,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ui.set(s[0],s[1],s[2]).length(),o=Ui.set(s[4],s[5],s[6]).length(),c=Ui.set(s[8],s[9],s[10]).length();r<0&&(a=-a),on.copy(this);let l=1/a,d=1/o,u=1/c;return on.elements[0]*=l,on.elements[1]*=l,on.elements[2]*=l,on.elements[4]*=d,on.elements[5]*=d,on.elements[6]*=d,on.elements[8]*=u,on.elements[9]*=u,on.elements[10]*=u,e.setFromRotationMatrix(on),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,s,r,a,o=un,c=!1){let l=this.elements,d=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),p=(n+s)/(n-s),x,M;if(c)x=r/(a-r),M=a*r/(a-r);else if(o===un)x=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===As)x=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=un,c=!1){let l=this.elements,d=2/(e-t),u=2/(n-s),h=-(e+t)/(e-t),p=-(n+s)/(n-s),x,M;if(c)x=1/(a-r),M=a/(a-r);else if(o===un)x=-2/(a-r),M=-(a+r)/(a-r);else if(o===As)x=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=u,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=x,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Sa.prototype.isMatrix4=!0;var ve=Sa,Ui=new G,on=new ve,xd=new G(0,0,0),yd=new G(1,1,1),Zn=new G,ur=new G,Je=new G,Wc=new ve,Xc=new Tn,ti=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],d=s[9],u=s[2],h=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Qt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:Ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Wc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xc.setFromEuler(this),this.setFromQuaternion(Xc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ti.DEFAULT_ORDER="XYZ";var Ps=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},vd=0,qc=new G,Fi=new Tn,Dn=new ve,dr=new G,gs=new G,Md=new G,Sd=new Tn,Yc=new G(1,0,0),Zc=new G(0,1,0),$c=new G(0,0,1),Jc={type:"added"},bd={type:"removed"},Oi={type:"childadded",child:null},ko={type:"childremoved",child:null},Ze=class i extends En{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=Qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new G,e=new ti,n=new Tn,s=new G(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ve},normalMatrix:{value:new kt}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ps,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.premultiply(Fi),this}rotateX(t){return this.rotateOnAxis(Yc,t)}rotateY(t){return this.rotateOnAxis(Zc,t)}rotateZ(t){return this.rotateOnAxis($c,t)}translateOnAxis(t,e){return qc.copy(t).applyQuaternion(this.quaternion),this.position.add(qc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yc,t)}translateY(t){return this.translateOnAxis(Zc,t)}translateZ(t){return this.translateOnAxis($c,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?dr.copy(t):dr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(gs,dr,this.up):Dn.lookAt(dr,gs,this.up),this.quaternion.setFromRotationMatrix(Dn),s&&(Dn.extractRotation(s.matrixWorld),Fi.setFromRotationMatrix(Dn),this.quaternion.premultiply(Fi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ot("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Jc),Oi.child=t,this.dispatchEvent(Oi),Oi.child=null):Ot("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(bd),ko.child=t,this.dispatchEvent(ko),ko.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Jc),Oi.child=t,this.dispatchEvent(Oi),Oi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,t,Md),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,Sd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),d=a(t.images),u=a(t.shapes),h=a(t.skeletons),p=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let c=[];for(let l in o){let d=o[l];delete d.metadata,c.push(d)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ze.DEFAULT_UP=new G(0,1,0);Ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var dn=class extends Ze{constructor(){super(),this.isGroup=!0,this.type="Group"}},wd={type:"move"},es=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let M of t.hand.values()){let m=e.getJointPose(M,n),f=this._getHandJoint(l,M);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let d=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],h=d.position.distanceTo(u.position),p=.02,x=.005;l.inputState.pinching&&h>p+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=p-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(wd)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new dn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Zh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},fr={h:0,s:0,l:0};function Vo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Gt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Le){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Jt.workingColorSpace){if(t=pd(t,1),e=Qt(e,0,1),n=Qt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Vo(a,r,t+1/3),this.g=Vo(a,r,t),this.b=Vo(a,r,t-1/3)}return Jt.colorSpaceToWorking(this,s),this}setStyle(t,e=Le){function n(r){r!==void 0&&parseFloat(r)<1&&Ft("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ft("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ft("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Le){let n=Zh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ft("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bn(t.r),this.g=Bn(t.g),this.b=Bn(t.b),this}copyLinearToSRGB(t){return this.r=Ki(t.r),this.g=Ki(t.g),this.b=Ki(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Le){return Jt.workingToColorSpace(Be.copy(this),t),Math.round(Qt(Be.r*255,0,255))*65536+Math.round(Qt(Be.g*255,0,255))*256+Math.round(Qt(Be.b*255,0,255))}getHexString(t=Le){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.workingToColorSpace(Be.copy(this),e);let n=Be.r,s=Be.g,r=Be.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,d=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=d<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=d,t}getRGB(t,e=Jt.workingColorSpace){return Jt.workingToColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=Le){Jt.workingToColorSpace(Be.copy(this),t);let e=Be.r,n=Be.g,s=Be.b;return t!==Le?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL($n),this.setHSL($n.h+t,$n.s+e,$n.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL($n),t.getHSL(fr);let n=Uo($n.h,fr.h,e),s=Uo($n.s,fr.s,e),r=Uo($n.l,fr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Be=new Gt;Gt.NAMES=Zh;var Ls=class extends Ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ti,this.environmentIntensity=1,this.environmentRotation=new ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ln=new G,Nn=new G,Go=new G,Un=new G,Bi=new G,zi=new G,Kc=new G,Ho=new G,Wo=new G,Xo=new G,qo=new Me,Yo=new Me,Zo=new Me,Sn=class i{constructor(t=new G,e=new G,n=new G){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ln.subVectors(t,e),s.cross(ln);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ln.subVectors(s,e),Nn.subVectors(n,e),Go.subVectors(t,e);let a=ln.dot(ln),o=ln.dot(Nn),c=ln.dot(Go),l=Nn.dot(Nn),d=Nn.dot(Go),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let h=1/u,p=(l*c-o*d)*h,x=(a*d-o*c)*h;return r.set(1-p-x,x,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Un)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Un.x),c.addScaledVector(a,Un.y),c.addScaledVector(o,Un.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return qo.setScalar(0),Yo.setScalar(0),Zo.setScalar(0),qo.fromBufferAttribute(t,e),Yo.fromBufferAttribute(t,n),Zo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(qo,r.x),a.addScaledVector(Yo,r.y),a.addScaledVector(Zo,r.z),a}static isFrontFacing(t,e,n,s){return ln.subVectors(n,e),Nn.subVectors(t,e),ln.cross(Nn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),ln.cross(Nn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Bi.subVectors(s,n),zi.subVectors(r,n),Ho.subVectors(t,n);let c=Bi.dot(Ho),l=zi.dot(Ho);if(c<=0&&l<=0)return e.copy(n);Wo.subVectors(t,s);let d=Bi.dot(Wo),u=zi.dot(Wo);if(d>=0&&u<=d)return e.copy(s);let h=c*u-d*l;if(h<=0&&c>=0&&d<=0)return a=c/(c-d),e.copy(n).addScaledVector(Bi,a);Xo.subVectors(t,r);let p=Bi.dot(Xo),x=zi.dot(Xo);if(x>=0&&p<=x)return e.copy(r);let M=p*l-c*x;if(M<=0&&l>=0&&x<=0)return o=l/(l-x),e.copy(n).addScaledVector(zi,o);let m=d*x-p*u;if(m<=0&&u-d>=0&&p-x>=0)return Kc.subVectors(r,s),o=(u-d)/(u-d+(p-x)),e.copy(s).addScaledVector(Kc,o);let f=1/(m+M+h);return a=M*f,o=h*f,e.copy(n).addScaledVector(Bi,a).addScaledVector(zi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ei=class{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,cn):cn.fromBufferAttribute(r,a),cn.applyMatrix4(t.matrixWorld),this.expandByPoint(cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pr.copy(n.boundingBox)),pr.applyMatrix4(t.matrixWorld),this.union(pr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,cn),cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_s),mr.subVectors(this.max,_s),ki.subVectors(t.a,_s),Vi.subVectors(t.b,_s),Gi.subVectors(t.c,_s),Jn.subVectors(Vi,ki),Kn.subVectors(Gi,Vi),mi.subVectors(ki,Gi);let e=[0,-Jn.z,Jn.y,0,-Kn.z,Kn.y,0,-mi.z,mi.y,Jn.z,0,-Jn.x,Kn.z,0,-Kn.x,mi.z,0,-mi.x,-Jn.y,Jn.x,0,-Kn.y,Kn.x,0,-mi.y,mi.x,0];return!$o(e,ki,Vi,Gi,mr)||(e=[1,0,0,0,1,0,0,0,1],!$o(e,ki,Vi,Gi,mr))?!1:(gr.crossVectors(Jn,Kn),e=[gr.x,gr.y,gr.z],$o(e,ki,Vi,Gi,mr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Fn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Fn=[new G,new G,new G,new G,new G,new G,new G,new G],cn=new G,pr=new ei,ki=new G,Vi=new G,Gi=new G,Jn=new G,Kn=new G,mi=new G,_s=new G,mr=new G,gr=new G,gi=new G;function $o(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){gi.fromArray(i,r);let o=s.x*Math.abs(gi.x)+s.y*Math.abs(gi.y)+s.z*Math.abs(gi.z),c=t.dot(gi),l=e.dot(gi),d=n.dot(gi);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}var Te=new G,_r=new qt,Ed=0,Ce=class extends En{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ed++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Nl,this.updateRanges=[],this.gpuType=gn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)_r.fromBufferAttribute(this,e),_r.applyMatrix3(t),this.setXY(e,_r.x,_r.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=de(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Mn(e,this.array)),e}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Mn(e,this.array)),e}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Mn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Mn(e,this.array)),e}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array),r=de(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Ds=class extends Ce{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ns=class extends Ce{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var We=class extends Ce{constructor(t,e,n){super(new Float32Array(t),e,n)}},Td=new ei,xs=new G,Jo=new G,vi=class{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Td.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xs.subVectors(t,this.center);let e=xs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(xs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Jo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xs.copy(t.center).add(Jo)),this.expandByPoint(xs.copy(t.center).sub(Jo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Ad=0,sn=new ve,Ko=new Ze,Hi=new G,Ke=new ei,ys=new ei,Pe=new G,Xe=class i extends En{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=Qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(dd(t)?Ns:Ds)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return sn.makeRotationFromQuaternion(t),this.applyMatrix4(sn),this}rotateX(t){return sn.makeRotationX(t),this.applyMatrix4(sn),this}rotateY(t){return sn.makeRotationY(t),this.applyMatrix4(sn),this}rotateZ(t){return sn.makeRotationZ(t),this.applyMatrix4(sn),this}translate(t,e,n){return sn.makeTranslation(t,e,n),this.applyMatrix4(sn),this}scale(t,e,n){return sn.makeScale(t,e,n),this.applyMatrix4(sn),this}lookAt(t){return Ko.lookAt(t),Ko.updateMatrix(),this.applyMatrix4(Ko.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hi).negate(),this.translate(Hi.x,Hi.y,Hi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new We(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ei);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ke.setFromBufferAttribute(r),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,Ke.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,Ke.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(Ke.min),this.boundingBox.expandByPoint(Ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){let n=this.boundingSphere.center;if(Ke.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ys.setFromBufferAttribute(o),this.morphTargetsRelative?(Pe.addVectors(Ke.min,ys.min),Ke.expandByPoint(Pe),Pe.addVectors(Ke.max,ys.max),Ke.expandByPoint(Pe)):(Ke.expandByPoint(ys.min),Ke.expandByPoint(ys.max))}Ke.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Pe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Pe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)Pe.fromBufferAttribute(o,l),c&&(Hi.fromBufferAttribute(t,l),Pe.add(Hi)),s=Math.max(s,n.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ce(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let y=0;y<n.count;y++)o[y]=new G,c[y]=new G;let l=new G,d=new G,u=new G,h=new qt,p=new qt,x=new qt,M=new G,m=new G;function f(y,I,F){l.fromBufferAttribute(n,y),d.fromBufferAttribute(n,I),u.fromBufferAttribute(n,F),h.fromBufferAttribute(r,y),p.fromBufferAttribute(r,I),x.fromBufferAttribute(r,F),d.sub(l),u.sub(l),p.sub(h),x.sub(h);let V=1/(p.x*x.y-x.x*p.y);isFinite(V)&&(M.copy(d).multiplyScalar(x.y).addScaledVector(u,-p.y).multiplyScalar(V),m.copy(u).multiplyScalar(p.x).addScaledVector(d,-x.x).multiplyScalar(V),o[y].add(M),o[I].add(M),o[F].add(M),c[y].add(m),c[I].add(m),c[F].add(m))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let y=0,I=R.length;y<I;++y){let F=R[y],V=F.start,W=F.count;for(let X=V,k=V+W;X<k;X+=3)f(t.getX(X+0),t.getX(X+1),t.getX(X+2))}let T=new G,v=new G,E=new G,A=new G;function D(y){E.fromBufferAttribute(s,y),A.copy(E);let I=o[y];T.copy(I),T.sub(E.multiplyScalar(E.dot(I))).normalize(),v.crossVectors(A,I);let V=v.dot(c[y])<0?-1:1;a.setXYZW(y,T.x,T.y,T.z,V)}for(let y=0,I=R.length;y<I;++y){let F=R[y],V=F.start,W=F.count;for(let X=V,k=V+W;X<k;X+=3)D(t.getX(X+0)),D(t.getX(X+1)),D(t.getX(X+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ce(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);let s=new G,r=new G,a=new G,o=new G,c=new G,l=new G,d=new G,u=new G;if(t)for(let h=0,p=t.count;h<p;h+=3){let x=t.getX(h+0),M=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,m),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,m),o.add(d),c.add(d),l.add(d),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,p=e.count;h<p;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(o,c){let l=o.array,d=o.itemSize,u=o.normalized,h=new l.constructor(c.length*d),p=0,x=0;for(let M=0,m=c.length;M<m;M++){o.isInterleavedBufferAttribute?p=c[M]*o.data.stride+o.offset:p=c[M]*d;for(let f=0;f<d;f++)h[x++]=l[p++]}return new Ce(h,d,u)}if(this.index===null)return Ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let d=0,u=l.length;d<u;d++){let h=l[d],p=t(h,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],d=[];for(let u=0,h=l.length;u<h;u++){let p=l[u];d.push(p.toJSON(t.data))}d.length>0&&(s[c]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let d=s[l];this.setAttribute(l,d.clone(e))}let r=t.morphAttributes;for(let l in r){let d=[],u=r[l];for(let h=0,p=u.length;h<p;h++)d.push(u[h].clone(e));this.morphAttributes[l]=d}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,d=a.length;l<d;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ea=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Nl,this.updateRanges=[],this.version=0,this.uuid=Qn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},He=new G,Us=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=de(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Mn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Mn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Mn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Mn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array),r=de(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Rs("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ce(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Rs("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},jo=new G,Cd=new G,Rd=new kt,hn=class{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=jo.subVectors(n,e).cross(Cd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(jo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Rd.getNormalMatrix(t),s=this.coplanarPoint(jo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Id=0,zn=class extends En{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=Qn(),this.name="",this.type="Material",this.blending=ss,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ml,this.blendDst=gl,this.blendEquation=Si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Oh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zr,this.stencilZFail=zr,this.stencilZPass=zr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Ft(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ft(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Gt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new hn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new qt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new qt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ni=class extends zn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Wi,vs=new G,Xi=new G,qi=new G,Yi=new qt,Ms=new qt,$h=new ve,xr=new G,Ss=new G,yr=new G,jc=new qt,Qo=new qt,Qc=new qt,Mi=class extends Ze{constructor(t=new ni){if(super(),this.isSprite=!0,this.type="Sprite",Wi===void 0){Wi=new Xe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ea(e,5);Wi.setIndex([0,1,2,0,2,3]),Wi.setAttribute("position",new Us(n,3,0,!1)),Wi.setAttribute("uv",new Us(n,2,3,!1))}this.geometry=Wi,this.material=t,this.center=new qt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Ot('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xi.setFromMatrixScale(this.matrixWorld),$h.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),qi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xi.multiplyScalar(-qi.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;vr(xr.set(-.5,-.5,0),qi,a,Xi,s,r),vr(Ss.set(.5,-.5,0),qi,a,Xi,s,r),vr(yr.set(.5,.5,0),qi,a,Xi,s,r),jc.set(0,0),Qo.set(1,0),Qc.set(1,1);let o=t.ray.intersectTriangle(xr,Ss,yr,!1,vs);if(o===null&&(vr(Ss.set(-.5,.5,0),qi,a,Xi,s,r),Qo.set(0,1),o=t.ray.intersectTriangle(xr,yr,Ss,!1,vs),o===null))return;let c=t.ray.origin.distanceTo(vs);c<t.near||c>t.far||e.push({distance:c,point:vs.clone(),uv:Sn.getInterpolation(vs,xr,Ss,yr,jc,Qo,Qc,new qt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function vr(i,t,e,n,s,r){Yi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ms.x=r*Yi.x-s*Yi.y,Ms.y=s*Yi.x+r*Yi.y):Ms.copy(Yi),i.copy(t),i.x+=Ms.x,i.y+=Ms.y,i.applyMatrix4($h)}var On=new G,tl=new G,Mr=new G,Sr=new G,Fs=class{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,On)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=On.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(On.copy(this.origin).addScaledVector(this.direction,e),On.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){tl.copy(t).add(e).multiplyScalar(.5),Mr.copy(e).sub(t).normalize(),Sr.copy(this.origin).sub(tl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Mr),o=Sr.dot(this.direction),c=-Sr.dot(Mr),l=Sr.lengthSq(),d=Math.abs(1-a*a),u,h,p,x;if(d>0)if(u=a*c-o,h=a*o-c,x=r*d,u>=0)if(h>=-x)if(h<=x){let M=1/d;u*=M,h*=M,p=u*(u+a*h+2*o)+h*(a*u+h+2*c)+l}else h=r,u=Math.max(0,-(a*h+o)),p=-u*u+h*(h+2*c)+l;else h=-r,u=Math.max(0,-(a*h+o)),p=-u*u+h*(h+2*c)+l;else h<=-x?(u=Math.max(0,-(-a*r+o)),h=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+h*(h+2*c)+l):h<=x?(u=0,h=Math.min(Math.max(-r,-c),r),p=h*(h+2*c)+l):(u=Math.max(0,-(a*r+o)),h=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+h*(h+2*c)+l);else h=a>0?-r:r,u=Math.max(0,-(a*h+o)),p=-u*u+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(tl).addScaledVector(Mr,h),p}intersectSphere(t,e){if(t.radius<0)return null;On.subVectors(t.center,this.origin);let n=On.dot(this.direction),s=On.dot(On)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),d>=0?(r=(t.min.y-h.y)*d,a=(t.max.y-h.y)*d):(r=(t.max.y-h.y)*d,a=(t.min.y-h.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-h.z)*u,c=(t.max.z-h.z)*u):(o=(t.max.z-h.z)*u,c=(t.min.z-h.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,On)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,d=o.z,u=t.x-a.x,h=t.y-a.y,p=t.z-a.z,x=e.x-a.x,M=e.y-a.y,m=e.z-a.z,f=n.x-a.x,R=n.y-a.y,T=n.z-a.z,v=Math.abs(c),E=Math.abs(l),A=Math.abs(d),D,y,I,F,V,W,X,k,q,Q,Z,ot;if(v>=E&&v>=A?(I=c,W=u,q=x,ot=f,c>=0?(D=l,y=d,F=h,V=p,X=M,k=m,Q=R,Z=T):(D=d,y=l,F=p,V=h,X=m,k=M,Q=T,Z=R)):E>=A?(I=l,W=h,q=M,ot=R,l>=0?(D=d,y=c,F=p,V=u,X=m,k=x,Q=T,Z=f):(D=c,y=d,F=u,V=p,X=x,k=m,Q=f,Z=T)):(I=d,W=p,q=m,ot=T,d>=0?(D=c,y=l,F=u,V=h,X=x,k=M,Q=f,Z=R):(D=l,y=c,F=h,V=u,X=M,k=x,Q=R,Z=f)),I===0)return null;let K=D/I,st=y/I,lt=1/I,Dt=F-K*W,Ct=V-st*W,le=X-K*q,Yt=k-st*q,Kt=Q-K*ot,$=Z-st*ot,nt=Kt*Yt-$*le,Et=Dt*$-Ct*Kt,Bt=le*Ct-Yt*Dt;if(s){if(nt<0||Et<0||Bt<0)return null}else if((nt<0||Et<0||Bt<0)&&(nt>0||Et>0||Bt>0))return null;let bt=nt+Et+Bt;if(bt===0)return null;let Ht=lt*(nt*W+Et*q+Bt*ot);return(bt>0?Ht<0:Ht>0)?null:this.at(Ht/bt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},fn=class extends zn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=_l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},th=new ve,_i=new Fs,br=new vi,eh=new G,wr=new G,Er=new G,Tr=new G,el=new G,Ar=new G,nh=new G,Cr=new G,Ee=class extends Ze{constructor(t=new Xe,e=new fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Ar.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let d=o[c],u=r[c];d!==0&&(el.fromBufferAttribute(u,t),a?Ar.addScaledVector(el,d):Ar.addScaledVector(el.sub(e),d))}e.add(Ar)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(r),_i.copy(t.ray).recast(t.near),!(br.containsPoint(_i.origin)===!1&&(_i.intersectSphere(br,eh)===null||_i.origin.distanceToSquared(eh)>(t.far-t.near)**2))&&(th.copy(r).invert(),_i.copy(t.ray).applyMatrix4(th),!(n.boundingBox!==null&&_i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,_i)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,M=h.length;x<M;x++){let m=h[x],f=a[m.materialIndex],R=Math.max(m.start,p.start),T=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=R,E=T;v<E;v+=3){let A=o.getX(v),D=o.getX(v+1),y=o.getX(v+2);s=Rr(this,f,t,n,l,d,u,A,D,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let x=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let m=x,f=M;m<f;m+=3){let R=o.getX(m),T=o.getX(m+1),v=o.getX(m+2);s=Rr(this,a,t,n,l,d,u,R,T,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,M=h.length;x<M;x++){let m=h[x],f=a[m.materialIndex],R=Math.max(m.start,p.start),T=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let v=R,E=T;v<E;v+=3){let A=v,D=v+1,y=v+2;s=Rr(this,f,t,n,l,d,u,A,D,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let x=Math.max(0,p.start),M=Math.min(c.count,p.start+p.count);for(let m=x,f=M;m<f;m+=3){let R=m,T=m+1,v=m+2;s=Rr(this,a,t,n,l,d,u,R,T,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Pd(i,t,e,n,s,r,a,o){let c;if(t.side===qe?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===oi,o),c===null)return null;Cr.copy(o),Cr.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Cr);return l<e.near||l>e.far?null:{distance:l,point:Cr.clone(),object:i}}function Rr(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,wr),i.getVertexPosition(c,Er),i.getVertexPosition(l,Tr);let d=Pd(i,t,e,n,wr,Er,Tr,nh);if(d){let u=new G;Sn.getBarycoord(nh,wr,Er,Tr,u),s&&(d.uv=Sn.getInterpolatedAttribute(s,o,c,l,u,new qt)),r&&(d.uv1=Sn.getInterpolatedAttribute(r,o,c,l,u,new qt)),a&&(d.normal=Sn.getInterpolatedAttribute(a,o,c,l,u,new G),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let h={a:o,b:c,c:l,normal:new G,materialIndex:0};Sn.getNormal(wr,Er,Tr,h.normal),d.face=h,d.barycoord=u}return d}var na=class extends Ne{constructor(t=null,e=1,n=1,s,r,a,o,c,l=De,d=De,u,h){super(null,a,o,c,l,d,s,r,u,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xi=new vi,Ld=new qt(.5,.5),Ir=new G,Os=class{constructor(t=new hn,e=new hn,n=new hn,s=new hn,r=new hn,a=new hn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=un,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],d=r[4],u=r[5],h=r[6],p=r[7],x=r[8],M=r[9],m=r[10],f=r[11],R=r[12],T=r[13],v=r[14],E=r[15];if(s[0].setComponents(l-a,p-d,f-x,E-R).normalize(),s[1].setComponents(l+a,p+d,f+x,E+R).normalize(),s[2].setComponents(l+o,p+u,f+M,E+T).normalize(),s[3].setComponents(l-o,p-u,f-M,E-T).normalize(),n)s[4].setComponents(c,h,m,v).normalize(),s[5].setComponents(l-c,p-h,f-m,E-v).normalize();else if(s[4].setComponents(l-c,p-h,f-m,E-v).normalize(),e===un)s[5].setComponents(l+c,p+h,f+m,E+v).normalize();else if(e===As)s[5].setComponents(c,h,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(t){xi.center.set(0,0,0);let e=Ld.distanceTo(t.center);return xi.radius=.7071067811865476+e,xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ir.x=s.normal.x>0?t.max.x:t.min.x,Ir.y=s.normal.y>0?t.max.y:t.min.y,Ir.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ir)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ns=class extends zn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ia=new G,sa=new G,ih=new ve,bs=new Fs,Pr=new vi,nl=new G,sh=new G,ra=class extends Ze{constructor(t=new Xe,e=new ns){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)ia.fromBufferAttribute(e,s-1),sa.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ia.distanceTo(sa);t.setAttribute("lineDistance",new We(n,1))}else Ft("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere),Pr.applyMatrix4(s),Pr.radius+=r,t.ray.intersectsSphere(Pr)===!1)return;ih.copy(s).invert(),bs.copy(t.ray).applyMatrix4(ih);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,d=n.index,h=n.attributes.position;if(d!==null){let p=Math.max(0,a.start),x=Math.min(d.count,a.start+a.count);for(let M=p,m=x-1;M<m;M+=l){let f=d.getX(M),R=d.getX(M+1),T=Lr(this,t,bs,c,f,R,M);T&&e.push(T)}if(this.isLineLoop){let M=d.getX(x-1),m=d.getX(p),f=Lr(this,t,bs,c,M,m,x-1);f&&e.push(f)}}else{let p=Math.max(0,a.start),x=Math.min(h.count,a.start+a.count);for(let M=p,m=x-1;M<m;M+=l){let f=Lr(this,t,bs,c,M,M+1,M);f&&e.push(f)}if(this.isLineLoop){let M=Lr(this,t,bs,c,x-1,p,x-1);M&&e.push(M)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Lr(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(ia.fromBufferAttribute(o,s),sa.fromBufferAttribute(o,r),e.distanceSqToSegment(ia,sa,nl,sh)>n)return;nl.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(nl);if(!(l<t.near||l>t.far))return{distance:l,point:sh.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var rh=new G,ah=new G,Bs=class extends ra{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)rh.fromBufferAttribute(e,s),ah.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+rh.distanceTo(ah);t.setAttribute("lineDistance",new We(n,1))}else Ft("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var zs=class extends Ne{constructor(t=[],e=li,n,s,r,a,o,c,l,d){super(t,e,n,s,r,a,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},An=class extends Ne{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ii=class extends Ne{constructor(t,e,n=mn,s,r,a,o=De,c=De,l,d=wn,u=1){if(d!==wn&&d!==hi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:u};super(h,s,r,a,o,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ts(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},aa=class extends ii{constructor(t,e=mn,n=li,s,r,a=De,o=De,c,l=wn){let d={width:t,height:t,depth:1},u=[d,d,d,d,d,d];super(t,t,e,n,s,r,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ks=class extends Ne{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},je=class i extends Xe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],d=[],u=[],h=0,p=0;x("z","y","x",-1,-1,n,e,t,a,r,0),x("z","y","x",1,-1,n,e,-t,a,r,1),x("x","z","y",1,1,t,n,e,s,a,2),x("x","z","y",1,-1,t,n,-e,s,a,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new We(l,3)),this.setAttribute("normal",new We(d,3)),this.setAttribute("uv",new We(u,2));function x(M,m,f,R,T,v,E,A,D,y,I){let F=v/D,V=E/y,W=v/2,X=E/2,k=A/2,q=D+1,Q=y+1,Z=0,ot=0,K=new G;for(let st=0;st<Q;st++){let lt=st*V-X;for(let Dt=0;Dt<q;Dt++){let Ct=Dt*F-W;K[M]=Ct*R,K[m]=lt*T,K[f]=k,l.push(K.x,K.y,K.z),K[M]=0,K[m]=0,K[f]=A>0?1:-1,d.push(K.x,K.y,K.z),u.push(Dt/D),u.push(1-st/y),Z+=1}}for(let st=0;st<y;st++)for(let lt=0;lt<D;lt++){let Dt=h+lt+q*st,Ct=h+lt+q*(st+1),le=h+(lt+1)+q*(st+1),Yt=h+(lt+1)+q*st;c.push(Dt,Ct,Yt),c.push(Ct,le,Yt),ot+=6}o.addGroup(p,ot,I),p+=ot,h+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Dr=new G,Nr=new G,il=new G,Ur=new Sn,Vs=class extends Xe{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(kr*e),a=t.getIndex(),o=t.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],d=["a","b","c"],u=new Array(3),h={},p=[];for(let x=0;x<c;x+=3){a?(l[0]=a.getX(x),l[1]=a.getX(x+1),l[2]=a.getX(x+2)):(l[0]=x,l[1]=x+1,l[2]=x+2);let{a:M,b:m,c:f}=Ur;if(M.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),f.fromBufferAttribute(o,l[2]),Ur.getNormal(il),u[0]=`${Math.round(M.x*s)},${Math.round(M.y*s)},${Math.round(M.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let R=0;R<3;R++){let T=(R+1)%3,v=u[R],E=u[T],A=Ur[d[R]],D=Ur[d[T]],y=`${v}_${E}`,I=`${E}_${v}`;I in h&&h[I]?(il.dot(h[I].normal)<=r&&(p.push(A.x,A.y,A.z),p.push(D.x,D.y,D.z)),h[I]=null):y in h||(h[y]={index0:l[R],index1:l[T],normal:il.clone()})}}for(let x in h)if(h[x]){let{index0:M,index1:m}=h[x];Dr.fromBufferAttribute(o,M),Nr.fromBufferAttribute(o,m),p.push(Dr.x,Dr.y,Dr.z),p.push(Nr.x,Nr.y,Nr.z)}this.setAttribute("position",new We(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var Gs=class i extends Xe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,d=c+1,u=t/o,h=e/c,p=[],x=[],M=[],m=[];for(let f=0;f<d;f++){let R=f*h-a;for(let T=0;T<l;T++){let v=T*u-r;x.push(v,-R,0),M.push(0,0,1),m.push(T/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let R=0;R<o;R++){let T=R+l*f,v=R+l*(f+1),E=R+1+l*(f+1),A=R+1+l*f;p.push(T,v,A),p.push(v,E,A)}this.setIndex(p),this.setAttribute("position",new We(x,3)),this.setAttribute("normal",new We(M,3)),this.setAttribute("uv",new We(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};function wi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(oh(s))s.isRenderTargetTexture?(Ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(oh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ve(i){let t={};for(let e=0;e<i.length;e++){let n=wi(i[e]);for(let s in n)t[s]=n[s]}return t}function oh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Dd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Fl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}var Jh={clone:wi,merge:Ve},Nd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ud=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ke=class extends zn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nd,this.fragmentShader=Ud,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=wi(t.uniforms),this.uniformsGroups=Dd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Gt().setHex(s.value);break;case"v2":this.uniforms[n].value=new qt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new G().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Me().fromArray(s.value);break;case"m3":this.uniforms[n].value=new kt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ve().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},oa=class extends ke{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var la=class extends zn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ca=class extends zn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Zi(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function sl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var si=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ha=class extends si{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:al,endingEnd:al}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ol:r=t,o=2*e-n;break;case ll:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ol:a=t,c=2*n-e;break;case ll:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,d=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,d=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,p=this._weightNext,x=(n-e)/(s-e),M=x*x,m=M*x,f=-h*m+2*h*M-h*x,R=(1+h)*m+(-1.5-2*h)*M+(-.5+h)*x+1,T=(-1-p)*m+(1.5+p)*M+.5*x,v=p*m-p*M;for(let E=0;E!==o;++E)r[E]=f*a[d+E]+R*a[l+E]+T*a[c+E]+v*a[u+E];return r}},ua=class extends si{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,d=(n-e)/(s-e),u=1-d;for(let h=0;h!==o;++h)r[h]=a[l+h]*u+a[c+h]*d;return r}},da=class extends si{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},fa=class extends si{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,d=this.inTangents,u=this.outTangents;if(!d||!u){let x=(n-e)/(s-e),M=1-x;for(let m=0;m!==o;++m)r[m]=a[l+m]*M+a[c+m]*x;return r}let h=o*2,p=t-1;for(let x=0;x!==o;++x){let M=a[l+x],m=a[c+x],f=p*h+x*2,R=u[f],T=u[f+1],v=t*h+x*2,E=d[v],A=d[v+1],D=Od(n,e,R,E,s);r[x]=Kh(D,M,T,A,m)}return r}};function Kh(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Fd(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Od(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Kh(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let c=Fd(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var Qe=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Zi(e,this.TimeBufferType),this.values=Zi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Zi(t.times,Array),values:Zi(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),sl(t.settings)&&(n.settings={inTangents:Zi(t.settings.inTangents,Array),outTangents:Zi(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new da(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ua(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ha(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new fa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ws:e=this.InterpolantFactoryMethodDiscrete;break;case Jr:e=this.InterpolantFactoryMethodLinear;break;case Br:e=this.InterpolantFactoryMethodSmooth;break;case rl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ft("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ws;case this.InterpolantFactoryMethodLinear:return Jr;case this.InterpolantFactoryMethodSmooth:return Br;case this.InterpolantFactoryMethodBezier:return rl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;sl(this.settings)&&(lh(this.settings.inTangents,t),lh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ot("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ot("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Ot("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){Ot("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&fd(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Ot("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Br,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],d=t[o+1];if(l!==d&&(o!==1||l!==t[0]))if(s)c=!0;else{let u=o*n,h=u-n,p=u+n;for(let x=0;x!==n;++x){let M=e[u+x];if(M!==e[h+x]||M!==e[p+x]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let u=o*n,h=a*n;for(let p=0;p!==n;++p)e[h+p]=e[u+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,sl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function lh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Qe.prototype.ValueTypeName="";Qe.prototype.TimeBufferType=Float32Array;Qe.prototype.ValueBufferType=Float32Array;Qe.prototype.DefaultInterpolation=Jr;var ri=class extends Qe{constructor(t,e,n){super(t,e,n)}};ri.prototype.ValueTypeName="bool";ri.prototype.ValueBufferType=Array;ri.prototype.DefaultInterpolation=ws;ri.prototype.InterpolantFactoryMethodLinear=void 0;ri.prototype.InterpolantFactoryMethodSmooth=void 0;var pa=class extends Qe{constructor(t,e,n,s){super(t,e,n,s)}};pa.prototype.ValueTypeName="color";var ma=class extends Qe{constructor(t,e,n,s){super(t,e,n,s)}};ma.prototype.ValueTypeName="number";var ga=class extends si{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let d=l+o;l!==d;l+=4)Tn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Hs=class extends Qe{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ga(this.times,this.values,this.getValueSize(),t)}};Hs.prototype.ValueTypeName="quaternion";Hs.prototype.InterpolantFactoryMethodSmooth=void 0;var ai=class extends Qe{constructor(t,e,n){super(t,e,n)}};ai.prototype.ValueTypeName="string";ai.prototype.ValueBufferType=Array;ai.prototype.DefaultInterpolation=ws;ai.prototype.InterpolantFactoryMethodLinear=void 0;ai.prototype.InterpolantFactoryMethodSmooth=void 0;var _a=class extends Qe{constructor(t,e,n,s){super(t,e,n,s)}};_a.prototype.ValueTypeName="vector";var xa=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,u){return l.push(d,u),this},this.removeHandler=function(d){let u=l.indexOf(d);return u!==-1&&l.splice(u,2),this},this.getHandler=function(d){for(let u=0,h=l.length;u<h;u+=2){let p=l[u],x=l[u+1];if(p.global&&(p.lastIndex=0),p.test(d))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},jh=new xa,ya=class{constructor(t){this.manager=t!==void 0?t:jh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ya.DEFAULT_MATERIAL_NAME="__DEFAULT";var Fr=new G,Or=new Tn,vn=new G,Ws=class extends Ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Fr,Or,vn),vn.x===1&&vn.y===1&&vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fr,Or,vn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Fr,Or,vn),vn.x===1&&vn.y===1&&vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fr,Or,vn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},jn=new G,ch=new qt,hh=new qt,ze=class extends Ws{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Kr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(kr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Kr*2*Math.atan(Math.tan(kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(jn.x,jn.y).multiplyScalar(-t/jn.z),jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(jn.x,jn.y).multiplyScalar(-t/jn.z)}getViewSize(t,e){return this.getViewBounds(t,ch,hh),e.subVectors(hh,ch)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(kr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Xs=class extends Ws{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var $i=-90,Ji=1,va=class extends Ze{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ze($i,Ji,t,e);s.layers=this.layers,this.add(s);let r=new ze($i,Ji,t,e);r.layers=this.layers,this.add(r);let a=new ze($i,Ji,t,e);a.layers=this.layers,this.add(a);let o=new ze($i,Ji,t,e);o.layers=this.layers,this.add(o);let c=new ze($i,Ji,t,e);c.layers=this.layers,this.add(c);let l=new ze($i,Ji,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===un)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===As)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,d]=this.children,u=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(u,h,p),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Ma=class extends ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Ol="\\[\\]\\.:\\/",Bd=new RegExp("["+Ol+"]","g"),Bl="[^"+Ol+"]",zd="[^"+Ol.replace("\\.","")+"]",kd=/((?:WC+[\/:])*)/.source.replace("WC",Bl),Vd=/(WCOD+)?/.source.replace("WCOD",zd),Gd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bl),Hd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bl),Wd=new RegExp("^"+kd+Vd+Gd+Hd+"$"),Xd=["material","materials","bones","map"],cl=class{constructor(t,e,n){let s=n||me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},me=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Bd,"")}static parseTrackName(t){let e=Wd.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Xd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ft("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ot("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ot("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===l){l=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ot("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ot("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Ot("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;Ot("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};me.Composite=cl;me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};me.prototype.GetterByBindingType=[me.prototype._getValue_direct,me.prototype._getValue_array,me.prototype._getValue_arrayElement,me.prototype._getValue_toArray];me.prototype.SetterByBindingTypeAndVersioning=[[me.prototype._setValue_direct,me.prototype._setValue_direct_setNeedsUpdate,me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[me.prototype._setValue_array,me.prototype._setValue_array_setNeedsUpdate,me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[me.prototype._setValue_arrayElement,me.prototype._setValue_arrayElement_setNeedsUpdate,me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[me.prototype._setValue_fromArray,me.prototype._setValue_fromArray_setNeedsUpdate,me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var p_=new Float32Array(1);var Wl=class Wl{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Wl.prototype.isMatrix2=!0;var hl=Wl;function zl(i,t,e,n){let s=qd(n);switch(e){case Il:return i*t;case Ll:return i*t/s.components*s.byteLength;case Ra:return i*t/s.components*s.byteLength;case ui:return i*t*2/s.components*s.byteLength;case Ia:return i*t*2/s.components*s.byteLength;case Pl:return i*t*3/s.components*s.byteLength;case an:return i*t*4/s.components*s.byteLength;case Pa:return i*t*4/s.components*s.byteLength;case $s:case Js:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ks:case js:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Da:case Ua:return Math.max(i,16)*Math.max(t,8)/4;case La:case Na:return Math.max(i,8)*Math.max(t,8)/2;case Fa:case Oa:case za:case ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ba:case Qs:case Va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ha:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Wa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Xa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case qa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ya:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Za:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case $a:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ja:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ja:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case to:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case eo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case no:case io:case so:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ro:case ao:return Math.ceil(i/4)*Math.ceil(t/4)*8;case tr:case oo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function qd(i){switch(i){case tn:case Tl:return{byteLength:1,components:1};case rs:case Al:case _n:return{byteLength:2,components:1};case Aa:case Ca:return{byteLength:2,components:4};case mn:case Ta:case gn:return{byteLength:4,components:1};case Cl:case Rl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function vu(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Zd(i){let t=new WeakMap;function e(o,c){let l=o.array,d=o.usage,u=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,d),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let d=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,d);else{u.sort((p,x)=>p.start-x.start);let h=0;for(let p=1;p<u.length;p++){let x=u[h],M=u[p];M.start<=x.start+x.count+1?x.count=Math.max(x.count,M.start+M.count-x.start):(++h,u[h]=M)}u.length=h+1;for(let p=0,x=u.length;p<x;p++){let M=u[p];i.bufferSubData(l,M.start*d.BYTES_PER_ELEMENT,d,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var $d=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jd=`#ifdef USE_ALPHAHASH
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
#endif`,Kd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ef=`#ifdef USE_AOMAP
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
#endif`,nf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sf=`#ifdef USE_BATCHING
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
#endif`,rf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,af=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,of=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cf=`#ifdef USE_IRIDESCENCE
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
#endif`,hf=`#ifdef USE_BUMPMAP
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
#endif`,uf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,df=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ff=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_f=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,xf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,yf=`#define PI 3.141592653589793
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
} // validated`,vf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Mf=`vec3 transformedNormal = objectNormal;
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
#endif`,Sf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ef=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Af=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cf=`#ifdef USE_ENVMAP
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
#endif`,Rf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,If=`#ifdef USE_ENVMAP
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
#endif`,Pf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lf=`#ifdef USE_ENVMAP
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
#endif`,Df=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Uf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ff=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Of=`#ifdef USE_GRADIENTMAP
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
}`,Bf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vf=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Gf=`#ifdef USE_ENVMAP
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
#endif`,Hf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yf=`PhysicalMaterial material;
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
#endif`,Zf=`uniform sampler2D dfgLUT;
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
}`,$f=`
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
#endif`,Jf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Kf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jf=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Qf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ep=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,np=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ip=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ap=`#if defined( USE_POINTS_UV )
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
#endif`,op=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,up=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dp=`#ifdef USE_MORPHTARGETS
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
#endif`,fp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,yp=`#ifdef USE_NORMALMAP
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
#endif`,vp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ep=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Tp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ap=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ip=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Np=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Up=`float getShadowMask() {
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
}`,Fp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Op=`#ifdef USE_SKINNING
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
#endif`,Bp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zp=`#ifdef USE_SKINNING
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
#endif`,kp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wp=`#ifdef USE_TRANSMISSION
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
#endif`,Xp=`#ifdef USE_TRANSMISSION
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
#endif`,qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$p=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Jp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kp=`uniform sampler2D t2D;
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
}`,jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,em=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nm=`#include <common>
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
}`,im=`#if DEPTH_PACKING == 3200
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
}`,sm=`#define DISTANCE
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
}`,rm=`#define DISTANCE
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
}`,am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,om=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lm=`uniform float scale;
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
}`,cm=`uniform vec3 diffuse;
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
}`,hm=`#include <common>
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
}`,um=`uniform vec3 diffuse;
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
}`,dm=`#define LAMBERT
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
}`,fm=`#define LAMBERT
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
}`,pm=`#define MATCAP
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
}`,mm=`#define MATCAP
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
}`,gm=`#define NORMAL
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
}`,_m=`#define NORMAL
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
}`,xm=`#define PHONG
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
}`,ym=`#define PHONG
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
}`,vm=`#define STANDARD
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
}`,Mm=`#define STANDARD
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
}`,Sm=`#define TOON
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
}`,bm=`#define TOON
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
}`,wm=`uniform float size;
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
}`,Em=`uniform vec3 diffuse;
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
}`,Tm=`#include <common>
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
}`,Am=`uniform vec3 color;
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
}`,Cm=`uniform float rotation;
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
}`,Rm=`uniform vec3 diffuse;
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
}`,Wt={alphahash_fragment:$d,alphahash_pars_fragment:Jd,alphamap_fragment:Kd,alphamap_pars_fragment:jd,alphatest_fragment:Qd,alphatest_pars_fragment:tf,aomap_fragment:ef,aomap_pars_fragment:nf,batching_pars_vertex:sf,batching_vertex:rf,begin_vertex:af,beginnormal_vertex:of,bsdfs:lf,iridescence_fragment:cf,bumpmap_pars_fragment:hf,clipping_planes_fragment:uf,clipping_planes_pars_fragment:df,clipping_planes_pars_vertex:ff,clipping_planes_vertex:pf,color_fragment:mf,color_pars_fragment:gf,color_pars_vertex:_f,color_vertex:xf,common:yf,cube_uv_reflection_fragment:vf,defaultnormal_vertex:Mf,displacementmap_pars_vertex:Sf,displacementmap_vertex:bf,emissivemap_fragment:wf,emissivemap_pars_fragment:Ef,colorspace_fragment:Tf,colorspace_pars_fragment:Af,envmap_fragment:Cf,envmap_common_pars_fragment:Rf,envmap_pars_fragment:If,envmap_pars_vertex:Pf,envmap_physical_pars_fragment:Gf,envmap_vertex:Lf,fog_vertex:Df,fog_pars_vertex:Nf,fog_fragment:Uf,fog_pars_fragment:Ff,gradientmap_pars_fragment:Of,lightmap_pars_fragment:Bf,lights_lambert_fragment:zf,lights_lambert_pars_fragment:kf,lights_pars_begin:Vf,lights_toon_fragment:Hf,lights_toon_pars_fragment:Wf,lights_phong_fragment:Xf,lights_phong_pars_fragment:qf,lights_physical_fragment:Yf,lights_physical_pars_fragment:Zf,lights_fragment_begin:$f,lights_fragment_maps:Jf,lights_fragment_end:Kf,lightprobes_pars_fragment:jf,logdepthbuf_fragment:Qf,logdepthbuf_pars_fragment:tp,logdepthbuf_pars_vertex:ep,logdepthbuf_vertex:np,map_fragment:ip,map_pars_fragment:sp,map_particle_fragment:rp,map_particle_pars_fragment:ap,metalnessmap_fragment:op,metalnessmap_pars_fragment:lp,morphinstance_vertex:cp,morphcolor_vertex:hp,morphnormal_vertex:up,morphtarget_pars_vertex:dp,morphtarget_vertex:fp,normal_fragment_begin:pp,normal_fragment_maps:mp,normal_pars_fragment:gp,normal_pars_vertex:_p,normal_vertex:xp,normalmap_pars_fragment:yp,clearcoat_normal_fragment_begin:vp,clearcoat_normal_fragment_maps:Mp,clearcoat_pars_fragment:Sp,iridescence_pars_fragment:bp,opaque_fragment:wp,packing:Ep,premultiplied_alpha_fragment:Tp,project_vertex:Ap,dithering_fragment:Cp,dithering_pars_fragment:Rp,roughnessmap_fragment:Ip,roughnessmap_pars_fragment:Pp,shadowmap_pars_fragment:Lp,shadowmap_pars_vertex:Dp,shadowmap_vertex:Np,shadowmask_pars_fragment:Up,skinbase_vertex:Fp,skinning_pars_vertex:Op,skinning_vertex:Bp,skinnormal_vertex:zp,specularmap_fragment:kp,specularmap_pars_fragment:Vp,tonemapping_fragment:Gp,tonemapping_pars_fragment:Hp,transmission_fragment:Wp,transmission_pars_fragment:Xp,uv_pars_fragment:qp,uv_pars_vertex:Yp,uv_vertex:Zp,worldpos_vertex:$p,background_vert:Jp,background_frag:Kp,backgroundCube_vert:jp,backgroundCube_frag:Qp,cube_vert:tm,cube_frag:em,depth_vert:nm,depth_frag:im,distance_vert:sm,distance_frag:rm,equirect_vert:am,equirect_frag:om,linedashed_vert:lm,linedashed_frag:cm,meshbasic_vert:hm,meshbasic_frag:um,meshlambert_vert:dm,meshlambert_frag:fm,meshmatcap_vert:pm,meshmatcap_frag:mm,meshnormal_vert:gm,meshnormal_frag:_m,meshphong_vert:xm,meshphong_frag:ym,meshphysical_vert:vm,meshphysical_frag:Mm,meshtoon_vert:Sm,meshtoon_frag:bm,points_vert:wm,points_frag:Em,shadow_vert:Tm,shadow_frag:Am,sprite_vert:Cm,sprite_frag:Rm},Mt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},In={basic:{uniforms:Ve([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Ve([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Gt(0)},envMapIntensity:{value:1}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Ve([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Ve([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Ve([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Ve([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Ve([Mt.points,Mt.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Ve([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Ve([Mt.common,Mt.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Ve([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Ve([Mt.sprite,Mt.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distance:{uniforms:Ve([Mt.common,Mt.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distance_vert,fragmentShader:Wt.distance_frag},shadow:{uniforms:Ve([Mt.lights,Mt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};In.physical={uniforms:Ve([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};var ho={r:0,b:0,g:0},Im=new ve,Mu=new kt;Mu.set(-1,0,0,0,1,0,0,0,1);function Pm(i,t,e,n,s,r){let a=new Gt(0),o=s===!0?0:1,c,l,d=null,u=0,h=null;function p(R){let T=R.isScene===!0?R.background:null;if(T&&T.isTexture){let v=R.backgroundBlurriness>0;T=t.get(T,v)}return T}function x(R){let T=!1,v=p(R);v===null?m(a,o):v&&v.isColor&&(m(v,1),T=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(R,T){let v=p(T);v&&(v.isCubeTexture||v.mapping===Ys)?(l===void 0&&(l=new Ee(new je(1,1,1),new ke({name:"BackgroundCubeMaterial",uniforms:wi(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(E,A,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Im.makeRotationFromEuler(T.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Mu),l.material.toneMapped=Jt.getTransfer(v.colorSpace)!==oe,(d!==v||u!==v.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,d=v,u=v.version,h=i.toneMapping),l.layers.enableAll(),R.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ee(new Gs(2,2),new ke({name:"BackgroundMaterial",uniforms:wi(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Jt.getTransfer(v.colorSpace)!==oe,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||u!==v.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,d=v,u=v.version,h=i.toneMapping),c.layers.enableAll(),R.unshift(c,c.geometry,c.material,0,0,null))}function m(R,T){R.getRGB(ho,Fl(i)),e.buffers.color.setClear(ho.r,ho.g,ho.b,T,r)}function f(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(R,T=1){a.set(R),o=T,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(R){o=R,m(a,o)},render:x,addToRenderList:M,dispose:f}}function Lm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(V,W,X,k,q){let Q=!1,Z=u(V,k,X,W);r!==Z&&(r=Z,l(r.object)),Q=p(V,k,X,q),Q&&x(V,k,X,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,v(V,W,X,k),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function c(){return i.createVertexArray()}function l(V){return i.bindVertexArray(V)}function d(V){return i.deleteVertexArray(V)}function u(V,W,X,k){let q=k.wireframe===!0,Q=n[W.id];Q===void 0&&(Q={},n[W.id]=Q);let Z=V.isInstancedMesh===!0?V.id:0,ot=Q[Z];ot===void 0&&(ot={},Q[Z]=ot);let K=ot[X.id];K===void 0&&(K={},ot[X.id]=K);let st=K[q];return st===void 0&&(st=h(c()),K[q]=st),st}function h(V){let W=[],X=[],k=[];for(let q=0;q<e;q++)W[q]=0,X[q]=0,k[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:X,attributeDivisors:k,object:V,attributes:{},index:null}}function p(V,W,X,k){let q=r.attributes,Q=W.attributes,Z=0,ot=X.getAttributes();for(let K in ot)if(ot[K].location>=0){let lt=q[K],Dt=Q[K];if(Dt===void 0&&(K==="instanceMatrix"&&V.instanceMatrix&&(Dt=V.instanceMatrix),K==="instanceColor"&&V.instanceColor&&(Dt=V.instanceColor)),lt===void 0||lt.attribute!==Dt||Dt&&lt.data!==Dt.data)return!0;Z++}return r.attributesNum!==Z||r.index!==k}function x(V,W,X,k){let q={},Q=W.attributes,Z=0,ot=X.getAttributes();for(let K in ot)if(ot[K].location>=0){let lt=Q[K];lt===void 0&&(K==="instanceMatrix"&&V.instanceMatrix&&(lt=V.instanceMatrix),K==="instanceColor"&&V.instanceColor&&(lt=V.instanceColor));let Dt={};Dt.attribute=lt,lt&&lt.data&&(Dt.data=lt.data),q[K]=Dt,Z++}r.attributes=q,r.attributesNum=Z,r.index=k}function M(){let V=r.newAttributes;for(let W=0,X=V.length;W<X;W++)V[W]=0}function m(V){f(V,0)}function f(V,W){let X=r.newAttributes,k=r.enabledAttributes,q=r.attributeDivisors;X[V]=1,k[V]===0&&(i.enableVertexAttribArray(V),k[V]=1),q[V]!==W&&(i.vertexAttribDivisor(V,W),q[V]=W)}function R(){let V=r.newAttributes,W=r.enabledAttributes;for(let X=0,k=W.length;X<k;X++)W[X]!==V[X]&&(i.disableVertexAttribArray(X),W[X]=0)}function T(V,W,X,k,q,Q,Z){Z===!0?i.vertexAttribIPointer(V,W,X,q,Q):i.vertexAttribPointer(V,W,X,k,q,Q)}function v(V,W,X,k){M();let q=k.attributes,Q=X.getAttributes(),Z=W.defaultAttributeValues;for(let ot in Q){let K=Q[ot];if(K.location>=0){let st=q[ot];if(st===void 0&&(ot==="instanceMatrix"&&V.instanceMatrix&&(st=V.instanceMatrix),ot==="instanceColor"&&V.instanceColor&&(st=V.instanceColor)),st!==void 0){let lt=st.normalized,Dt=st.itemSize,Ct=t.get(st);if(Ct===void 0)continue;let le=Ct.buffer,Yt=Ct.type,Kt=Ct.bytesPerElement,$=Yt===i.INT||Yt===i.UNSIGNED_INT||st.gpuType===Ta;if(st.isInterleavedBufferAttribute){let nt=st.data,Et=nt.stride,Bt=st.offset;if(nt.isInstancedInterleavedBuffer){for(let bt=0;bt<K.locationSize;bt++)f(K.location+bt,nt.meshPerAttribute);V.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let bt=0;bt<K.locationSize;bt++)m(K.location+bt);i.bindBuffer(i.ARRAY_BUFFER,le);for(let bt=0;bt<K.locationSize;bt++)T(K.location+bt,Dt/K.locationSize,Yt,lt,Et*Kt,(Bt+Dt/K.locationSize*bt)*Kt,$)}else{if(st.isInstancedBufferAttribute){for(let nt=0;nt<K.locationSize;nt++)f(K.location+nt,st.meshPerAttribute);V.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let nt=0;nt<K.locationSize;nt++)m(K.location+nt);i.bindBuffer(i.ARRAY_BUFFER,le);for(let nt=0;nt<K.locationSize;nt++)T(K.location+nt,Dt/K.locationSize,Yt,lt,Dt*Kt,Dt/K.locationSize*nt*Kt,$)}}else if(Z!==void 0){let lt=Z[ot];if(lt!==void 0)switch(lt.length){case 2:i.vertexAttrib2fv(K.location,lt);break;case 3:i.vertexAttrib3fv(K.location,lt);break;case 4:i.vertexAttrib4fv(K.location,lt);break;default:i.vertexAttrib1fv(K.location,lt)}}}}R()}function E(){I();for(let V in n){let W=n[V];for(let X in W){let k=W[X];for(let q in k){let Q=k[q];for(let Z in Q)d(Q[Z].object),delete Q[Z];delete k[q]}}delete n[V]}}function A(V){if(n[V.id]===void 0)return;let W=n[V.id];for(let X in W){let k=W[X];for(let q in k){let Q=k[q];for(let Z in Q)d(Q[Z].object),delete Q[Z];delete k[q]}}delete n[V.id]}function D(V){for(let W in n){let X=n[W];for(let k in X){let q=X[k];if(q[V.id]===void 0)continue;let Q=q[V.id];for(let Z in Q)d(Q[Z].object),delete Q[Z];delete q[V.id]}}}function y(V){for(let W in n){let X=n[W],k=V.isInstancedMesh===!0?V.id:0,q=X[k];if(q!==void 0){for(let Q in q){let Z=q[Q];for(let ot in Z)d(Z[ot].object),delete Z[ot];delete q[Q]}delete X[k],Object.keys(X).length===0&&delete n[W]}}}function I(){F(),a=!0,r!==s&&(r=s,l(r.object))}function F(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:F,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfObject:y,releaseStatesOfProgram:D,initAttributes:M,enableAttribute:m,disableUnusedAttributes:R}}function Dm(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,d){d!==0&&(i.drawArraysInstanced(n,c,l,d),e.update(l,n,d))}function o(c,l,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,d);let h=0;for(let p=0;p<d;p++)h+=l[p];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Nm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let D=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(D){return!(D!==an&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){let y=D===_n&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==tn&&D!==gn&&!y&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",d=c(l);d!==l&&(Ft("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);let u=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Ft("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:R,maxVaryings:T,maxFragmentUniforms:v,maxSamples:E,samples:A}}function Um(i){let t=this,e=null,n=0,s=!1,r=!1,a=new hn,o=new kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){let p=u.length!==0||h||n!==0||s;return s=h,n=u.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,h){e=d(u,h,0)},this.setState=function(u,h,p){let x=u.clippingPlanes,M=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||x===null||x.length===0||r&&!m)r?d(null):l();else{let R=r?0:n,T=R*4,v=f.clippingState||null;c.value=v,v=d(x,h,T,p);for(let E=0;E!==T;++E)v[E]=e[E];f.clippingState=v,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=R}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(u,h,p,x){let M=u!==null?u.length:0,m=null;if(M!==0){if(m=c.value,x!==!0||m===null){let f=p+M*4,R=h.matrixWorldInverse;o.getNormalMatrix(R),(m===null||m.length<f)&&(m=new Float32Array(f));for(let T=0,v=p;T!==M;++T,v+=4)a.copy(u[T]).applyMatrix4(R,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}var ls=4,Fm=6,Om=20,Bm=256,er=new Xs,Qh=new Gt,Xl=null,ql=0,Yl=0,Zl=!1,zm=new G,Ei=new G,fo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=zm}=r;Xl=this._renderer.getRenderTarget(),ql=this._renderer.getActiveCubeFace(),Yl=this._renderer.getActiveMipmapLevel(),Zl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Xl,ql,Yl),this._renderer.xr.enabled=Zl,t.scissorTest=!1,os(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===li||t.mapping===bi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Xl=this._renderer.getRenderTarget(),ql=this._renderer.getActiveCubeFace(),Yl=this._renderer.getActiveMipmapLevel(),Zl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ae,minFilter:Ae,generateMipmaps:!1,type:_n,format:an,colorSpace:Es,depthBuffer:!1},s=tu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tu(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=km(r)),this._blurMaterial=Gm(r,t,e),this._ggxMaterial=Vm(r,t,e)}return s}_compileMaterial(t){let e=new Ee(new Xe,t);this._renderer.compile(e,er)}_sceneToCubeUV(t,e,n,s,r){let c=new ze(90,1,e,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,p=u.toneMapping;u.getClearColor(Qh),u.toneMapping=pn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ee(new je,new fn({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,m=M.material,f=!1,R=t.background;R?R.isColor&&(m.color.copy(R),t.background=null,f=!0):(m.color.copy(Qh),f=!0);for(let T=0;T<6;T++){let v=T%3;v===0?(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+d[T],r.y,r.z)):v===1?(c.up.set(0,0,l[T]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+d[T],r.z)):(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+d[T]));let E=this._cubeSize;os(s,v*E,T>2?E:0,E,E),u.setRenderTarget(s),f&&u.render(M,c),u.render(t,c)}u.toneMapping=p,u.autoClear=h,t.background=R}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===li||t.mapping===bi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=nu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;os(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,er)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),d=e/(this._lodMeshes.length-1),u=Math.sqrt(l*l-d*d),h=l*1.25,p=u*h,{_lodMax:x}=this,M=this._sizeLods[n],m=3*M*(n>x-ls?n-x+ls:0),f=4*(this._cubeSize-M);c.envMap.value=t.texture,c.roughness.value=p,c.mipInt.value=x-e,os(r,m,f,3*M,2*M),s.setRenderTarget(r),s.render(o,er),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=x-n,os(t,m,f,3*M,2*M),s.setRenderTarget(t),s.render(o,er)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let d=this._sizeLods[s],u=3*d*(s>this._lodMax-ls?s-this._lodMax+ls:0),h=4*(this._cubeSize-d);os(e,u,h,3*d,2*d),a.setRenderTarget(e),a.render(c,er)}};function km(i){let t=[],e=[],n=i,s=i-ls+1+Fm;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),c=-o,l=1+o,d=[c,c,l,c,l,l,c,c,l,l,c,l],u=6,h=6,p=3,x=new Float32Array(p*h*u),M=new Float32Array(p*h*u);for(let f=0;f<u;f++){let R=f%3*2/3-1,T=f>2?0:-1,v=[R,T,0,R+2/3,T,0,R+2/3,T+1,0,R,T,0,R+2/3,T+1,0,R,T+1,0];x.set(v,p*h*f);for(let E=0;E<h;E++){let A=d[E*2]*2-1,D=d[E*2+1]*2-1;f===0?Ei.set(1,D,A):f===1?Ei.set(-A,1,-D):f===2?Ei.set(-A,D,1):f===3?Ei.set(-1,D,-A):f===4?Ei.set(-A,-1,D):Ei.set(A,D,-1),Ei.toArray(M,(f*h+E)*p)}}let m=new Xe;m.setAttribute("position",new Ce(x,p)),m.setAttribute("outputDirection",new Ce(M,p)),e.push(new Ee(m,null)),n>ls&&n--}return{lodMeshes:e,sizeLods:t}}function tu(i,t,e){let n=new Ye(i,t,e);return n.texture.mapping=Ys,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function os(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Vm(i,t,e){return new ke({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Bm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:go(),fragmentShader:`

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
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function Gm(i,t,e){return new ke({name:"SphericalGaussianBlur",defines:{SAMPLES:Om,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:go(),fragmentShader:`

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
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function eu(){return new ke({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:go(),fragmentShader:`

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
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function nu(){return new ke({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function go(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var po=class extends Ye{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new zs(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new je(5,5,5),r=new ke({name:"CubemapFromEquirect",uniforms:wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qe,blending:Cn});r.uniforms.tEquirect.value=e;let a=new Ee(s,r),o=e.minFilter;return e.minFilter===ci&&(e.minFilter=Ae),new va(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function Hm(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,p=!1){return h==null?null:p?a(h):r(h)}function r(h){if(h&&h.isTexture){let p=h.mapping;if(p===ba||p===wa)if(t.has(h)){let x=t.get(h).texture;return o(x,h.mapping)}else{let x=h.image;if(x&&x.height>0){let M=new po(x.height);return M.fromEquirectangularTexture(i,h),t.set(h,M),h.addEventListener("dispose",l),o(M.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let p=h.mapping,x=p===ba||p===wa,M=p===li||p===bi;if(x||M){let m=e.get(h),f=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return n===null&&(n=new fo(i)),m=x?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{let R=h.image;return x&&R&&R.height>0||M&&R&&c(R)?(n===null&&(n=new fo(i)),m=x?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",d),m.texture):null}}}return h}function o(h,p){return p===ba?h.mapping=li:p===wa&&(h.mapping=bi),h}function c(h){let p=0,x=6;for(let M=0;M<x;M++)h[M]!==void 0&&p++;return p===x}function l(h){let p=h.target;p.removeEventListener("dispose",l);let x=t.get(p);x!==void 0&&(t.delete(p),x.dispose())}function d(h){let p=h.target;p.removeEventListener("dispose",d);let x=e.get(p);x!==void 0&&(e.delete(p),x.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Wm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&yi("WebGLRenderer: "+n+" extension not supported."),s}}}function Xm(i,t,e,n){let s={},r=new WeakMap;function a(u){let h=u.target;h.index!==null&&t.remove(h.index);for(let x in h.attributes)t.remove(h.attributes[x]);h.removeEventListener("dispose",a),delete s[h.id];let p=r.get(h);p&&(t.remove(p),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(u,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function c(u){let h=u.attributes;for(let p in h)t.update(h[p],i.ARRAY_BUFFER)}function l(u){let h=[],p=u.index,x=u.attributes.position,M=0;if(x===void 0)return;if(p!==null){let R=p.array;M=p.version;for(let T=0,v=R.length;T<v;T+=3){let E=R[T+0],A=R[T+1],D=R[T+2];h.push(E,A,A,D,D,E)}}else{let R=x.array;M=x.version;for(let T=0,v=R.length/3-1;T<v;T+=3){let E=T+0,A=T+1,D=T+2;h.push(E,A,A,D,D,E)}}let m=new(x.count>=65535?Ns:Ds)(h,1);m.version=M;let f=r.get(u);f&&t.remove(f),r.set(u,m)}function d(u){let h=r.get(u);if(h){let p=u.index;p!==null&&h.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:d}}function qm(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,h){i.drawElements(n,h,r,u*a),e.update(h,n,1)}function l(u,h,p){p!==0&&(i.drawElementsInstanced(n,h,r,u*a,p),e.update(h,n,p))}function d(u,h,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,u,0,p);let M=0;for(let m=0;m<p;m++)M+=h[m];e.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d}function Ym(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Ot("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Zm(i,t,e){let n=new WeakMap,s=new Me;function r(a,o,c){let l=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=d!==void 0?d.length:0,h=n.get(o);if(h===void 0||h.count!==u){let I=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",I)};h!==void 0&&h.texture.dispose();let p=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],R=o.morphAttributes.color||[],T=0;p===!0&&(T=1),x===!0&&(T=2),M===!0&&(T=3);let v=o.attributes.position.count*T,E=1;v>t.maxTextureSize&&(E=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let A=new Float32Array(v*E*4*u),D=new Is(A,v,E,u);D.type=gn,D.needsUpdate=!0;let y=T*4;for(let F=0;F<u;F++){let V=m[F],W=f[F],X=R[F],k=v*E*4*F;for(let q=0;q<V.count;q++){let Q=q*y;p===!0&&(s.fromBufferAttribute(V,q),A[k+Q+0]=s.x,A[k+Q+1]=s.y,A[k+Q+2]=s.z,A[k+Q+3]=0),x===!0&&(s.fromBufferAttribute(W,q),A[k+Q+4]=s.x,A[k+Q+5]=s.y,A[k+Q+6]=s.z,A[k+Q+7]=0),M===!0&&(s.fromBufferAttribute(X,q),A[k+Q+8]=s.x,A[k+Q+9]=s.y,A[k+Q+10]=s.z,A[k+Q+11]=X.itemSize===4?s.w:1)}}h={count:u,texture:D,size:new qt(v,E)},n.set(o,h),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let M=0;M<l.length;M++)p+=l[M];let x=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function $m(i,t,e,n,s){let r=new WeakMap;function a(l){let d=s.render.frame,u=l.geometry,h=t.get(l,u);if(r.get(h)!==d&&(t.update(h),r.set(h,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==d&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,d))),l.isSkinnedMesh){let p=l.skeleton;r.get(p)!==d&&(p.update(),r.set(p,d))}return h}function o(){r=new WeakMap}function c(l){let d=l.target;d.removeEventListener("dispose",c),n.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:a,dispose:o}}var Jm={[xl]:"LINEAR_TONE_MAPPING",[yl]:"REINHARD_TONE_MAPPING",[vl]:"CINEON_TONE_MAPPING",[Ml]:"ACES_FILMIC_TONE_MAPPING",[bl]:"AGX_TONE_MAPPING",[wl]:"NEUTRAL_TONE_MAPPING",[Sl]:"CUSTOM_TONE_MAPPING"};function Km(i,t,e,n,s,r){let a=new Ye(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new Xe;l.setAttribute("position",new We([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new We([0,2,0,0,2,0],2));let d=new oa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Ee(l,d),h=new Xs(-1,1,1,-1,0,1),p=null,x=null,M=!1,m,f=null,R=[],T=!1;this.setSize=function(v,E){a.setSize(v,E),o!==null&&o.setSize(v,E),c!==null&&c.setSize(v,E);for(let A=0;A<R.length;A++){let D=R[A];D.setSize&&D.setSize(v,E)}},this.setEffects=function(v){R=v,T=R.length>0&&R[0].isRenderPass===!0;let E=a.width,A=a.height;R.length>0&&o===null&&(o=new Ye(E,A,{type:_n,depthBuffer:!1,stencilBuffer:!1}),c=new Ye(E,A,{type:_n,depthBuffer:!1,stencilBuffer:!1}));for(let D=0;D<R.length;D++){let y=R[D];y.setSize&&y.setSize(E,A)}},this.begin=function(v,E){if(M||v.toneMapping===pn&&R.length===0)return!1;if(f=E,E!==null){let A=E.width,D=E.height;(a.width!==A||a.height!==D)&&this.setSize(A,D)}return T===!1&&v.setRenderTarget(a),m=v.toneMapping,v.toneMapping=pn,!0},this.hasRenderPass=function(){return T},this.end=function(v,E){v.toneMapping=m,M=!0;let A=a,D=o;for(let y=0;y<R.length;y++){let I=R[y];I.enabled!==!1&&(I.render(v,D,A,E),I.needsSwap!==!1&&(A=D,D=D===o?c:o))}if(p!==v.outputColorSpace||x!==v.toneMapping){p=v.outputColorSpace,x=v.toneMapping,d.defines={},Jt.getTransfer(p)===oe&&(d.defines.SRGB_TRANSFER="");let y=Jm[x];y&&(d.defines[y]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=A.texture,v.setRenderTarget(f),v.render(u,h),f=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),d.dispose()}}var Su=new Ne,Kl=new ii(1,1),bu=new Is,wu=new ta,Eu=new zs,iu=[],su=[],ru=new Float32Array(16),au=new Float32Array(9),ou=new Float32Array(4);function hs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=iu[s];if(r===void 0&&(r=new Float32Array(s),iu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Re(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ie(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function _o(i,t){let e=su[t];e===void 0&&(e=new Int32Array(t),su[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function jm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Qm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2fv(this.addr,t),Ie(e,t)}}function tg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;i.uniform3fv(this.addr,t),Ie(e,t)}}function eg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4fv(this.addr,t),Ie(e,t)}}function ng(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(Re(e,n))return;ou.set(n),i.uniformMatrix2fv(this.addr,!1,ou),Ie(e,n)}}function ig(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(Re(e,n))return;au.set(n),i.uniformMatrix3fv(this.addr,!1,au),Ie(e,n)}}function sg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(Re(e,n))return;ru.set(n),i.uniformMatrix4fv(this.addr,!1,ru),Ie(e,n)}}function rg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ag(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2iv(this.addr,t),Ie(e,t)}}function og(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3iv(this.addr,t),Ie(e,t)}}function lg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4iv(this.addr,t),Ie(e,t)}}function cg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function hg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2uiv(this.addr,t),Ie(e,t)}}function ug(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3uiv(this.addr,t),Ie(e,t)}}function dg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4uiv(this.addr,t),Ie(e,t)}}function fg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Kl.compareFunction=e.isReversedDepthBuffer()?co:lo,r=Kl):r=Su,e.setTexture2D(t||r,s)}function pg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||wu,s)}function mg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Eu,s)}function gg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||bu,s)}function _g(i){switch(i){case 5126:return jm;case 35664:return Qm;case 35665:return tg;case 35666:return eg;case 35674:return ng;case 35675:return ig;case 35676:return sg;case 5124:case 35670:return rg;case 35667:case 35671:return ag;case 35668:case 35672:return og;case 35669:case 35673:return lg;case 5125:return cg;case 36294:return hg;case 36295:return ug;case 36296:return dg;case 35678:case 36198:case 36298:case 36306:case 35682:return fg;case 35679:case 36299:case 36307:return pg;case 35680:case 36300:case 36308:case 36293:return mg;case 36289:case 36303:case 36311:case 36292:return gg}}function xg(i,t){i.uniform1fv(this.addr,t)}function yg(i,t){let e=hs(t,this.size,2);i.uniform2fv(this.addr,e)}function vg(i,t){let e=hs(t,this.size,3);i.uniform3fv(this.addr,e)}function Mg(i,t){let e=hs(t,this.size,4);i.uniform4fv(this.addr,e)}function Sg(i,t){let e=hs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function bg(i,t){let e=hs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function wg(i,t){let e=hs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Eg(i,t){i.uniform1iv(this.addr,t)}function Tg(i,t){i.uniform2iv(this.addr,t)}function Ag(i,t){i.uniform3iv(this.addr,t)}function Cg(i,t){i.uniform4iv(this.addr,t)}function Rg(i,t){i.uniform1uiv(this.addr,t)}function Ig(i,t){i.uniform2uiv(this.addr,t)}function Pg(i,t){i.uniform3uiv(this.addr,t)}function Lg(i,t){i.uniform4uiv(this.addr,t)}function Dg(i,t,e){let n=this.cache,s=t.length,r=_o(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Kl:a=Su;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Ng(i,t,e){let n=this.cache,s=t.length,r=_o(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||wu,r[a])}function Ug(i,t,e){let n=this.cache,s=t.length,r=_o(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Eu,r[a])}function Fg(i,t,e){let n=this.cache,s=t.length,r=_o(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||bu,r[a])}function Og(i){switch(i){case 5126:return xg;case 35664:return yg;case 35665:return vg;case 35666:return Mg;case 35674:return Sg;case 35675:return bg;case 35676:return wg;case 5124:case 35670:return Eg;case 35667:case 35671:return Tg;case 35668:case 35672:return Ag;case 35669:case 35673:return Cg;case 5125:return Rg;case 36294:return Ig;case 36295:return Pg;case 36296:return Lg;case 35678:case 36198:case 36298:case 36306:case 35682:return Dg;case 35679:case 36299:case 36307:return Ng;case 35680:case 36300:case 36308:case 36293:return Ug;case 36289:case 36303:case 36311:case 36292:return Fg}}var jl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=_g(e.type)}},Ql=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Og(e.type)}},tc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},$l=/(\w+)(\])?(\[|\.)?/g;function lu(i,t){i.seq.push(t),i.map[t.id]=t}function Bg(i,t,e){let n=i.name,s=n.length;for($l.lastIndex=0;;){let r=$l.exec(n),a=$l.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){lu(e,l===void 0?new jl(o,i,t):new Ql(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new tc(o),lu(e,u)),e=u}}}var cs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);Bg(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function cu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var zg=37297,kg=0;function Vg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var hu=new kt;function Gg(i){Jt._getMatrix(hu,Jt.workingColorSpace,i);let t=`mat3( ${hu.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(i)){case Ts:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return Ft("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function uu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Vg(i.getShaderSource(t),o)}else return r}function Hg(i,t){let e=Gg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Wg={[xl]:"Linear",[yl]:"Reinhard",[vl]:"Cineon",[Ml]:"ACESFilmic",[bl]:"AgX",[wl]:"Neutral",[Sl]:"Custom"};function Xg(i,t){let e=Wg[t];return e===void 0?(Ft("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var uo=new G;function qg(){Jt.getLuminanceCoefficients(uo);let i=uo.x.toFixed(4),t=uo.y.toFixed(4),e=uo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ir).join(`
`)}function Zg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function $g(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ir(i){return i!==""}function du(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Jg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ec(i){return i.replace(Jg,jg)}var Kg=new Map;function jg(i,t){let e=Wt[t];if(e===void 0){let n=Kg.get(t);if(n!==void 0)e=Wt[n],Ft('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return ec(e)}var Qg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pu(i){return i.replace(Qg,t0)}function t0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function mu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var e0={[qs]:"SHADOWMAP_TYPE_PCF",[is]:"SHADOWMAP_TYPE_VSM"};function n0(i){return e0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var i0={[li]:"ENVMAP_TYPE_CUBE",[bi]:"ENVMAP_TYPE_CUBE",[Ys]:"ENVMAP_TYPE_CUBE_UV"};function s0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":i0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var r0={[bi]:"ENVMAP_MODE_REFRACTION"};function a0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":r0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var o0={[_l]:"ENVMAP_BLENDING_MULTIPLY",[Lh]:"ENVMAP_BLENDING_MIX",[Dh]:"ENVMAP_BLENDING_ADD"};function l0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":o0[i.combine]||"ENVMAP_BLENDING_NONE"}function c0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function h0(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=n0(e),l=s0(e),d=a0(e),u=l0(e),h=c0(e),p=Yg(e),x=Zg(r),M=s.createProgram(),m,f,R=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(ir).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(ir).join(`
`),f.length>0&&(f+=`
`)):(m=[mu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ir).join(`
`),f=[mu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+d:"",e.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==pn?"#define TONE_MAPPING":"",e.toneMapping!==pn?Wt.tonemapping_pars_fragment:"",e.toneMapping!==pn?Xg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,Hg("linearToOutputTexel",e.outputColorSpace),qg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ir).join(`
`)),a=ec(a),a=du(a,e),a=fu(a,e),o=ec(o),o=du(o,e),o=fu(o,e),a=pu(a),o=pu(o),e.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Ul?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let T=R+m+a,v=R+f+o,E=cu(s,s.VERTEX_SHADER,T),A=cu(s,s.FRAGMENT_SHADER,v);s.attachShader(M,E),s.attachShader(M,A),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function D(V){if(i.debug.checkShaderErrors){let W=s.getProgramInfoLog(M)||"",X=s.getShaderInfoLog(E)||"",k=s.getShaderInfoLog(A)||"",q=W.trim(),Q=X.trim(),Z=k.trim(),ot=!0,K=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(ot=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,E,A);else{let st=uu(s,E,"vertex"),lt=uu(s,A,"fragment");Ot("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+q+`
`+st+`
`+lt)}else q!==""?Ft("WebGLProgram: Program Info Log:",q):(Q===""||Z==="")&&(K=!1);K&&(V.diagnostics={runnable:ot,programLog:q,vertexShader:{log:Q,prefix:m},fragmentShader:{log:Z,prefix:f}})}s.deleteShader(E),s.deleteShader(A),y=new cs(s,M),I=$g(s,M)}let y;this.getUniforms=function(){return y===void 0&&D(this),y};let I;this.getAttributes=function(){return I===void 0&&D(this),I};let F=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(M,zg)),F},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=kg++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=E,this.fragmentShader=A,this}var u0=0,nc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ic(t),e.set(t,n)),n}},ic=class{constructor(t){this.id=u0++,this.code=t,this.usedTimes=0}};function d0(i){return i===ui||i===Qs||i===tr}function f0(i,t,e,n,s,r){let a=new Ps,o=new nc,c=new Set,l=[],d=new Map,u=n.logarithmicDepthBuffer,h=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return c.add(y),y===0?"uv":`uv${y}`}function M(y,I,F,V,W,X){let k=V.fog,q=W.geometry,Q=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?V.environment:null,Z=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,ot=t.get(y.envMap||Q,Z),K=ot&&ot.mapping===Ys?ot.image.height:null,st=p[y.type];y.precision!==null&&(h=n.getMaxPrecision(y.precision),h!==y.precision&&Ft("WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));let lt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Dt=lt!==void 0?lt.length:0,Ct=0;q.morphAttributes.position!==void 0&&(Ct=1),q.morphAttributes.normal!==void 0&&(Ct=2),q.morphAttributes.color!==void 0&&(Ct=3);let le,Yt,Kt,$;if(st){let jt=In[st];le=jt.vertexShader,Yt=jt.fragmentShader}else{le=y.vertexShader,Yt=y.fragmentShader;let jt=o.getVertexShaderStage(y),ne=o.getFragmentShaderStage(y);o.update(y,jt,ne),Kt=jt.id,$=ne.id}let nt=i.getRenderTarget(),Et=i.state.buffers.depth.getReversed(),Bt=W.isInstancedMesh===!0,bt=W.isBatchedMesh===!0,Ht=!!y.map,ye=!!y.matcap,Xt=!!ot,te=!!y.aoMap,ae=!!y.lightMap,Zt=!!y.bumpMap&&y.wireframe===!1,ce=!!y.normalMap,_e=!!y.displacementMap,At=!!y.emissiveMap,Vt=!!y.metalnessMap,pe=!!y.roughnessMap,O=y.anisotropy>0,be=y.clearcoat>0,se=y.dispersion>0,C=y.retroreflectivity>0,_=y.iridescence>0,z=y.sheen>0,H=y.transmission>0,J=O&&!!y.anisotropyMap,ut=be&&!!y.clearcoatMap,ft=be&&!!y.clearcoatNormalMap,j=be&&!!y.clearcoatRoughnessMap,it=_&&!!y.iridescenceMap,mt=_&&!!y.iridescenceThicknessMap,Rt=z&&!!y.sheenColorMap,gt=z&&!!y.sheenRoughnessMap,pt=!!y.specularMap,It=!!y.specularColorMap,Nt=!!y.specularIntensityMap,Ut=H&&!!y.transmissionMap,U=H&&!!y.thicknessMap,_t=!!y.gradientMap,tt=!!y.alphaMap,dt=y.alphaTest>0,vt=!!y.alphaHash,at=!!y.extensions,Pt=pn;y.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Pt=i.toneMapping);let St={shaderID:st,shaderType:y.type,shaderName:y.name,vertexShader:le,fragmentShader:Yt,defines:y.defines,customVertexShaderID:Kt,customFragmentShaderID:$,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:bt,batchingColor:bt&&W._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&W.instanceColor!==null,instancingMorph:Bt&&W.morphTexture!==null,outputColorSpace:nt===null?i.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Jt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Ht,matcap:ye,envMap:Xt,envMapMode:Xt&&ot.mapping,envMapCubeUVHeight:K,aoMap:te,lightMap:ae,bumpMap:Zt,normalMap:ce,displacementMap:_e,emissiveMap:At,normalMapObjectSpace:ce&&y.normalMapType===Fh,normalMapTangentSpace:ce&&y.normalMapType===Dl,packedNormalMap:ce&&y.normalMapType===Dl&&d0(y.normalMap.format),metalnessMap:Vt,roughnessMap:pe,anisotropy:O,anisotropyMap:J,clearcoat:be,clearcoatMap:ut,clearcoatNormalMap:ft,clearcoatRoughnessMap:j,dispersion:se,retroreflection:C,iridescence:_,iridescenceMap:it,iridescenceThicknessMap:mt,sheen:z,sheenColorMap:Rt,sheenRoughnessMap:gt,specularMap:pt,specularColorMap:It,specularIntensityMap:Nt,transmission:H,transmissionMap:Ut,thicknessMap:U,gradientMap:_t,opaque:y.transparent===!1&&y.blending===ss&&y.alphaToCoverage===!1,alphaMap:tt,alphaTest:dt,alphaHash:vt,combine:y.combine,mapUv:Ht&&x(y.map.channel),aoMapUv:te&&x(y.aoMap.channel),lightMapUv:ae&&x(y.lightMap.channel),bumpMapUv:Zt&&x(y.bumpMap.channel),normalMapUv:ce&&x(y.normalMap.channel),displacementMapUv:_e&&x(y.displacementMap.channel),emissiveMapUv:At&&x(y.emissiveMap.channel),metalnessMapUv:Vt&&x(y.metalnessMap.channel),roughnessMapUv:pe&&x(y.roughnessMap.channel),anisotropyMapUv:J&&x(y.anisotropyMap.channel),clearcoatMapUv:ut&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:ft&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:gt&&x(y.sheenRoughnessMap.channel),specularMapUv:pt&&x(y.specularMap.channel),specularColorMapUv:It&&x(y.specularColorMap.channel),specularIntensityMapUv:Nt&&x(y.specularIntensityMap.channel),transmissionMapUv:Ut&&x(y.transmissionMap.channel),thicknessMapUv:U&&x(y.thicknessMap.channel),alphaMapUv:tt&&x(y.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(ce||O),vertexNormals:!!q.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!q.attributes.uv&&(Ht||tt),fog:!!k,useFog:y.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||q.attributes.normal===void 0&&ce===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Et,skinning:W.isSkinnedMesh===!0,hasPositionAttribute:q.attributes.position!==void 0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Dt,morphTextureStride:Ct,numSunLights:I.sun.length,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numSunLightShadows:I.sunShadowMap.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:Pt,decodeVideoTexture:Ht&&y.map.isVideoTexture===!0&&Jt.getTransfer(y.map.colorSpace)===oe,decodeVideoTextureEmissive:At&&y.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(y.emissiveMap.colorSpace)===oe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===rn,flipSided:y.side===qe,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:at&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&y.extensions.multiDraw===!0||bt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return St.vertexUv1s=c.has(1),St.vertexUv2s=c.has(2),St.vertexUv3s=c.has(3),c.clear(),St}function m(y){let I=[];if(y.shaderID?I.push(y.shaderID):(I.push(y.customVertexShaderID),I.push(y.customFragmentShaderID)),y.defines!==void 0)for(let F in y.defines)I.push(F),I.push(y.defines[F]);return y.isRawShaderMaterial===!1&&(f(I,y),R(I,y),I.push(i.outputColorSpace)),I.push(y.customProgramCacheKey),I.join()}function f(y,I){y.push(I.precision),y.push(I.outputColorSpace),y.push(I.envMapMode),y.push(I.envMapCubeUVHeight),y.push(I.mapUv),y.push(I.alphaMapUv),y.push(I.lightMapUv),y.push(I.aoMapUv),y.push(I.bumpMapUv),y.push(I.normalMapUv),y.push(I.displacementMapUv),y.push(I.emissiveMapUv),y.push(I.metalnessMapUv),y.push(I.roughnessMapUv),y.push(I.anisotropyMapUv),y.push(I.clearcoatMapUv),y.push(I.clearcoatNormalMapUv),y.push(I.clearcoatRoughnessMapUv),y.push(I.iridescenceMapUv),y.push(I.iridescenceThicknessMapUv),y.push(I.sheenColorMapUv),y.push(I.sheenRoughnessMapUv),y.push(I.specularMapUv),y.push(I.specularColorMapUv),y.push(I.specularIntensityMapUv),y.push(I.transmissionMapUv),y.push(I.thicknessMapUv),y.push(I.combine),y.push(I.fogExp2),y.push(I.sizeAttenuation),y.push(I.morphTargetsCount),y.push(I.morphAttributeCount),y.push(I.numSunLights),y.push(I.numDirLights),y.push(I.numPointLights),y.push(I.numSpotLights),y.push(I.numSpotLightMaps),y.push(I.numHemiLights),y.push(I.numRectAreaLights),y.push(I.numSunLightShadows),y.push(I.numDirLightShadows),y.push(I.numPointLightShadows),y.push(I.numSpotLightShadows),y.push(I.numSpotLightShadowsWithMaps),y.push(I.numLightProbes),y.push(I.shadowMapType),y.push(I.toneMapping),y.push(I.numClippingPlanes),y.push(I.numClipIntersection),y.push(I.depthPacking)}function R(y,I){a.disableAll(),I.instancing&&a.enable(0),I.instancingColor&&a.enable(1),I.instancingMorph&&a.enable(2),I.matcap&&a.enable(3),I.envMap&&a.enable(4),I.normalMapObjectSpace&&a.enable(5),I.normalMapTangentSpace&&a.enable(6),I.clearcoat&&a.enable(7),I.iridescence&&a.enable(8),I.alphaTest&&a.enable(9),I.vertexColors&&a.enable(10),I.vertexAlphas&&a.enable(11),I.vertexUv1s&&a.enable(12),I.vertexUv2s&&a.enable(13),I.vertexUv3s&&a.enable(14),I.vertexTangents&&a.enable(15),I.anisotropy&&a.enable(16),I.alphaHash&&a.enable(17),I.batching&&a.enable(18),I.dispersion&&a.enable(19),I.retroreflection&&a.enable(24),I.batchingColor&&a.enable(20),I.gradientMap&&a.enable(21),I.packedNormalMap&&a.enable(22),I.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),I.fog&&a.enable(0),I.useFog&&a.enable(1),I.flatShading&&a.enable(2),I.logarithmicDepthBuffer&&a.enable(3),I.reversedDepthBuffer&&a.enable(4),I.skinning&&a.enable(5),I.morphTargets&&a.enable(6),I.morphNormals&&a.enable(7),I.morphColors&&a.enable(8),I.premultipliedAlpha&&a.enable(9),I.shadowMapEnabled&&a.enable(10),I.doubleSided&&a.enable(11),I.flipSided&&a.enable(12),I.useDepthPacking&&a.enable(13),I.dithering&&a.enable(14),I.transmission&&a.enable(15),I.sheen&&a.enable(16),I.opaque&&a.enable(17),I.pointsUvs&&a.enable(18),I.decodeVideoTexture&&a.enable(19),I.decodeVideoTextureEmissive&&a.enable(20),I.alphaToCoverage&&a.enable(21),I.numLightProbeGrids>0&&a.enable(22),I.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function T(y){let I=p[y.type],F;if(I){let V=In[I];F=Jh.clone(V.uniforms)}else F=y.uniforms;return F}function v(y,I){let F=d.get(I);return F!==void 0?++F.usedTimes:(F=new h0(i,I,y,s),l.push(F),d.set(I,F)),F}function E(y){if(--y.usedTimes===0){let I=l.indexOf(y);l[I]=l[l.length-1],l.pop(),d.delete(y.cacheKey),y.destroy()}}function A(y){o.remove(y)}function D(){o.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:T,acquireProgram:v,releaseProgram:E,releaseShaderCache:A,programs:l,dispose:D}}function p0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function m0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function gu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function _u(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,x,M,m,f){let R=i[t];return R===void 0?(R={id:h.id,object:h,geometry:p,material:x,materialVariant:a(h),groupOrder:M,renderOrder:h.renderOrder,z:m,group:f},i[t]=R):(R.id=h.id,R.object=h,R.geometry=p,R.material=x,R.materialVariant=a(h),R.groupOrder=M,R.renderOrder=h.renderOrder,R.z=m,R.group=f),t++,R}function c(h,p,x,M,m,f,R){R.reversedDepth===!0&&(m=-m);let T=o(h,p,x,M,m,f);x.transmission>0?n.push(T):x.transparent===!0?s.push(T):e.push(T)}function l(h,p,x,M,m,f){let R=o(h,p,x,M,m,f);x.transmission>0?n.unshift(R):x.transparent===!0?s.unshift(R):e.unshift(R)}function d(h,p){e.length>1&&e.sort(h||m0),n.length>1&&n.sort(p||gu),s.length>1&&s.sort(p||gu)}function u(){for(let h=t,p=i.length;h<p;h++){let x=i[h];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:u,sort:d}}function g0(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new _u,i.set(n,[a])):s>=r.length?(a=new _u,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function _0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new G,color:new Gt};break;case"SpotLight":e={position:new G,direction:new G,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new G,halfWidth:new G,halfHeight:new G};break}return i[t.id]=e,e}}}function x0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var y0=0;function v0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function M0(i){let t=new _0,e=x0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new G);let s=new G,r=new ve,a=new ve;function o(l){let d=0,u=0,h=0;for(let W=0;W<9;W++)n.probe[W].set(0,0,0);let p=0,x=0,M=0,m=0,f=0,R=0,T=0,v=0,E=0,A=0,D=0,y=0,I=0,F=0;l.sort(v0);for(let W=0,X=l.length;W<X;W++){let k=l[W],q=k.color,Q=k.intensity,Z=k.distance,ot=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===ui?ot=k.shadow.map.texture:ot=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)d+=q.r*Q,u+=q.g*Q,h+=q.b*Q;else if(k.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(k.sh.coefficients[K],Q);F++}else if(k.isSunLight){let K=t.get(k);if(K.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let st=k.shadow,lt=e.get(k);lt.shadowIntensity=st.intensity,lt.shadowBias=st.bias,lt.shadowNormalBias=st.normalBias,lt.shadowRadius=st.radius,lt.shadowMapSize.copy(st.mapSize).multiply(st.getFrameExtents()),n.sunShadow[x]=lt,n.sunShadowMap[x]=ot;let Dt=st.getViewportCount();for(let Ct=0;Ct<Dt;Ct++)n.sunShadowMatrix[M+Ct]=st.getMatrix(Ct),n.sunShadowCascade[M+Ct]=st._cascadeData[Ct];M+=Dt,x++}n.sun[p]=K,p++}else if(k.isDirectionalLight){let K=t.get(k);if(K.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let st=k.shadow,lt=e.get(k);lt.shadowIntensity=st.intensity,lt.shadowBias=st.bias,lt.shadowNormalBias=st.normalBias,lt.shadowRadius=st.radius,lt.shadowMapSize=st.mapSize,n.directionalShadow[m]=lt,n.directionalShadowMap[m]=ot,n.directionalShadowMatrix[m]=k.shadow.matrix,E++}n.directional[m]=K,m++}else if(k.isSpotLight){let K=t.get(k);K.position.setFromMatrixPosition(k.matrixWorld),K.color.copy(q).multiplyScalar(Q),K.distance=Z,K.coneCos=Math.cos(k.angle),K.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),K.decay=k.decay,n.spot[R]=K;let st=k.shadow;if(k.map&&(n.spotLightMap[y]=k.map,y++,st.updateMatrices(k),k.castShadow&&I++),n.spotLightMatrix[R]=st.matrix,k.castShadow){let lt=e.get(k);lt.shadowIntensity=st.intensity,lt.shadowBias=st.bias,lt.shadowNormalBias=st.normalBias,lt.shadowRadius=st.radius,lt.shadowMapSize=st.mapSize,n.spotShadow[R]=lt,n.spotShadowMap[R]=ot,D++}R++}else if(k.isRectAreaLight){let K=t.get(k);K.color.copy(q).multiplyScalar(Q),K.halfWidth.set(k.width*.5,0,0),K.halfHeight.set(0,k.height*.5,0),n.rectArea[T]=K,T++}else if(k.isPointLight){let K=t.get(k);if(K.color.copy(k.color).multiplyScalar(k.intensity),K.distance=k.distance,K.decay=k.decay,k.castShadow){let st=k.shadow,lt=e.get(k);lt.shadowIntensity=st.intensity,lt.shadowBias=st.bias,lt.shadowNormalBias=st.normalBias,lt.shadowRadius=st.radius,lt.shadowMapSize=st.mapSize,lt.shadowCameraNear=st.camera.near,lt.shadowCameraFar=st.camera.far,n.pointShadow[f]=lt,n.pointShadowMap[f]=ot,n.pointShadowMatrix[f]=k.shadow.matrix,A++}n.point[f]=K,f++}else if(k.isHemisphereLight){let K=t.get(k);K.skyColor.copy(k.color).multiplyScalar(Q),K.groundColor.copy(k.groundColor).multiplyScalar(Q),n.hemi[v]=K,v++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=h;let V=n.hash;(V.sunLength!==p||V.directionalLength!==m||V.pointLength!==f||V.spotLength!==R||V.rectAreaLength!==T||V.hemiLength!==v||V.numSunShadows!==x||V.numDirectionalShadows!==E||V.numPointShadows!==A||V.numSpotShadows!==D||V.numSpotMaps!==y||V.numLightProbes!==F)&&(n.sun.length=p,n.directional.length=m,n.spot.length=R,n.rectArea.length=T,n.point.length=f,n.hemi.length=v,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=D,n.spotShadowMap.length=D,n.spotLightMatrix.length=D+y-I,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=F,V.sunLength=p,V.directionalLength=m,V.pointLength=f,V.spotLength=R,V.rectAreaLength=T,V.hemiLength=v,V.numSunShadows=x,V.numDirectionalShadows=E,V.numPointShadows=A,V.numSpotShadows=D,V.numSpotMaps=y,V.numLightProbes=F,n.version=y0++)}function c(l,d){let u=0,h=0,p=0,x=0,M=0,m=0,f=d.matrixWorldInverse;for(let R=0,T=l.length;R<T;R++){let v=l[R];if(v.isSunLight){let E=n.sun[u];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(f),u++}else if(v.isDirectionalLight){let E=n.directional[h];E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),h++}else if(v.isSpotLight){let E=n.spot[x];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),x++}else if(v.isRectAreaLight){let E=n.rectArea[M];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(f),a.identity(),r.copy(v.matrixWorld),r.premultiply(f),a.extractRotation(r),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),M++}else if(v.isPointLight){let E=n.point[p];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(f),p++}else if(v.isHemisphereLight){let E=n.hemi[m];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(f),m++}}}return{setup:o,setupView:c,state:n}}function xu(i){let t=new M0(i),e=[],n=[],s=[];function r(h){u.camera=h,e.length=0,n.length=0,s.length=0}function a(h){e.push(h)}function o(h){n.push(h)}function c(h){s.push(h)}function l(){t.setup(e)}function d(h){t.setupView(e,h)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function S0(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new xu(i),t.set(s,[o])):r>=a.length?(o=new xu(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var b0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,w0=`uniform sampler2D shadow_pass;
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
}`,E0=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],T0=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],yu=new ve,nr=new G,Jl=new G;function A0(i,t,e){let n=new Os,s=new qt,r=new qt,a=new Me,o=new la,c=new ca,l={},d=e.maxTextureSize,u={[oi]:qe,[qe]:oi,[rn]:rn},h=new ke({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qt},radius:{value:4}},vertexShader:b0,fragmentShader:w0}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let x=new Xe;x.setAttribute("position",new Ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Ee(x,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qs;let f=this.type;this.render=function(A,D,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===fh&&(Ft("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=qs);let I=i.getRenderTarget(),F=i.getActiveCubeFace(),V=i.getActiveMipmapLevel(),W=i.state;W.setBlending(Cn),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let X=f!==this.type;X&&D.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(q=>q.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,q=A.length;k<q;k++){let Q=A[k],Z=Q.shadow;if(Z===void 0){Ft("WebGLShadowMap:",Q,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let ot=Z.getFrameExtents();s.multiply(ot),r.copy(Z.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/ot.x),s.x=r.x*ot.x,Z.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/ot.y),s.y=r.y*ot.y,Z.mapSize.y=r.y));let K=i.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=K,Z.map===null||X===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===is){if(Q.isPointLight){Ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new Ye(s.x,s.y,{format:ui,type:_n,minFilter:Ae,magFilter:Ae,generateMipmaps:!1}),Z.map.texture.name=Q.name+".shadowMap",Z.map.depthTexture=new ii(s.x,s.y,gn),Z.map.depthTexture.name=Q.name+".shadowMapDepth",Z.map.depthTexture.format=wn,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=De,Z.map.depthTexture.magFilter=De}else Q.isPointLight?(Z.map=new po(s.x),Z.map.depthTexture=new aa(s.x,mn)):(Z.map=new Ye(s.x,s.y),Z.map.depthTexture=new ii(s.x,s.y,mn)),Z.map.depthTexture.name=Q.name+".shadowMap",Z.map.depthTexture.format=wn,this.type===qs?(Z.map.depthTexture.compareFunction=K?co:lo,Z.map.depthTexture.minFilter=Ae,Z.map.depthTexture.magFilter=Ae):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=De,Z.map.depthTexture.magFilter=De);Z.camera.updateProjectionMatrix()}Z.map.isWebGLCubeRenderTarget!==!0&&(Z.map.width!==s.x||Z.map.height!==s.y)&&Z.map.setSize(s.x,s.y);let st=Z.map.isWebGLCubeRenderTarget?6:Z.getViewportCount();Q.isPointLight!==!0&&Z.updateMatrices(Q,y);for(let lt=0;lt<st;lt++){let Dt=Z.getCamera(lt);if(Q.isPointLight){let Ct=Z.camera,le=Z.matrix,Yt=Q.distance||Ct.far;Yt!==Ct.far&&(Ct.far=Yt,Ct.updateProjectionMatrix()),nr.setFromMatrixPosition(Q.matrixWorld),Ct.position.copy(nr),Jl.copy(Ct.position),Jl.add(E0[lt]),Ct.up.copy(T0[lt]),Ct.lookAt(Jl),Ct.updateMatrixWorld(),le.makeTranslation(-nr.x,-nr.y,-nr.z),yu.multiplyMatrices(Ct.projectionMatrix,Ct.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(yu,Ct.coordinateSystem,Ct.reversedDepth)}if(Z.map.isWebGLCubeRenderTarget)i.setRenderTarget(Z.map,lt),i.clear();else{lt===0&&(i.setRenderTarget(Z.map),i.clear());let Ct=Z.getViewport(lt);a.set(r.x*Ct.x,r.y*Ct.y,r.x*Ct.z,r.y*Ct.w),W.viewport(a)}n=Z.getFrustum(lt),v(D,y,Dt,Q,this.type)}Z.isPointLightShadow!==!0&&this.type===is&&R(Z,y),Z.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(I,F,V)};function R(A,D){let y=t.update(M);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null?A.mapPass=new Ye(s.x,s.y,{format:ui,type:_n}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),h.uniforms.shadow_pass.value=A.map.depthTexture,h.uniforms.resolution.value.set(A.map.width,A.map.height),h.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(D,null,y,h,M,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value.set(A.map.width,A.map.height),p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(D,null,y,p,M,null)}function T(A,D,y,I){let F=null,V=y.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(V!==void 0)F=V;else if(F=y.isPointLight===!0?c:o,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let W=F.uuid,X=D.uuid,k=l[W];k===void 0&&(k={},l[W]=k);let q=k[X];q===void 0&&(q=F.clone(),k[X]=q,D.addEventListener("dispose",E)),F=q}if(F.visible=D.visible,F.wireframe=D.wireframe,I===is?F.side=D.shadowSide!==null?D.shadowSide:D.side:F.side=D.shadowSide!==null?D.shadowSide:u[D.side],F.alphaMap=D.alphaMap,F.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,F.map=D.map,F.clipShadows=D.clipShadows,F.clippingPlanes=D.clippingPlanes,F.clipIntersection=D.clipIntersection,F.displacementMap=D.displacementMap,F.displacementScale=D.displacementScale,F.displacementBias=D.displacementBias,F.wireframeLinewidth=D.wireframeLinewidth,F.linewidth=D.linewidth,y.isPointLight===!0&&F.isMeshDistanceMaterial===!0){let W=i.properties.get(F);W.light=y}return F}function v(A,D,y,I,F){if(A.visible===!1)return;if(A.layers.test(D.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&F===is)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,A.matrixWorld);let X=t.update(A),k=A.material;if(Array.isArray(k)){let q=X.groups;for(let Q=0,Z=q.length;Q<Z;Q++){let ot=q[Q],K=k[ot.materialIndex];if(K&&K.visible){let st=T(A,K,I,F);A.onBeforeShadow(i,A,D,y,X,st,ot),i.renderBufferDirect(y,null,X,st,A,ot),A.onAfterShadow(i,A,D,y,X,st,ot)}}}else if(k.visible){let q=T(A,k,I,F);A.onBeforeShadow(i,A,D,y,X,q,null),i.renderBufferDirect(y,null,X,q,A,null),A.onAfterShadow(i,A,D,y,X,q,null)}}let W=A.children;for(let X=0,k=W.length;X<k;X++)v(W[X],D,y,I,F)}function E(A){A.target.removeEventListener("dispose",E);for(let y in l){let I=l[y],F=A.target.uuid;F in I&&(I[F].dispose(),delete I[F])}}}function C0(i,t){function e(){let U=!1,_t=new Me,tt=null,dt=new Me(0,0,0,0);return{setMask:function(vt){tt!==vt&&!U&&(i.colorMask(vt,vt,vt,vt),tt=vt)},setLocked:function(vt){U=vt},setClear:function(vt,at,Pt,St,jt){jt===!0&&(vt*=St,at*=St,Pt*=St),_t.set(vt,at,Pt,St),dt.equals(_t)===!1&&(i.clearColor(vt,at,Pt,St),dt.copy(_t))},reset:function(){U=!1,tt=null,dt.set(-1,0,0,0)}}}function n(){let U=!1,_t=!1,tt=null,dt=null,vt=null;return{setReversed:function(at){if(_t!==at){let Pt=t.get("EXT_clip_control");at?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT),_t=at;let St=vt;vt=null,this.setClear(St)}},getReversed:function(){return _t},setTest:function(at){at?nt(i.DEPTH_TEST):Et(i.DEPTH_TEST)},setMask:function(at){tt!==at&&!U&&(i.depthMask(at),tt=at)},setFunc:function(at){if(_t&&(at=Yh[at]),dt!==at){switch(at){case Vr:i.depthFunc(i.NEVER);break;case Gr:i.depthFunc(i.ALWAYS);break;case Hr:i.depthFunc(i.LESS);break;case ji:i.depthFunc(i.LEQUAL);break;case Wr:i.depthFunc(i.EQUAL);break;case Xr:i.depthFunc(i.GEQUAL);break;case qr:i.depthFunc(i.GREATER);break;case Yr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}dt=at}},setLocked:function(at){U=at},setClear:function(at){vt!==at&&(vt=at,_t&&(at=1-at),i.clearDepth(at))},reset:function(){U=!1,tt=null,dt=null,vt=null,_t=!1}}}function s(){let U=!1,_t=null,tt=null,dt=null,vt=null,at=null,Pt=null,St=null,jt=null;return{setTest:function(ne){U||(ne?nt(i.STENCIL_TEST):Et(i.STENCIL_TEST))},setMask:function(ne){_t!==ne&&!U&&(i.stencilMask(ne),_t=ne)},setFunc:function(ne,$e,Fe){(tt!==ne||dt!==$e||vt!==Fe)&&(i.stencilFunc(ne,$e,Fe),tt=ne,dt=$e,vt=Fe)},setOp:function(ne,$e,Fe){(at!==ne||Pt!==$e||St!==Fe)&&(i.stencilOp(ne,$e,Fe),at=ne,Pt=$e,St=Fe)},setLocked:function(ne){U=ne},setClear:function(ne){jt!==ne&&(i.clearStencil(ne),jt=ne)},reset:function(){U=!1,_t=null,tt=null,dt=null,vt=null,at=null,Pt=null,St=null,jt=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap,d={},u={},h={},p=new WeakMap,x=[],M=null,m=!1,f=null,R=null,T=null,v=null,E=null,A=null,D=null,y=new Gt(0,0,0),I=0,F=!1,V=null,W=null,X=null,k=null,q=null,Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,ot=0,K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(K)[1]),Z=ot>=1):K.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),Z=ot>=2);let st=null,lt={},Dt=i.getParameter(i.SCISSOR_BOX),Ct=i.getParameter(i.VIEWPORT),le=new Me().fromArray(Dt),Yt=new Me().fromArray(Ct);function Kt(U,_t,tt,dt){let vt=new Uint8Array(4),at=i.createTexture();i.bindTexture(U,at),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pt=0;Pt<tt;Pt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(_t,0,i.RGBA,1,1,dt,0,i.RGBA,i.UNSIGNED_BYTE,vt):i.texImage2D(_t+Pt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,vt);return at}let $={};$[i.TEXTURE_2D]=Kt(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=Kt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=Kt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=Kt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),nt(i.DEPTH_TEST),a.setFunc(ji),Zt(!1),ce(ul),nt(i.CULL_FACE),te(Cn);function nt(U){d[U]!==!0&&(i.enable(U),d[U]=!0)}function Et(U){d[U]!==!1&&(i.disable(U),d[U]=!1)}function Bt(U,_t){return h[U]!==_t?(i.bindFramebuffer(U,_t),h[U]=_t,U===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=_t),U===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=_t),!0):!1}function bt(U,_t){let tt=x,dt=!1;if(U){tt=p.get(_t),tt===void 0&&(tt=[],p.set(_t,tt));let vt=U.textures;if(tt.length!==vt.length||tt[0]!==i.COLOR_ATTACHMENT0){for(let at=0,Pt=vt.length;at<Pt;at++)tt[at]=i.COLOR_ATTACHMENT0+at;tt.length=vt.length,dt=!0}}else tt[0]!==i.BACK&&(tt[0]=i.BACK,dt=!0);dt&&i.drawBuffers(tt)}function Ht(U){return M!==U?(i.useProgram(U),M=U,!0):!1}let ye={[Si]:i.FUNC_ADD,[mh]:i.FUNC_SUBTRACT,[gh]:i.FUNC_REVERSE_SUBTRACT};ye[_h]=i.MIN,ye[xh]=i.MAX;let Xt={[yh]:i.ZERO,[vh]:i.ONE,[Mh]:i.SRC_COLOR,[ml]:i.SRC_ALPHA,[Ah]:i.SRC_ALPHA_SATURATE,[Eh]:i.DST_COLOR,[bh]:i.DST_ALPHA,[Sh]:i.ONE_MINUS_SRC_COLOR,[gl]:i.ONE_MINUS_SRC_ALPHA,[Th]:i.ONE_MINUS_DST_COLOR,[wh]:i.ONE_MINUS_DST_ALPHA,[Ch]:i.CONSTANT_COLOR,[Rh]:i.ONE_MINUS_CONSTANT_COLOR,[Ih]:i.CONSTANT_ALPHA,[Ph]:i.ONE_MINUS_CONSTANT_ALPHA};function te(U,_t,tt,dt,vt,at,Pt,St,jt,ne){if(U===Cn){m===!0&&(Et(i.BLEND),m=!1);return}if(m===!1&&(nt(i.BLEND),m=!0),U!==ph){if(U!==f||ne!==F){if((R!==Si||E!==Si)&&(i.blendEquation(i.FUNC_ADD),R=Si,E=Si),ne)switch(U){case ss:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dl:i.blendFunc(i.ONE,i.ONE);break;case fl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ot("WebGLState: Invalid blending: ",U);break}else switch(U){case ss:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case fl:Ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pl:Ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ot("WebGLState: Invalid blending: ",U);break}T=null,v=null,A=null,D=null,y.set(0,0,0),I=0,f=U,F=ne}return}vt=vt||_t,at=at||tt,Pt=Pt||dt,(_t!==R||vt!==E)&&(i.blendEquationSeparate(ye[_t],ye[vt]),R=_t,E=vt),(tt!==T||dt!==v||at!==A||Pt!==D)&&(i.blendFuncSeparate(Xt[tt],Xt[dt],Xt[at],Xt[Pt]),T=tt,v=dt,A=at,D=Pt),(St.equals(y)===!1||jt!==I)&&(i.blendColor(St.r,St.g,St.b,jt),y.copy(St),I=jt),f=U,F=!1}function ae(U,_t){U.side===rn?Et(i.CULL_FACE):nt(i.CULL_FACE);let tt=U.side===qe;_t&&(tt=!tt),Zt(tt),U.blending===ss&&U.transparent===!1?te(Cn):te(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);let dt=U.stencilWrite;o.setTest(dt),dt&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),At(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?nt(i.SAMPLE_ALPHA_TO_COVERAGE):Et(i.SAMPLE_ALPHA_TO_COVERAGE)}function Zt(U){V!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),V=U)}function ce(U){U!==uh?(nt(i.CULL_FACE),U!==W&&(U===ul?i.cullFace(i.BACK):U===dh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Et(i.CULL_FACE),W=U}function _e(U){U!==X&&(Z&&i.lineWidth(U),X=U)}function At(U,_t,tt){U?(nt(i.POLYGON_OFFSET_FILL),(k!==_t||q!==tt)&&(k=_t,q=tt,a.getReversed()&&(_t=-_t),i.polygonOffset(_t,tt))):Et(i.POLYGON_OFFSET_FILL)}function Vt(U){U?nt(i.SCISSOR_TEST):Et(i.SCISSOR_TEST)}function pe(U){U===void 0&&(U=i.TEXTURE0+Q-1),st!==U&&(i.activeTexture(U),st=U)}function O(U,_t,tt){tt===void 0&&(st===null?tt=i.TEXTURE0+Q-1:tt=st);let dt=lt[tt];dt===void 0&&(dt={type:void 0,texture:void 0},lt[tt]=dt),(dt.type!==U||dt.texture!==_t)&&(st!==tt&&(i.activeTexture(tt),st=tt),i.bindTexture(U,_t||$[U]),dt.type=U,dt.texture=_t)}function be(){let U=lt[st];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function se(){try{i.compressedTexImage2D(...arguments)}catch(U){Ot("WebGLState:",U)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(U){Ot("WebGLState:",U)}}function _(){try{i.texSubImage2D(...arguments)}catch(U){Ot("WebGLState:",U)}}function z(){try{i.texSubImage3D(...arguments)}catch(U){Ot("WebGLState:",U)}}function H(){try{i.compressedTexSubImage2D(...arguments)}catch(U){Ot("WebGLState:",U)}}function J(){try{i.compressedTexSubImage3D(...arguments)}catch(U){Ot("WebGLState:",U)}}function ut(){try{i.texStorage2D(...arguments)}catch(U){Ot("WebGLState:",U)}}function ft(){try{i.texStorage3D(...arguments)}catch(U){Ot("WebGLState:",U)}}function j(){try{i.texImage2D(...arguments)}catch(U){Ot("WebGLState:",U)}}function it(){try{i.texImage3D(...arguments)}catch(U){Ot("WebGLState:",U)}}function mt(U){return u[U]!==void 0?u[U]:i.getParameter(U)}function Rt(U,_t){u[U]!==_t&&(i.pixelStorei(U,_t),u[U]=_t)}function gt(U){le.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),le.copy(U))}function pt(U){Yt.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Yt.copy(U))}function It(U,_t){let tt=l.get(_t);tt===void 0&&(tt=new WeakMap,l.set(_t,tt));let dt=tt.get(U);dt===void 0&&(dt=i.getUniformBlockIndex(_t,U.name),tt.set(U,dt))}function Nt(U,_t){let dt=l.get(_t).get(U);c.get(_t)!==dt&&(i.uniformBlockBinding(_t,dt,U.__bindingPointIndex),c.set(_t,dt))}function Ut(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},u={},st=null,lt={},h={},p=new WeakMap,x=[],M=null,m=!1,f=null,R=null,T=null,v=null,E=null,A=null,D=null,y=new Gt(0,0,0),I=0,F=!1,V=null,W=null,X=null,k=null,q=null,le.set(0,0,i.canvas.width,i.canvas.height),Yt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:nt,disable:Et,bindFramebuffer:Bt,drawBuffers:bt,useProgram:Ht,setBlending:te,setMaterial:ae,setFlipSided:Zt,setCullFace:ce,setLineWidth:_e,setPolygonOffset:At,setScissorTest:Vt,activeTexture:pe,bindTexture:O,unbindTexture:be,compressedTexImage2D:se,compressedTexImage3D:C,texImage2D:j,texImage3D:it,pixelStorei:Rt,getParameter:mt,updateUBOMapping:It,uniformBlockBinding:Nt,texStorage2D:ut,texStorage3D:ft,texSubImage2D:_,texSubImage3D:z,compressedTexSubImage2D:H,compressedTexSubImage3D:J,scissor:gt,viewport:pt,reset:Ut}}function R0(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new qt,d=new WeakMap,u=new Set,h,p=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(C,_){return x?new OffscreenCanvas(C,_):Cs("canvas")}function m(C,_,z){let H=1,J=se(C);if((J.width>z||J.height>z)&&(H=z/Math.max(J.width,J.height)),H<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ut=Math.floor(H*J.width),ft=Math.floor(H*J.height);h===void 0&&(h=M(ut,ft));let j=_?M(ut,ft):h;return j.width=ut,j.height=ft,j.getContext("2d").drawImage(C,0,0,ut,ft),Ft("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ut+"x"+ft+")."),j}else return"data"in C&&Ft("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function f(C){return C.generateMipmaps}function R(C){i.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(C,_,z,H,J,ut=!1){if(C!==null){if(i[C]!==void 0)return i[C];Ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ft;H&&(ft=t.get("EXT_texture_norm16"),ft||Ft("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=_;if(_===i.RED&&(z===i.FLOAT&&(j=i.R32F),z===i.HALF_FLOAT&&(j=i.R16F),z===i.UNSIGNED_BYTE&&(j=i.R8),z===i.UNSIGNED_SHORT&&ft&&(j=ft.R16_EXT),z===i.SHORT&&ft&&(j=ft.R16_SNORM_EXT)),_===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(j=i.R8UI),z===i.UNSIGNED_SHORT&&(j=i.R16UI),z===i.UNSIGNED_INT&&(j=i.R32UI),z===i.BYTE&&(j=i.R8I),z===i.SHORT&&(j=i.R16I),z===i.INT&&(j=i.R32I)),_===i.RG&&(z===i.FLOAT&&(j=i.RG32F),z===i.HALF_FLOAT&&(j=i.RG16F),z===i.UNSIGNED_BYTE&&(j=i.RG8),z===i.UNSIGNED_SHORT&&ft&&(j=ft.RG16_EXT),z===i.SHORT&&ft&&(j=ft.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(j=i.RG8UI),z===i.UNSIGNED_SHORT&&(j=i.RG16UI),z===i.UNSIGNED_INT&&(j=i.RG32UI),z===i.BYTE&&(j=i.RG8I),z===i.SHORT&&(j=i.RG16I),z===i.INT&&(j=i.RG32I)),_===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(j=i.RGB8UI),z===i.UNSIGNED_SHORT&&(j=i.RGB16UI),z===i.UNSIGNED_INT&&(j=i.RGB32UI),z===i.BYTE&&(j=i.RGB8I),z===i.SHORT&&(j=i.RGB16I),z===i.INT&&(j=i.RGB32I)),_===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),z===i.UNSIGNED_INT&&(j=i.RGBA32UI),z===i.BYTE&&(j=i.RGBA8I),z===i.SHORT&&(j=i.RGBA16I),z===i.INT&&(j=i.RGBA32I)),_===i.RGB&&(z===i.UNSIGNED_SHORT&&ft&&(j=ft.RGB16_EXT),z===i.SHORT&&ft&&(j=ft.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),_===i.RGBA){let it=ut?Ts:Jt.getTransfer(J);z===i.FLOAT&&(j=i.RGBA32F),z===i.HALF_FLOAT&&(j=i.RGBA16F),z===i.UNSIGNED_BYTE&&(j=it===oe?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&ft&&(j=ft.RGBA16_EXT),z===i.SHORT&&ft&&(j=ft.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function E(C,_){let z;return C?_===null||_===mn||_===as?z=i.DEPTH24_STENCIL8:_===gn?z=i.DEPTH32F_STENCIL8:_===rs&&(z=i.DEPTH24_STENCIL8,Ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===mn||_===as?z=i.DEPTH_COMPONENT24:_===gn?z=i.DEPTH_COMPONENT32F:_===rs&&(z=i.DEPTH_COMPONENT16),z}function A(C,_){return f(C)===!0||C.isFramebufferTexture&&C.minFilter!==De&&C.minFilter!==Ae?Math.log2(Math.max(_.width,_.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?_.mipmaps.length:1}function D(C){let _=C.target;_.removeEventListener("dispose",D),I(_),_.isVideoTexture&&d.delete(_),_.isHTMLTexture&&u.delete(_)}function y(C){let _=C.target;_.removeEventListener("dispose",y),V(_)}function I(C){let _=n.get(C);if(_.__webglInit===void 0)return;let z=C.source,H=p.get(z);if(H){let J=H[_.__cacheKey];J.usedTimes--,J.usedTimes===0&&F(C),Object.keys(H).length===0&&p.delete(z)}n.remove(C)}function F(C){let _=n.get(C);i.deleteTexture(_.__webglTexture);let z=C.source,H=p.get(z);delete H[_.__cacheKey],a.memory.textures--}function V(C){let _=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(_.__webglFramebuffer[H]))for(let J=0;J<_.__webglFramebuffer[H].length;J++)i.deleteFramebuffer(_.__webglFramebuffer[H][J]);else i.deleteFramebuffer(_.__webglFramebuffer[H]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[H])}else{if(Array.isArray(_.__webglFramebuffer))for(let H=0;H<_.__webglFramebuffer.length;H++)i.deleteFramebuffer(_.__webglFramebuffer[H]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let H=0;H<_.__webglColorRenderbuffer.length;H++)_.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[H]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let z=C.textures;for(let H=0,J=z.length;H<J;H++){let ut=n.get(z[H]);ut.__webglTexture&&(i.deleteTexture(ut.__webglTexture),a.memory.textures--),n.remove(z[H])}n.remove(C)}let W=0;function X(){W=0}function k(){return W}function q(C){W=C}function Q(){let C=W;return C>=s.maxTextures&&Ft("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),W+=1,C}function Z(C){let _=[];return _.push(C.wrapS),_.push(C.wrapT),_.push(C.wrapR||0),_.push(C.magFilter),_.push(C.minFilter),_.push(C.anisotropy),_.push(C.internalFormat),_.push(C.format),_.push(C.type),_.push(C.generateMipmaps),_.push(C.premultiplyAlpha),_.push(C.flipY),_.push(C.unpackAlignment),_.push(C.colorSpace),_.join()}function ot(C,_){let z=n.get(C);if(C.isVideoTexture&&O(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&z.__version!==C.version){let H=C.image;if(H===null)Ft("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Ft("WebGLRenderer: Texture marked for update but image is incomplete");else{Et(z,C,_);return}}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+_)}function K(C,_){let z=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){Et(z,C,_);return}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+_)}function st(C,_){let z=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){Et(z,C,_);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+_)}function lt(C,_){let z=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&z.__version!==C.version){Bt(z,C,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+_)}let Dt={[Zr]:i.REPEAT,[bn]:i.CLAMP_TO_EDGE,[$r]:i.MIRRORED_REPEAT},Ct={[De]:i.NEAREST,[Nh]:i.NEAREST_MIPMAP_NEAREST,[Zs]:i.NEAREST_MIPMAP_LINEAR,[Ae]:i.LINEAR,[Ea]:i.LINEAR_MIPMAP_NEAREST,[ci]:i.LINEAR_MIPMAP_LINEAR},le={[Bh]:i.NEVER,[Hh]:i.ALWAYS,[zh]:i.LESS,[lo]:i.LEQUAL,[kh]:i.EQUAL,[co]:i.GEQUAL,[Vh]:i.GREATER,[Gh]:i.NOTEQUAL};function Yt(C,_){if(_.type===gn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Ae||_.magFilter===Ea||_.magFilter===Zs||_.magFilter===ci||_.minFilter===Ae||_.minFilter===Ea||_.minFilter===Zs||_.minFilter===ci)&&Ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,Dt[_.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Dt[_.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Dt[_.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,Ct[_.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,Ct[_.minFilter]),_.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,le[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===De||_.minFilter!==Zs&&_.minFilter!==ci||_.type===gn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Kt(C,_){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,_.addEventListener("dispose",D));let H=_.source,J=p.get(H);J===void 0&&(J={},p.set(H,J));let ut=Z(_);if(ut!==C.__cacheKey){J[ut]===void 0&&(J[ut]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),J[ut].usedTimes++;let ft=J[C.__cacheKey];ft!==void 0&&(J[C.__cacheKey].usedTimes--,ft.usedTimes===0&&F(_)),C.__cacheKey=ut,C.__webglTexture=J[ut].texture}return z}function $(C,_,z){return Math.floor(Math.floor(C/z)/_)}function nt(C,_,z,H){let ut=C.updateRanges;if(ut.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,z,H,_.data);else{ut.sort((Rt,gt)=>Rt.start-gt.start);let ft=0;for(let Rt=1;Rt<ut.length;Rt++){let gt=ut[ft],pt=ut[Rt],It=gt.start+gt.count,Nt=$(pt.start,_.width,4),Ut=$(gt.start,_.width,4);pt.start<=It+1&&Nt===Ut&&$(pt.start+pt.count-1,_.width,4)===Nt?gt.count=Math.max(gt.count,pt.start+pt.count-gt.start):(++ft,ut[ft]=pt)}ut.length=ft+1;let j=e.getParameter(i.UNPACK_ROW_LENGTH),it=e.getParameter(i.UNPACK_SKIP_PIXELS),mt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Rt=0,gt=ut.length;Rt<gt;Rt++){let pt=ut[Rt],It=Math.floor(pt.start/4),Nt=Math.ceil(pt.count/4),Ut=It%_.width,U=Math.floor(It/_.width),_t=Nt,tt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Ut),e.pixelStorei(i.UNPACK_SKIP_ROWS,U),e.texSubImage2D(i.TEXTURE_2D,0,Ut,U,_t,tt,z,H,_.data)}C.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,j),e.pixelStorei(i.UNPACK_SKIP_PIXELS,it),e.pixelStorei(i.UNPACK_SKIP_ROWS,mt)}}function Et(C,_,z){let H=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(H=i.TEXTURE_3D);let J=Kt(C,_),ut=_.source;e.bindTexture(H,C.__webglTexture,i.TEXTURE0+z);let ft=n.get(ut);if(ut.version!==ft.__version||J===!0){if(e.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let tt=Jt.getPrimaries(Jt.workingColorSpace),dt=_.colorSpace===kn?null:Jt.getPrimaries(_.colorSpace),vt=_.colorSpace===kn||tt===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let it=m(_.image,!1,s.maxTextureSize);it=be(_,it);let mt=r.convert(_.format,_.colorSpace),Rt=r.convert(_.type),gt=v(_.internalFormat,mt,Rt,_.normalized,_.colorSpace,_.isVideoTexture);Yt(H,_);let pt,It=_.mipmaps,Nt=_.isVideoTexture!==!0,Ut=ft.__version===void 0||J===!0,U=ut.dataReady,_t=A(_,it);if(_.isDepthTexture)gt=E(_.format===hi,_.type),Ut&&(Nt?e.texStorage2D(i.TEXTURE_2D,1,gt,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,gt,it.width,it.height,0,mt,Rt,null));else if(_.isDataTexture)if(It.length>0){Nt&&Ut&&e.texStorage2D(i.TEXTURE_2D,_t,gt,It[0].width,It[0].height);for(let tt=0,dt=It.length;tt<dt;tt++)pt=It[tt],Nt?U&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,pt.width,pt.height,mt,Rt,pt.data):e.texImage2D(i.TEXTURE_2D,tt,gt,pt.width,pt.height,0,mt,Rt,pt.data);_.generateMipmaps=!1}else Nt?(Ut&&e.texStorage2D(i.TEXTURE_2D,_t,gt,it.width,it.height),U&&nt(_,it,mt,Rt)):e.texImage2D(i.TEXTURE_2D,0,gt,it.width,it.height,0,mt,Rt,it.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Nt&&Ut&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,gt,It[0].width,It[0].height,it.depth);for(let tt=0,dt=It.length;tt<dt;tt++)if(pt=It[tt],_.format!==an)if(mt!==null)if(Nt){if(U)if(_.layerUpdates.size>0){let vt=zl(pt.width,pt.height,_.format,_.type);for(let at of _.layerUpdates){let Pt=pt.data.subarray(at*vt/pt.data.BYTES_PER_ELEMENT,(at+1)*vt/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,at,pt.width,pt.height,1,mt,Pt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,pt.width,pt.height,it.depth,mt,pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,tt,gt,pt.width,pt.height,it.depth,0,pt.data,0,0);else Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,pt.width,pt.height,it.depth,mt,Rt,pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,tt,gt,pt.width,pt.height,it.depth,0,mt,Rt,pt.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Nt&&Ut&&e.texStorage2D(i.TEXTURE_2D,_t,gt,It[0].width,It[0].height);for(let tt=0,dt=It.length;tt<dt;tt++)pt=It[tt],_.format!==an?mt!==null?Nt?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,tt,0,0,pt.width,pt.height,mt,pt.data):e.compressedTexImage2D(i.TEXTURE_2D,tt,gt,pt.width,pt.height,0,pt.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?U&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,pt.width,pt.height,mt,Rt,pt.data):e.texImage2D(i.TEXTURE_2D,tt,gt,pt.width,pt.height,0,mt,Rt,pt.data)}else if(_.isDataArrayTexture)if(Nt){if(Ut&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,gt,it.width,it.height,it.depth),U)if(_.layerUpdates.size>0){let tt=zl(it.width,it.height,_.format,_.type);for(let dt of _.layerUpdates){let vt=it.data.subarray(dt*tt/it.data.BYTES_PER_ELEMENT,(dt+1)*tt/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,dt,it.width,it.height,1,mt,Rt,vt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,mt,Rt,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,gt,it.width,it.height,it.depth,0,mt,Rt,it.data);else if(_.isData3DTexture)Nt?(Ut&&e.texStorage3D(i.TEXTURE_3D,_t,gt,it.width,it.height,it.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,mt,Rt,it.data)):e.texImage3D(i.TEXTURE_3D,0,gt,it.width,it.height,it.depth,0,mt,Rt,it.data);else if(_.isFramebufferTexture){if(Ut)if(Nt)e.texStorage2D(i.TEXTURE_2D,_t,gt,it.width,it.height);else{let tt=it.width,dt=it.height;for(let vt=0;vt<_t;vt++)e.texImage2D(i.TEXTURE_2D,vt,gt,tt,dt,0,mt,Rt,null),tt>>=1,dt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let tt=i.canvas;if(tt.hasAttribute("layoutsubtree")||tt.setAttribute("layoutsubtree","true"),it.parentNode!==tt){tt.appendChild(it),u.add(_),tt.onpaint=dt=>{let vt=dt.changedElements;for(let at of u)vt.includes(at.image)&&(at.needsUpdate=!0)},tt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,it);else{let vt=i.RGBA,at=i.RGBA,Pt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,vt,at,Pt,it)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(It.length>0){if(Nt&&Ut){let tt=se(It[0]);e.texStorage2D(i.TEXTURE_2D,_t,gt,tt.width,tt.height)}for(let tt=0,dt=It.length;tt<dt;tt++)pt=It[tt],Nt?U&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,mt,Rt,pt):e.texImage2D(i.TEXTURE_2D,tt,gt,mt,Rt,pt);_.generateMipmaps=!1}else if(Nt){if(Ut){let tt=se(it);e.texStorage2D(i.TEXTURE_2D,_t,gt,tt.width,tt.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,Rt,it)}else e.texImage2D(i.TEXTURE_2D,0,gt,mt,Rt,it);f(_)&&R(H),ft.__version=ut.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function Bt(C,_,z){if(_.image.length!==6)return;let H=Kt(C,_),J=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+z);let ut=n.get(J);if(J.version!==ut.__version||H===!0){e.activeTexture(i.TEXTURE0+z);let ft=Jt.getPrimaries(Jt.workingColorSpace),j=_.colorSpace===kn?null:Jt.getPrimaries(_.colorSpace),it=_.colorSpace===kn||ft===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let mt=_.isCompressedTexture||_.image[0].isCompressedTexture,Rt=_.image[0]&&_.image[0].isDataTexture,gt=[];for(let at=0;at<6;at++)!mt&&!Rt?gt[at]=m(_.image[at],!0,s.maxCubemapSize):gt[at]=Rt?_.image[at].image:_.image[at],gt[at]=be(_,gt[at]);let pt=gt[0],It=r.convert(_.format,_.colorSpace),Nt=r.convert(_.type),Ut=v(_.internalFormat,It,Nt,_.normalized,_.colorSpace),U=_.isVideoTexture!==!0,_t=ut.__version===void 0||H===!0,tt=J.dataReady,dt=A(_,pt);Yt(i.TEXTURE_CUBE_MAP,_);let vt;if(mt){U&&_t&&e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,Ut,pt.width,pt.height);for(let at=0;at<6;at++){vt=gt[at].mipmaps;for(let Pt=0;Pt<vt.length;Pt++){let St=vt[Pt];_.format!==an?It!==null?U?tt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Pt,0,0,St.width,St.height,It,St.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Pt,Ut,St.width,St.height,0,St.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Pt,0,0,St.width,St.height,It,Nt,St.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Pt,Ut,St.width,St.height,0,It,Nt,St.data)}}}else{if(vt=_.mipmaps,U&&_t){vt.length>0&&dt++;let at=se(gt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,Ut,at.width,at.height)}for(let at=0;at<6;at++)if(Rt){U?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,gt[at].width,gt[at].height,It,Nt,gt[at].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Ut,gt[at].width,gt[at].height,0,It,Nt,gt[at].data);for(let Pt=0;Pt<vt.length;Pt++){let jt=vt[Pt].image[at].image;U?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Pt+1,0,0,jt.width,jt.height,It,Nt,jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Pt+1,Ut,jt.width,jt.height,0,It,Nt,jt.data)}}else{U?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,It,Nt,gt[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Ut,It,Nt,gt[at]);for(let Pt=0;Pt<vt.length;Pt++){let St=vt[Pt];U?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Pt+1,0,0,It,Nt,St.image[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Pt+1,Ut,It,Nt,St.image[at])}}}f(_)&&R(i.TEXTURE_CUBE_MAP),ut.__version=J.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function bt(C,_,z,H,J,ut){let ft=r.convert(z.format,z.colorSpace),j=r.convert(z.type),it=v(z.internalFormat,ft,j,z.normalized,z.colorSpace),mt=n.get(_),Rt=n.get(z);if(Rt.__renderTarget=_,!mt.__hasExternalTextures){let gt=Math.max(1,_.width>>ut),pt=Math.max(1,_.height>>ut);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,ut,it,gt,pt,_.depth,0,ft,j,null):e.texImage2D(J,ut,it,gt,pt,0,ft,j,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),pe(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,J,Rt.__webglTexture,0,Vt(_)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,J,Rt.__webglTexture,ut),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ht(C,_,z){if(i.bindRenderbuffer(i.RENDERBUFFER,C),_.depthBuffer){let H=_.depthTexture,J=H&&H.isDepthTexture?H.type:null,ut=E(_.stencilBuffer,J),ft=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;pe(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Vt(_),ut,_.width,_.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt(_),ut,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ut,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ft,i.RENDERBUFFER,C)}else{let H=_.textures;for(let J=0;J<H.length;J++){let ut=H[J],ft=r.convert(ut.format,ut.colorSpace),j=r.convert(ut.type),it=v(ut.internalFormat,ft,j,ut.normalized,ut.colorSpace);pe(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Vt(_),it,_.width,_.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt(_),it,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,it,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ye(C,_,z){let H=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=n.get(_.depthTexture);if(J.__renderTarget=_,(!J.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),H){if(J.__webglInit===void 0&&(J.__webglInit=!0,_.depthTexture.addEventListener("dispose",D)),J.__webglTexture===void 0){J.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Yt(i.TEXTURE_CUBE_MAP,_.depthTexture);let mt=r.convert(_.depthTexture.format),Rt=r.convert(_.depthTexture.type),gt;_.depthTexture.format===wn?gt=i.DEPTH_COMPONENT24:_.depthTexture.format===hi&&(gt=i.DEPTH24_STENCIL8);for(let pt=0;pt<6;pt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,gt,_.width,_.height,0,mt,Rt,null)}}else ot(_.depthTexture,0);let ut=J.__webglTexture,ft=Vt(_),j=H?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,it=_.depthTexture.format===hi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===wn)pe(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,j,ut,0,ft):i.framebufferTexture2D(i.FRAMEBUFFER,it,j,ut,0);else if(_.depthTexture.format===hi)pe(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,j,ut,0,ft):i.framebufferTexture2D(i.FRAMEBUFFER,it,j,ut,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Xt(C){let _=n.get(C),z=C.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==C.depthTexture){let H=C.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),H){let J=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,H.removeEventListener("dispose",J)};H.addEventListener("dispose",J),_.__depthDisposeCallback=J}_.__boundDepthTexture=H}if(C.depthTexture&&!_.__autoAllocateDepthBuffer)if(z)for(let H=0;H<6;H++)ye(_.__webglFramebuffer[H],C,H);else{let H=C.texture.mipmaps;H&&H.length>0?ye(_.__webglFramebuffer[0],C,0):ye(_.__webglFramebuffer,C,0)}else if(z){_.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[H]),_.__webglDepthbuffer[H]===void 0)_.__webglDepthbuffer[H]=i.createRenderbuffer(),Ht(_.__webglDepthbuffer[H],C,!1);else{let J=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=_.__webglDepthbuffer[H];i.bindRenderbuffer(i.RENDERBUFFER,ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,ut)}}else{let H=C.texture.mipmaps;if(H&&H.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Ht(_.__webglDepthbuffer,C,!1);else{let J=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,ut)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function te(C,_,z){let H=n.get(C);_!==void 0&&bt(H.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Xt(C)}function ae(C){let _=C.texture,z=n.get(C),H=n.get(_);C.addEventListener("dispose",y);let J=C.textures,ut=C.isWebGLCubeRenderTarget===!0,ft=J.length>1;if(ft||(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=_.version,a.memory.textures++),ut){z.__webglFramebuffer=[];for(let j=0;j<6;j++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[j]=[];for(let it=0;it<_.mipmaps.length;it++)z.__webglFramebuffer[j][it]=i.createFramebuffer()}else z.__webglFramebuffer[j]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let j=0;j<_.mipmaps.length;j++)z.__webglFramebuffer[j]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(ft)for(let j=0,it=J.length;j<it;j++){let mt=n.get(J[j]);mt.__webglTexture===void 0&&(mt.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&pe(C)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let j=0;j<J.length;j++){let it=J[j];z.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[j]);let mt=r.convert(it.format,it.colorSpace),Rt=r.convert(it.type),gt=v(it.internalFormat,mt,Rt,it.normalized,it.colorSpace,C.isXRRenderTarget===!0),pt=Vt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,pt,gt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,z.__webglColorRenderbuffer[j])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Ht(z.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ut){e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),Yt(i.TEXTURE_CUBE_MAP,_);for(let j=0;j<6;j++)if(_.mipmaps&&_.mipmaps.length>0)for(let it=0;it<_.mipmaps.length;it++)bt(z.__webglFramebuffer[j][it],C,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,it);else bt(z.__webglFramebuffer[j],C,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);f(_)&&R(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ft){for(let j=0,it=J.length;j<it;j++){let mt=J[j],Rt=n.get(mt),gt=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(gt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(gt,Rt.__webglTexture),Yt(gt,mt),bt(z.__webglFramebuffer,C,mt,i.COLOR_ATTACHMENT0+j,gt,0),f(mt)&&R(gt)}e.unbindTexture()}else{let j=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(j=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(j,H.__webglTexture),Yt(j,_),_.mipmaps&&_.mipmaps.length>0)for(let it=0;it<_.mipmaps.length;it++)bt(z.__webglFramebuffer[it],C,_,i.COLOR_ATTACHMENT0,j,it);else bt(z.__webglFramebuffer,C,_,i.COLOR_ATTACHMENT0,j,0);f(_)&&R(j),e.unbindTexture()}C.depthBuffer&&Xt(C)}function Zt(C){let _=C.textures;for(let z=0,H=_.length;z<H;z++){let J=_[z];if(f(J)){let ut=T(C),ft=n.get(J).__webglTexture;e.bindTexture(ut,ft),R(ut),e.unbindTexture()}}}let ce=[],_e=[];function At(C){if(C.samples>0){if(pe(C)===!1){let _=C.textures,z=C.width,H=C.height,J=i.COLOR_BUFFER_BIT,ut=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=n.get(C),j=_.length>1;if(j)for(let mt=0;mt<_.length;mt++)e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer);let it=C.texture.mipmaps;it&&it.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let mt=0;mt<_.length;mt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),j){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ft.__webglColorRenderbuffer[mt]);let Rt=n.get(_[mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Rt,0)}i.blitFramebuffer(0,0,z,H,0,0,z,H,J,i.NEAREST),c===!0&&(ce.length=0,_e.length=0,ce.push(i.COLOR_ATTACHMENT0+mt),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(ce.push(ut),_e.push(ut),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,_e)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ce))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),j)for(let mt=0;mt<_.length;mt++){e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,ft.__webglColorRenderbuffer[mt]);let Rt=n.get(_[mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,Rt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&c){let _=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Vt(C){return Math.min(s.maxSamples,C.samples)}function pe(C){let _=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function O(C){let _=a.render.frame;d.get(C)!==_&&(d.set(C,_),C.update())}function be(C,_){let z=C.colorSpace,H=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==Es&&z!==kn&&(Jt.getTransfer(z)===oe?(H!==an||J!==tn)&&Ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ot("WebGLTextures: Unsupported texture color space:",z)),_}function se(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=Q,this.resetTextureUnits=X,this.getTextureUnits=k,this.setTextureUnits=q,this.setTexture2D=ot,this.setTexture2DArray=K,this.setTexture3D=st,this.setTextureCube=lt,this.rebindTextures=te,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=Xt,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=pe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function I0(i,t){function e(n,s=kn){let r,a=Jt.getTransfer(s);if(n===tn)return i.UNSIGNED_BYTE;if(n===Aa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ca)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Cl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Rl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Tl)return i.BYTE;if(n===Al)return i.SHORT;if(n===rs)return i.UNSIGNED_SHORT;if(n===Ta)return i.INT;if(n===mn)return i.UNSIGNED_INT;if(n===gn)return i.FLOAT;if(n===_n)return i.HALF_FLOAT;if(n===Il)return i.ALPHA;if(n===Pl)return i.RGB;if(n===an)return i.RGBA;if(n===wn)return i.DEPTH_COMPONENT;if(n===hi)return i.DEPTH_STENCIL;if(n===Ll)return i.RED;if(n===Ra)return i.RED_INTEGER;if(n===ui)return i.RG;if(n===Ia)return i.RG_INTEGER;if(n===Pa)return i.RGBA_INTEGER;if(n===$s||n===Js||n===Ks||n===js)if(a===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===$s)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===$s)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Js)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ks)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===js)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===La||n===Da||n===Na||n===Ua)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===La)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Da)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Na)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ua)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fa||n===Oa||n===Ba||n===za||n===ka||n===Qs||n===Va)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Fa||n===Oa)return a===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ba)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===za)return r.COMPRESSED_R11_EAC;if(n===ka)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Qs)return r.COMPRESSED_RG11_EAC;if(n===Va)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ga||n===Ha||n===Wa||n===Xa||n===qa||n===Ya||n===Za||n===$a||n===Ja||n===Ka||n===ja||n===Qa||n===to||n===eo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ga)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ha)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wa)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xa)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qa)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ya)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Za)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$a)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ja)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ka)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ja)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Qa)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===to)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===eo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===no||n===io||n===so)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===no)return a===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===io)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===so)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ro||n===ao||n===tr||n===oo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ro)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ao)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===tr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===oo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===as?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var P0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,L0=`
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

}`,sc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ks(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ke({vertexShader:P0,fragmentShader:L0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ee(new Gs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},rc=class extends En{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,d=null,u=null,h=null,p=null,x=null,M=typeof XRWebGLBinding<"u",m=new sc,f={},R=e.getContextAttributes(),T=null,v=null,E=[],A=[],D=new qt,y=null,I=null,F=new ze;F.viewport=new Me;let V=new ze;V.viewport=new Me;let W=[F,V],X=new Ma,k=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let nt=E[$];return nt===void 0&&(nt=new es,E[$]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function($){let nt=E[$];return nt===void 0&&(nt=new es,E[$]=nt),nt.getGripSpace()},this.getHand=function($){let nt=E[$];return nt===void 0&&(nt=new es,E[$]=nt),nt.getHandSpace()};function Q($){let nt=A.indexOf($.inputSource);if(nt===-1)return;let Et=E[nt];Et!==void 0&&(Et.update($.inputSource,$.frame,l||a),Et.dispatchEvent({type:$.type,data:$.inputSource}))}function Z(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",ot);for(let $=0;$<E.length;$++){let nt=A[$];nt!==null&&(A[$]=null,E[$].disconnect(nt))}k=null,q=null,m.reset();for(let $ in f)delete f[$];if(t.setRenderTarget(T),p=null,h=null,u=null,s=null,v=null,Kt.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(D.width,D.height,!1),I!==null){let $=I.camera;$.fov=I.fov,$.zoom=I.zoom,$.updateProjectionMatrix(),I=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&Ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&Ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return u===null&&M&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(T=t.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",ot),R.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(D),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,Bt=null,bt=null;R.depth&&(bt=R.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Et=R.stencil?hi:wn,Bt=R.stencil?as:mn);let Ht={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:r};u=this.getBinding(),h=u.createProjectionLayer(Ht),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),v=new Ye(h.textureWidth,h.textureHeight,{format:an,type:tn,depthTexture:new ii(h.textureWidth,h.textureHeight,Bt,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:R.stencil,colorSpace:t.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let Et={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,Et),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Ye(p.framebufferWidth,p.framebufferHeight,{format:an,type:tn,colorSpace:t.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Kt.setContext(s),Kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ot($){for(let nt=0;nt<$.removed.length;nt++){let Et=$.removed[nt],Bt=A.indexOf(Et);Bt>=0&&(A[Bt]=null,E[Bt].disconnect(Et))}for(let nt=0;nt<$.added.length;nt++){let Et=$.added[nt],Bt=A.indexOf(Et);if(Bt===-1){for(let Ht=0;Ht<E.length;Ht++)if(Ht>=A.length){A.push(Et),Bt=Ht;break}else if(A[Ht]===null){A[Ht]=Et,Bt=Ht;break}if(Bt===-1)break}let bt=E[Bt];bt&&bt.connect(Et)}}let K=new G,st=new G;function lt($,nt,Et){K.setFromMatrixPosition(nt.matrixWorld),st.setFromMatrixPosition(Et.matrixWorld);let Bt=K.distanceTo(st),bt=nt.projectionMatrix.elements,Ht=Et.projectionMatrix.elements,ye=bt[14]/(bt[10]-1),Xt=bt[14]/(bt[10]+1),te=(bt[9]+1)/bt[5],ae=(bt[9]-1)/bt[5],Zt=(bt[8]-1)/bt[0],ce=(Ht[8]+1)/Ht[0],_e=ye*Zt,At=ye*ce,Vt=Bt/(-Zt+ce),pe=Vt*-Zt;if(nt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(pe),$.translateZ(Vt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),bt[10]===-1)$.projectionMatrix.copy(nt.projectionMatrix),$.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{let O=ye+Vt,be=Xt+Vt,se=_e-pe,C=At+(Bt-pe),_=te*Xt/be*O,z=ae*Xt/be*O;$.projectionMatrix.makePerspective(se,C,_,z,O,be),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Dt($,nt){nt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(nt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let nt=$.near,Et=$.far;m.texture!==null&&(m.depthNear>0&&(nt=m.depthNear),m.depthFar>0&&(Et=m.depthFar)),X.near=V.near=F.near=nt,X.far=V.far=F.far=Et,(k!==X.near||q!==X.far)&&(s.updateRenderState({depthNear:X.near,depthFar:X.far}),k=X.near,q=X.far),X.layers.mask=$.layers.mask|6,F.layers.mask=X.layers.mask&-5,V.layers.mask=X.layers.mask&-3;let Bt=$.parent,bt=X.cameras;Dt(X,Bt);for(let Ht=0;Ht<bt.length;Ht++)Dt(bt[Ht],Bt);bt.length===2?lt(X,F,V):X.projectionMatrix.copy(F.projectionMatrix),I===null&&$.isPerspectiveCamera&&(I={camera:$,fov:$.fov,zoom:$.zoom}),Ct($,X,Bt)};function Ct($,nt,Et){Et===null?$.matrix.copy(nt.matrixWorld):($.matrix.copy(Et.matrixWorld),$.matrix.invert(),$.matrix.multiply(nt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(nt.projectionMatrix),$.projectionMatrixInverse.copy(nt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Kr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function($){c=$,h!==null&&(h.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(X)},this.getCameraTexture=function($){return f[$]};let le=null;function Yt($,nt){if(d=nt.getViewerPose(l||a),x=nt,d!==null){let Et=d.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let Bt=!1;Et.length!==X.cameras.length&&(X.cameras.length=0,Bt=!0);for(let Xt=0;Xt<Et.length;Xt++){let te=Et[Xt],ae=null;if(p!==null)ae=p.getViewport(te);else{let ce=u.getViewSubImage(h,te);ae=ce.viewport,Xt===0&&(t.setRenderTargetTextures(v,ce.colorTexture,ce.depthStencilTexture),t.setRenderTarget(v))}let Zt=W[Xt];Zt===void 0&&(Zt=new ze,Zt.layers.enable(Xt),Zt.viewport=new Me,W[Xt]=Zt),Zt.matrix.fromArray(te.transform.matrix),Zt.matrix.decompose(Zt.position,Zt.quaternion,Zt.scale),Zt.projectionMatrix.fromArray(te.projectionMatrix),Zt.projectionMatrixInverse.copy(Zt.projectionMatrix).invert(),Zt.viewport.set(ae.x,ae.y,ae.width,ae.height),Xt===0&&(X.matrix.copy(Zt.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),Bt===!0&&X.cameras.push(Zt)}let bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){u=n.getBinding();let Xt=u.getDepthInformation(Et[0]);Xt&&Xt.isValid&&Xt.texture&&m.init(Xt,s.renderState)}if(bt&&bt.includes("camera-access")&&M){t.state.unbindTexture(),u=n.getBinding();for(let Xt=0;Xt<Et.length;Xt++){let te=Et[Xt].camera;if(te){let ae=f[te];ae||(ae=new ks,f[te]=ae);let Zt=u.getCameraImage(te);ae.sourceTexture=Zt}}}}for(let Et=0;Et<E.length;Et++){let Bt=A[Et],bt=E[Et];Bt!==null&&bt!==void 0&&bt.update(Bt,nt,l||a)}le&&le($,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),x=null}let Kt=new vu;Kt.setAnimationLoop(Yt),this.setAnimationLoop=function($){le=$},this.dispose=function(){}}},D0=new ve,Tu=new kt;Tu.set(-1,0,0,0,1,0,0,0,1);function N0(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Fl(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,R,T,v){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),d(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),x(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),M(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,R,T):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===qe&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===qe&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let R=t.get(f),T=R.envMap,v=R.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(D0.makeRotationFromEuler(v)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Tu),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,R,T){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*R,m.scale.value=T*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function d(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,R){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===qe&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=R.texture,m.transmissionSamplerSize.value.set(R.width,R.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,f){f.matcap&&(m.matcap.value=f.matcap)}function M(m,f){let R=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(R.matrixWorld),m.nearDistance.value=R.shadow.camera.near,m.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function U0(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,E){let A=E.program;n.uniformBlockBinding(v,A)}function l(v,E){let A=s[v.id];A===void 0&&(m(v),A=d(v),s[v.id]=A,v.addEventListener("dispose",R));let D=E.program;n.updateUBOMapping(v,D);let y=t.render.frame;r[v.id]!==y&&(h(v),r[v.id]=y)}function d(v){let E=u();v.__bindingPointIndex=E;let A=i.createBuffer(),D=v.__size,y=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,D,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,A),A}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){let E=s[v.id],A=v.uniforms,D=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let y=0,I=A.length;y<I;y++){let F=A[y];if(Array.isArray(F))for(let V=0,W=F.length;V<W;V++)p(F[V],y,V,D);else p(F,y,0,D)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(v,E,A,D){if(M(v,E,A,D)===!0){let y=v.__offset,I=v.value;if(Array.isArray(I)){let F=0;for(let V=0;V<I.length;V++){let W=I[V],X=f(W);x(W,v.__data,F),typeof W!="number"&&typeof W!="boolean"&&!W.isMatrix3&&!ArrayBuffer.isView(W)&&(F+=X.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(I,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,v.__data)}}function x(v,E,A){typeof v=="number"||typeof v=="boolean"?E[0]=v:v.isMatrix3?(E[0]=v.elements[0],E[1]=v.elements[1],E[2]=v.elements[2],E[3]=0,E[4]=v.elements[3],E[5]=v.elements[4],E[6]=v.elements[5],E[7]=0,E[8]=v.elements[6],E[9]=v.elements[7],E[10]=v.elements[8],E[11]=0):ArrayBuffer.isView(v)?E.set(new v.constructor(v.buffer,v.byteOffset,E.length)):v.toArray(E,A)}function M(v,E,A,D){let y=v.value,I=E+"_"+A;if(D[I]===void 0)return typeof y=="number"||typeof y=="boolean"?D[I]=y:ArrayBuffer.isView(y)?D[I]=y.slice():D[I]=y.clone(),!0;{let F=D[I];if(typeof y=="number"||typeof y=="boolean"){if(F!==y)return D[I]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(F.equals(y)===!1)return F.copy(y),!0}}return!1}function m(v){let E=v.uniforms,A=0,D=16;for(let I=0,F=E.length;I<F;I++){let V=Array.isArray(E[I])?E[I]:[E[I]];for(let W=0,X=V.length;W<X;W++){let k=V[W],q=Array.isArray(k.value)?k.value:[k.value];for(let Q=0,Z=q.length;Q<Z;Q++){let ot=q[Q],K=f(ot),st=A%D,lt=st%K.boundary,Dt=st+lt;A+=lt,Dt!==0&&D-Dt<K.storage&&(A+=D-Dt),k.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=A,A+=K.storage}}}let y=A%D;return y>0&&(A+=D-y),v.__size=A,v.__cache={},this}function f(v){let E={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(E.boundary=4,E.storage=4):v.isVector2?(E.boundary=8,E.storage=8):v.isVector3||v.isColor?(E.boundary=16,E.storage=12):v.isVector4?(E.boundary=16,E.storage=16):v.isMatrix3?(E.boundary=48,E.storage=48):v.isMatrix4?(E.boundary=64,E.storage=64):v.isTexture?Ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(E.boundary=16,E.storage=v.byteLength):Ft("WebGLRenderer: Unsupported uniform value type.",v),E}function R(v){let E=v.target;E.removeEventListener("dispose",R);let A=a.indexOf(E.__bindingPointIndex);a.splice(A,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function T(){for(let v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:c,update:l,dispose:T}}var F0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Rn=null;function O0(){return Rn===null&&(Rn=new na(F0,16,16,ui,_n),Rn.name="DFG_LUT",Rn.minFilter=Ae,Rn.magFilter=Ae,Rn.wrapS=bn,Rn.wrapT=bn,Rn.generateMipmaps=!1,Rn.needsUpdate=!0),Rn}var mo=class{constructor(t={}){let{canvas:e=Wh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1,outputBufferType:p=tn}=t;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;let M=p,m=new Set([Pa,Ia,Ra]),f=new Set([tn,mn,rs,as,Aa,Ca]),R=new Uint32Array(4),T=new Int32Array(4),v=new G,E=null,A=null,D=[],y=[],I=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let F=this,V=!1,W=null,X=null,k=null,q=null;this._outputColorSpace=Le;let Q=0,Z=0,ot=null,K=-1,st=null,lt=new Me,Dt=new Me,Ct=null,le=new Gt(0),Yt=0,Kt=e.width,$=e.height,nt=1,Et=null,Bt=null,bt=new Me(0,0,Kt,$),Ht=new Me(0,0,Kt,$),ye=!1,Xt=new Os,te=!1,ae=!1,Zt=new ve,ce=new G,_e=new Me,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Vt=!1;function pe(){return ot===null?nt:1}let O=n;function be(g,b){return e.getContext(g,b)}let se,C,_,z,H,J,ut,ft,j,it,mt,Rt,gt,pt,It,Nt,Ut,U,_t,tt,dt,vt,at;try{let g={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",jt,!1),e.addEventListener("webglcontextrestored",ne,!1),e.addEventListener("webglcontextcreationerror",$e,!1),O===null){let b="webgl2";if(O=be(b,g),O===null)throw be(b)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Pt()}catch(g){throw e.removeEventListener("webglcontextlost",jt,!1),e.removeEventListener("webglcontextrestored",ne,!1),e.removeEventListener("webglcontextcreationerror",$e,!1),Ot("WebGLRenderer: "+g.message),g}function Pt(){se=new Wm(O),se.init(),dt=new I0(O,se),C=new Nm(O,se,t,dt),_=new C0(O,se),C.reversedDepthBuffer&&h&&_.buffers.depth.setReversed(!0),X=O.createFramebuffer(),k=O.createFramebuffer(),q=O.createFramebuffer(),z=new Ym(O),H=new p0,J=new R0(O,se,_,H,C,dt,z),ut=new Hm(F),ft=new Zd(O),vt=new Lm(O,ft),j=new Xm(O,ft,z,vt),it=new $m(O,j,ft,vt,z),U=new Zm(O,C,J),It=new Um(H),mt=new f0(F,ut,se,C,vt,It),Rt=new N0(F,H),gt=new g0,pt=new S0(se),Ut=new Pm(F,ut,_,it,x,c),Nt=new A0(F,it,C),at=new U0(O,z,C,_),_t=new Dm(O,se,z),tt=new qm(O,se,z),z.programs=mt.programs,F.capabilities=C,F.extensions=se,F.properties=H,F.renderLists=gt,F.shadowMap=Nt,F.state=_,F.info=z}M!==tn&&(I=new Km(M,e.width,e.height,o,s,r));let St=new rc(F,O);this.xr=St,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let g=se.get("WEBGL_lose_context");g&&g.loseContext()},this.forceContextRestore=function(){let g=se.get("WEBGL_lose_context");g&&g.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(g){g!==void 0&&(nt=g,this.setSize(Kt,$,!1))},this.getSize=function(g){return g.set(Kt,$)},this.setSize=function(g,b,P=!0){if(St.isPresenting){Ft("WebGLRenderer: Can't change size while VR device is presenting.");return}Kt=g,$=b,e.width=Math.floor(g*nt),e.height=Math.floor(b*nt),P===!0&&(e.style.width=g+"px",e.style.height=b+"px"),I!==null&&I.setSize(e.width,e.height),this.setViewport(0,0,g,b)},this.getDrawingBufferSize=function(g){return g.set(Kt*nt,$*nt).floor()},this.setDrawingBufferSize=function(g,b,P){Kt=g,$=b,nt=P,e.width=Math.floor(g*P),e.height=Math.floor(b*P),this.setViewport(0,0,g,b)},this.setEffects=function(g){if(M===tn){Ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(g){for(let b=0;b<g.length;b++)if(g[b].isOutputPass===!0){Ft("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(g||[])},this.getCurrentViewport=function(g){return g.copy(lt)},this.getViewport=function(g){return g.copy(bt)},this.setViewport=function(g,b,P,N){g.isVector4?bt.set(g.x,g.y,g.z,g.w):bt.set(g,b,P,N),_.viewport(lt.copy(bt).multiplyScalar(nt).round())},this.getScissor=function(g){return g.copy(Ht)},this.setScissor=function(g,b,P,N){g.isVector4?Ht.set(g.x,g.y,g.z,g.w):Ht.set(g,b,P,N),_.scissor(Dt.copy(Ht).multiplyScalar(nt).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(g){_.setScissorTest(ye=g)},this.setOpaqueSort=function(g){Et=g},this.setTransparentSort=function(g){Bt=g},this.getClearColor=function(g){return g.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor(...arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha(...arguments)},this.clear=function(g=!0,b=!0,P=!0){let N=0;if(g){let L=!1;if(ot!==null){let rt=ot.texture.format;L=m.has(rt)}if(L){let rt=ot.texture.type,ct=f.has(rt),ht=Ut.getClearColor(),yt=Ut.getClearAlpha(),xt=ht.r,Lt=ht.g,zt=ht.b;ct?(R[0]=xt,R[1]=Lt,R[2]=zt,R[3]=yt,O.clearBufferuiv(O.COLOR,0,R)):(T[0]=xt,T[1]=Lt,T[2]=zt,T[3]=yt,O.clearBufferiv(O.COLOR,0,T))}else N|=O.COLOR_BUFFER_BIT}b&&(N|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),P&&(N|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N!==0&&O.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(g){g.setRenderer(this),W=g},this.dispose=function(){e.removeEventListener("webglcontextlost",jt,!1),e.removeEventListener("webglcontextrestored",ne,!1),e.removeEventListener("webglcontextcreationerror",$e,!1),Ut.dispose(),gt.dispose(),pt.dispose(),H.dispose(),ut.dispose(),it.dispose(),vt.dispose(),at.dispose(),mt.dispose(),St.dispose(),St.removeEventListener("sessionstart",fs),St.removeEventListener("sessionend",ps),en.stop()};function jt(g){g.preventDefault(),Rs("WebGLRenderer: Context Lost."),V=!0}function ne(){Rs("WebGLRenderer: Context Restored."),V=!1;let g=z.autoReset,b=Nt.enabled,P=Nt.autoUpdate,N=Nt.needsUpdate,L=Nt.type;Pt(),z.autoReset=g,Nt.enabled=b,Nt.autoUpdate=P,Nt.needsUpdate=N,Nt.type=L}function $e(g){Ot("WebGLRenderer: A WebGL context could not be created. Reason: ",g.statusMessage)}function Fe(g){let b=g.target;b.removeEventListener("dispose",Fe),fi(b)}function fi(g){Lo(g),H.remove(g)}function Lo(g){let b=H.get(g).programs;b!==void 0&&(b.forEach(function(P){mt.releaseProgram(P)}),g.isShaderMaterial&&mt.releaseShaderCache(g))}this.renderBufferDirect=function(g,b,P,N,L,rt){b===null&&(b=At);let ct=L.isMesh&&L.matrixWorld.determinantAffine()<0,ht=Do(g,b,P,N,L);_.setMaterial(N,ct);let yt=P.index,xt=1;if(N.wireframe===!0){if(yt=j.getWireframeAttribute(P),yt===void 0)return;xt=2}let Lt=P.drawRange,zt=P.attributes.position,Tt=Lt.start*xt,ee=(Lt.start+Lt.count)*xt;rt!==null&&(Tt=Math.max(Tt,rt.start*xt),ee=Math.min(ee,(rt.start+rt.count)*xt)),yt!==null?(Tt=Math.max(Tt,0),ee=Math.min(ee,yt.count)):zt!=null&&(Tt=Math.max(Tt,0),ee=Math.min(ee,zt.count));let Se=ee-Tt;if(Se<0||Se===1/0)return;vt.setup(L,N,ht,P,yt);let he,re=_t;if(yt!==null&&(he=ft.get(yt),re=tt,re.setIndex(he)),L.isMesh)N.wireframe===!0?(_.setLineWidth(N.wireframeLinewidth*pe()),re.setMode(O.LINES)):re.setMode(O.TRIANGLES);else if(L.isLine){let xe=N.linewidth;xe===void 0&&(xe=1),_.setLineWidth(xe*pe()),L.isLineSegments?re.setMode(O.LINES):L.isLineLoop?re.setMode(O.LINE_LOOP):re.setMode(O.LINE_STRIP)}else L.isPoints?re.setMode(O.POINTS):L.isSprite&&re.setMode(O.TRIANGLES);if(L.isBatchedMesh)if(se.get("WEBGL_multi_draw"))re.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{let xe=L._multiDrawStarts,wt=L._multiDrawCounts,Ge=L._multiDrawCount,ie=yt?ft.get(yt).bytesPerElement:1,nn=H.get(N).currentProgram.getUniforms();for(let yn=0;yn<Ge;yn++)nn.setValue(O,"_gl_DrawID",yn),re.render(xe[yn]/ie,wt[yn])}else if(L.isInstancedMesh)re.renderInstances(Tt,Se,L.count);else if(P.isInstancedBufferGeometry){let xe=P._maxInstanceCount!==void 0?P._maxInstanceCount:1/0,wt=Math.min(P.instanceCount,xe);re.renderInstances(Tt,Se,wt)}else re.render(Tt,Se)};function ds(g,b,P,N){W!==null&&g.isNodeMaterial&&W.setObject(N,g),te===!0&&It.setState(g,P,!1),g.transparent===!0&&g.side===rn&&g.forceSinglePass===!1?(g.side=qe,g.needsUpdate=!0,Pi(g,b,N),g.side=oi,g.needsUpdate=!0,Pi(g,b,N),g.side=rn):Pi(g,b,N)}this.compile=function(g,b,P=null){P===null&&(P=g),W!==null&&W.renderStart(g,b,P),A=pt.get(P),A.init(b),y.push(A),P.traverseVisible(function(L){L.isLight&&L.layers.test(b.layers)&&(A.pushLight(L),L.castShadow&&A.pushShadow(L))}),g!==P&&g.traverseVisible(function(L){L.isLight&&L.layers.test(b.layers)&&(A.pushLight(L),L.castShadow&&A.pushShadow(L))}),A.setupLights(),W!==null&&W.updateLights(A.state.lightsArray),ae=this.localClippingEnabled,te=It.init(this.clippingPlanes,ae),te===!0&&It.setGlobalState(this.clippingPlanes,b),W!==null&&Nt.render(A.state.shadowsArray,P,b);let N=new Set;return g.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;let rt=L.material;if(rt)if(Array.isArray(rt))for(let ct=0;ct<rt.length;ct++){let ht=rt[ct];ds(ht,P,b,L),N.add(ht)}else ds(rt,P,b,L),N.add(rt)}),A=y.pop(),W!==null&&W.renderEnd(),N},this.compileAsync=function(g,b,P=null){let N=this.compile(g,b,P);return new Promise(L=>{function rt(){if(N.forEach(function(ct){let yt=H.get(ct).currentProgram;(yt===void 0||yt.isReady())&&N.delete(ct)}),N.size===0){L(g);return}setTimeout(rt,10)}se.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let Ri=null;function Ln(g){Ri&&Ri(g)}function fs(){en.stop()}function ps(){en.start()}let en=new vu;en.setAnimationLoop(Ln),typeof self<"u"&&en.setContext(self),this.setAnimationLoop=function(g){Ri=g,St.setAnimationLoop(g),g===null?en.stop():en.start()},St.addEventListener("sessionstart",fs),St.addEventListener("sessionend",ps),this.render=function(g,b){if(b!==void 0&&b.isCamera!==!0){Ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;W!==null&&W.renderStart(g,b);let P=St.enabled===!0&&St.isPresenting===!0,N=I!==null&&(ot===null||P)&&I.begin(F,ot);if(g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),b.parent===null&&b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),St.enabled===!0&&St.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(St.cameraAutoUpdate===!0&&St.updateCamera(b),b=St.getCamera()),g.isScene===!0&&g.onBeforeRender(F,g,b,ot),A=pt.get(g,y.length),A.init(b),A.state.textureUnits=J.getTextureUnits(),y.push(A),Zt.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse),Xt.setFromProjectionMatrix(Zt,un,b.reversedDepth),ae=this.localClippingEnabled,te=It.init(this.clippingPlanes,ae),E=gt.get(g,D.length),E.init(),D.push(E),St.enabled===!0&&St.isPresenting===!0){let ct=F.xr.getDepthSensingMesh();ct!==null&&pi(ct,b,-1/0,F.sortObjects)}pi(g,b,0,F.sortObjects),E.finish(),W!==null&&W.updateLights(A.state.lightsArray),F.sortObjects===!0&&E.sort(Et,Bt),Vt=St.enabled===!1||St.isPresenting===!1||St.hasDepthSensing()===!1,Vt&&Ut.addToRenderList(E,g),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),te===!0&&It.beginShadows();let L=A.state.shadowsArray;if(Nt.render(L,g,b),te===!0&&It.endShadows(),(N&&I.hasRenderPass())===!1){let ct=E.opaque,ht=E.transmissive;if(A.setupLights(),b.isArrayCamera){let yt=b.cameras;if(ht.length>0)for(let xt=0,Lt=yt.length;xt<Lt;xt++){let zt=yt[xt];or(ct,ht,g,zt)}Vt&&Ut.render(g);for(let xt=0,Lt=yt.length;xt<Lt;xt++){let zt=yt[xt];ar(E,g,zt,zt.viewport)}}else ht.length>0&&or(ct,ht,g,b),Vt&&Ut.render(g),ar(E,g,b)}ot!==null&&Z===0&&(J.updateMultisampleRenderTarget(ot),J.updateRenderTargetMipmap(ot)),N&&I.end(F),g.isScene===!0&&g.onAfterRender(F,g,b),vt.resetDefaultState(),K=-1,st=null,y.pop(),y.length>0?(A=y[y.length-1],J.setTextureUnits(A.state.textureUnits),te===!0&&It.setGlobalState(F.clippingPlanes,A.state.camera)):A=null,D.pop(),D.length>0?E=D[D.length-1]:E=null,W!==null&&W.renderEnd()};function pi(g,b,P,N){if(g.visible===!1)return;if(g.layers.test(b.layers)){if(g.isGroup)P=g.renderOrder;else if(g.isLOD)g.autoUpdate===!0&&g.update(b);else if(g.isLightProbeGrid)A.pushLightProbeGrid(g);else if(g.isLight)A.pushLight(g),g.castShadow&&A.pushShadow(g);else if(g.isSprite){if(!g.frustumCulled||g.intersectsFrustum(Xt)){N&&_e.setFromMatrixPosition(g.matrixWorld).applyMatrix4(Zt);let ct=it.update(g),ht=g.material;ht.visible&&E.push(g,ct,ht,P,_e.z,null,b)}}else if((g.isMesh||g.isLine||g.isPoints)&&(!g.frustumCulled||g.intersectsFrustum(Xt))){let ct=it.update(g),ht=g.material;if(N&&(g.boundingSphere!==void 0?(g.boundingSphere===null&&g.computeBoundingSphere(),_e.copy(g.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),_e.copy(ct.boundingSphere.center)),_e.applyMatrix4(g.matrixWorld).applyMatrix4(Zt)),Array.isArray(ht)){let yt=ct.groups;for(let xt=0,Lt=yt.length;xt<Lt;xt++){let zt=yt[xt],Tt=ht[zt.materialIndex];Tt&&Tt.visible&&E.push(g,ct,Tt,P,_e.z,zt,b)}}else ht.visible&&E.push(g,ct,ht,P,_e.z,null,b)}}let rt=g.children;for(let ct=0,ht=rt.length;ct<ht;ct++)pi(rt[ct],b,P,N)}function ar(g,b,P,N){let{opaque:L,transmissive:rt,transparent:ct}=g;A.setupLightsView(P),te===!0&&It.setGlobalState(F.clippingPlanes,P),N&&_.viewport(lt.copy(N)),L.length>0&&Ii(L,b,P),rt.length>0&&Ii(rt,b,P),ct.length>0&&Ii(ct,b,P),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function or(g,b,P,N){if((P.isScene===!0?P.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[N.id]===void 0){let Tt=se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[N.id]=new Ye(1,1,{generateMipmaps:!0,type:Tt?_n:tn,minFilter:ci,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Jt.workingColorSpace})}let rt=A.state.transmissionRenderTarget[N.id],ct=N.viewport||lt;rt.setSize(ct.z*F.transmissionResolutionScale,ct.w*F.transmissionResolutionScale);let ht=F.getRenderTarget(),yt=F.getActiveCubeFace(),xt=F.getActiveMipmapLevel();F.setRenderTarget(rt),F.getClearColor(le),Yt=F.getClearAlpha(),Yt<1&&F.setClearColor(16777215,.5),F.clear(),Vt&&Ut.render(P);let Lt=F.toneMapping;F.toneMapping=pn;let zt=N.viewport;if(N.viewport!==void 0&&(N.viewport=void 0),A.setupLightsView(N),te===!0&&It.setGlobalState(F.clippingPlanes,N),Ii(g,P,N),J.updateMultisampleRenderTarget(rt),J.updateRenderTargetMipmap(rt),se.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let ee=0,Se=b.length;ee<Se;ee++){let he=b[ee],{object:re,geometry:xe,material:wt,group:Ge}=he;if(wt.side===rn&&re.layers.test(N.layers)){let ie=wt.side;wt.side=qe,wt.needsUpdate=!0,ms(re,P,N,xe,wt,Ge),wt.side=ie,wt.needsUpdate=!0,Tt=!0}}Tt===!0&&(J.updateMultisampleRenderTarget(rt),J.updateRenderTargetMipmap(rt))}F.setRenderTarget(ht,yt,xt),F.setClearColor(le,Yt),zt!==void 0&&(N.viewport=zt),F.toneMapping=Lt}function Ii(g,b,P){let N=b.isScene===!0?b.overrideMaterial:null;for(let L=0,rt=g.length;L<rt;L++){let ct=g[L],{object:ht,geometry:yt,group:xt}=ct,Lt=ct.material;Lt.allowOverride===!0&&N!==null&&(Lt=N),ht.layers.test(P.layers)&&ms(ht,b,P,yt,Lt,xt)}}function ms(g,b,P,N,L,rt){W!==null&&L.isNodeMaterial&&W.setObject(g,L),g.onBeforeRender(F,b,P,N,L,rt),g.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,g.matrixWorld),g.normalMatrix.getNormalMatrix(g.modelViewMatrix),L.onBeforeRender(F,b,P,N,g,rt),L.transparent===!0&&L.side===rn&&L.forceSinglePass===!1?(L.side=qe,L.needsUpdate=!0,F.renderBufferDirect(P,b,N,L,g,rt),L.side=oi,L.needsUpdate=!0,F.renderBufferDirect(P,b,N,L,g,rt),L.side=rn):F.renderBufferDirect(P,b,N,L,g,rt),g.onAfterRender(F,b,P,N,L,rt)}function Pi(g,b,P){b.isScene!==!0&&(b=At);let N=H.get(g),L=A.state.lights,rt=A.state.shadowsArray,ct=L.state.version,ht=mt.getParameters(g,L.state,rt,b,P,A.state.lightProbeGridArray),yt=mt.getProgramCacheKey(ht),xt=N.programs;N.environment=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?b.environment:null,N.fog=b.fog;let Lt=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap;N.envMap=ut.get(g.envMap||N.environment,Lt),N.envMapRotation=N.environment!==null&&g.envMap===null?b.environmentRotation:g.envMapRotation,xt===void 0&&(g.addEventListener("dispose",Fe),xt=new Map,N.programs=xt);let zt=xt.get(yt);if(zt!==void 0){if(N.currentProgram===zt&&N.lightsStateVersion===ct)return cr(g,ht),zt}else ht.uniforms=mt.getUniforms(g),W!==null&&g.isNodeMaterial&&W.build(g,P,ht),g.onBeforeCompile(ht,F),zt=mt.acquireProgram(ht,yt),xt.set(yt,zt),N.uniforms=ht.uniforms;let Tt=N.uniforms;return(!g.isShaderMaterial&&!g.isRawShaderMaterial||g.clipping===!0)&&(Tt.clippingPlanes=It.uniform),cr(g,ht),N.needsLights=B(g),N.lightsStateVersion=ct,N.needsLights&&(Tt.ambientLightColor.value=L.state.ambient,Tt.lightProbe.value=L.state.probe,Tt.sunLights.value=L.state.sun,Tt.sunLightShadows.value=L.state.sunShadow,Tt.directionalLights.value=L.state.directional,Tt.directionalLightShadows.value=L.state.directionalShadow,Tt.spotLights.value=L.state.spot,Tt.spotLightShadows.value=L.state.spotShadow,Tt.rectAreaLights.value=L.state.rectArea,Tt.ltc_1.value=L.state.rectAreaLTC1,Tt.ltc_2.value=L.state.rectAreaLTC2,Tt.pointLights.value=L.state.point,Tt.pointLightShadows.value=L.state.pointShadow,Tt.hemisphereLights.value=L.state.hemi,Tt.sunShadowMatrix.value=L.state.sunShadowMatrix,Tt.sunShadowCascade.value=L.state.sunShadowCascade,Tt.directionalShadowMatrix.value=L.state.directionalShadowMatrix,Tt.spotLightMatrix.value=L.state.spotLightMatrix,Tt.spotLightMap.value=L.state.spotLightMap,Tt.pointShadowMatrix.value=L.state.pointShadowMatrix),N.lightProbeGrid=A.state.lightProbeGridArray.length>0,N.currentProgram=zt,N.uniformsList=null,zt}function lr(g){if(g.uniformsList===null){let b=g.currentProgram.getUniforms();g.uniformsList=cs.seqWithValue(b.seq,g.uniforms)}return g.uniformsList}function cr(g,b){let P=H.get(g);P.outputColorSpace=b.outputColorSpace,P.batching=b.batching,P.batchingColor=b.batchingColor,P.instancing=b.instancing,P.instancingColor=b.instancingColor,P.instancingMorph=b.instancingMorph,P.skinning=b.skinning,P.morphTargets=b.morphTargets,P.morphNormals=b.morphNormals,P.morphColors=b.morphColors,P.morphTargetsCount=b.morphTargetsCount,P.numClippingPlanes=b.numClippingPlanes,P.numIntersection=b.numClipIntersection,P.vertexAlphas=b.vertexAlphas,P.vertexTangents=b.vertexTangents,P.toneMapping=b.toneMapping}function hr(g,b){if(g.length===0)return null;if(g.length===1)return g[0].texture!==null?g[0]:null;v.setFromMatrixPosition(b.matrixWorld);for(let P=0,N=g.length;P<N;P++){let L=g[P];if(L.texture!==null&&L.boundingBox.containsPoint(v))return L}return null}function Do(g,b,P,N,L){b.isScene!==!0&&(b=At),J.resetTextureUnits();let rt=b.fog,ct=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?b.environment:null,ht=ot===null?F.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Jt.workingColorSpace,yt=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap,xt=ut.get(N.envMap||ct,yt),Lt=N.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,zt=!!P.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),Tt=!!P.morphAttributes.position,ee=!!P.morphAttributes.normal,Se=!!P.morphAttributes.color,he=pn;N.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(he=F.toneMapping);let re=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,xe=re!==void 0?re.length:0,wt=H.get(N),Ge=A.state.lights;if(te===!0&&(ae===!0||g!==st)){let fe=g===st&&N.id===K;It.setState(N,g,fe)}let ie=!1;N.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==Ge.state.version||wt.outputColorSpace!==ht||L.isBatchedMesh&&wt.batching===!1||!L.isBatchedMesh&&wt.batching===!0||L.isBatchedMesh&&wt.batchingColor===!0&&L._colorsTexture===null||L.isBatchedMesh&&wt.batchingColor===!1&&L._colorsTexture!==null||L.isInstancedMesh&&wt.instancing===!1||!L.isInstancedMesh&&wt.instancing===!0||L.isSkinnedMesh&&wt.skinning===!1||!L.isSkinnedMesh&&wt.skinning===!0||L.isInstancedMesh&&wt.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&wt.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&wt.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&wt.instancingMorph===!1&&L.morphTexture!==null||wt.envMap!==xt||N.fog===!0&&wt.fog!==rt||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==It.numPlanes||wt.numIntersection!==It.numIntersection)||wt.vertexAlphas!==Lt||wt.vertexTangents!==zt||wt.morphTargets!==Tt||wt.morphNormals!==ee||wt.morphColors!==Se||wt.toneMapping!==he||wt.morphTargetsCount!==xe||!!wt.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(ie=!0):(ie=!0,wt.__version=N.version);let nn=wt.currentProgram;ie===!0&&(nn=Pi(N,b,L),W&&N.isNodeMaterial&&W.onUpdateProgram(N,nn,wt));let yn=!1,Xn=!1,Li=!1,ue=nn.getUniforms(),we=wt.uniforms;if(_.useProgram(nn.program)&&(yn=!0,Xn=!0,Li=!0),N.id!==K&&(K=N.id,Xn=!0),wt.needsLights){let fe=hr(A.state.lightProbeGridArray,L);wt.lightProbeGrid!==fe&&(wt.lightProbeGrid=fe,Xn=!0)}if(yn||st!==g){_.buffers.depth.getReversed()&&g.reversedDepth!==!0&&(g._reversedDepth=!0,g.updateProjectionMatrix()),ue.setValue(O,"projectionMatrix",g.projectionMatrix),ue.setValue(O,"viewMatrix",g.matrixWorldInverse);let Yn=ue.map.cameraPosition;Yn!==void 0&&Yn.setValue(O,ce.setFromMatrixPosition(g.matrixWorld)),C.logarithmicDepthBuffer&&ue.setValue(O,"logDepthBufFC",2/(Math.log(g.far+1)/Math.LN2)),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&ue.setValue(O,"isOrthographic",g.isOrthographicCamera===!0),st!==g&&(st=g,Xn=!0,Li=!0)}if(wt.needsLights&&(Ge.state.sunShadowMap.length>0&&ue.setValue(O,"sunShadowMap",Ge.state.sunShadowMap,J),Ge.state.directionalShadowMap.length>0&&ue.setValue(O,"directionalShadowMap",Ge.state.directionalShadowMap,J),Ge.state.spotShadowMap.length>0&&ue.setValue(O,"spotShadowMap",Ge.state.spotShadowMap,J),Ge.state.pointShadowMap.length>0&&ue.setValue(O,"pointShadowMap",Ge.state.pointShadowMap,J)),L.isSkinnedMesh){ue.setOptional(O,L,"bindMatrix"),ue.setOptional(O,L,"bindMatrixInverse");let fe=L.skeleton;fe&&(fe.boneTexture===null&&fe.computeBoneTexture(),ue.setValue(O,"boneTexture",fe.boneTexture,J))}L.isBatchedMesh&&(ue.setOptional(O,L,"batchingTexture"),ue.setValue(O,"batchingTexture",L._matricesTexture,J),ue.setOptional(O,L,"batchingIdTexture"),ue.setValue(O,"batchingIdTexture",L._indirectTexture,J),ue.setOptional(O,L,"batchingColorTexture"),L._colorsTexture!==null&&ue.setValue(O,"batchingColorTexture",L._colorsTexture,J));let qn=P.morphAttributes;if((qn.position!==void 0||qn.normal!==void 0||qn.color!==void 0)&&U.update(L,P,nn),(Xn||wt.receiveShadow!==L.receiveShadow)&&(wt.receiveShadow=L.receiveShadow,ue.setValue(O,"receiveShadow",L.receiveShadow)),(N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial)&&N.envMap===null&&b.environment!==null&&(we.envMapIntensity.value=b.environmentIntensity),we.dfgLUT!==void 0&&(we.dfgLUT.value=O0()),Xn){if(ue.setValue(O,"toneMappingExposure",F.toneMappingExposure),wt.needsLights&&w(we,Li),rt&&N.fog===!0&&Rt.refreshFogUniforms(we,rt),Rt.refreshMaterialUniforms(we,N,nt,$,A.state.transmissionRenderTarget[g.id]),wt.needsLights&&wt.lightProbeGrid){let fe=wt.lightProbeGrid;we.probesSH.value=fe.texture,we.probesMin.value.copy(fe.boundingBox.min),we.probesMax.value.copy(fe.boundingBox.max),we.probesResolution.value.copy(fe.resolution)}cs.upload(O,lr(wt),we,J)}if(N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(cs.upload(O,lr(wt),we,J),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&ue.setValue(O,"center",L.center),ue.setValue(O,"modelViewMatrix",L.modelViewMatrix),ue.setValue(O,"normalMatrix",L.normalMatrix),ue.setValue(O,"modelMatrix",L.matrixWorld),N.uniformsGroups!==void 0){let fe=N.uniformsGroups;for(let Yn=0,Di=fe.length;Yn<Di;Yn++){let zc=fe[Yn];at.update(zc,nn),at.bind(zc,nn)}}return nn}function w(g,b){g.ambientLightColor.needsUpdate=b,g.lightProbe.needsUpdate=b,g.sunLights.needsUpdate=b,g.sunLightShadows.needsUpdate=b,g.directionalLights.needsUpdate=b,g.directionalLightShadows.needsUpdate=b,g.pointLights.needsUpdate=b,g.pointLightShadows.needsUpdate=b,g.spotLights.needsUpdate=b,g.spotLightShadows.needsUpdate=b,g.rectAreaLights.needsUpdate=b,g.hemisphereLights.needsUpdate=b}function B(g){return g.isMeshLambertMaterial||g.isMeshToonMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isShadowMaterial||g.isShaderMaterial&&g.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return ot},this.setRenderTargetTextures=function(g,b,P){let N=H.get(g);N.__autoAllocateDepthBuffer=g.resolveDepthBuffer===!1,N.__autoAllocateDepthBuffer===!1&&(N.__useRenderToTexture=!1),H.get(g.texture).__webglTexture=b,H.get(g.depthTexture).__webglTexture=N.__autoAllocateDepthBuffer?void 0:P,N.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(g,b){let P=H.get(g);P.__webglFramebuffer=b,P.__useDefaultFramebuffer=b===void 0},this.setRenderTarget=function(g,b=0,P=0){ot=g,Q=b,Z=P;let N=null,L=!1,rt=!1;if(g){let ht=H.get(g);if(ht.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(O.FRAMEBUFFER,ht.__webglFramebuffer),lt.copy(g.viewport),Dt.copy(g.scissor),Ct=g.scissorTest,_.viewport(lt),_.scissor(Dt),_.setScissorTest(Ct),K=-1;return}else if(ht.__webglFramebuffer===void 0)J.setupRenderTarget(g);else if(ht.__hasExternalTextures)J.rebindTextures(g,H.get(g.texture).__webglTexture,H.get(g.depthTexture).__webglTexture);else if(g.depthBuffer){let Lt=g.depthTexture;if(ht.__boundDepthTexture!==Lt){if(Lt!==null&&H.has(Lt)&&(g.width!==Lt.image.width||g.height!==Lt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(g)}}let yt=g.texture;(yt.isData3DTexture||yt.isDataArrayTexture||yt.isCompressedArrayTexture)&&(rt=!0);let xt=H.get(g).__webglFramebuffer;g.isWebGLCubeRenderTarget?(Array.isArray(xt[b])?N=xt[b][P]:N=xt[b],L=!0):g.samples>0&&J.useMultisampledRTT(g)===!1?N=H.get(g).__webglMultisampledFramebuffer:Array.isArray(xt)?N=xt[P]:N=xt,lt.copy(g.viewport),Dt.copy(g.scissor),Ct=g.scissorTest}else lt.copy(bt).multiplyScalar(nt).floor(),Dt.copy(Ht).multiplyScalar(nt).floor(),Ct=ye;if(P!==0&&(N=X),_.bindFramebuffer(O.FRAMEBUFFER,N)&&_.drawBuffers(g,N),_.viewport(lt),_.scissor(Dt),_.setScissorTest(Ct),L){let ht=H.get(g.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+b,ht.__webglTexture,P)}else if(rt){let ht=b;for(let yt=0;yt<g.textures.length;yt++){let xt=H.get(g.textures[yt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+yt,xt.__webglTexture,P,ht)}}else if(g!==null&&P!==0){let ht=H.get(g.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ht.__webglTexture,P)}K=-1};function Y(g){let b=H.get(g);return(b.__readFormat!==g.format||b.__readType!==g.type)&&(b.__readFormat=g.format,b.__readType=g.type,b.__formatReadable=C.textureFormatReadable(g.format),b.__typeReadable=C.textureTypeReadable(g.type)),b}this.readRenderTargetPixels=function(g,b,P,N,L,rt,ct,ht=0){if(!(g&&g.isWebGLRenderTarget)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=H.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&ct!==void 0&&(yt=yt[ct]),yt){_.bindFramebuffer(O.FRAMEBUFFER,yt);try{let xt=g.textures[ht],Lt=xt.format,zt=xt.type;g.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ht);let Tt=Y(xt);if(Tt.__formatReadable===!1){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Tt.__typeReadable===!1){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}b>=0&&b<=g.width-N&&P>=0&&P<=g.height-L&&O.readPixels(b,P,N,L,dt.convert(Lt),dt.convert(zt),rt)}finally{let xt=ot!==null?H.get(ot).__webglFramebuffer:null;_.bindFramebuffer(O.FRAMEBUFFER,xt)}}},this.readRenderTargetPixelsAsync=async function(g,b,P,N,L,rt,ct,ht=0){if(!(g&&g.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=H.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&ct!==void 0&&(yt=yt[ct]),yt)if(b>=0&&b<=g.width-N&&P>=0&&P<=g.height-L){_.bindFramebuffer(O.FRAMEBUFFER,yt);let xt=g.textures[ht],Lt=xt.format,zt=xt.type;g.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ht);let Tt=Y(xt);if(Tt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Tt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ee=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ee),O.bufferData(O.PIXEL_PACK_BUFFER,rt.byteLength,O.STREAM_READ),O.readPixels(b,P,N,L,dt.convert(Lt),dt.convert(zt),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Se=ot!==null?H.get(ot).__webglFramebuffer:null;_.bindFramebuffer(O.FRAMEBUFFER,Se);let he=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await qh(O,he,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ee),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,rt),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(ee),O.deleteSync(he),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(g,b=null,P=0){let N=Math.pow(2,-P),L=Math.floor(g.image.width*N),rt=Math.floor(g.image.height*N),ct=b!==null?b.x:0,ht=b!==null?b.y:0;J.setTexture2D(g,0),O.copyTexSubImage2D(O.TEXTURE_2D,P,0,0,ct,ht,L,rt),_.unbindTexture()},this.copyTextureToTexture=function(g,b,P=null,N=null,L=0,rt=0){let ct,ht,yt,xt,Lt,zt,Tt,ee,Se,he=g.isCompressedTexture?g.mipmaps[rt]:g.image;if(P!==null)ct=P.max.x-P.min.x,ht=P.max.y-P.min.y,yt=P.isBox3?P.max.z-P.min.z:1,xt=P.min.x,Lt=P.min.y,zt=P.isBox3?P.min.z:0;else{let we=Math.pow(2,-L);ct=Math.floor(he.width*we),ht=Math.floor(he.height*we),g.isDataArrayTexture?yt=he.depth:g.isData3DTexture?yt=Math.floor(he.depth*we):yt=1,xt=0,Lt=0,zt=0}N!==null?(Tt=N.x,ee=N.y,Se=N.z):(Tt=0,ee=0,Se=0);let re=dt.convert(b.format),xe=dt.convert(b.type),wt;b.isData3DTexture?(J.setTexture3D(b,0),wt=O.TEXTURE_3D):b.isDataArrayTexture||b.isCompressedArrayTexture?(J.setTexture2DArray(b,0),wt=O.TEXTURE_2D_ARRAY):(J.setTexture2D(b,0),wt=O.TEXTURE_2D),_.activeTexture(O.TEXTURE0),_.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,b.flipY),_.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),_.pixelStorei(O.UNPACK_ALIGNMENT,b.unpackAlignment);let Ge=_.getParameter(O.UNPACK_ROW_LENGTH),ie=_.getParameter(O.UNPACK_IMAGE_HEIGHT),nn=_.getParameter(O.UNPACK_SKIP_PIXELS),yn=_.getParameter(O.UNPACK_SKIP_ROWS),Xn=_.getParameter(O.UNPACK_SKIP_IMAGES);_.pixelStorei(O.UNPACK_ROW_LENGTH,he.width),_.pixelStorei(O.UNPACK_IMAGE_HEIGHT,he.height),_.pixelStorei(O.UNPACK_SKIP_PIXELS,xt),_.pixelStorei(O.UNPACK_SKIP_ROWS,Lt),_.pixelStorei(O.UNPACK_SKIP_IMAGES,zt);let Li=g.isDataArrayTexture||g.isData3DTexture,ue=b.isDataArrayTexture||b.isData3DTexture;if(g.isDepthTexture){let we=H.get(g),qn=H.get(b),fe=H.get(we.__renderTarget),Yn=H.get(qn.__renderTarget);_.bindFramebuffer(O.READ_FRAMEBUFFER,fe.__webglFramebuffer),_.bindFramebuffer(O.DRAW_FRAMEBUFFER,Yn.__webglFramebuffer);for(let Di=0;Di<yt;Di++)Li&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,H.get(g).__webglTexture,L,zt+Di),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,H.get(b).__webglTexture,rt,Se+Di)),O.blitFramebuffer(xt,Lt,ct,ht,Tt,ee,ct,ht,O.DEPTH_BUFFER_BIT,O.NEAREST);_.bindFramebuffer(O.READ_FRAMEBUFFER,null),_.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(L!==0||g.isRenderTargetTexture||H.has(g)){let we=H.get(g),qn=H.get(b);_.bindFramebuffer(O.READ_FRAMEBUFFER,k),_.bindFramebuffer(O.DRAW_FRAMEBUFFER,q);for(let fe=0;fe<yt;fe++)Li?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,we.__webglTexture,L,zt+fe):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,we.__webglTexture,L),ue?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,qn.__webglTexture,rt,Se+fe):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,qn.__webglTexture,rt),L!==0?O.blitFramebuffer(xt,Lt,ct,ht,Tt,ee,ct,ht,O.COLOR_BUFFER_BIT,O.NEAREST):ue?O.copyTexSubImage3D(wt,rt,Tt,ee,Se+fe,xt,Lt,ct,ht):O.copyTexSubImage2D(wt,rt,Tt,ee,xt,Lt,ct,ht);_.bindFramebuffer(O.READ_FRAMEBUFFER,null),_.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ue?g.isDataTexture||g.isData3DTexture?O.texSubImage3D(wt,rt,Tt,ee,Se,ct,ht,yt,re,xe,he.data):b.isCompressedArrayTexture?O.compressedTexSubImage3D(wt,rt,Tt,ee,Se,ct,ht,yt,re,he.data):O.texSubImage3D(wt,rt,Tt,ee,Se,ct,ht,yt,re,xe,he):g.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,rt,Tt,ee,ct,ht,re,xe,he.data):g.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,rt,Tt,ee,he.width,he.height,re,he.data):O.texSubImage2D(O.TEXTURE_2D,rt,Tt,ee,ct,ht,re,xe,he);_.pixelStorei(O.UNPACK_ROW_LENGTH,Ge),_.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ie),_.pixelStorei(O.UNPACK_SKIP_PIXELS,nn),_.pixelStorei(O.UNPACK_SKIP_ROWS,yn),_.pixelStorei(O.UNPACK_SKIP_IMAGES,Xn),rt===0&&b.generateMipmaps&&O.generateMipmap(wt),_.unbindTexture()},this.initRenderTarget=function(g){H.get(g).__webglFramebuffer===void 0&&J.setupRenderTarget(g)},this.initTexture=function(g){g.isCubeTexture?J.setTextureCube(g,0):g.isData3DTexture?J.setTexture3D(g,0):g.isDataArrayTexture||g.isCompressedArrayTexture?J.setTexture2DArray(g,0):J.setTexture2D(g,0),_.unbindTexture()},this.resetState=function(){Q=0,Z=0,ot=null,_.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}};var B0=["top","side","bottom"];function Au(i){let t=i&&i.blocks||[],e=i&&i.items||[],n=new Array(256).fill(null),s=Object.create(null),r=[];for(let T of t){if(!T||typeof T.id!="string")throw new Error("block without id");if(!Number.isInteger(T.n)||T.n<0||T.n>255)throw new Error("bad n for "+T.id);if(n[T.n])throw new Error("duplicate n "+T.n+" ("+T.id+")");if(s[T.id])throw new Error("duplicate id "+T.id);let v=T.colors||{},E=Object.assign({solid:!0,transparent:!1,liquid:!1,emissive:!1,hardness:1,drops:"self",buy:null,maxStack:64,pattern:"plain",kind:"block"},T);if(E.placeable=E.n!==0&&!E.liquid,E.colors={top:v.top||"#888888",side:v.side||v.top||"#888888",bottom:v.bottom||v.top||"#888888"},E.opaque=E.solid&&!E.transparent,E.tile={},E.n!==0){let A={};for(let D of B0){let y=E.colors[D]+"|"+(E.pattern==="grass"||E.pattern==="log"||E.pattern==="lamp"||E.pattern==="table"||E.pattern==="stele"||E.pattern==="torch"||E.pattern==="bed"?D:"");A[y]===void 0&&(A[y]=r.length,r.push({block:E.id,face:D,color:E.colors[D],pattern:E.pattern,accent:E.accent||null,top:E.colors.top})),E.tile[D]=A[y]}}n[E.n]=E,s[E.id]=E}if(!s.air)throw new Error("registry needs air");for(let T of e){if(s[T.id])throw new Error("duplicate id "+T.id);s[T.id]=Object.assign({kind:"item",placeable:!1,maxStack:64,buy:null},T)}for(let T in s){let v=s[T].drops;if(v&&v!=="self"&&!s[v])throw new Error(T+" drops unknown "+v)}let a=T=>(typeof T=="number"?n[T]:s[T])||null,o=new Uint8Array(256),c=new Uint8Array(256),l=new Uint8Array(256),d=new Uint8Array(256),u=new Uint8Array(256),h=new Uint8Array(256),p=new Uint8Array(256),x=new Uint8Array(256),M=new Int16Array(256).fill(-1),m=new Int16Array(256).fill(-1),f=new Int16Array(256).fill(-1);n.forEach((T,v)=>{T&&(d[v]=T.solid?1:0,u[v]=T.opaque?1:0,h[v]=T.transparent?1:0,p[v]=T.emissive?1:0,x[v]=T.liquid?1:0,o[v]=T.light!=null?T.light:T.emissive?15:0,c[v]=T.liquid?2:0,l[v]=T.shape==="torch"?1:0,v&&(M[v]=T.tile.top,m[v]=T.tile.side,f[v]=T.tile.bottom))});let R=(i&&i.blueprints||[]).map(T=>Object.assign({kind:"blueprint"},T));return{blocks:n.filter(Boolean),items:e.map(T=>s[T.id]),blueprints:R,tiles:r,get:a,toolOf:T=>{let v=T&&s[T];return v&&v.kind==="item"&&v.tool&&typeof v.tool=="object"?v.tool:null},num:T=>{let v=s[T];if(!v||v.kind!=="block")throw new Error("no block "+T);return v.n},name:T=>{let v=a(T);return v?v.name_zh:String(T)},maxStack:T=>{let v=s[T];return v?v.maxStack:64},dropOf:T=>{let v=n[T];return!v||!v.drops?null:v.drops==="self"?v.id:v.drops},breakTime:T=>{let v=n[T];return!v||v.hardness<0?1/0:.25+v.hardness*.55},flat:{solid:d,opaque:u,trans:h,emit:p,liquid:x,tileTop:M,tileSide:m,tileBottom:f,lightEmit:o,attn:c,shape:l}}}var Vn=i=>Math.floor(i/16);var z0=(i,t,e)=>(t*16+e)*16+i;var Ti=(i,t)=>i+","+t;function ac(i,t,e){if(i=Math.floor(i),t=Math.floor(t),e=Math.floor(e),t<0||t>=64)return null;let n=Vn(i),s=Vn(e);return{cx:n,cz:s,i:z0(i-n*16,t,e-s*16)}}function Cu(i,t,e){let n=[];for(let s=-e;s<=e;s++)for(let r=-e;r<=e;r++){let a=r*r+s*s;a<=e*e+e&&n.push({cx:i+r,cz:t+s,d2:a})}return n.sort((s,r)=>s.d2-r.d2)}function di(i,t,e,n,s,r){let a=n/2,o=Math.floor(i-a),c=Math.floor(i+a-1e-6),l=Math.floor(t),d=Math.floor(t+s-1e-6),u=Math.floor(e-a),h=Math.floor(e+a-1e-6);for(let p=l;p<=d;p++)for(let x=u;x<=h;x++)for(let M=o;M<=c;M++)if(r(M,p,x))return!0;return!1}function xo(i,t,e,n,s={}){let r=s.w||.6,a=s.h||1.8,o=!!s.canStep,c=!1,l=0,d=Math.max(Math.abs(t.x),Math.abs(t.y),Math.abs(t.z))*e,u=Math.max(1,Math.ceil(d/.35)),h=e/u;for(let p=0;p<u;p++){let x=i.y+t.y*h;di(i.x,x,i.z,r,a,n)&&(t.y<0?(x=Math.floor(x)+1,c=!0,di(i.x,x,i.z,r,a,n)&&(x=i.y)):(x=Math.min(i.y,Math.ceil(x+a)-1-a),di(i.x,x,i.z,r,a,n)&&(x=i.y)),t.y=0),i.y=x;for(let M of["x","z"]){let m=t[M]*h;if(!m)continue;let f={x:i.x,y:i.y,z:i.z};if(f[M]+=m,!di(f.x,f.y,f.z,r,a,n)){i[M]=f[M];continue}if(o&&(c||s.grounded)){let T=Math.floor(i.y+.01)+1;if(T-i.y<=1.01&&!di(f.x,T,f.z,r,a,n)&&!di(i.x,T,i.z,r,a,n)){l+=T-i.y,i.y=T,i[M]=f[M];continue}}let R=r/2;i[M]=m>0?Math.floor(f[M]+R)-R-1e-4:Math.floor(f[M]-R)+1+R+1e-4,di(i.x,i.y,i.z,r,a,n)&&(i[M]=f[M]-m),t[M]=0}}return!c&&t.y<=0&&di(i.x,i.y-.02,i.z,r,a,n)&&(c=!0),{onGround:c,stepped:l}}function yo(i,t,e,n,s){let r=Math.floor(i.x),a=Math.floor(i.y),o=Math.floor(i.z),c=Math.sign(t.x),l=Math.sign(t.y),d=Math.sign(t.z),u=c?Math.abs(1/t.x):1/0,h=l?Math.abs(1/t.y):1/0,p=d?Math.abs(1/t.z):1/0,x=c?(c>0?r+1-i.x:i.x-r)*u:1/0,M=l?(l>0?a+1-i.y:i.y-a)*h:1/0,m=d?(d>0?o+1-i.z:i.z-o)*p:1/0,f=[0,0,0],R=0;for(;R<=e;){let T=n(r,a,o);if(T&&s(T))return{x:r,y:a,z:o,n:T,face:f,dist:R};x<M&&x<m?(r+=c,R=x,x+=u,f=[-c,0,0]):M<m?(a+=l,R=M,M+=h,f=[0,-l,0]):(o+=d,R=m,m+=p,f=[0,0,-d])}return null}var pc={};No(pc,{HOTBAR:()=>lc,SIZE:()=>oc,add:()=>Gn,canAdd:()=>uc,count:()=>xn,craft:()=>fc,craftable:()=>So,createInventory:()=>vo,deserialize:()=>dc,moveSlot:()=>hc,remove:()=>sr,serialize:()=>Mo,takeFromSlot:()=>cc});var oc=36,lc=9;function vo(i=36){return{slots:new Array(i).fill(null)}}function Gn(i,t,e,n=()=>64){let s=n(t);for(let r=0;r<i.slots.length&&e>0;r++){let a=i.slots[r];if(a&&a.id===t&&a.count<s){let o=Math.min(e,s-a.count);a.count+=o,e-=o}}for(let r=0;r<i.slots.length&&e>0;r++)if(!i.slots[r]){let a=Math.min(e,s);i.slots[r]={id:t,count:a},e-=a}return e}function xn(i,t){return i.slots.reduce((e,n)=>e+(n&&n.id===t?n.count:0),0)}function sr(i,t,e){if(xn(i,t)<e)return!1;for(let n=i.slots.length-1;n>=0&&e>0;n--){let s=i.slots[n];if(s&&s.id===t){let r=Math.min(e,s.count);s.count-=r,e-=r,s.count||(i.slots[n]=null)}}return!0}function cc(i,t,e=1){let n=i.slots[t];if(!n||n.count<e)return null;n.count-=e;let s=n.id;return n.count||(i.slots[t]=null),s}function hc(i,t,e,n=()=>64){if(t===e)return;let s=i.slots[t],r=i.slots[e];if(s&&r&&s.id===r.id){let a=Math.min(s.count,n(s.id)-r.count);r.count+=a,s.count-=a,s.count||(i.slots[t]=null);return}i.slots[t]=r,i.slots[e]=s}function uc(i,t,e,n=()=>64){let s={slots:i.slots.map(r=>r&&{...r})};return Gn(s,t,e,n)===0}var Mo=i=>i.slots.map(t=>t?Number.isFinite(t.dur)?[t.id,t.count,t.dur]:[t.id,t.count]:0);function dc(i,t=36){let e=vo(t);return(i||[]).slice(0,t).forEach((n,s)=>{Array.isArray(n)&&typeof n[0]=="string"&&n[1]>0&&(e.slots[s]={id:n[0],count:n[1]|0},Number.isFinite(n[2])&&(e.slots[s].dur=n[2]))}),e}function So(i,t,e={}){if(t.blueprint&&!(e.owned&&e.owned.has(t.blueprint)))return{ok:!1,reason:"blueprint"};if(t.needs&&!(e.near&&e.near.has(t.needs)))return{ok:!1,reason:"needs"};for(let n in t.in)if(xn(i,n)<t.in[n])return{ok:!1,reason:"materials"};return{ok:!0}}function fc(i,t,e=()=>64,n){let s=So(i,t,n||{near:new Set([t.needs]),owned:new Set([t.blueprint])});if(!s.ok)return s;let r=i.slots.map(a=>a&&{...a});for(let a in t.in)sr(i,a,t.in[a]);return Gn(i,t.out.id,t.out.count,e)>0?(i.slots=r,{ok:!1,reason:"full"}):{ok:!0}}function k0(i=0){return{coins:i|0,earned:0,spent:0,owned:[]}}var mc=(i,t)=>i.owned.includes(t),Iu=(i,t)=>i?t?2:1:0;function gc(i,t){return t=Math.max(0,t|0),i.coins+=t,i.earned+=t,i.coins}function Ru(i,t){return t=Math.max(0,t|0),i.coins<t?!1:(i.coins-=t,i.spent+=t,!0)}function Pu(i){return i.blocks.concat(i.items).filter(t=>t&&t.buy).map(t=>({id:t.id,name_zh:t.name_zh,qty:t.buy.qty||1,price:t.buy.price|0,locked:t.buy.locked||null})).concat((i.blueprints||[]).map(t=>({id:t.id,name_zh:t.name_zh,qty:1,price:t.price|0,locked:t.locked||null,blueprint:!0,desc:t.desc||""})))}function Lu(i,t,e,n=()=>64){return e?e.locked?{ok:!1,reason:"locked"}:e.blueprint&&mc(i,e.id)?{ok:!1,reason:"owned"}:i.coins<e.price?{ok:!1,reason:"coins"}:e.blueprint?(Ru(i,e.price),i.owned.push(e.id),{ok:!0}):uc(t,e.id,e.qty,n)?(Ru(i,e.price),Gn(t,e.id,e.qty,n),{ok:!0}):{ok:!1,reason:"full"}:{ok:!1,reason:"missing"}}var Du=i=>({coins:i.coins,earned:i.earned,spent:i.spent,owned:i.owned.slice()});function Nu(i){let t=k0(i&&i.coins);return i&&(t.earned=i.earned|0,t.spent=i.spent|0,t.owned=Array.isArray(i.owned)?i.owned.slice():[]),t}function G0(){return new Map}function Uu(i,t,e,n){let s=i.get(t);s||(s=new Map,i.set(t,s)),s.set(e,n)}function _c(i){let t=new Array(i.size*2),e=0;for(let[n,s]of i)t[e++]=n,t[e++]=s;return t}function H0(i){let t=new Map;for(let e=0;e+1<(i||[]).length;e+=2)t.set(i[e]|0,i[e+1]|0);return t}function Fu(i){let t=G0();for(let e in i||{})t.set(e,H0(i[e]));return t}var bo=16;var iM=18;var Wn=32;function Ou(i){let t=i>>>0||7;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var Hn=i=>[parseInt(i.slice(1,3),16),parseInt(i.slice(3,5),16),parseInt(i.slice(5,7),16)],$t=(i,t=1,e=1)=>`rgba(${Math.round(Math.min(255,i[0]*t))},${Math.round(Math.min(255,i[1]*t))},${Math.round(Math.min(255,i[2]*t))},${e})`;function W0(i){let t=2166136261;for(let e=0;e<i.length;e++)t=Math.imul(t^i.charCodeAt(e),16777619);return t>>>0}function ge(i,t){i.beginPath(),i.moveTo(t[0][0],t[0][1]);for(let e=1;e<t.length;e++)i.lineTo(t[e][0],t[e][1]);i.closePath(),i.fill()}function Ai(i,t,e,n,s){let r=3+Math.floor(t()*2),a=[];for(let o=0;o<r;o++){let c=o/r*Math.PI*2+t()*.8;a.push([e+Math.cos(c)*s*(.6+t()*.5),n+Math.sin(c)*s*(.6+t()*.5)])}ge(i,a)}function X0(i,t){let e=Hn(t.color),n=Ou(W0(t.block+t.face)),s=Wn,r=1;t.pattern==="glass"?r=.22:t.pattern==="water"&&(r=.72),i.fillStyle=$t(e,1,r),i.fillRect(0,0,s,s);let a=t.pattern,o=t.accent?Hn(t.accent):null;if(a==="grass"&&t.face==="top"){i.fillStyle=$t(e,1.12);for(let u=0;u<4;u++)Ai(i,n,n()*s,n()*s,5+n()*4)}if(a==="grass"&&t.face==="side"){let u=Hn(t.top);i.fillStyle=$t(u);let h=[[0,0],[s,0]];for(let p=s;p>=0;p-=4)h.push([p,8+Math.round(n()*5)]);ge(i,h)}if(a==="stone"||a==="bedrock")for(let u=0;u<5;u++)i.fillStyle=$t(e,n()<.5?.9:1.08),Ai(i,n,n()*s,n()*s,4+n()*6);if(a==="ore"){for(let u=0;u<4;u++)i.fillStyle=$t(e,.92),Ai(i,n,n()*s,n()*s,5);i.fillStyle=$t(o);for(let u=0;u<5;u++)Ai(i,n,5+n()*(s-10),5+n()*(s-10),2.5+n()*2.5)}if(a==="sand")for(let u=0;u<26;u++)i.fillStyle=$t(e,n()<.5?.92:1.05),i.fillRect(Math.floor(n()*s),Math.floor(n()*s),2,2);if(a==="log"&&t.face==="side")for(let u=3;u<s;u+=7)i.fillStyle=$t(e,.82),i.fillRect(u,0,2,s);if(a==="log"&&t.face!=="side"&&(i.fillStyle=$t(e,.85),i.fillRect(6,6,s-12,s-12),i.fillStyle=$t(e,1.05),i.fillRect(11,11,s-22,s-22)),a==="leaves")for(let u=0;u<9;u++)i.fillStyle=$t(e,n()<.5?.78:1.15),Ai(i,n,n()*s,n()*s,3+n()*4);if(a==="planks"||a==="table"&&t.face==="bottom"){for(let u=7;u<s;u+=8)i.fillStyle=$t(e,.78),i.fillRect(0,u,s,1);i.fillStyle=$t(e,.85),i.fillRect(12,0,1,7),i.fillRect(22,8,1,7),i.fillRect(6,16,1,7),i.fillRect(18,24,1,8)}if(a==="table"&&t.face==="top"&&(i.fillStyle=$t(e,.8),i.fillRect(s/2-1,3,2,s-6),i.fillRect(3,s/2-1,s-6,2)),a==="table"&&t.face==="side"&&(i.fillStyle=$t(e,.7),i.fillRect(6,10,7,14),i.fillStyle=$t([185,182,174]),ge(i,[[18,10],[27,12],[25,15],[19,14]]),i.fillStyle=$t(e,.6),i.fillRect(21,14,2,10)),a==="glass"&&(i.fillStyle="rgba(255,255,255,0.45)",ge(i,[[6,24],[9,24],[24,9],[24,6]])),a==="water"){i.fillStyle=$t(e,1.18,.72);for(let u=6;u<s;u+=10)i.fillRect(4+Math.floor(n()*10),u,10,2)}if(a==="gold"&&(i.fillStyle=$t(e,1.15),ge(i,[[0,0],[s,0],[0,s]]),i.fillStyle=$t(e,.9),ge(i,[[s,s],[s,8],[8,s]])),a==="lamp"&&(t.face==="side"?(i.fillStyle=$t(Hn("#F3E3B5")),i.fillRect(7,6,s-14,s-12),i.fillStyle=$t(e,.85),i.fillRect(0,0,s,3),i.fillRect(0,s-3,s,3)):t.face==="top"&&(i.fillStyle=$t(e,1.05),i.fillRect(8,8,s-16,s-16))),a==="torch"&&(i.clearRect(0,0,s,s),t.face==="side"?(i.fillStyle=$t(Hn("#8C6640")),i.fillRect(13,0,6,s),i.fillStyle=$t(Hn("#F2C46B")),i.fillRect(13,0,6,8),i.fillStyle=$t(o),i.fillRect(14,0,4,4)):(i.fillStyle=$t(Hn(t.face==="top"?"#F2C46B":"#8C6640")),i.fillRect(12,12,8,8))),a==="bed"&&(t.face==="top"?(i.fillStyle=$t(o),i.fillRect(0,0,s,10),i.fillStyle=$t(e,.85),i.fillRect(0,10,s,3)):t.face==="side"&&(i.fillStyle=$t(Hn("#E0352B")),i.fillRect(0,0,s,14),i.fillStyle=$t(o),i.fillRect(0,0,9,14))),a==="wool")for(let u=0;u<7;u++)i.fillStyle=$t(e,n()<.5?.94:1.04),Ai(i,n,n()*s,n()*s,4+n()*4);if(a==="furnace"){for(let u=0;u<4;u++)i.fillStyle=$t(e,n()<.5?.9:1.08),Ai(i,n,n()*s,n()*s,4+n()*5);t.face==="side"?(i.fillStyle=$t(o),i.fillRect(8,15,s-16,11),i.fillStyle=$t(Hn("#E0352B"),1,.85),ge(i,[[11,26],[s/2,18],[s-11,26]])):(i.fillStyle=$t(e,.8),i.fillRect(9,9,s-18,s-18))}a==="stele"&&t.face==="side"&&(i.fillStyle=$t(e,1.12),i.fillRect(5,4,s-10,s-8),i.fillStyle=$t(o),ge(i,[[s/2,8],[s/2+6,s/2],[s/2,s-8],[s/2-6,s/2]]));let c=i.getImageData(0,0,s,s),l=c.data;for(let u=0;u<l.length;u+=4){let h=1+(n()-.5)*.09;l[u]=Math.min(255,l[u]*h),l[u+1]=Math.min(255,l[u+1]*h),l[u+2]=Math.min(255,l[u+2]*h)}i.putImageData(c,0,0);let d=a==="glass"?"rgba(207,227,223,0.75)":"rgba(20,24,20,0.13)";i.fillStyle=d,i.fillRect(0,0,s,2),i.fillRect(0,s-2,s,2),i.fillRect(0,2,2,s-4),i.fillRect(s-2,2,2,s-4),a!=="glass"&&a!=="water"&&(i.fillStyle="rgba(20,24,20,0.06)",i.fillRect(2,2,s-4,2),i.fillRect(2,s-4,s-4,2))}function Bu(i){let t=document.createElement("canvas");t.width=t.height=Wn*bo;let e=t.getContext("2d",{willReadFrequently:!0}),n=[];return i.tiles.forEach((s,r)=>{let a=document.createElement("canvas");a.width=a.height=Wn;let o=a.getContext("2d",{willReadFrequently:!0});X0(o,s),e.drawImage(a,r%bo*Wn,Math.floor(r/bo)*Wn),n[r]=a}),{canvas:t,tileCanvas:n}}function zu(i,t){let e={};for(let n of i.blocks){if(!n.n)continue;let s=document.createElement("canvas");s.width=s.height=48;let r=s.getContext("2d");if(n.shape==="torch"){r.fillStyle="#8C6640",r.fillRect(21,16,6,28),r.fillStyle="#F2C46B",ge(r,[[18,18],[24,4],[30,18],[24,22]]),r.fillStyle="#E0352B",ge(r,[[21,16],[24,9],[27,16]]),e[n.id]=s.toDataURL();continue}let a=t.tileCanvas,o=1/Wn,c=(l,d,u,h,p,x,M,m)=>{r.setTransform(d*o,u*o,h*o,p*o,x,M),r.drawImage(a[l],0,0),m&&(r.fillStyle=`rgba(20,24,20,${m})`,r.fillRect(0,0,Wn,Wn))};c(n.tile.top,20,10,-20,10,24,4,0),c(n.tile.side,20,10,0,22,4,14,.12),c(n.tile.side,20,-10,0,22,24,24,.26),e[n.id]=s.toDataURL()}for(let n of i.items){let s=document.createElement("canvas");s.width=s.height=48;let r=s.getContext("2d"),a=n.icon,o=n.color,c="#8C6640";r.save(),r.translate(24,24),a==="lump"?(r.fillStyle=o,ge(r,[[-14,4],[-8,-12],[6,-14],[15,-2],[10,12],[-6,14]]),r.fillStyle="rgba(255,255,255,.18)",ge(r,[[-8,-12],[6,-14],[2,-4]])):a==="ingot"?(r.fillStyle=o,ge(r,[[-18,8],[-10,-6],[12,-6],[18,8]]),r.fillStyle="rgba(255,255,255,.3)",ge(r,[[-10,-6],[12,-6],[9,-1],[-8,-1]]),r.fillStyle="rgba(0,0,0,.12)",r.fillRect(-18,8,36,4)):a==="hide"?(r.fillStyle=o,ge(r,[[-15,-10],[-6,-15],[8,-13],[16,-6],[13,12],[0,15],[-14,10]]),r.fillStyle="rgba(0,0,0,.14)",ge(r,[[-6,-4],[6,-6],[4,6],[-5,5]])):a==="feather"?(r.rotate(-Math.PI/4),r.fillStyle=o,ge(r,[[0,-20],[7,-6],[5,10],[0,14],[-5,10],[-7,-6]]),r.fillStyle="#B9B6AE",r.fillRect(-1,-14,2,32)):a==="gem"?(r.fillStyle=o,ge(r,[[0,-16],[14,-4],[0,16],[-14,-4]]),r.fillStyle="rgba(255,255,255,.35)",ge(r,[[0,-16],[14,-4],[0,-2]])):(r.rotate(-Math.PI/4),r.fillStyle=a==="stick"?o:c,r.fillRect(-3,-14,6,32),r.fillStyle=o,a==="pickaxe"&&(r.beginPath(),r.moveTo(-16,-14),r.quadraticCurveTo(0,-24,16,-14),r.lineTo(14,-9),r.quadraticCurveTo(0,-17,-14,-9),r.closePath(),r.fill()),a==="axe"&&ge(r,[[2,-18],[15,-14],[15,-2],[2,-6]]),a==="shovel"&&ge(r,[[-7,-22],[7,-22],[8,-10],[0,-5],[-8,-10]]),a==="sword"&&(r.fillRect(-4,-24,8,30),ge(r,[[-4,-24],[0,-30],[4,-24]]),r.fillStyle=c,r.fillRect(-9,6,18,4))),r.restore(),e[n.id]=s.toDataURL()}for(let n of i.blueprints||[]){let s=document.createElement("canvas");s.width=s.height=48;let r=s.getContext("2d");r.fillStyle="#26302A",ge(r,[[6,10],[40,6],[42,38],[8,42]]),r.fillStyle="rgba(239,235,221,.55)";for(let a=0;a<4;a++)r.fillRect(12,14+a*7,24,2);r.fillStyle=n.id==="bp_diamond"?"#6FC7C0":"#D8D4CA",ge(r,[[28,26],[36,30],[30,38],[24,32]]),e[n.id]=s.toDataURL()}return e}function ku(){let i=Ou(99),t=[],e=[];for(let n=0;n<4;n++){let s=document.createElement("canvas");s.width=s.height=Wn;let r=s.getContext("2d");n&&r.drawImage(e[n-1],0,0),r.fillStyle="rgba(21,23,20,0.55)";for(let a=0;a<3+n*2;a++){let o=6+i()*20,c=6+i()*20,l=i()*Math.PI;ge(r,[[o,c],[o+Math.cos(l)*9,c+Math.sin(l)*9],[o+Math.cos(l+.3)*6,c+Math.sin(l+.3)*6]])}e.push(s),t.push(s)}return t}var Vu=`attribute float light; attribute vec2 lt; varying vec2 vUv; varying float vL; varying vec2 vLt; varying float vD;
void main(){ vUv=uv; vL=light; vLt=lt; vec4 mv=modelViewMatrix*vec4(position,1.0); vD=-mv.z; gl_Position=projectionMatrix*mv; }`,Gu=`uniform sampler2D uAtlas; uniform float uDay; uniform vec3 uFog; uniform float uNear; uniform float uFar;
varying vec2 vUv; varying float vL; varying vec2 vLt; varying float vD;
void main(){ vec4 t=texture2D(uAtlas,vUv); if(t.a<0.04) discard;
 vec3 tint=vec3(1.0); float l;
 if(vL>1.5){ l=1.12; } else {
  float sky=vLt.x*mix(0.35,1.0,uDay), bl=vLt.y;
  l=vL*mix(0.16,1.0,max(sky,bl)); l=floor(l*5.0+0.5)/5.0; l=max(l,0.08);
  tint=mix(vec3(1.0),vec3(1.12,0.97,0.8),step(sky,bl)*bl);
 }
 float f=smoothstep(uNear,uFar,vD); gl_FragColor=vec4(mix(t.rgb*l*tint,uFog,f), t.a); }`;function q0(i,t){let e=Vn(i),n=Vn(t),s=[[e,n]];for(let r=-1;r<=1;r++)for(let a=-1;a<=1;a++){if(!a&&!r)continue;let o=(e+a)*16,c=(n+r)*16,l=i<o?o-i:i>=o+16?i-(o+16-1):0,d=t<c?c-t:t>=c+16?t-(c+16-1):0;Math.max(l,d)<=14&&s.push([e+a,n+r])}return s}function Wu(i){let t=new An(i);t.magFilter=Ae,t.minFilter=Ae,t.generateMipmaps=!1;let e={uAtlas:{value:t},uDay:{value:1},uFog:{value:new G(.94,.92,.87)},uNear:{value:30},uFar:{value:60}},n=new ke({uniforms:e,vertexShader:Vu,fragmentShader:Gu}),s=new ke({uniforms:e,vertexShader:Vu,fragmentShader:Gu,transparent:!0,depthWrite:!1,side:rn});return{opaque:n,trans:s,uniforms:e,tex:t}}function Hu(i){let t=new Xe;return t.setAttribute("position",new Ce(i.pos,3)),t.setAttribute("uv",new Ce(i.uv,2)),t.setAttribute("light",new Ce(i.light,1)),t.setAttribute("lt",new Ce(i.lt,2,!0)),t.setIndex(new Ce(i.index,1)),t.computeBoundingSphere(),t}var wo=class{constructor({scene:t,mats:e,reg:n,worker:s,diffs:r,onDirty:a}){Object.assign(this,{scene:t,mats:e,reg:n,worker:s,diffs:r,onDirty:a}),this.chunks=new Map,this.inflight=0,this.maxInflight=3,this.rd=4,this.rev=0,this.stats={meshMs:[],genMs:[],loaded:0},s.addEventListener("message",o=>this.onMsg(o.data))}onMsg(t){if(t.type!=="chunk"&&t.type!=="mesh")return;let e=Ti(t.cx,t.cz),n=this.chunks.get(e);t.type==="chunk"&&this.inflight--,n&&(t.type==="chunk"&&(n.vox=t.vox,n.state="ready",this.stats.genMs.push(t.genMs)),!(t.rev<n.meshRev)&&(this.stats.meshMs.push(t.ms),this.stats.meshMs.length>400&&this.stats.meshMs.shift(),this.setMesh(n,t.mesh)))}setMesh(t,e){for(let n of["o","t"])t[n]&&(this.scene.remove(t[n]),t[n].geometry.dispose(),t[n]=null);e.opaque.index.length&&(t.o=new Ee(Hu(e.opaque),this.mats.opaque),t.o.position.set(t.cx*16,0,t.cz*16),t.o.matrixAutoUpdate=!1,t.o.updateMatrix(),this.scene.add(t.o)),e.trans.index.length&&(t.t=new Ee(Hu(e.trans),this.mats.trans),t.t.position.set(t.cx*16,0,t.cz*16),t.t.matrixAutoUpdate=!1,t.t.updateMatrix(),t.t.renderOrder=1,this.scene.add(t.t))}update(t,e){let n=Vn(t),s=Vn(e),r=Cu(n,s,this.rd);for(let c of r){if(this.inflight>=this.maxInflight)break;let l=Ti(c.cx,c.cz);if(this.chunks.has(l))continue;let d={cx:c.cx,cz:c.cz,vox:null,state:"loading",meshRev:++this.rev,o:null,t:null};this.chunks.set(l,d),this.inflight++,this.worker.postMessage({type:"load",cx:c.cx,cz:c.cz,rev:d.meshRev})}let a=this.rd+1.5,o=[];for(let[c,l]of this.chunks){let d=l.cx-n,u=l.cz-s;if(d*d+u*u>a*a){for(let h of["o","t"])l[h]&&(this.scene.remove(l[h]),l[h].geometry.dispose());this.chunks.delete(c),o.push(c)}}o.length&&this.worker.postMessage({type:"drop",keys:o.filter(c=>{let[l,d]=c.split(",").map(Number);return Math.abs(l-n)>this.rd+3||Math.abs(d-s)>this.rd+3})}),this.stats.loaded=[...this.chunks.values()].filter(c=>c.state==="ready").length}ready(t,e){let n=this.chunks.get(Ti(Vn(t),Vn(e)));return!!(n&&n.state==="ready")}get(t,e,n){let s=ac(t,e,n);if(!s)return e<0?13:0;let r=this.chunks.get(Ti(s.cx,s.cz));return r&&r.vox?r.vox[s.i]:0}set(t,e,n,s){let r=ac(t,e,n);if(!r)return!1;let a=Ti(r.cx,r.cz),o=this.chunks.get(a);if(!o||!o.vox)return!1;o.vox[r.i]=s,Uu(this.diffs,a,r.i,s),this.worker.postMessage({type:"set",x:t,y:e,z:n,n:s});let c=Math.floor(t),l=Math.floor(n);for(let[d,u]of q0(c,l)){let h=this.chunks.get(Ti(d,u));h&&h.state==="ready"&&(h.meshRev=++this.rev,this.worker.postMessage({type:"mesh",cx:d,cz:u,rev:h.meshRev}))}return this.onDirty&&this.onDirty(a),!0}setRenderDistance(t){this.rd=t;let e=this.mats.uniforms;e.uFar.value=t*16-2,e.uNear.value=Math.max(8,t*16*.45)}clear(){for(let t of this.chunks.values())for(let e of["o","t"])t[e]&&(this.scene.remove(t[e]),t[e].geometry.dispose());this.chunks.clear()}};var Y0="hw_world";var Eo=null;function Xu(){return Eo||(Eo=new Promise((i,t)=>{if(!("indexedDB"in self))return t(new Error("no indexedDB"));let e=indexedDB.open(Y0,1);e.onupgradeneeded=()=>e.result.createObjectStore("kv"),e.onsuccess=()=>i(e.result),e.onerror=()=>t(e.error)}),Eo)}function yc(i,t){return Xu().then(e=>new Promise((n,s)=>{let r=e.transaction("kv",i),a=r.objectStore("kv"),o=t(a);r.oncomplete=()=>n(o instanceof IDBRequest?o.result:void 0),r.onerror=()=>s(r.error)}))}var vc=i=>yc("readonly",t=>t.get(i)),Mc=i=>yc("readwrite",t=>{for(let e in i)t.put(i[e],e)});async function qu(i){let t=await Xu();return new Promise((e,n)=>{let s={},r=t.transaction("kv","readonly"),a=r.objectStore("kv").openCursor(IDBKeyRange.bound(i,i+"\uFFFF"));a.onsuccess=()=>{let o=a.result;o&&(s[o.key]=o.value,o.continue())},r.oncomplete=()=>e(s),r.onerror=()=>n(r.error)})}async function Yu(i){let t={};for(let e of i){let n=await vc(e);n!==void 0&&(t[e]=n)}await yc("readwrite",e=>e.clear()),await Mc(t)}function et(i,t,...e){let n=document.createElement(i);for(let s in t||{}){let r=t[s];r==null||r===!1||(s.startsWith("on")?n.addEventListener(s.slice(2),r):s==="html"?n.innerHTML=r:n.setAttribute(s,r===!0?"":r))}for(let s of e.flat())s!=null&&s!==!1&&n.append(s.nodeType?s:document.createTextNode(String(s)));return n}var Ci=i=>document.querySelector(i);var $0="../../",J0=["data/words.js","data/words-2.js","data/words-3.js","data/words-4.js","data/phrases.js","data/roots.js","data/grammar.js","data/patterns.js","engine.js"],Sc=["zh2en","en2zh","zh2en-type","phrase-fill","grammar-fill","pattern-choose"],To=null;function K0(i){return new Promise((t,e)=>{let n=document.createElement("script");n.src=i,n.onload=t,n.onerror=()=>e(new Error("load "+i)),document.head.appendChild(n)})}function Zu(){return To||(To=(async()=>{for(let t of J0)await K0($0+t);let i=window;return new i.KE.Engine({words:i.DATA_WORDS||[],phrases:i.DATA_PHRASES||[],roots:i.DATA_ROOTS||[],grammar:i.DATA_GRAMMAR||[],patterns:i.DATA_PATTERNS||[]})})().catch(i=>{throw To=null,i})),To}async function $u(i,{onReward:t,onClose:e,count:n=5}){i.innerHTML="",i.hidden=!1;let s=et("div",{class:"panel quiz"});i.append(s),s.append(et("div",{class:"p-head"},et("h2",{},"\u7DF4\u7FD2\u77F3\u7891"),et("button",{class:"x","aria-label":"\u95DC\u9589",onclick:u},"\xD7")),et("p",{class:"muted"},"\u984C\u5EAB\u8F09\u5165\u4E2D\u2026"));let r;try{r=await Zu()}catch{s.lastChild.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557\uFF0C\u8ACB\u6AA2\u67E5\u7DB2\u8DEF\u5F8C\u518D\u8A66\u4E00\u6B21\u3002";return}let a=window.KE,o=[],c=0,l=0,d=0;function u(){i.hidden=!0,i.innerHTML="",e&&e()}function h(){o=r.buildQuiz({modules:["words","phrases","grammar","patterns"],types:Sc,lv:1,count:n}),o.length||(o=r.buildQuiz({modules:["words"],types:["zh2en","en2zh"],count:n})),c=0,l=0,d=0,p()}function p(){s.innerHTML="";let m=o[c],f=a.isTyped(m);i._q=m;let R=et("div",{class:"fb"}),T=et("div",{class:"q-body"});s.append(et("div",{class:"p-head"},et("h2",{},"\u7DF4\u7FD2\u77F3\u7891 ",et("small",{},`\u7B2C ${c+1} / ${o.length} \u984C`)),et("button",{class:"x","aria-label":"\u95DC\u9589",onclick:u},"\xD7")),et("div",{class:"q-type"},(a.TYPES[m.type]||"\u984C\u76EE")+(f?"\u3000\u6253\u5B57\u984C \xB7 \u7B54\u5C0D 2 \u91D1\u5E63":"\u3000\u7B54\u5C0D 1 \u91D1\u5E63")),et("div",{class:"q-prompt"+(m.en?" en":"")},m.prompt),m.sub?et("div",{class:"q-sub"},m.sub):null,T,R);let v=!1,E=A=>{if(v)return;v=!0;let D=Iu(A,f);A&&(d++,l+=D,t&&t(D)),R.className="fb "+(A?"ok":"bad"),R.append(et("div",{},A?`\u7B54\u5C0D\u4E86\uFF01 +${D} \u91D1\u5E63`:"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",A?null:et("b",{class:"en"},m.answer)),!A&&m.why?et("div",{class:"why"},m.why):null,et("button",{class:"btn",onclick:x},c+1<o.length?"\u4E0B\u4E00\u984C":"\u770B\u7D50\u679C"))};if(m.input==="type"){let A=et("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),D=()=>{v||!A.value.trim()||E(r.check(m,A.value).ok)};A.addEventListener("keydown",y=>{y.stopPropagation(),y.key==="Enter"&&D()}),T.append(et("div",{class:"typerow"},A,et("button",{class:"btn",onclick:D},"\u9001\u51FA"))),setTimeout(()=>A.focus(),50)}else{let A=et("div",{class:"opts"});(m.options||[]).forEach(D=>A.append(et("button",{class:"opt"+(/[a-z]/i.test(D)?" en":""),onclick:y=>{if(v)return;let I=r.check(m,D).ok;y.currentTarget.classList.add(I?"ok":"bad"),E(I)}},D))),T.append(A)}}function x(){c++,c<o.length?p():M()}function M(){s.innerHTML="",s.append(et("div",{class:"p-head"},et("h2",{},"\u9019\u4E00\u56DE\u7D50\u675F"),et("button",{class:"x","aria-label":"\u95DC\u9589",onclick:u},"\xD7")),et("p",{class:"big"},`\u7B54\u5C0D ${d} / ${o.length} \u984C\uFF0C\u62FF\u5230 ${l} \u91D1\u5E63`),et("div",{class:"row"},et("button",{class:"btn",onclick:h},"\u518D\u4F86\u4E00\u56DE"),et("button",{class:"btn ghost",onclick:u},"\u56DE\u53BB\u84CB\u623F\u5B50")))}h()}var j0=new Set(Sc);async function Ju(i,{ids:t=[],onDone:e}){i.innerHTML="",i.hidden=!1;let n=et("div",{class:"panel quiz"});i.append(n),n.append(et("p",{class:"muted"},"\u932F\u984C\u602A\u51FA\u984C\u4E2D\u2026"));let s;try{s=await Zu()}catch{n.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557",setTimeout(()=>{i.hidden=!0,e&&e(null)},1200);return}let r=window.KE,a=null;for(let p of t){let x=s.byId[p];if(x&&j0.has(x.type)){a=s.get(p);break}}let o=!!a;a||(a=s.buildQuiz({modules:["words","phrases","grammar","patterns"],types:Sc,lv:1,count:1})[0]);let c=r.isTyped(a);i._q=a,n.innerHTML="";let l=et("div",{class:"fb"}),d=et("div",{class:"q-body"});n.append(et("div",{class:"p-head"},et("h2",{},"\u932F\u984C\u602A\u4F86\u4E86\uFF01")),et("div",{class:"q-type"},(o?"\u4F60\u4EE5\u524D\u932F\u904E\u7684\u984C\u76EE":r.TYPES[a.type]||"\u984C\u76EE")+"\u3000\u7B54\u5C0D\u5C31\u80FD\u6253\u6557\u5B83"),et("div",{class:"q-prompt"+(a.en?" en":"")},a.prompt),a.sub?et("div",{class:"q-sub"},a.sub):null,d,l);let u=!1,h=p=>{u||(u=!0,l.className="fb "+(p?"ok":"bad"),l.append(et("div",{},p?"\u7B54\u5C0D\u4E86\uFF01\u932F\u984C\u602A\u8B8A\u6210\u7D19\u7247\u98DB\u8D70\u4E86":"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",p?null:et("b",{class:"en"},a.answer)),!p&&a.why?et("div",{class:"why"},a.why):null,et("button",{class:"btn",onclick:()=>{i.hidden=!0,i.innerHTML="",e&&e(p,c)}},"\u7E7C\u7E8C")))};if(a.input==="type"){let p=et("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),x=()=>{u||!p.value.trim()||h(s.check(a,p.value).ok)};p.addEventListener("keydown",M=>{M.stopPropagation(),M.key==="Enter"&&x()}),d.append(et("div",{class:"typerow"},p,et("button",{class:"btn",onclick:x},"\u9001\u51FA"))),setTimeout(()=>p.focus(),50)}else{let p=et("div",{class:"opts"});(a.options||[]).forEach(x=>p.append(et("button",{class:"opt"+(/[a-z]/i.test(x)?" en":""),onclick:M=>{if(u)return;let m=s.check(a,x).ok;M.currentTarget.classList.add(m?"ok":"bad"),h(m)}},x))),d.append(p)}}var Q0=[1,2,4,6,8];function Ao(i,t){if(!i||i.hardness<0)return{time:1/0,harvest:!1,usesTool:!1};let e=.25+i.hardness*.55,n=i.tier|0,r=!!(t&&i.tool&&t.type===i.tool)?t.tier:0;return n>0&&r<n?{time:e*3,harvest:!1,usesTool:!!t&&t.type!=="sword"}:{time:Math.max(.1,e/Q0[r]),harvest:!0,usesTool:!!t&&t.type!=="sword"}}function bc(i,t,e,n=1){let s=i.slots[t];if(!s)return{broke:!1};let r=e.toolOf(s.id);if(!r)return{broke:!1};let a=r.durability;return s.dur=(s.dur==null?a:s.dur)-n,s.dur<=0?(i.slots[t]=null,{broke:!0,id:s.id}):{broke:!1,left:s.dur,max:a}}function Ku(i,t){let e=i&&t.toolOf(i.id);if(!e)return null;let n=e.durability,s=i.dur==null?n:i.dur;return{left:s,max:n,frac:s/n}}var Rc={};No(Rc,{collect:()=>Ac,createFurnace:()=>wc,dismantle:()=>Cc,start:()=>Ec,tick:()=>Tc});function wc(){return{fuel:0,jobs:[],done:{}}}function Ec(i,t,e,n=4){if(xn(t,e.in)<1)return{ok:!1,reason:"materials"};let s=i.jobs.length;if(i.fuel-s<1){if(xn(t,"coal")<1)return{ok:!1,reason:"fuel"};sr(t,"coal",1),i.fuel+=n}return sr(t,e.in,1),i.jobs.push({in:e.in,out:e.out,left:e.time}),{ok:!0}}function Tc(i,t){for(;t>0&&i.jobs.length;){let e=i.jobs[0],n=Math.min(t,e.left);e.left-=n,t-=n,e.left<=1e-9&&(i.jobs.shift(),i.fuel-=1,i.done[e.out]=(i.done[e.out]||0)+1)}return i}function Ac(i,t,e=()=>64){let n=0;for(let s of Object.keys(i.done)){let r=Gn(t,s,i.done[s],e);n+=i.done[s]-r,r?i.done[s]=r:delete i.done[s]}return n}function Cc(i){let t=Object.assign({},i.done);for(let e of i.jobs)t[e.in]=(t[e.in]||0)+1;return t}var Fc={};No(Fc,{MAX_HP:()=>Co,REGEN_EVERY:()=>e_,SAFE_FALL:()=>t_,createHealth:()=>Ic,damage:()=>Lc,fallDamage:()=>Pc,hearts:()=>Uc,regen:()=>Dc,respawnPoint:()=>Nc});var Co=20,t_=4,e_=4;function Ic(i=20){return{hp:Math.max(0,Math.min(20,i)),regenT:0}}function Pc(i,{water:t=!1,flying:e=!1}={}){return t||e||i<=4?0:Math.floor((i-4)/2)+1}function Lc(i,t){return t>0&&(i.hp=Math.max(0,i.hp-t),i.regenT=0),i.hp<=0}function Dc(i,t){return i.hp<=0||i.hp>=20?(i.regenT=0,!1):(i.regenT+=t,i.regenT>=4?(i.regenT-=4,i.hp=Math.min(20,i.hp+1),!0):!1)}function Nc(i,t,e){return i&&e?{x:i.x+.5,y:i.y+1,z:i.z+.5}:{x:t.x,y:t.y,z:t.z}}function Uc(i){let t=[];for(let e=0;e<20/2;e++){let n=i-e*2;t.push(n>=2?"full":n===1?"half":"empty")}return t}var Ro={animal:8,quiz:4};function ju(){return{list:[],nextId:1}}var Io=(i,t)=>i.list.reduce((e,n)=>e+(n.kind===t&&!n.gone?1:0),0);function Qu(i,t,e){let n={id:i.nextId++,type:t.id,kind:t.kind,def:t,p:{x:e.x,y:e.y,z:e.z},v:{x:0,y:0,z:0},yaw:0,hp:t.hp||2,t:0,turn:0,gone:!1,busy:!1,onGround:!1};return i.list.push(n),n}function td(i,t){return i<.2&&!t}function ed(i,t,e){return i.kind==="quiz"?t>.45||e>48:e>72}function nd(i,t,e,n){let s=i.def,r=t.x-i.p.x,a=t.z-i.p.z,o=Math.hypot(r,a);if(i.t+=e,i.busy){i.v.x=0,i.v.z=0;return}if(i.kind==="quiz"&&o<16){i.yaw=Math.atan2(-r,-a);let c=o>1.6?s.speed:0;i.v.x=r/(o||1)*c,i.v.z=a/(o||1)*c;return}i.t>=i.turn&&(i.t=0,i.turn=2+n()*4,n()<.35?(i.v.x=0,i.v.z=0):(i.yaw=n()*Math.PI*2,i.v.x=-Math.sin(i.yaw)*s.speed,i.v.z=-Math.cos(i.yaw)*s.speed))}function id(i,t,e){if(i.kind!=="animal"||i.gone)return null;if(i.hp-=t?i.hp:1,i.hp>0)return{drops:null};i.gone=!0;let n=i.def.drops||{},s=(n.min||1)+Math.floor(e()*((n.max||1)-(n.min||1)+1));return{drops:n.id?{id:n.id,n:s}:null}}var sd=(i,t)=>i?(t?2:1)+1:0;function rd(i,t,e,n,s){let r=[e.x-n/2,e.y,e.z-n/2],a=[e.x+n/2,e.y+s,e.z+n/2],o=[i.x,i.y,i.z],c=[t.x,t.y,t.z],l=0,d=1/0;for(let u=0;u<3;u++){if(Math.abs(c[u])<1e-9){if(o[u]<r[u]||o[u]>a[u])return null;continue}let h=(r[u]-o[u])/c[u],p=(a[u]-o[u])/c[u];if(h>p&&([h,p]=[p,h]),l=Math.max(l,h),d=Math.min(d,p),l>d)return null}return l}function ad(i){return Object.keys(i||{}).filter(t=>i[t]&&!i[t].d).sort((t,e)=>(i[e].u||0)-(i[t].u||0))}var Pn={};function us(i){return Pn[i]||(Pn[i]=new fn({color:i,transparent:!0}),Pn[i].userData.base=new Gt(i)),Pn[i]}var rr=null;function i_(){if(rr)return rr;let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d");return t.fillStyle="#26302A",t.fillRect(0,0,64,64),t.fillStyle="#EFEBDD",t.beginPath(),t.ellipse(20,28,8,10,0,0,7),t.ellipse(44,28,8,10,0,0,7),t.fill(),t.fillStyle="#151714",t.beginPath(),t.arc(22,31,4,0,7),t.arc(46,31,4,0,7),t.fill(),t.fillStyle="#E0352B",t.font="bold 18px sans-serif",t.textAlign="center",t.fillText("?",32,58),rr=new An(i),rr.colorSpace=Le,rr}function od(i){let t=new dn,e=i.colors,[n,s]=i.size,r=(o,c,l,d,u,h,p,x)=>{let M=new Ee(new je(o,c,l),x||us(d));return M.position.set(u,h,p),t.add(M),M},a=[];if(i.kind==="quiz"){let o=r(n,s*.72,n*.8,e.body,0,s*.36+.12,0);Pn.__face||(Pn.__face=new fn({map:i_(),transparent:!0}),Pn.__face.userData.base=new Gt("#ffffff"));let c=[us(e.head),us(e.head),us(e.head),us(e.head),us(e.head),Pn.__face],l=new Ee(new je(n*.9,n*.8,n*.8),c);l.position.set(0,s*.72+n*.4,0),t.add(l),a.push(r(.18,.24,.18,e.head,-.2,.12,0),r(.18,.24,.18,e.head,.2,.12,0))}else{let o=i.id==="chicken"?.25:.45,c=s-o-(i.id==="chicken"?.15:.25);r(n,c,i.id==="chicken"?n:n*1.35,e.body,0,o+c/2,0),e.patch&&r(n*.5,c*.55,.02+n*1.36,e.patch,n*.12,o+c*.55,0);let l=i.id==="chicken"?.3:.45,d=r(l,l,l,e.head,0,o+c+l*.25,-(i.id==="chicken"?n*.35:n*.75));e.comb&&(r(.08,.12,.14,e.comb,0,d.position.y+l/2+.05,d.position.z),r(.12,.06,.12,"#D9A63A",0,d.position.y-.02,d.position.z-l/2-.05));let u=i.id==="chicken"?.06:.18,h=i.id==="chicken"?0:n*.45,p=n*.3;for(let[x,M]of i.id==="chicken"?[[-.1,0],[.1,0]]:[[-p,-h],[p,-h],[-p,h],[p,h]]){let m=r(u,o,u,e.leg,x,o/2,M);m.geometry.translate(0,-o/2,0),m.position.y=o,a.push(m)}}return t.userData.legs=a,t}function ld(i){for(let t in Pn){let e=Pn[t];e.color.copy(e.userData.base).multiplyScalar(i)}}function Oc(i,t,e){i.position.set(t.p.x,t.p.y,t.p.z),i.rotation.y=t.yaw;let n=Math.hypot(t.v.x,t.v.z)>.05,s=n?Math.sin(e*8+t.id)*.5:0;if(i.userData.legs.forEach((r,a)=>{r.rotation.x=a%2?s:-s}),t.kind==="quiz"&&(i.position.y+=Math.sin(e*3+t.id)*.05),t.gone){let r=Math.max(.01,1-t.goneT*3);i.scale.setScalar(r),i.rotation.y+=t.goneT*12}}var Po="9ead0a59b2",Bc=new URLSearchParams(location.search),a_=720,hd=5,o_=20261008,l_=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,S={touch:l_,started:!1,paused:!0,overlay:null,p:{x:.5,y:40,z:.5},v:{x:0,y:0,z:0},yaw:0,pitch:-.2,fly:!1,onGround:!1,eyeOff:0,view:"fp",sel:0,time:.08,keys:{},joy:{x:0,y:0,active:!1},jumpHeld:!1,downHeld:!1,mining:{active:!1,src:"center",sx:0,sy:0,k:"",t:0},placeRepeat:0,dirty:new Set,dirtyMeta:!1,frames:[],drops:[]};function c_(i,t){try{let e=localStorage.getItem(i);return e??t}catch{return t}}function h_(i,t){try{localStorage.setItem(i,t)}catch{}}async function u_(){let[i,t,e]=await Promise.all(["data/blocks.json","data/recipes.json","data/mobs.json"].map(w=>fetch(w,{cache:"no-cache"}).then(B=>B.json()))),n=Au(i),s=t.recipes||[],r=w=>n.maxStack(w),a={};try{let[w,B,Y,g,b]=await Promise.all(["hw_meta","hw_player","hw_inventory","hw_coins","hw_furnaces"].map(vc));a={meta:w,player:B,inv:Y,coins:g,furnaces:b,chunks:await qu("hw_chunk:")}}catch(w){console.warn("save unavailable",w)}let o=a.meta&&a.meta.seed||o_,c=Fu(Object.fromEntries(Object.entries(a.chunks||{}).map(([w,B])=>[w.slice(9),B]))),l=a.inv?dc(a.inv):vo(),d=Nu(a.coins),u=Ic(a.player&&a.player.hp!=null?a.player.hp:20);S.bed=a.player&&a.player.bed||null;let h=a.furnaces||{},p=t.smelt||[],x=t.fuelPerCoal||4;a.meta&&typeof a.meta.time=="number"&&(S.time=a.meta.time);let M=Ci("#c"),m=new mo({canvas:M,antialias:!1,powerPreference:"high-performance"});m.setPixelRatio(Math.min(window.devicePixelRatio||1,S.touch?1.5:1.25));let f=new Ls,R=new Gt("#EFEBDD");f.background=R;let T=new ze(72,1,.08,200);T.rotation.order="YXZ";let v=Bu(n),E=zu(n,v),A=Wu(v.canvas),D=new Worker("assets/hw-worker.js?v="+Po),y=new wo({scene:f,mats:A,reg:n,worker:D,diffs:c,onDirty:w=>S.dirty.add(w)}),I=Math.max(2,Math.min(6,parseInt(Bc.get("rd")||c_("hw_rd",S.touch?"3":"4"),10)||4));y.setRenderDistance(I),T.far=I*16+40,T.updateProjectionMatrix();let F=await new Promise(w=>{let B=Y=>{Y.data.type==="ready"&&(D.removeEventListener("message",B),w(Y.data.spawn))};D.addEventListener("message",B),D.postMessage({type:"init",seed:o,blocks:i,diffs:Object.fromEntries([...c].map(([Y,g])=>[Y,_c(g)]))})});a.player?Object.assign(S,{p:{x:a.player.x,y:a.player.y,z:a.player.z},yaw:a.player.yaw||0,pitch:a.player.pitch||0,fly:!!a.player.fly,sel:a.player.sel|0}):(S.p={x:F.x,y:F.y,z:F.z},S.yaw=Math.atan2(-(F.stele.x+.5-F.x),-(F.stele.z+.5-F.z)),S.pitch=-.15);let V=new Bs(new Vs(new je(1.004,1.004,1.004)),new ns({color:1382164,transparent:!0,opacity:.45}));V.visible=!1,f.add(V);let W=ku().map(w=>new An(w)),X=new Ee(new je(1.01,1.01,1.01),new fn({map:W[0],transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}));X.visible=!1,f.add(X);let k=(w,B)=>{let Y=document.createElement("canvas");Y.width=Y.height=64;let g=Y.getContext("2d");g.fillStyle=w,g.beginPath(),g.arc(32,32,28,0,7),g.fill(),B&&(g.globalCompositeOperation="destination-out",g.beginPath(),g.arc(44,26,24,0,7),g.fill());let b=new An(Y);return b.colorSpace=Le,b},q=new Mi(new ni({map:k("#F2C46B"),depthWrite:!1,fog:!1})),Q=new Mi(new ni({map:k("#EDE6D0",!0),depthWrite:!1,fog:!1}));f.add(q,Q);let Z=new dn,ot=(w,B,Y,g,b,P,N)=>{let L=new Ee(new je(w,B,Y),new fn({color:g}));return L.position.set(b,P,N),L.userData.base=new Gt(g),Z.add(L),L},K=ot(.24,.75,.26,"#26302A",-.14,.375,0),st=ot(.24,.75,.26,"#26302A",.14,.375,0);ot(.56,.7,.3,"#2F5A34",0,1.1,0);let lt=ot(.18,.66,.2,"#E7CDA6",-.38,1.12,0),Dt=ot(.18,.66,.2,"#E7CDA6",.38,1.12,0);ot(.46,.42,.42,"#E7CDA6",0,1.66,0),ot(.5,.14,.46,"#151714",0,1.9,.02),ot(.12,.12,.05,"#E0352B",.16,1.92,-.24),[K,st,lt,Dt].forEach(w=>{w.geometry.translate(0,-w.geometry.parameters.height/2+.05,0),w.position.y+=w.geometry.parameters.height/2-.05}),Z.visible=!1,f.add(Z);let Ct={},le=w=>Ct[w]||(Ct[w]=(()=>{let B=new Image;B.src=E[w];let Y=new Ne(B);return Y.colorSpace=Le,B.onload=()=>{Y.needsUpdate=!0},new ni({map:Y,depthWrite:!0,alphaTest:.3})})());function Yt(w,B,Y,g){let b=new Mi(le(w));b.scale.set(.42,.42,1),f.add(b),S.drops.push({id:w,s:b,p:{x:B,y:Y,z:g},v:{x:(Math.random()-.5)*2,y:3,z:(Math.random()-.5)*2},age:0})}let Kt=(w,B,Y)=>n.flat.solid[y.get(w,B,Y)]===1,$=Object.fromEntries((e.mobs||[]).map(w=>[w.id,w])),nt=ju(),Et=new Map,Bt=0;function bt(w,B){for(let Y=61;Y>0;Y--){let g=y.get(w,Y,B);if(n.flat.solid[g])return y.get(w,Y+1,B)||y.get(w,Y+2,B)?null:{y:Y+1,n:g};if(n.flat.liquid[g])return null}return null}function Ht(w,B,Y,g=7){for(let b=-g;b<=g;b++)for(let P=-g;P<=g;P++)for(let N=-g;N<=g;N++)if(n.flat.lightEmit[y.get(w+N,B+b,Y+P)])return!0;return!1}function ye(w,B,Y,g){let b=Qu(nt,w,{x:B+.5,y:Y,z:g+.5}),P=od(w);return Et.set(b.id,P),f.add(P),b}function Xt(w){let B=Math.random()*Math.PI*2,Y=14+Math.random()*14,g=Math.floor(S.p.x+Math.cos(B)*Y),b=Math.floor(S.p.z+Math.sin(B)*Y);if(!y.ready(g,b))return;let P=bt(g,b);if(P)if(Io(nt,"animal")<Ro.animal&&P.n===n.num("grass")&&w>.3){let N=Object.values($).filter(ct=>ct.kind==="animal"),L=N[Math.floor(Math.random()*N.length)],rt=1+Math.floor(Math.random()*3);for(let ct=0;ct<rt&&Io(nt,"animal")<Ro.animal;ct++){let ht=g+ct%2,yt=b+(ct>>1),xt=bt(ht,yt);xt&&ye(L,ht,xt.y,yt)}}else Io(nt,"quiz")<Ro.quiz&&td(w,Ht(g,P.y,b))&&$.quizling&&ye($.quizling,g,P.y,b)}function te(w,B,Y){Bt+=w,Bt>2.5&&S.started&&(Bt=0,Xt(B));for(let g=nt.list.length-1;g>=0;g--){let b=nt.list[g],P=Et.get(b.id),N=Math.hypot(b.p.x-S.p.x,b.p.z-S.p.z);if(b.gone){b.goneT=(b.goneT||0)+w,Oc(P,b,Y/1e3),b.goneT>.35&&(f.remove(P),Et.delete(b.id),nt.list.splice(g,1));continue}if(ed(b,B,N)){b.gone=!0,b.goneT=0;continue}if(!y.ready(b.p.x,b.p.z))continue;nd(b,S.p,w,Math.random),b.v.y-=20*w,b.v.y<-20&&(b.v.y=-20);let L=xo(b.p,b.v,w,Kt,{w:Math.min(.9,b.def.size[0]),h:b.def.size[1],canStep:!0,grounded:b.onGround});b.onGround=L.onGround,n.flat.liquid[y.get(b.p.x,b.p.y+.3,b.p.z)]&&(b.v.y=2),Oc(P,b,Y/1e3)}ld(.35+.65*B)}function ae(w,B,Y){let g,b;w==="screen"?(dt.set(B/innerWidth*2-1,-(Y/innerHeight)*2+1,.5).unproject(T).sub(T.position).normalize(),g={x:T.position.x,y:T.position.y,z:T.position.z},b={x:dt.x,y:dt.y,z:dt.z}):(g=at(),b=vt());let P=w==="screen"?St("screen",B,Y):St("center"),N=null,L=S.view==="tp"&&w==="screen"?8:4.5;P&&(L=Math.min(L,P.dist+.5));for(let rt of nt.list){if(rt.gone)continue;let ct=rd(g,b,rt.p,rt.def.size[0],rt.def.size[1]);ct!=null&&ct<L&&(L=ct,N=rt)}return N}function Zt(){try{return ad(JSON.parse(localStorage.getItem("ke_mistakes")||"{}"))}catch{return[]}}function ce(w){if(w.kind==="animal"){let Y=l.slots[S.sel],g=!!(Y&&n.toolOf(Y.id)&&n.toolOf(Y.id).type==="sword"),b=id(w,g,Math.random);if(w.v.y=4,w.v.x+=(w.p.x-S.p.x)*1.5,w.v.z+=(w.p.z-S.p.z)*1.5,g){let P=bc(l,S.sel,n);P.broke&&Vt(`\u4F60\u7684${n.name(P.id)}\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u628A\u5427\uFF01`),z()}if(b&&b.drops)for(let P=0;P<b.drops.n;P++)Yt(b.drops.id,w.p.x,w.p.y+.6,w.p.z);return}if(w.busy)return;w.busy=!0,jt(),document.pointerLockElement&&document.exitPointerLock(),S.overlay="ask";let B=Zt().slice(0,30).sort(()=>Math.random()-.5);Ju(At.ov,{ids:B,onDone:(Y,g)=>{if(S.overlay=null,w.busy=!1,Y){let b=sd(!0,g);gc(d,b),pe(),w.gone=!0,w.goneT=0,Vt(`\u6253\u6557\u932F\u984C\u602A\uFF01 +${b} \u91D1\u5E63`),S.dirtyMeta=!0,Ln(),S.stats.quizWins=(S.stats.quizWins||0)+1}else if(Y===!1){let b=S.p.x-w.p.x,P=S.p.z-w.p.z,N=Math.hypot(b,P)||1;S.v.x=b/N*7,S.v.z=P/N*7,S.v.y=4.5,w.p.x-=b/N*1.5,w.p.z-=P/N*1.5,Vt("\u88AB\u932F\u984C\u602A\u63A8\u958B\u4E86\uFF0C\u518D\u8A66\u4E00\u6B21\uFF01")}}})}let _e=(w,B,Y)=>y.get(w,B,Y),At=d_();function Vt(w){let B=et("div",{class:"toast"},w);At.toasts.append(B),setTimeout(()=>B.remove(),2200)}function pe(){At.coins.textContent=d.coins}let O="";function be(){let w=Uc(u.hp),B=w.join();B!==O&&(O=B,At.hearts.innerHTML="",w.forEach(Y=>At.hearts.append(et("i",{class:"ht "+Y}))))}function se(w){if(S.dead||w<=0)return;let B=Lc(u,w);be(),S.dirtyMeta=!0,At.flash.classList.remove("on"),At.flash.offsetWidth,At.flash.classList.add("on"),B&&C()}function C(){S.dead=!0,jt(),document.pointerLockElement&&document.exitPointerLock(),S.overlay="dead";let w=At.ov;w.innerHTML="",w.hidden=!1,w.append(et("div",{class:"panel start"},et("h2",{},"\u4F60\u6688\u5012\u4E86\uFF01"),et("p",{},"\u5225\u64D4\u5FC3\uFF0C\u80CC\u5305\u88E1\u7684\u6771\u897F\u90FD\u9084\u5728\u3002"),et("button",{class:"btn big",onclick:_},S.bed?"\u56DE\u5230\u5E8A\u908A":"\u56DE\u5230\u51FA\u751F\u9EDE")))}function _(){let w=Nc(S.bed,F,!!S.bed);S.p={x:w.x,y:w.y,z:w.z},S.v={x:0,y:0,z:0},S.fallTop=w.y,u.hp=20,S.dead=!1,be(),U(),S.dirtyMeta=!0,Vt(S.bed?"\u5728\u5E8A\u908A\u9192\u4F86\u4E86":"\u56DE\u5230\u51FA\u751F\u9EDE\u4E86")}function z(){At.hotbar.innerHTML="";for(let B=0;B<9;B++){let Y=l.slots[B];At.hotbar.append(et("button",{class:"slot"+(B===S.sel?" on":""),"aria-label":Y?n.name(Y.id):"\u7A7A\u683C",onpointerdown:g=>{g.stopPropagation(),S.sel=B,z()}},Y?et("img",{src:E[Y.id],alt:""}):null,Y&&Y.count>1?et("span",{class:"cnt"},Y.count):null,H(Y),et("span",{class:"key"},B+1)))}let w=l.slots[S.sel];At.selName.textContent=w?n.name(w.id):""}function H(w){let B=Ku(w,n);return!B||B.left>=B.max?null:et("span",{class:"dur"+(B.frac<.25?" low":"")},et("i",{style:"width:"+Math.round(B.frac*100)+"%"}))}function J(w=4){let B=new Set,Y=Math.floor(S.p.x),g=Math.floor(S.p.y),b=Math.floor(S.p.z);for(let P=-w;P<=w;P++)for(let N=-w;N<=w;N++)for(let L=-w;L<=w;L++){let rt=y.get(Y+L,g+P,b+N);rt&&B.add(n.get(rt).id)}return B}let ut=()=>({near:J(),owned:new Set(d.owned)}),ft=-1;function j(){let w=At.ov;w.innerHTML="",w.hidden=!1;let B=et("div",{class:"inv-grid"}),Y=L=>{let rt=l.slots[L];return et("button",{class:"slot"+(L===ft?" pick":"")+(L<9?" hb":""),title:rt?n.name(rt.id):"",onclick:()=>{ft<0?l.slots[L]&&(ft=L):(hc(l,ft,L,r),ft=-1,S.dirtyMeta=!0),j(),z()}},rt?et("img",{src:E[rt.id],alt:""}):null,rt&&rt.count>1?et("span",{class:"cnt"},rt.count):null,H(rt))};for(let L=9;L<36;L++)B.append(Y(L));let g=et("div",{class:"inv-grid hbrow"});for(let L=0;L<9;L++)g.append(Y(L));let b=et("div",{class:"craft"},et("h3",{},"\u5408\u6210")),P=ut(),N={needs:"\u8981\u7AD9\u5728\u5DE5\u4F5C\u53F0\u65C1\u908A",blueprint:"\u8981\u5148\u5728\u5546\u5E97\u8CB7\u85CD\u5716"};s.forEach(L=>{let rt=So(l,L,P),ct=rt.ok;L.blueprint&&rt.reason==="blueprint"&&!Object.keys(L.in).some(ht=>ht!=="stick"&&xn(l,ht)>0)||b.append(et("div",{class:"rcp"+(ct?"":" no")},et("img",{src:E[L.out.id],alt:""}),et("div",{class:"rcp-t"},et("b",{},`${L.name_zh} \xD7${L.out.count}`),et("small",{},Object.keys(L.in).map(ht=>`${n.name(ht)} ${xn(l,ht)}/${L.in[ht]}`).join("\u3001")+(N[rt.reason]?"\u3000\xB7 "+N[rt.reason]:""))),et("button",{class:"btn small",onclick:()=>{let ht=fc(l,L,r,ut());ht.ok?(Vt(`\u505A\u597D\u4E86\uFF1A${L.name_zh} \xD7${L.out.count}`),S.dirtyMeta=!0):Vt({full:"\u80CC\u5305\u6EFF\u4E86",needs:"\u8981\u7AD9\u5728\u5DE5\u4F5C\u53F0\u65C1\u908A",blueprint:"\u8981\u5148\u5728\u5546\u5E97\u8CB7\u85CD\u5716"}[ht.reason]||"\u6750\u6599\u4E0D\u5920"),j(),z()}},"\u88FD\u4F5C")))}),w.append(et("div",{class:"panel inv"},et("div",{class:"p-head"},et("h2",{},"\u80CC\u5305"),et("button",{class:"x","aria-label":"\u95DC\u9589",onclick:U},"\xD7")),et("div",{class:"inv-wrap"},et("div",{},et("p",{class:"muted"},"\u9EDE\u4E00\u683C\u3001\u518D\u9EDE\u53E6\u4E00\u683C\u5C31\u80FD\u4EA4\u63DB\u3002\u6700\u4E0B\u9762\u4E00\u6392\uFF1D\u5FEB\u6377\u5217\u3002"),B,g),b)))}let it=Pu(n);function mt(){let w=At.ov;w.innerHTML="",w.hidden=!1;let B=et("div",{class:"shop"});it.forEach(Y=>B.append(et("div",{class:"offer"+(Y.locked?" locked":"")},et("img",{src:E[Y.id],alt:""}),et("div",{class:"of-t"},et("b",{},`${Y.name_zh}${Y.qty>1?" \xD7"+Y.qty:""}`),et("small",{},Y.locked?`\uFF08${Y.locked}\uFF09`:`${Y.price} \u91D1\u5E63${Y.desc?"\u3000"+Y.desc:""}`)),mc(d,Y.id)?et("span",{class:"owned"},"\u5DF2\u64C1\u6709"):et("button",{class:"btn small",disabled:Y.locked?!0:null,onclick:()=>Rt(Y)},Y.locked?"\u672A\u958B\u653E":"\u8CFC\u8CB7")))),w.append(et("div",{class:"panel"},et("div",{class:"p-head"},et("h2",{},"\u5546\u5E97\u3000",et("span",{class:"coin"}),` ${d.coins}`),et("button",{class:"x","aria-label":"\u95DC\u9589",onclick:U},"\xD7")),et("p",{class:"muted"},"\u91D1\u5E63\u600E\u9EBC\u4F86\uFF1F\u53BB\u300C\u7DF4\u7FD2\u77F3\u7891\u300D\u7B54\u82F1\u6587\u984C\uFF1A\u7B54\u5C0D 1 \u679A\u3001\u6253\u5B57\u984C 2 \u679A\u3002"),B))}function Rt(w){let B=Lu(d,l,w,r);B.ok?(Vt(w.blueprint?`\u62FF\u5230 ${w.name_zh}\uFF01\u53BB\u5DE5\u4F5C\u53F0\u505A\u505A\u770B`:`\u8CB7\u5230 ${w.name_zh} \xD7${w.qty}`),S.dirtyMeta=!0,pe(),z(),Ln()):Vt({coins:"\u91D1\u5E63\u4E0D\u5920\uFF0C\u53BB\u77F3\u7891\u7B54\u984C\u5427\uFF01",full:"\u80CC\u5305\u6EFF\u4E86",locked:"\u9084\u6C92\u958B\u653E",owned:"\u5DF2\u7D93\u6709\u4E86"}[B.reason]||"\u8CB7\u4E0D\u4E86"),mt()}let gt=null;function pt(){let w=At.ov,B=h[gt]||(h[gt]=wc());w.innerHTML="",w.hidden=!1;let Y=B.jobs[0],g=et("div",{class:"shop"});p.forEach(P=>{let N=xn(l,P.in);g.append(et("div",{class:"offer"+(N?"":" locked")},et("img",{src:E[P.in],alt:""}),et("div",{class:"of-t"},et("b",{},`${n.name(P.in)} \u2192 ${n.name(P.out)}`),et("small",{},`\u6709 ${N} \u500B \xB7 \u6BCF\u500B ${P.time} \u79D2`)),et("button",{class:"btn small",onclick:()=>{let L=Ec(B,l,P,x);L.ok||Vt(L.reason==="fuel"?"\u8981\u653E\u7164\u70AD\u7576\u71C3\u6599":"\u6C92\u6709\u6750\u6599"),S.dirtyMeta=!0,z(),pt()}},"\u653E\u9032\u53BB")))});let b=Object.values(B.done).reduce((P,N)=>P+N,0);w.append(et("div",{class:"panel"},et("div",{class:"p-head"},et("h2",{},"\u7194\u7210"),et("button",{class:"x","aria-label":"\u95DC\u9589",onclick:U},"\xD7")),et("p",{class:"muted"},`\u71C3\u6599\u9084\u80FD\u71D2 ${Math.max(0,B.fuel-B.jobs.length)} \u500B\uFF08\u80CC\u5305\u7164\u70AD ${xn(l,"coal")}\uFF1B1 \u500B\u7164\u70AD\u71D2 ${x} \u500B\uFF09`),et("div",{class:"furnace-st"},Y?`\u6B63\u5728\u71D2\uFF1A${n.name(Y.in)}\uFF08\u9084\u8981 ${Math.ceil(Y.left)} \u79D2\uFF0C\u6392\u968A ${B.jobs.length} \u500B\uFF09`:"\u7210\u5B50\u7A7A\u8457"),et("div",{class:"row"},et("button",{class:"btn",disabled:b?null:!0,onclick:()=>{let P=Ac(B,l,r);P&&Vt(`\u62FF\u51FA ${P} \u500B`),S.dirtyMeta=!0,z(),pt()}},`\u62FF\u51FA\u4F86\uFF08${b}\uFF09`)),g))}function It(){let w=At.ov;w.innerHTML="",w.hidden=!1;let B=et("b",{},y.rd),Y=et("input",{type:"range",min:2,max:6,step:1,value:y.rd,oninput:g=>{B.textContent=g.target.value},onchange:g=>{let b=+g.target.value;y.setRenderDistance(b),T.far=b*16+40,T.updateProjectionMatrix(),h_("hw_rd",b)}});w.append(et("div",{class:"panel"},et("div",{class:"p-head"},et("h2",{},"\u8A2D\u5B9A"),et("button",{class:"x","aria-label":"\u95DC\u9589",onclick:U},"\xD7")),et("label",{class:"set"},"\u8996\u91CE\u8DDD\u96E2\uFF08\u5340\u584A\uFF09",B,Y),et("p",{class:"muted"},"iPad \u5EFA\u8B70 3\uFF1B\u5361\u5361\u7684\u5C31\u8ABF\u5C0F\u3002"),et("div",{class:"row"},et("button",{class:"btn ghost",onclick:Nt},"\u91CD\u7F6E\u4E16\u754C")),et("p",{class:"muted"},"\u91CD\u7F6E\u4E16\u754C\u6703\u6E05\u6389\u84CB\u597D\u7684\u65B9\u584A\u3001\u80CC\u5305\u548C\u4F4D\u7F6E\uFF1B\u91D1\u5E63\uFF08\u7B54\u984C\u8CFA\u7684\uFF09\u6703\u4FDD\u7559\u3002"),et("p",{class:"muted small"},"\u7248\u672C "+Po)))}async function Nt(){if(confirm("\u78BA\u5B9A\u8981\u91CD\u7F6E\u4E16\u754C\u55CE\uFF1F\u84CB\u597D\u7684\u6771\u897F\u6703\u5168\u90E8\u6D88\u5931\uFF08\u91D1\u5E63\u4FDD\u7559\uFF09\u3002")){S.resetting=!0;try{await Yu(["hw_coins"])}catch(w){console.warn(w)}location.reload()}}function Ut(w){document.pointerLockElement&&document.exitPointerLock(),S.overlay=w,jt(),w==="inv"?(ft=-1,j()):w==="shop"?mt():w==="set"?It():w==="furnace"?pt():w==="quiz"&&$u(At.ov,{onReward:B=>{gc(d,B),pe(),S.dirtyMeta=!0,Ln()},onClose:()=>{S.overlay=null}})}function U(){At.ov.hidden=!0,At.ov.innerHTML="",S.overlay=null}At.btnInv.onclick=()=>S.overlay==="inv"?U():Ut("inv"),At.btnShop.onclick=()=>S.overlay==="shop"?U():Ut("shop"),At.btnSet.onclick=()=>S.overlay==="set"?U():Ut("set"),At.btnView.onclick=()=>_t();function _t(){S.view=S.view==="fp"?"tp":"fp",Vt(S.view==="fp"?"\u7B2C\u4E00\u4EBA\u7A31":"\u7B2C\u4E09\u4EBA\u7A31")}function tt(){S.fly=!S.fly,S.v.y=0,At.root.classList.toggle("flying",S.fly),Vt(S.fly?"\u98DB\u884C\uFF1A\u958B\uFF08\u8DF3\uFF1D\u4E0A\u5347\u3001\u4E0B\uFF1D\u4E0B\u964D\uFF09":"\u98DB\u884C\uFF1A\u95DC")}let dt=new G;function vt(){let w=Math.cos(S.pitch);return{x:-Math.sin(S.yaw)*w,y:Math.sin(S.pitch),z:-Math.cos(S.yaw)*w}}let at=()=>({x:S.p.x,y:S.p.y+1.62+S.eyeOff,z:S.p.z}),Pt=w=>w&&!n.flat.liquid[w];function St(w,B,Y){if(w==="screen"){dt.set(B/innerWidth*2-1,-(Y/innerHeight)*2+1,.5).unproject(T).sub(T.position).normalize();let g=T.position,b=S.view==="tp"?g.distanceTo(new G(S.p.x,S.p.y+1.62,S.p.z)):0;return yo({x:g.x,y:g.y,z:g.z},{x:dt.x,y:dt.y,z:dt.z},hd+1+b,_e,Pt)}return yo(at(),vt(),hd,_e,Pt)}function jt(){S.mining.active=!1,S.mining.k="",S.mining.t=0,X.visible=!1}let ne=()=>{let w=l.slots[S.sel];return w?n.toolOf(w.id):null};function $e(w){let B=w.n,Y=Ao(n.get(B),ne());if(!y.set(w.x,w.y,w.z,0))return;let g=Y.harvest?n.dropOf(B):null;g?Yt(g,w.x+.5,w.y+.4,w.z+.5):Y.harvest||Vt(`${n.name(B)}\u8981\u7528\u66F4\u597D\u7684\u5DE5\u5177\u6316\uFF0C\u624D\u6703\u6389\u6771\u897F`);let b=w.x+","+w.y+","+w.z;if(S.bed&&S.bed.x===w.x&&S.bed.y===w.y&&S.bed.z===w.z&&(S.bed=null,Vt("\u5E8A\u62C6\u6389\u4E86\uFF0C\u91CD\u751F\u9EDE\u6539\u56DE\u51FA\u751F\u9EDE")),h[b]){let P=Cc(h[b]);for(let N in P)for(let L=0;L<P[N];L++)Yt(N,w.x+.5,w.y+.4,w.z+.5);delete h[b]}if(Y.usesTool){let P=bc(l,S.sel,n);P.broke&&Vt(`\u4F60\u7684${n.name(P.id)}\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u628A\u5427\uFF01`),z()}S.dirtyMeta=!0,S.stats.mined++}function Fe(w){if(!w)return!1;let B=n.get(w.n);if(B&&B.interact==="quiz")return Ut("quiz"),!0;let Y=l.slots[S.sel]&&n.get(l.slots[S.sel].id).placeable;if(B&&B.interact==="bed"&&!Y)return S.bed={x:w.x,y:w.y,z:w.z},S.dirtyMeta=!0,Vt("\u91CD\u751F\u9EDE\u8A2D\u597D\u4E86\uFF1A\u6688\u5012\u6703\u56DE\u5230\u9019\u5F35\u5E8A"),!0;if(B&&B.interact==="craft"&&!Y)return Ut("inv"),!0;if(B&&B.interact==="furnace"&&!Y)return gt=w.x+","+w.y+","+w.z,Ut("furnace"),!0;let g=l.slots[S.sel];if(!g)return Vt("\u5FEB\u6377\u5217\u9019\u683C\u662F\u7A7A\u7684"),!1;let b=n.get(g.id);if(!b||!b.placeable)return Vt(`${n.name(g.id)} \u4E0D\u80FD\u653E`),!1;let P=w.x+w.face[0],N=w.y+w.face[1],L=w.z+w.face[2];if(N<0||N>=64)return!1;let rt=y.get(P,N,L);if(rt&&!n.flat.liquid[rt])return!1;let ct=.6/2;return b.solid&&P+1>S.p.x-ct&&P<S.p.x+ct&&L+1>S.p.z-ct&&L<S.p.z+ct&&N+1>S.p.y&&N<S.p.y+1.8||!y.set(P,N,L,b.n)?!1:(cc(l,S.sel,1),S.dirtyMeta=!0,z(),S.stats.placed++,!0)}addEventListener("keydown",w=>{if(w.target&&w.target.tagName==="INPUT")return;let B=w.key.toLowerCase();if(B==="e"){S.overlay==="inv"?U():!S.overlay&&Ut("inv"),w.preventDefault();return}if(S.overlay!=="dead"&&S.overlay!=="ask"){if(B==="escape"&&S.overlay){S.overlay==="quiz"?(At.ov.hidden=!0,At.ov.innerHTML="",S.overlay=null):U();return}S.overlay||(S.keys[B]=!0,w.code==="Space"&&(S.keys[" "]=!0,w.preventDefault()),B>="1"&&B<="9"&&(S.sel=+B-1,z()),B==="f"&&tt(),B==="v"&&_t())}}),addEventListener("keyup",w=>{S.keys[w.key.toLowerCase()]=!1,w.code==="Space"&&(S.keys[" "]=!1)}),addEventListener("blur",()=>{S.keys={},jt()}),M.addEventListener("mousedown",w=>{if(!(S.touch||S.overlay)){if(document.pointerLockElement!==M){M.requestPointerLock&&M.requestPointerLock();return}if(w.button===0){let B=ae("center");if(B){ce(B);return}S.mining.active=!0,S.mining.src="center"}w.button===2&&(Fe(St("center")),S.placeRepeat=.3,S.rightHeld=!0)}}),addEventListener("mouseup",w=>{w.button===0&&jt(),w.button===2&&(S.rightHeld=!1)}),M.addEventListener("contextmenu",w=>w.preventDefault()),addEventListener("mousemove",w=>{document.pointerLockElement===M&&(S.yaw-=w.movementX*.0024,S.pitch=Math.max(-1.55,Math.min(1.55,S.pitch-w.movementY*.0024)))}),addEventListener("wheel",w=>{S.overlay||S.touch||(S.sel=(S.sel+(w.deltaY>0?1:8))%9,z())},{passive:!0}),document.addEventListener("pointerlockchange",()=>{At.root.classList.toggle("locked",document.pointerLockElement===M)});let fi=new Map;function Lo(w){S.touch!==w&&(S.touch=w,At.root.classList.toggle("touch",w),document.body.classList.toggle("is-touch",w))}At.root.classList.toggle("touch",S.touch),document.body.classList.toggle("is-touch",S.touch),M.addEventListener("pointerdown",w=>{if(w.pointerType!=="touch"||(Lo(!0),S.overlay))return;if(w.preventDefault(),w.clientX<innerWidth*.4&&w.clientY>innerHeight*.35&&!S.joy.active){S.joy={x:0,y:0,active:!0,id:w.pointerId,ox:w.clientX,oy:w.clientY},At.joy.style.transform=`translate(${w.clientX-60}px, ${w.clientY-60}px)`,At.joy.hidden=!1,At.knob.style.transform="translate(0px,0px)",fi.set(w.pointerId,{kind:"joy"});return}let B={kind:"look",x:w.clientX,y:w.clientY,sx:w.clientX,sy:w.clientY,t0:performance.now(),drag:!1,hold:!1};B.timer=setTimeout(()=>{B.drag||(B.hold=!0,S.mining.active=!0,S.mining.src="screen",S.mining.sx=B.x,S.mining.sy=B.y)},280),fi.set(w.pointerId,B)},{passive:!1}),addEventListener("pointermove",w=>{let B=fi.get(w.pointerId);if(!B)return;if(B.kind==="joy"){let b=w.clientX-S.joy.ox,P=w.clientY-S.joy.oy,N=Math.hypot(b,P),L=55;N>L&&(b*=L/N,P*=L/N),S.joy.x=b/L,S.joy.y=P/L,At.knob.style.transform=`translate(${b}px,${P}px)`;return}let Y=w.clientX-B.x,g=w.clientY-B.y;B.x=w.clientX,B.y=w.clientY,!B.drag&&Math.hypot(B.x-B.sx,B.y-B.sy)>12&&(B.drag=!0,clearTimeout(B.timer),B.hold&&(jt(),B.hold=!1)),B.drag?(S.yaw-=Y*.0055,S.pitch=Math.max(-1.55,Math.min(1.55,S.pitch-g*.0055))):B.hold&&(S.mining.sx=B.x,S.mining.sy=B.y)});let ds=w=>{let B=fi.get(w.pointerId);if(B){if(fi.delete(w.pointerId),B.kind==="joy"){S.joy={x:0,y:0,active:!1},At.joy.hidden=!0;return}if(clearTimeout(B.timer),B.hold)jt();else if(!B.drag&&performance.now()-B.t0<280&&!S.overlay){let Y=ae("screen",B.x,B.y);Y?ce(Y):Fe(St("screen",B.x,B.y))}}};addEventListener("pointerup",ds),addEventListener("pointercancel",ds);let Ri=(w,B,Y)=>{w.addEventListener("pointerdown",g=>{g.preventDefault(),g.stopPropagation(),B()}),w.addEventListener("pointerup",Y),w.addEventListener("pointercancel",Y),w.addEventListener("pointerleave",Y)};Ri(At.bJump,()=>{S.jumpHeld=!0},()=>{S.jumpHeld=!1}),Ri(At.bDown,()=>{S.downHeld=!0},()=>{S.downHeld=!1}),At.bFly.addEventListener("pointerdown",w=>{w.preventDefault(),w.stopPropagation(),tt()}),At.bPlace.addEventListener("pointerdown",w=>{w.preventDefault(),w.stopPropagation(),Fe(St("center"))}),document.addEventListener("touchmove",w=>{w.target.closest(".scroll, .panel")||w.preventDefault()},{passive:!1}),["gesturestart","gesturechange","dblclick"].forEach(w=>document.addEventListener(w,B=>B.preventDefault(),{passive:!1})),At.start.hidden=!1,At.go.onclick=()=>{At.start.hidden=!0,S.started=!0,S.paused=!1,At.root.classList.add("started"),!S.touch&&M.requestPointerLock&&M.requestPointerLock()};async function Ln(){if(S.resetting)return;let w={hw_meta:{v:1,seed:o,time:S.time,build:Po},hw_player:{x:S.p.x,y:S.p.y,z:S.p.z,yaw:S.yaw,pitch:S.pitch,fly:S.fly,sel:S.sel,hp:u.hp,bed:S.bed},hw_inventory:Mo(l),hw_coins:Du(d),hw_furnaces:h};for(let B of S.dirty){let Y=c.get(B);Y&&(w["hw_chunk:"+B]=_c(Y))}S.dirty.clear(),S.dirtyMeta=!1;try{await Mc(w),S.lastSave=Date.now()}catch(B){console.warn("save failed",B)}}setInterval(()=>{S.started&&Ln()},8e3),document.addEventListener("visibilitychange",()=>{document.hidden&&S.started&&Ln()}),addEventListener("pagehide",()=>{S.started&&Ln()}),S.stats={mined:0,placed:0};function fs(){let w=innerWidth,B=innerHeight;m.setSize(w,B,!1),T.aspect=w/B,T.updateProjectionMatrix()}addEventListener("resize",fs),fs(),pe(),z(),be();let ps=performance.now(),en=0,pi=0,ar=new Gt("#EFEBDD"),or=new Gt("#22302F"),Ii=new Gt("#E6B48C");function ms(w){requestAnimationFrame(ms);let B=(w-ps)/1e3;ps=w;let Y=Math.min(.05,B);S.frames.push(B*1e3),S.frames.length>4e3&&S.frames.shift(),y.update(S.p.x,S.p.z);let g=y.ready(S.p.x,S.p.z);S.auto&&Do(Y),S.started&&!S.overlay&&g&&lr(Y),S.started&&!S.dead&&Dc(u,Y)&&(be(),S.dirtyMeta=!0),S.time=(S.time+Y/a_)%1;let b=S.time*Math.PI*2,P=Math.sin(b),N=Math.min(1,Math.max(0,(P+.12)/.42));R.copy(or).lerp(ar,N);let L=Math.max(0,1-Math.abs(P)/.3)*(N>.05?1:.4);R.lerp(Ii,L*.55),A.uniforms.uDay.value=N,A.uniforms.uFog.value.set(...Pi(R));let rt=at();S.eyeOff*=Math.pow(5e-4,Y);let ct=vt();if(S.view==="tp"){let xt=yo(rt,{x:-ct.x,y:-ct.y,z:-ct.z},4,_e,zt=>n.flat.opaque[zt]===1),Lt=xt?Math.max(.4,xt.dist-.25):4;T.position.set(rt.x-ct.x*Lt,rt.y-ct.y*Lt,rt.z-ct.z*Lt)}else T.position.set(rt.x,rt.y,rt.z);T.rotation.set(S.pitch,S.yaw,0);let ht=T.far*.8;if(q.position.set(T.position.x+Math.cos(b)*ht,T.position.y+Math.sin(b)*ht,T.position.z+.25*ht),q.scale.setScalar(ht*.14),Q.position.set(T.position.x-Math.cos(b)*ht,T.position.y-Math.sin(b)*ht,T.position.z-.25*ht),Q.scale.setScalar(ht*.1),Z.visible=S.view==="tp",Z.visible){Z.position.set(S.p.x,S.p.y,S.p.z),Z.rotation.y=S.yaw;let xt=Math.hypot(S.v.x,S.v.z),Lt=Math.sin(w/120)*Math.min(1,xt/4)*.7;K.rotation.x=Lt,st.rotation.x=-Lt,lt.rotation.x=-Lt,Dt.rotation.x=Lt;let zt=.35+.65*N;Z.children.forEach(Tt=>Tt.material.color.copy(Tt.userData.base).multiplyScalar(zt))}for(let xt in Ct)Ct[xt].color.setScalar(.4+.6*N);let yt=S.started&&!S.overlay?S.mining.active&&S.mining.src==="screen"?St("screen",S.mining.sx,S.mining.sy):St("center"):null;if(yt?(V.visible=!0,V.position.set(yt.x+.5,yt.y+.5,yt.z+.5)):V.visible=!1,S.mining.active&&yt){let xt=yt.x+","+yt.y+","+yt.z;xt!==S.mining.k&&(S.mining.k=xt,S.mining.t=0),S.mining.t+=Y;let Lt=Ao(n.get(yt.n),ne()).time;if(Lt===1/0)X.visible=!1,S.mining.warned||(Vt(n.name(yt.n)+"\u6316\u4E0D\u52D5"),S.mining.warned=!0);else{let zt=S.mining.t/Lt;X.visible=!0,X.position.copy(V.position),X.material.map=W[Math.min(3,Math.floor(zt*4))],zt>=1&&($e(yt),S.mining.k="",S.mining.t=0,X.visible=!1)}}else X.visible=!1,S.mining.active||(S.mining.warned=!1);S.rightHeld&&!S.overlay&&(S.placeRepeat-=Y,S.placeRepeat<=0&&(Fe(St("center")),S.placeRepeat=.25)),cr(Y),te(S.overlay?0:Y,N,w);for(let xt in h){let Lt=h[xt];Lt.jobs.length&&(Tc(Lt,Y),S.dirtyMeta=!0,S.overlay==="furnace"&&xt===gt&&(S.furnUi=(S.furnUi||0)+Y)>.5&&(S.furnUi=0,pt()))}m.render(f,T),en+=B,pi++,en>.5&&(At.dbg&&(At.dbg.textContent=`${Math.round(pi/en)} fps \xB7 \u5340\u584A ${y.stats.loaded} \xB7 ${S.p.x.toFixed(1)}, ${S.p.y.toFixed(1)}, ${S.p.z.toFixed(1)}`),en=0,pi=0),!g&&S.started?At.loading.hidden=!1:At.loading.hidden=!0}function Pi(w){let B=w.getHexString();return[parseInt(B.slice(0,2),16)/255,parseInt(B.slice(2,4),16)/255,parseInt(B.slice(4,6),16)/255]}function lr(w){let B=S.keys,Y=(B.d?1:0)-(B.a?1:0),g=(B.w?1:0)-(B.s?1:0);S.joy.active&&(Y=S.joy.x,g=-S.joy.y);let b=Math.min(1,Math.hypot(Y,g));if(b>0){let xe=Math.hypot(Y,g);Y=Y/xe*b,g=g/xe*b}let P=-Math.sin(S.yaw),N=-Math.cos(S.yaw),L=Math.cos(S.yaw),rt=-Math.sin(S.yaw),ct=B.control||!S.fly&&B.shift||S.joy.active&&b>.92,ht=_e(S.p.x,S.p.y+.1,S.p.z),yt=_e(S.p.x,S.p.y+1,S.p.z),xt=n.flat.liquid[ht]===1||n.flat.liquid[yt]===1,Lt=S.fly?10:xt?2.6:ct?6.2:4.3,zt=(P*g+L*Y)*Lt,Tt=(N*g+rt*Y)*Lt,ee=B[" "]||S.jumpHeld,Se=S.fly&&B.shift||S.downHeld;if(S.fly)S.v.x=zt,S.v.z=Tt,S.v.y=((ee?1:0)-(Se?1:0))*8;else{let xe=S.onGround?14:5,wt=1-Math.exp(-xe*w);S.v.x+=(zt-S.v.x)*wt,S.v.z+=(Tt-S.v.z)*wt,xt?(S.v.y-=9*w,S.v.y<-3&&(S.v.y=-3),ee&&(S.v.y=3.4)):(S.v.y-=28*w,S.v.y<-40&&(S.v.y=-40),ee&&S.onGround&&(S.v.y=8.6,S.onGround=!1))}let he=S.onGround,re=xo(S.p,S.v,w,Kt,{canStep:!S.fly,grounded:S.onGround});if(S.onGround=re.onGround,re.stepped&&(S.eyeOff-=re.stepped),S.fallTop==null||S.fly||xt||S.onGround&&he?S.fallTop=S.p.y:S.onGround||(S.fallTop=Math.max(S.fallTop,S.p.y)),S.onGround&&!he){let xe=Pc(S.fallTop-S.p.y,{water:xt,flying:S.fly});xe&&(se(xe),Vt("\u54CE\u5440\uFF0C\u6454\u4E86\u4E00\u4E0B")),S.fallTop=S.p.y}S.p.y<-20&&(S.p={x:F.x,y:F.y+1,z:F.z},S.v={x:0,y:0,z:0},S.fallTop=S.p.y)}function cr(w){let B=S.p.x,Y=S.p.y+.9,g=S.p.z;for(let b=S.drops.length-1;b>=0;b--){let P=S.drops[b];P.age+=w;let N=B-P.p.x,L=Y-P.p.y,rt=g-P.p.z,ct=Math.hypot(N,L,rt);if(ct<1.5&&P.age>.25&&Gn(l,P.id,1,r)===0){f.remove(P.s),S.drops.splice(b,1),S.dirtyMeta=!0,z();continue}if(ct<4.5&&P.age>.25?(P.v.x=N/ct*6,P.v.y=L/ct*6,P.v.z=rt/ct*6,P.p.x+=P.v.x*w,P.p.y+=P.v.y*w,P.p.z+=P.v.z*w):(P.v.y-=18*w,P.v.x*=.9,P.v.z*=.9,xo(P.p,P.v,w,Kt,{w:.25,h:.25})),P.age>300){f.remove(P.s),S.drops.splice(b,1);continue}P.s.position.set(P.p.x,P.p.y+.2+Math.sin(P.age*3)*.06,P.p.z)}}S.auto=Bc.get("auto")==="walk";let hr=0;function Do(w){S.started||At.go.click(),hr+=w,S.keys.w=!0,S.keys[" "]=hr%1.6<.15,S.yaw+=w*.08}window.HW={build:Po,G:S,reg:n,inv:l,wallet:d,world:y,Inv:pc,mobS:nt,mobDefs:$,spawnMob:ye,hitMob:ce,mobAt:ae,surfaceY:bt,health:u,hurt:se,Health:Fc,furnaces:h,Smelt:Rc,smeltList:p,recipes:s,craftCtx:ut,breakInfo:Ao,start(){At.go.click()},state(){return{pos:{...S.p},coins:d.coins,inv:Mo(l),loaded:y.stats.loaded,stats:{...S.stats},overlay:S.overlay,fly:S.fly}},lookAt(w,B,Y){let g=at(),b=w-g.x,P=B-g.y,N=Y-g.z;S.yaw=Math.atan2(-b,-N),S.pitch=Math.atan2(P,Math.hypot(b,N))},target(){let w=St("center");return w&&{x:w.x,y:w.y,z:w.z,n:w.n,face:w.face}},mine(w){w?(S.mining.active=!0,S.mining.src="center"):jt()},use(){return Fe(St("center"))},key(w,B){S.keys[w]=B},open:Ut,close:U,save:Ln,spawn:F,perf(){return{frames:S.frames.slice(),meshMs:y.stats.meshMs.slice(),genMs:y.stats.genMs.slice(),loaded:y.stats.loaded}},resetPerf(){S.frames.length=0,y.stats.meshMs.length=0,y.stats.genMs.length=0},ready:()=>y.ready(S.p.x,S.p.z)},requestAnimationFrame(ms)}function d_(){let i=Ci("#ui"),t=e=>i.querySelector(e);return Bc.get("debug")!==null&&(t("#dbg").hidden=!1),{root:i,coins:t("#coins"),hearts:t("#hearts"),flash:Ci("#hurt"),hotbar:t("#hotbar"),selName:t("#selname"),ov:Ci("#ov"),toasts:t("#toasts"),btnInv:t("#b-inv"),btnShop:t("#b-shop"),btnSet:t("#b-set"),btnView:t("#b-view"),joy:t("#joy"),knob:t("#knob"),bJump:t("#b-jump"),bFly:t("#b-fly"),bPlace:t("#b-place"),bDown:t("#b-down"),start:Ci("#start"),go:Ci("#go"),dbg:t("#dbg").hidden?null:t("#dbg"),loading:t("#loading")}}u_().catch(i=>{console.error(i);let t=document.getElementById("err");t&&(t.hidden=!1,t.textContent="\u8F09\u5165\u5931\u6557\uFF1A"+i.message)});})();
